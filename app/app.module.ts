import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './component/app.component';
import { DepartmentService } from "./service/department.service";
import { EmployeeService } from "./service/employee.service";
import { DepartmentComponent } from "./component/department.component";
import { EmployeeComponent } from "./component/employee.component";

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent, DepartmentComponent, EmployeeComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ DepartmentService, EmployeeService ]
})
export class AppModule {}
