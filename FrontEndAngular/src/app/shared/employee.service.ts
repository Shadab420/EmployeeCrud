import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  formData: Employee;
  readonly rootURL = 'https://localhost:44333/api/Employees/';
  empList: Employee[];

  constructor(private http: HttpClient) { }

  getAllEmployees(){
    this.http.get(this.rootURL).toPromise().then(res=> this.empList = res as Employee[]);
  }

  insertEmployee(formData: Employee){
    console.log(formData)
    return this.http.post(this.rootURL,formData);
  }

  updateEmployee(formData: Employee){
    return this.http.put(this.rootURL+formData.EmpID,formData);
  }

  deleteEmployee(empId: number){
    return this.http.delete(this.rootURL+empId)
  }
}
