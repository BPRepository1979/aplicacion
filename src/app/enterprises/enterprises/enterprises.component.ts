import { Component, OnInit } from '@angular/core';
import { Enterprises } from 'src/app/models/enterprises';
import { EnterprisesService } from 'src/app/services/enterprises.service';
import { Estados } from 'src/app/models/model.interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-enterprises',
  templateUrl: './enterprises.component.html',
  styleUrls: ['./enterprises.component.css']
})
export class EnterprisesComponent implements OnInit {

  p: number = 1;
  enterpriseslista: Enterprises=new Enterprises();
  datatable:any = [];
  public selectedEstado:Estados={estadoname:'ACTIVO'};
  estadosaux:any = [];
  opcionSeleccionado: string  = '0'; // Iniciamos
  verSeleccion: string        = '';
  errores: any=[];
  
  options = ['ACTIVO','INACTIVO']
  ngSelect = this.options[0];

  constructor(private enterprisesService:EnterprisesService, private dataservice:DataService)
  {}
  ngOnInit(): void {
    this.onDataTable();
    this.estadosaux=this.dataservice.getEstados();
    console.log(this.selectedEstado);
  }
  onDataTable(){
    this.enterprisesService.getEnterprises().subscribe(res => {
      this.datatable = res;
      console.log(res);
    });
  }

  onSetData(select:any){
    this.enterpriseslista.id = select.id;
    this.enterpriseslista.name = select.name;
    this.enterpriseslista.phone= select.phone;
    this.enterpriseslista.adress = select.adress;
    this.enterpriseslista.status = select.status;
    this.ngSelect=this.options[0];
    if(select.status==='INACTIVO'){
     this.ngSelect=this.options[1];
    }
  }

  clear(){
    
    this.enterpriseslista.id = 0;
    this.enterpriseslista.name =  " ";
    this.enterpriseslista.phone=  " ";
    this.enterpriseslista.adress=  " ";
    this.enterpriseslista.status  = " ";
  }

  agregarEnterprises(enterprises:Enterprises,verSeleccion:string):void{
    console.log(enterprises);
    enterprises.status=this.verSeleccion;
    this.enterprisesService.agregarEnterprises(enterprises).subscribe(res => {
      if(res){
        alert(`La empresa ${enterprises.name} se ha registrado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }

  updateEnterprises(enterprises:Enterprises,verSeleccion:string):void{
    console.log(enterprises);
    enterprises.status=this.verSeleccion;
    
    this.enterprisesService.updateEnterprises(enterprises.id, enterprises).subscribe(res => {
      if(res){
        alert(`La empresa número ${enterprises.id} se ha modificado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }
  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
   // this.enterpriseslista.status=this.verSeleccion;
  }
  


}

