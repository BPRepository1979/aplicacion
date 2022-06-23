import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Enterprises } from '../models/enterprises';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnterprisesService {
  private urlEndPoint: string = 'http://localhost:8082/api/enterprises';

  constructor(private http:HttpClient) { }

  getEnterprises(){
    return this.http.get(this.urlEndPoint);
  }

  agregarEnterprises(enterprises:Enterprises):Observable<Enterprises>{

    console.log(enterprises);
    return this.http.post<Enterprises>(this.urlEndPoint, enterprises);
  }

  updateEnterprises(id:number, enterprises:Enterprises):Observable<Enterprises>{
    console.log(Enterprises);
    return this.http.put<Enterprises>(this.urlEndPoint + `/${id}`, enterprises);
  }

  buscarEnterprises(id:number):Observable<Enterprises>{
       return this.http.get<Enterprises>(this.urlEndPoint + `/${id}`);
  }

}
