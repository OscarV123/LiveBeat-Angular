import {inject, Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Artista} from '../model/artista';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArtistaService {

  private url: string= environment.apiUrl
  private http:HttpClient=inject(HttpClient)

  constructor() { }

  insert(artista: Artista): Observable<any> {
    return this.http.post(this.url + "/artistas", artista)
  }
}
