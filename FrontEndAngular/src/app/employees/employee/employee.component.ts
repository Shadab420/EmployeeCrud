import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/shared/employee.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(private empService: EmployeeService) { }

  ngOnInit() {
    this.resetForm();
  }

  resetForm(form? : NgForm){

    if(form != null) form.resetForm();

    
    this.empService.formData = {
      EmpID : null,
      FullName : '',
      EmpCode : '',
      Position : '',
      Mobile : ''
    }
  }

  onSubmit(form: NgForm){
    if(form.value.EmpID === null) this.insertRecord(form);
    else this.updateRecord(form);
  }

  updateRecord(form: NgForm) {
    this.empService.updateEmployee(form.value).subscribe(res => {this.resetForm(form)});
  }

  insertRecord(form: NgForm){
	let newEmployee = {
		FullName : form.value.FullName,
		EmpCode : form.value.EmpCode,
		Position : form.value.Position,
		Mobile : form.value.Mobile
	}
    this.empService.insertEmployee(newEmployee).subscribe(res => {this.resetForm(form)});
  }
}
