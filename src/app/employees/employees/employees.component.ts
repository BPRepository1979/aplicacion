import { Component, OnInit } from '@angular/core';
import { Estados } from 'src/app/models/model.interface';
import { DataService } from 'src/app/services/data.service';
import { Employees } from 'src/app/models/employees';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  p: number = 1;
  employeesLista: Employees=new Employees();
  datatable:any = [];
  public selectedEstado:Estados={estadoname:'ACTIVO'};
  estadosaux:any = [];
  opcionSeleccionado: string  = 'ACTIVO'; // Iniciamos
  verSeleccion: string        = '';
  errores: any=[];

  options = ['ACTIVO','INACTIVO'];
  ngSelect = this.options[0];


  

  constructor(private employeesService:EmployeesService, private dataservice:DataService) { }

  ngOnInit(): void {
    this.onDataTable();
    this.estadosaux=this.dataservice.getEstados();
    console.log(this.selectedEstado);
    this.opcionSeleccionado='ACTIVO';
    this.ngSelect='ACTIVO';
  }
  onDataTable(){
    this.employeesService.getEmployees().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onSetData(select:any){
    this.employeesLista.id = select.id;
    this.employeesLista.name = select.name;
    this.employeesLista.age= select.age;
    this.employeesLista.email = select.email;
    this.employeesLista.status = select.status;
    this.employeesLista.surname = select.surname;
    console.log(this.employeesLista.status);
    console.log(this.ngSelect);
    if(select.status==='INACTIVO'){
     this.ngSelect=this.options[1];
    }
    else{
      this.ngSelect=this.options[0];
    }
    
  }

  clear(){
    
    this.employeesLista.id = 0;
    this.employeesLista.name =  " ";
    this.employeesLista.age= 0;
    this.employeesLista.email=  " ";
    this.employeesLista.status  = " ";
    this.employeesLista.surname  = " ";
  }

  agregarEmployees(employees:Employees,verSeleccion:string):void{
    console.log(employees);
    employees.status=this.verSeleccion;
    this.employeesService.agregarEmployees(employees).subscribe(res => {
      if(res){
        alert(`El empleado ${employees.name} se ha registrado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }
  updateEnterprises(employees:Employees,verSeleccion:string):void{
    console.log(employees);
    employees.status=this.verSeleccion;
    
    this.employeesService.updateEmployees(employees.id, employees).subscribe(res => {
      if(res){
        alert(`El empleado número ${employees.id} se ha modificado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }
  
  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
   
  }

}
