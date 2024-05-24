import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Data } from './data';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<Data[]>("http://localhost:3000/Datahub");
}
  createData(data:Data){
    return this.http.post<Data>("http://localhost:3000/Datahub", data);
  }

}
