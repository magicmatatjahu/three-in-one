import { Service } from "../types";
import { 
  PLACES_STORAGE,
  Place,
  CreatePlaceDTO,
  EditPlaceDTO,
} from "./types";

import { AuthService } from "../Auth";
import { HttpClient } from "../HttpClient";
import { LocalStorageService } from "../LocalStorage";

export class PlacesService extends Service {
  constructor(
    private readonly _authSvc: AuthService,
    private readonly _httpClient: HttpClient,
    private readonly _localStorageSvc: LocalStorageService<Place>,
  ) {
    super()
  }

  async fetchPlaces(): Promise<Place[]> {
    return this._localStorageSvc.getList();
  };
  
  async createPlace(dto: CreatePlaceDTO) {
    // await this._httpClient.post(url, dto);
  }

  async removePlace(id: number) {
    // await this._httpClient.post(url, dto);
  }

  async editPlace(dto: EditPlaceDTO) {
    // await this._httpClient.post(url, dto);
  }

  private removeById(id: number, key?: string)  {
    const nextList = this._localStorageSvc.getList(key).filter(u => u.id !== id);
    this._localStorageSvc.setList(nextList, key);
  };

  private getById(id: number, key?: string) {
    const unit = this._localStorageSvc.getList(key).find(u => u.id === id);
    return unit || null;
  };
}

export const configurePlacesService = ({
  authSvc,
  httpClient,
}: {
  authSvc: AuthService,
  httpClient: HttpClient,
}): PlacesService => {
  const sessionStorageSvc = new LocalStorageService<Place>({ key: PLACES_STORAGE });

  return new PlacesService(
    authSvc,
    httpClient, 
    sessionStorageSvc
  );
};
