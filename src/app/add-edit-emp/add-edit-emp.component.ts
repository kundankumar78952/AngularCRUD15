import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ServiceService } from '../shared/service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.css']
})
export class AddEditEmpComponent implements OnInit {
  empForm:any = FormGroup;

  constructor(private fb: FormBuilder, private service: ServiceService, private dialogref:MatDialogRef<AddEditEmpComponent>) { 

this.empForm= this.fb.group({lastname:'',firstname:'',email:'',dob:'',gender:'',education:'',company:'', package:'', experience:''}); 
  }

  ngOnInit(): void {
  }
  education: string[] = ['Matric', 'Diploma', 'Intermediate','Graduate']

  onFormSubmit(){
    if(this.empForm.valid){
      console.log(this.empForm.value);
      this.service.addEmployee(this.empForm.value).subscribe({
        next :(value:any) =>{
          // alert("Employee data added successfully");
          this.dialogref.close();

        },
        error: (err:any)=>{
          alert(err);
        }
        
      })
    }
  }




  }

