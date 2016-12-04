import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
    moduleId: module.id,
    selector: 'employee',
    templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {
    id: number;

    constructor(private route: ActivatedRoute) {}

    ngOnInit(): void {
        this.id = this.route.snapshot.params['id'];
    }
}
