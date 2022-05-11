import { Component, Input, OnInit } from '@angular/core';
import { NgControl } from '@angular/forms';
import { Organisation } from 'Models/Organisation';
import { AdminService } from 'src/app/Services/admin.service';

@Component({
  selector: 'app-add-organisation',
  templateUrl: './add-organisation.component.html',
  styleUrls: ['./add-organisation.component.css']
})
export class AddOrganisationComponent  implements OnInit{

 admin:any;
  constructor(private adminService:AdminService){
  }
  
    ngOnInit(): void{
       this.adminService.getadmin().subscribe(data=>{
        
         this.admin =data;
       },(err)=> {
         console.log("unable to get data",err);
       }
       
       )
    }

  }
  

  // constructor(private service:SharedService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // @Input() org:any;
  
  // organisation:Organisation=
  // {
  //   id=0,
  //   organisationName='',
  //   isActive=true,

  // }

  // ngOnInit(): void {
  //   this.organisationName = this.organisation.organisationName;
  //   this.isActive = this.org.isActive;
  // }

  // addOrganisation(){
  //   var val = {
  //     organisationName:this.organisationName,
  //     isActive:this.org.isActive
  //   };
  //   this.service.addOrganisation(val).subscribe(res=>{
  //     alert(res.toString());
  //   });
  //   console.log(val);
  // }
  // constructor(private service:SharedService) { }
  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }
  // @Input() org:any;
  // organisation:Organisation=
  // {
  //   id=0,
  //   organisationName='',
  //   isActive=true,
  // }
  // ngOnInit(): void {
  //   this.organisationName = this.organisation.organisationName;
  //   this.isActive = this.org.isActive;
  // }
  // addOrganisation(){
  //   var val = {
  //     organisationName:this.organisationName,
  //     isActive:this.org.isActive
  //   };
  //   this.service.addOrganisation(val).subscribe(res=>{
  //     alert(res.toString());
  //   });
  //   console.log(val);
  // }






/*
export class AddOrganisationComponent {
  @Input() org:any;
  constructor(private service:SharedService) 
  {
    this.service.addOrganisation().subscribe((data)=>{
      this.org=data;
    });
   }
   getUserFormData(data:any)
   {
     console.warn(data)
     this.service.saveorg(data).subscribe((result)=>){
      console.warn(data)
     }
   }
  
}
*/