import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../service/employee.service";
import { Employee } from "../model/employee.model";

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
    temp: Employee = new Employee(0, 0, '', '', '');
    employees: Employee[];

    constructor(private route: ActivatedRoute, private employeeService: EmployeeService) {}

    ngOnInit(): void {
        this.temp.departmentId = this.route.snapshot.params['id'];
        this.loadEmployees();
    }

    loadEmployees(): void {
        this.employeeService.getAllByDepartmentId(this.temp.departmentId).then(employees => this.employees = employees);
    }

    createEmployee(employee: Employee): void {
        this.employeeService.create(employee).then(() => {
            this.loadEmployees();
            this.temp.firstName = '';
            this.temp.secondName = '';
            this.temp.lastName = '';
        });
    }

    updateEmployee(employee: Employee): void {
        this.employeeService.update(employee, employee.id).then(() => this.loadEmployees());
    }

    deleteEmployee(employee: Employee): void {
        this.employeeService.delete(employee.id).then(() => this.loadEmployees());
    }
}
