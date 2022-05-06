import { Component, Input, OnInit } from '@angular/core';
import { Organisation } from 'Models/Organisation';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin-organization',
  templateUrl: './admin-organization.component.html',
  styleUrls: ['./admin-organization.component.css']
})
export class AdminOrganizationComponent implements OnInit {

 
  @Input() orgsrc: string ="https://localhost:7275/api/Organisation/GetAll";
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
 
   public data: Organisation[] = [];
  }


  
