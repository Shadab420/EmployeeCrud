import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { Employee } from 'src/app/shared/employee.model';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  constructor(private empService: EmployeeService) { 
      
  }


  ngOnInit() {
    this.empService.getAllEmployees();
  }

  populateForm(employee: Employee){
    this.empService.formData = Object.assign({}, employee);
  }

  deleteEmp(empId: number){
    this.empService.deleteEmployee(empId).subscribe(res => {});;
  }
  

}
