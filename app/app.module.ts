import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http'

import { AppComponent }  from './component/app.component';
import { DepartmentService } from "./service/department.service";
import { EmployeeService } from "./service/employee.service";

@NgModule({
    imports:      [ BrowserModule, HttpModule ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ],
    providers:    [ DepartmentService, EmployeeService ]
})
export class AppModule {}
