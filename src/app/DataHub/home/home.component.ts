import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '../data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allData:Data[] = [];
  constructor(private ds: DataService) {
    this.get();
   }
  

  ngOnInit(): void {

  }
  
  get(){
    this.ds.getData().subscribe((res) =>{
      this.allData = res;
      console.log(this.allData);
    });
  }
}
