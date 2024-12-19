import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Heroe } from '../data/heroe-entity';
import { Heroes } from '../data/heroes-entity';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {
  urlApi = "https://adl-wcbdf-eje-10-superheroes.onrender.com/api/v1/heroes"
  //Inyectamos el cliente Http para conectarnos
  constructor(private httpCliente: HttpClient) {
  }
  // Metodos Http
  // GET
  getAllHeroes(): Observable<Heroes> {
    return this.httpCliente.get<Heroes>(this.urlApi);
  }
  //GET ID
  getHeroe(id: number): Observable<Heroe> {
    return this.httpCliente.get<Heroe>(this.urlApi+"/"+id)
  }
  //POST
  postHeroe(heroe:any):Observable<Heroe>{
    return this.httpCliente.post<Heroe>(this.urlApi, heroe)
  }
  //PUT
  putHeroe(id:number, heroe:Heroe):Observable<Heroe>{
    return this.httpCliente.put<Heroe>(this.urlApi+"/"+id, heroe)
  }
  //DELETE
  deleteHeroe(id: number):Observable<Heroe>{
    return this.httpCliente.delete<Heroe>(this.urlApi+"/"+id)
  }
}
