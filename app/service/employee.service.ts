import { Employee } from "../model/employee.model";
import { Injectable } from '@angular/core'
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class EmployeeService {
    private apiUrl: string = 'http://localhost:8080/api/employees';
    private headers: Headers = new Headers({
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    });

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }

    constructor(private http: Http) {}

    getAll(): Promise<Employee[]> {
        return this.http
            .get(this.apiUrl, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }

    getAllByDepartmentId(id: number): Promise<Employee[]> {
        let url: string = 'http://localhost:8080/api/departments/' + id + '/employees';

        return this.http
            .get(url, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Employee[])
            .catch(this.handleError);
    }

    getOne(id: number): Promise<Employee> {
        return this.http
            .get(this.apiUrl + '/' + id, { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Employee)
            .catch(this.handleError);
    }

    create(employee: Employee): Promise<Employee> {
        return this.http
            .post(this.apiUrl, JSON.stringify(employee), { headers: this.headers })
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    update(employee: Employee, id: number): Promise<Employee> {
        return this.http
            .put(this.apiUrl + '/' + id, JSON.stringify(employee), { headers: this.headers })
            .toPromise()
            .then(() => employee)
            .catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        return this.http
            .delete(this.apiUrl + '/' + id, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }
}