import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddDesignationComponent } from './admin-add-designation/admin-add-designation.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';

import { AdminDesignationComponent } from './admin-designation/admin-designation.component';


import { AdminEditDesignationComponent } from './admin-edit-designation/admin-edit-designation.component';
import { AdminEditEmployeeComponent } from './admin-edit-employee/admin-edit-employee.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AddAwardsComponent } from './admin/awards/add-awards/add-awards.component';
import { AwardsComponent } from './admin/awards/awards.component';
import { EditAwardComponent } from './admin/awards/edit-award/edit-award.component';
import { ViewAwardComponent } from './admin/awards/view-award/view-award.component';
import { AddDepartmentComponent } from './admin/department/add-department/add-department.component';
import { DepartmentComponent } from './admin/department/department.component';
import { EditDepartmentComponent } from './admin/department/edit-department/edit-department.component';
import { AddOrganisationComponent } from './admin/organisation/add-organisation/add-organisation.component';
import { EditOrganisationComponent } from './admin/organisation/edit-organisation/edit-organisation.component';
import { OrganisationComponent } from './admin/organisation/organisation.component';
import { CardPostComponent } from './card-post/card-post.component';



import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';



import { LayoutComponent } from './layout/layout.component';
import { MoreCommentsComponent } from './more-comments/more-comments.component';

const routes: Routes = [
 
  {path:'layoutcomponent' , component:LayoutComponent},
  {path:'admin-sidebar', component:AdminSidebarComponent},

  {path:'admin-employeecomponent' , component:AdminEmployeeComponent},
  {path:'admin-add-employeecomponent' , component:AdminAddEmployeeComponent},
  {path:'admin-edit-employee' , component:AdminEditEmployeeComponent},
  {path:'admin-view-employeecomponent' , component:AdminViewEmployeeComponent},
 
  
  {path:'admin-designation' , component:AdminDesignationComponent},
  {path:'admin-edit-designation' , component:AdminEditDesignationComponent},
  {path:'admin-add-designation' , component:AdminAddDesignationComponent},
 

 
  {path:'awards', component:AwardsComponent},
  {path:'add-awards', component:AddAwardsComponent},
  {path:'edit-award', component:EditAwardComponent},
  {path:'view-award', component:ViewAwardComponent},



  
  {path:'organisation', component:OrganisationComponent},
  {path:'add-organisation', component:AddOrganisationComponent},
  {path:'edit-organisation', component:EditOrganisationComponent},


  {path:'department', component:DepartmentComponent},
  {path:'add-department', component:AddDepartmentComponent},
  {path:'edit-department', component:EditDepartmentComponent},



 


  {path:'footer' , component:FooterComponent},
  {path:'homepage' , component:HomePageComponent},
  {path:'morecomments' , component:MoreCommentsComponent},
  {path:'cardpost' , component:CardPostComponent},


  {path:'', component:OrganisationComponent},


  

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
