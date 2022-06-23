import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { Departaments } from 'src/app/models/departaments';
import { DepartamentsService } from 'src/app/services/departaments.service';
import { Estados } from 'src/app/models/model.interface';
import { DataService } from 'src/app/services/data.service';
import { Enterprises } from 'src/app/models/enterprises';
import { EnterprisesService } from 'src/app/services/enterprises.service';

@Component({
  selector: 'app-departamento',
  templateUrl: './departamento.component.html',
  styleUrls: ['./departamento.component.css']
})
export class DepartamentoComponent implements OnInit {

  p: number = 1;
  departamentsLista: Departaments=new Departaments();
  empresa: Enterprises=new Enterprises();
  datatable:any = [];
  public selectedEstado:Estados={estadoname:'ACTIVO'};
  estadosaux:any = [];
  opcionSeleccionado: string  = '0'; // Iniciamos
  opcionSeleccionadoEmpresa: number=1; // Iniciamos
  verSeleccion: string        = '';
  verSeleccionEmpresa: number = 1;
  errores: any=[];
  options = ['ACTIVO','INACTIVO'];
  ngSelect = this.options[0];
  datatableEmpresas:any=[];
 public datatableEmpresasaux:any=[];
  ngSelectEmpresa : number= 1;//this.datatableEmpresas[0];
  nombreEmpresa:string="";
  contador:number=0;
  


  constructor(private departamentoService:DepartamentsService, private dataservice:DataService,private enterprisesService:EnterprisesService)
  {}
  ngOnInit(): void {
    this.onDataTable();
    this.onDataTableEmpresas();
    this.estadosaux=this.dataservice.getEstados();
    this.opcionSeleccionado='ACTIVO';
    this.opcionSeleccionadoEmpresa=1;
    this.ngSelect='ACTIVO';
    this.ngSelectEmpresa=1;
  }
  onDataTable(){
    let conti=0
    let numero=0
    this.departamentoService.getDepartaments().subscribe(res => {
      this.datatable = res;
      
    });
  }
  onDataTableEmpresas(){
    this.enterprisesService.getEnterprises().subscribe(res => {
      this.datatableEmpresas = res;
     
    });
  }

  onSetData(select:any){
    this.departamentsLista.id = select.id;
    this.departamentsLista.name = select.name;
    this.departamentsLista.phone= select.phone;
    this.departamentsLista.descripcion = select.descripcion;
    this.departamentsLista.status = select.status;
    //this.departamentsLista.id_empresa = select.id_empresa;
    this.ngSelectEmpresa=select.enterprises.id;
    
    
    

  }

  clear(){
    
    this.departamentsLista.id = 0;
    this.departamentsLista.name =  " ";
    this.departamentsLista.phone=  " ";
    this.departamentsLista.descripcion=  " ";
    this.departamentsLista.status  = " ";
  }

  

  
  capturar() {

    this.verSeleccion = this.opcionSeleccionado;
   // this.enterpriseslista.status=this.verSeleccion;
  }
  
  capturarEmpresa() {

   this.verSeleccionEmpresa = this.ngSelectEmpresa;
   // this.enterpriseslista.status=this.verSeleccion;
  }

  agregarDepartament(departamento:Departaments,verSeleccion:string,verSeleccionEmpresa:number):void{
    console.log(departamento);
    departamento.status=this.verSeleccion;
    console.log(verSeleccion);
    console.log(verSeleccionEmpresa);
   
    
    this.enterprisesService.buscarEnterprises(verSeleccionEmpresa).subscribe(res => {
      this.empresa = res;
      console.log(this.empresa)
      departamento.enterprises=this.empresa;
     
    });

    
    this.departamentoService.agregarDepartaments(departamento).subscribe(res => {
      if(res){
        alert(`El departamento ${departamento.name} se ha registrado con exito!`);
        this.clear();
        this.onDataTable();
      } else {
        alert('Error! :(')
      }
    });
  }
  


}

