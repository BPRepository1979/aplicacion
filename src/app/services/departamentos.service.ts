import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { observable } from 'rxjs';
import { Departamentos } from '../models/departamentos';

@Injectable({
  providedIn: 'root'
})
export class DepartamentosService {
  private urlEndPoint: string = 'http://localhost:8082/api/Departamentos';

  constructor(private http:HttpClient) { }

  getDepartamentos():Observable<Departamentos[]>{
    return this.http.get<Departamentos[]>(this.urlEndPoint);
  }
}
