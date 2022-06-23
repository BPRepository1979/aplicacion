import { Injectable } from '@angular/core';
import { Estados } from '../models/model.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private estados:Estados[]=[
    {
        estadoname:'ACTIVO'

    },
    {  
      estadoname:'INACTIVO'}
  ]

  getEstados():Estados[]
  {
     return this.estados;

  }
  constructor() { }
}
