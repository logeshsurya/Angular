import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { AdminService } from 'src/app/Services/admin.service'; 

@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {




  
 
 

  constructor( private http:HttpClient) { }
    
 Designation:any ={
  Id:0,
  DesignationName:'',
  IsActive:true,
  AddedBy:1,
  AddedOn:Date.now,
  UpdatedBy:1,
  UpdatedOn:Date.now,
  DepartmentId:1,
 } 


  ngOnInit(): void {
  }


  addDesignation()
  {
    const headers = { 'content-type': 'application/json'}
    console.log(this.Designation);

     this.http.post<any>('https://localhost:7275/api/Designation/Create',this.Designation,{headers:headers}).subscribe((data)=>{
       console.log(data);
     })

    
  }

}
