import { Component, Input, OnInit } from '@angular/core';
import { Designation } from 'Models/Designation';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-admin-designation',
  templateUrl: './admin-designation.component.html',
  styleUrls: ['./admin-designation.component.css']
})
export class AdminDesignationComponent implements OnInit {
  
  @Input() desigsrc: string ="https://localhost:7275/api/Designation/GetAll";
  totalLength: any;
  page: number = 1;
  

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    this.http
      .get<any>(this.desigsrc)
      .subscribe((data) => {
        this.data = data;
        this.totalLength = data.length;
        console.log(data)
       
      });
      
  }

  public data: Designation[] = [];
 }
