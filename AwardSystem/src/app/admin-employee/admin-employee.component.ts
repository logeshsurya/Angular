import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'Models/Employee';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-admin-employee',
  templateUrl: './admin-employee.component.html',
  styleUrls: ['./admin-employee.component.css']
})
export class AdminEmployeeComponent implements OnInit {
  @Input() empsrc: string ="https://localhost:7275/api/Employee/GetAll";
  totalLength: any;
  page: number = 1;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {  
      this.http
        .get<any>(this.empsrc)
        .subscribe((data) => {
          this.data = data;
          this.totalLength = data.length;
          console.log(data)
         
        });
      }
        public data: Employee[] = [];
}
