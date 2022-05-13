import { HttpBackend, HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/Services/admin.service'; 
import {ActivatedRoute} from '@angular/router';
import{Designation} from 'Models/Designation';


@Component({
  selector: 'app-edit-designation',
  templateUrl: './edit-designation.component.html',
  styleUrls: ['./edit-designation.component.css']
})
export class EditDesignationComponent implements OnInit {

  constructor( private http:HttpClient,
    private route:ActivatedRoute) { }

id:any;
data:any;

Designation:any={
  Id:0,
  DesignationName:'',
  

}


 
  ngOnInit():void { 
    this.route.params.subscribe(params => {
      this.id = params['id'];
    console.log(this.id)
    this.http
      .get<any>(`https://localhost:7275/api/Designation/GetById?id=${this.id}`)
      .subscribe((data) => {
        this.data = data;
        console.log(data);
      });
    });

    // console.log(this.route.snapshot.params['id']);
    // this.getdata();
    

  }
  updateDesignation(){

    const headers = { 'content-type': 'application/json'}
    console.log(this.Designation);

    this.http.put<any>('https://localhost:7275/api/Designation/Update?id=1',this.Designation,{headers:headers}).subscribe(data=>{
      console.log(data);
    })
  }

  // getdata()
  // {
  //   this.adminService.getOneEmployee(this.id).subscribe((res: any)=>
  //     {
  //       this.data=res;
  //       this.designation=this.data;
  //     })
  // }
  

}
