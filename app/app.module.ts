import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent }  from './component/app.component';
import { DepartmentComponent } from "./component/department.component";
import { EmployeeComponent } from "./component/employee.component";
import { DepartmentService } from "./service/department.service";
import { EmployeeService } from "./service/employee.service";

@NgModule({
    imports:      [ BrowserModule, HttpModule, FormsModule, AppRoutingModule ],
    declarations: [ AppComponent, DepartmentComponent, EmployeeComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ DepartmentService, EmployeeService ]
})
export class AppModule {}
