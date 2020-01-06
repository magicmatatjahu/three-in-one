import { Service } from "../types";
import { LocalStorageConfig } from "./types";

export class LocalStorageService<T = any> extends Service {
  constructor(
    private readonly _config?: LocalStorageConfig,
  ) {
    super()
  }

  getKey(key?: string) {
    return localStorage.getItem(this._getKey(key));
  }

  setKey(value: string, key?: string) {
    return localStorage.setItem(this._getKey(key), value);
  }

  clearKey(key?: string) {
    return sessionStorage.removeItem(this._getKey(key));
  }
  
  getList(key?: string): Array<T> {
    const list = JSON.parse(this.getKey(key) || "");
    return list || [];
  }

  setList(list: Array<T>, key?: string) {
    this.setKey(JSON.stringify(list), key)
  };

  append(subList: Array<T>, key?: string) {
    const nextList = this.getList(key).concat(subList);
    this.setList(nextList, key);
  };

  private _getKey(key?: string): string {
    if (key) {
      return key;
    }
    if (this._config) {
      return this._config.key;
    }
    return ""
  }
}
