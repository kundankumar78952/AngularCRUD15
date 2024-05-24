import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Data } from '../data';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

   dataFormHub: Data = {
    Id:0,
    Name:'',
    Mobile:0,
    Email:'',
    Company:'',
    Designation:''
  }

  constructor(private ds: DataService, private router:Router) { }

  ngOnInit(): void {
  }
  postData(){
    this.ds.createData(this.dataFormHub).subscribe({ next: (res) =>{
      this.router.navigate(["Datahub/home"]);
    },
    error:(err)=>{
      console.log(err);
      
    }
  })
    }


}
