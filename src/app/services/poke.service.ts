import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RespApiPoke } from '../components/interfaces/respApiPoke';

@Injectable({
  providedIn: 'root'
})
export class PokeService {

  private baseUrl = "https://pokeapi.co/api/v2"


  constructor(private http: HttpClient) { }

  getPokemons(): Observable<RespApiPoke> {
    return this.http.get<RespApiPoke>(`${this.baseUrl}/pokemon?limit=100&offset=0`)
  }


}
