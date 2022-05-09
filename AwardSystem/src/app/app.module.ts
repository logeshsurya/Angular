import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutComponent } from './layout/layout.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminEditEmployeeComponent } from './admin-edit-employee/admin-edit-employee.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminEditDepartmentComponent } from './admin-edit-department/admin-edit-department.component';
import { AdminDesignationComponent } from './admin-designation/admin-designation.component';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminEditDesignationComponent } from './admin-edit-designation/admin-edit-designation.component';
import { AdminAddDesignationComponent } from './admin-add-designation/admin-add-designation.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoreCommentsComponent } from './more-comments/more-comments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardPostComponent } from './card-post/card-post.component';

import { AdminComponent } from './admin/admin.component';

import { OrganisationComponent } from './admin/organisation/organisation.component';
import { EditOrganisationComponent } from './admin/organisation/edit-organisation/edit-organisation.component';
import { AddOrganisationComponent } from './admin/organisation/add-organisation/add-organisation.component';


import { DepartmentComponent } from './admin/department/department.component';
import { AddDepartmentComponent } from './admin/department/add-department/add-department.component';
import { EditDepartmentComponent } from './admin/department/edit-department/edit-department.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { AddDesignationComponent } from './admin/designation/add-designation/add-designation.component';
import { EditDesignationComponent } from './admin/designation/edit-designation/edit-designation.component';

import { AwardsComponent } from './admin/awards/awards.component';
import { AddAwardsComponent } from './admin/awards/add-awards/add-awards.component';
import { EditAwardComponent } from './admin/awards/edit-award/edit-award.component';

import { ViewAwardComponent } from './admin/awards/view-award/view-award.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AddEmployeeComponent } from './admin/employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './admin/employee/edit-employee/edit-employee.component';

import { ViewEmployeeComponent } from './admin/employee/view-employee/view-employee.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';




@NgModule({
  declarations: [
    AppComponent,
    AdminSidebarComponent,
    LayoutComponent,
    AwardsComponent,
   
    AdminEmployeeComponent,
    AdminAddEmployeeComponent,
    AdminEditEmployeeComponent,
    AdminViewEmployeeComponent,
  
 
    
    AdminDepartmentComponent,
    AdminEditDepartmentComponent,
    AdminDesignationComponent,
    AdminAddDepartmentComponent,
    AdminEditDesignationComponent,
    AdminAddDesignationComponent,
   
    FooterComponent,
    HomePageComponent,
    MoreCommentsComponent,
    CardPostComponent,
    AdminComponent,


    OrganisationComponent,
    AddOrganisationComponent,
    EditOrganisationComponent,
  
   
    DepartmentComponent,
    AddDepartmentComponent,
    EditDepartmentComponent,
    
    DesignationComponent,
    AddDesignationComponent,
    EditDesignationComponent,
   
    AwardsComponent,
    AddAwardsComponent,
    EditAwardComponent,
 
    ViewAwardComponent,
    EmployeeComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    ViewEmployeeComponent,

  
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
