import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DepartmentComponent } from "./component/department.component";
import { EmployeeComponent } from "./component/employee.component";

const routes: Routes = [
    { path: '', redirectTo: '/departments', pathMatch: 'full' },
    { path: 'departments',  component: DepartmentComponent },
    { path: 'departments/:id/employees', component: EmployeeComponent }
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}
