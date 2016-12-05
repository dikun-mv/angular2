import { Component, OnInit } from '@angular/core';
import { DepartmentService } from "../service/department.service";
import { Department } from "../model/department.model";

@Component({
    moduleId: module.id,
    selector: 'department',
    templateUrl: 'department.component.html'
})
export class DepartmentComponent implements OnInit {
    temp: Department = new Department(0, '');
    departments: Department[];

    constructor(private departmentService: DepartmentService) {}

    ngOnInit(): void {
        this.loadDepartments()
    }

    loadDepartments(): void {
        this.departmentService.getAll().then(departments => this.departments = departments);
    }

    createDepartment(department: Department): void {
        this.departmentService.create(department).then(() => {
            this.loadDepartments();
            this.temp.name = '';
        });
    }

    updateDepartment(department: Department): void {
        this.departmentService.update(department, department.id).then(() => this.loadDepartments());
    }

    deleteDepartment(department: Department): void {
        this.departmentService.delete(department.id).then(() => this.loadDepartments());
    }
}
