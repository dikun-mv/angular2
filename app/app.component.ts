import { Component, OnInit } from '@angular/core';
import { Department } from "./model/department.model";
import { DepartmentService } from "./service/department.service";

@Component({
  selector: 'app',
  template: `<ul><li *ngFor="let department of departments">Id: {{department.id}}<br>Name: {{department.name}}</li></ul>`
})
export class AppComponent implements OnInit {
    departments: Department[];

    constructor(private departmentService: DepartmentService) {}

    ngOnInit(): void {
    }
}
