import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { Departaments } from '../models/departaments';

@Injectable({
  providedIn: 'root'
})
export class DepartamentsService {
  private urlEndPoint: string = 'http://localhost:8082/api/Departaments';

  constructor(private http:HttpClient) { }
  getDepartaments(){
    return this.http.get(this.urlEndPoint);
  }
  agregarDepartaments(departamento:Departaments):Observable<Departaments>{

    console.log(departamento);
    return this.http.post<Departaments>(this.urlEndPoint, departamento);
  }

}
