import { Component, Input, OnInit } from '@angular/core';
import { Department } from 'Models/Department';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-department',
  templateUrl: './admin-department.component.html',
  styleUrls: ['./admin-department.component.css']
})
export class AdminDepartmentComponent implements OnInit {

  @Input() orgsrc: string ="https://localhost:7275/api/Department/GetAll";
   totalLength: any;
   page: number = 1;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http
       .get<any>(this.orgsrc)
       .subscribe((data) => {
         this.data = data;
         this.totalLength = data.length;
         console.log(data)
        
       });
  }
  public data: Department[] = [];

}
