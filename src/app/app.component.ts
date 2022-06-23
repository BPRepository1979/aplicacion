import { Component, OnInit } from '@angular/core';
import { Enterprises } from './models/enterprises';
import { EnterprisesService } from './services/enterprises.service';
import { Estados } from './models/model.interface';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
 

  constructor()
  {}
  ngOnInit(): void {
    
  }
  
}
