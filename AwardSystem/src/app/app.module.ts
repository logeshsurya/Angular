import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


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
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MoreCommentsComponent } from './more-comments/more-comments.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { CardPostComponent } from './card-post/card-post.component';
import { AdminComponent } from './admin/admin.component';
import { OrganisationComponent } from './admin/organisation/organisation.component';
import { AddEditOrganisationComponent } from './admin/organisation/add-edit-organisation/add-edit-organisation.component';
import { AddOrganistionComponent } from './admin/organisation/add-organistion/add-organistion.component';
import { EditOrganisationComponent } from './admin/organisation/edit-organisation/edit-organisation.component';
import { AddOrganisationComponent } from './admin/organisation/add-organisation/add-organisation.component';



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
    FooterComponent,
    HomePageComponent,
    MoreCommentsComponent,
    CardPostComponent,
    AdminComponent,
    OrganisationComponent,
    AddEditOrganisationComponent,
    AddOrganistionComponent,
    EditOrganisationComponent,
    AddOrganisationComponent,
  
 
   
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
