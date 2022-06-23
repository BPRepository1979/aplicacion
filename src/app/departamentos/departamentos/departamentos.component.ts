import { Component, OnInit } from '@angular/core';
import { Departamentos } from 'src/app/models/departamentos';
import { Estados } from 'src/app/models/model.interface';
import { DataService } from 'src/app/services/data.service';
import { DepartamentosService } from 'src/app/services/departamentos.service';
import { Enterprises } from 'src/app/models/enterprises';
import { EnterprisesService } from 'src/app/services/enterprises.service';

@Component({
  selector: 'app-departamentos',
  templateUrl: './departamentos.component.html',
  styleUrls: ['./departamentos.component.css']
})
export class DepartamentosComponent implements OnInit {

  p: number = 1;
  departamentsLista: Departamentos=new Departamentos();
  datatable:Departamentos[] = [];
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
  enterprises:Enterprises[] = [];


  constructor(private departamentoService:DepartamentosService, private dataservice:DataService,private enterprisesService:EnterprisesService)
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
    this.departamentoService.getDepartamentos().subscribe(res => {
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
    this.departamentsLista.descripcion = select.adress;
    this.departamentsLista.status = select.status;
    this.departamentsLista.id_empresa = select.id_empresa;
    this.ngSelectEmpresa=this.departamentsLista.id_empresa;
    
    
    

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

  recorrerEmpresas()
  {
    console.log(this.datatableEmpresasaux);
    
    for (let item of this.datatableEmpresasaux) {
      
     console.log(item.name);
   }

  }
  


}

