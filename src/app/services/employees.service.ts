import { Injectable } from '@angular/core';
import { Employees } from '../models/employees';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  private urlEndPoint: string = 'http://localhost:8082/api/Employees';

  constructor(private http:HttpClient) { }

  getEmployees(){
    return this.http.get(this.urlEndPoint);
  }

  agregarEmployees(employees:Employees):Observable<Employees>{

    console.log(employees);
    return this.http.post<Employees>(this.urlEndPoint, employees);
  }

  updateEmployees(id:number, employees:Employees):Observable<Employees>{
    console.log(employees);
    return this.http.put<Employees>(this.urlEndPoint + `/${id}`, employees);
  }

}
