import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminAwardComponent } from './admin-award/admin-award.component';
import { LayoutComponent } from './layout/layout.component';
import { AdminAddAwardComponent } from './admin-add-award/admin-add-award.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminEditEmployeeComponent } from './admin-edit-employee/admin-edit-employee.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { AdminEditAwardComponent } from './admin-edit-award/admin-edit-award.component';
import { AdminViewAwardComponent } from './admin-view-award/admin-view-award.component';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminEditOrganizationComponent } from './admin-edit-organization/admin-edit-organization.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminEditDepartmentComponent } from './admin-edit-department/admin-edit-department.component';
import { AdminDesignationComponent } from './admin-designation/admin-designation.component';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminEditDesignationComponent } from './admin-edit-designation/admin-edit-designation.component';
import { AdminAddDesignationComponent } from './admin-add-designation/admin-add-designation.component';
import { AdminAddOrganizationComponent } from './admin-add-organization/admin-add-organization.component';



@NgModule({
  declarations: [
    AppComponent,
    AdminSidebarComponent,
    AdminAwardComponent,
    LayoutComponent,
    AdminAddAwardComponent,
    AdminEmployeeComponent,
    AdminAddEmployeeComponent,
    AdminEditEmployeeComponent,
    AdminViewEmployeeComponent,
    AdminEditAwardComponent,
    AdminViewAwardComponent,
    AdminOrganizationComponent,
    AdminEditOrganizationComponent,
    AdminDepartmentComponent,
    AdminEditDepartmentComponent,
    AdminDesignationComponent,
    AdminAddDepartmentComponent,
    AdminEditDesignationComponent,
    AdminAddDesignationComponent,
    AdminAddOrganizationComponent,
  
 
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
