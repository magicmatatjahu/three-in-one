import { Service } from "../types";
import { SessionStorageConfig } from "./types";

export class SessionStorageService extends Service {
  constructor(
    private readonly _config?: SessionStorageConfig,
  ) {
    super()
  }
  
  getKey(key?: string) {
    return sessionStorage.getItem(this._getKey(key));
  }

  setKey(value: string, key?: string) {
    return sessionStorage.setItem(this._getKey(key), value);
  }

  clearKey(key?: string) {
    return sessionStorage.removeItem(this._getKey(key));
  }

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
