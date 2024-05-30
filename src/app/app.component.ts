import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { ServiceService } from './shared/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // styles: [`
  // h3{
  //   color: cyan;
  // }
  // `]
})
export class AppComponent implements OnInit {
  // title = '';
  // isDisabled = true;
  // message:string="";
  // @ViewChild(HeaderComponent)header:any;
  constructor(private dialog: MatDialog, private service:ServiceService){}
  ngOnInit():void{
    this.getEmployeeList();
  }
//   ngAfterViewInit(): void {
//     // this.message = this.header.childdata;
//   }
//   ShowMessage(msg:string):string{
//   return msg;
// }


// let details: any:
//  details ="welcome";
//   console.log(typeof(details)); //string
//    details=20;
//  console.log(typeof(details));
//   details= true;
//    console.log(typeof(details));

//    let arr:number[]=[10, 20, 30, 40, 50];
//    console.log(arr[0])

//    let arr1:[number, string];
//    arr1=[10, "welcome"];
//     arr1.push("hi", 40, 80)
//      console.log(arr1);
      
//       enum price{ "Black"= 1000, "white", "grey"= 3000 }
//       console.log(price.white);//1002
//       console.log(price.Black);//1000
      
//   function addition(n1:number, n2:number): any{
//      return n1+n2;
//     }
//   //console.log(addition(1,20));
//  let a:number= addition(1,20);
//   console.log(a)

// // (parameters)=> {body of the function}

// let b=(n1:number, n2:number)=> {
//    return n1+n2;
// }
//  console.log(b(2,3));
 

//  // For optional
// function addition(n1:number, n2?:number):void{ 
//   console.log("welcome");
// }
// let a:any = addition(1);
//  console.log(a);
  
//   function addition(n1:number=10, n2:number):void{
//      console.log( n1);
     
//   }
//   addition(1,20) //1
//  addition(undefined,20);  //10

//  function addition(n1:number=10, n2:number,......, n3:number):void{
//   console.log(n1);
//  }
//  addition(undefined, 20, 39, 70, 90, 100); 


//  class Employee{
//   static age;
//    public name:string="kundan";
//    constructor(name:string){
//     this.name=name;
//    }

   
//    details():void{
//     console.log("class method");
//    }
//  }
//  class detail extends Employee{
//    constructor(public name:string, public age:number){
//     super(name);
//     this.age=age;
//    }
//   details(): void {
//      super.details();
//    }
//  }

//  let d:detail


//  Employee.age=30;
//   console.log(Employee.age); //30
  
//  let e:Employee = new Employee("navya");
//  console.log(e.name);

openAddEditEmployeeForm(){
  this.dialog.open(AddEditEmpComponent);
}

getEmployeeList(){
  this.service.getAllEmployees().subscribe({
    next: (res) => {
      console.log(res);
    },
    error: (err) => {
      alert(err);
    },
   
  })
}
}
