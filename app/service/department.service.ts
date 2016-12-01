import { Department } from "../model/department.model";
import { Injectable } from '@angular/core'
import { Http, Headers } from "@angular/http";
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DepartmentService {
    private apiUrl: string = 'http://localhost:8080/api/departments';
    private headers: Headers = new Headers({'Content-Type': 'application/json', 'Accept': 'application/json'});

    public constructor(private http: Http) {}

    public getAll(): Promise<Department[]> {
        return this.http
            .get(this.apiUrl, this.headers)
            .toPromise()
            .then(response => response.json() as Department[])
            .catch(this.handleError);
    }

    public getOne(id: number): Promise<Department> {
        return this.http
            .get(this.apiUrl + '/' + id, this.headers)
            .toPromise()
            .then(response => response.json() as Department)
            .catch(this.handleError);
    }

    public create(department: Department): Promise<Department> {
        return this.http
            .post(this.apiUrl, JSON.stringify(department), this.headers)
            .toPromise()
            .then(() => department)
            .catch(this.handleError);
    }

    public update(department: Department, id: number): Promise<Department> {
        return this.http
            .put(this.apiUrl + '/' + id, JSON.stringify(department), this.headers)
            .toPromise()
            .then(() => department)
            .catch(this.handleError);
    }

    public delete(id: number): Promise<void> {
        return this.http
            .delete(this.apiUrl + '/' + id, this.headers)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}