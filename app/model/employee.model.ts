export class Employee {
    id: number;
    departmentId: number;
    firstName: string;
    secondName: string;
    lastName: string;

    constructor(id: number, departmentId: number, firstName: string, secondName: string, lastName: string) {
        this.id = id;
        this.departmentId = departmentId;
        this.firstName = firstName;
        this.secondName = secondName;
        this.lastName = lastName;
    }
}