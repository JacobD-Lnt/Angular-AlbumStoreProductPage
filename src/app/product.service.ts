import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {
  private _albumUrl = "../assets/album.json";

  constructor(private _http: HttpClient) { }

  public getAlbum(id: number)
  {
    return this._http.get(this._albumUrl).map(response => response);
  }
}
