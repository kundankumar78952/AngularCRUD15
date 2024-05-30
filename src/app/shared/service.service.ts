import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  
  //Create Data
  addEmployee(data:any):Observable<any>{
    return this.http.post("http://localhost:3000/employees", data);
  }

  //fetch Data
  getAllEmployees():Observable<any>{
    return this.http.get("http://localhost:3000/employees");
  }
  
}
