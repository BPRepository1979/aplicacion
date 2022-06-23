import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DepartamentoComponent } from './departamento/departamento/departamento.component';
import { EnterprisesComponent } from './enterprises/enterprises/enterprises.component';
import { EmployeesComponent } from './employees/employees/employees.component';
import { HeaderComponent } from './header/header/header.component';
import { DepartamentosComponent } from './departamentos/departamentos/departamentos.component';

const routes: Routes = [
  { path: '', redirectTo: '/enterprises', pathMatch: 'full' },
  { path: 'component', component: AppComponent },
  { path: 'departamento', component: DepartamentoComponent },
  { path: 'enterprises', component: EnterprisesComponent },
  { path: 'employees', component: EmployeesComponent},
  { path: 'departamentos', component: DepartamentosComponent}

  ];

@NgModule({
  declarations: [
    AppComponent,
    DepartamentoComponent,
    EnterprisesComponent,
    EmployeesComponent,
    HeaderComponent,
    DepartamentosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
