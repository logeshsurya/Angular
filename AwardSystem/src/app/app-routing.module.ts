import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Awards } from 'Models/Awards';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminAddDesignationComponent } from './admin-add-designation/admin-add-designation.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminAddOrganizationComponent } from './admin-add-organization/admin-add-organization.component';

import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminDesignationComponent } from './admin-designation/admin-designation.component';


import { AdminEditDepartmentComponent } from './admin-edit-department/admin-edit-department.component';
import { AdminEditDesignationComponent } from './admin-edit-designation/admin-edit-designation.component';
import { AdminEditEmployeeComponent } from './admin-edit-employee/admin-edit-employee.component';
import { AdminEditOrganizationComponent } from './admin-edit-organization/admin-edit-organization.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AddAwardsComponent } from './admin/awards/add-awards/add-awards.component';
import { AwardsComponent } from './admin/awards/awards.component';
import { EditAwardComponent } from './admin/awards/edit-award/edit-award.component';
import { AddOrganisationComponent } from './admin/organisation/add-organisation/add-organisation.component';
import { EditOrganisationComponent } from './admin/organisation/edit-organisation/edit-organisation.component';
import { OrganisationComponent } from './admin/organisation/organisation.component';
import { CardPostComponent } from './card-post/card-post.component';
import { LoginComponent } from './login/login.component';


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
  {path:'admin-organization' , component:AdminOrganizationComponent},
  {path:'admin-edit-organization' , component:AdminEditOrganizationComponent},
  {path:'admin-department' , component:AdminDepartmentComponent},
  {path:'admin-edit-department' , component:AdminEditDepartmentComponent},
  {path:'admin-designation' , component:AdminDesignationComponent},
  {path:'admin-add-department' , component:AdminAddDepartmentComponent},
  {path:'admin-edit-designation' , component:AdminEditDesignationComponent},
  {path:'admin-add-designation' , component:AdminAddDesignationComponent},
  {path:'admin-add-organisation' , component:AdminAddOrganizationComponent},
<<<<<<< Updated upstream
  {path:'login', componenet:LoginComponent},
=======
  {path:'organisation', component:OrganisationComponent},
  {path:'add-award', component:AddAwardsComponent},
  {path:'awards', component:AwardsComponent},


  
  
  
  
  
  {path:'organisation', component:OrganisationComponent},
  {path:'add-organisation', component:AddOrganisationComponent},
  {path:'edit-organisation', component:EditOrganisationComponent},

 

>>>>>>> Stashed changes

  {path:'footer' , component:FooterComponent},
  {path:'homepage' , component:HomePageComponent},
  {path:'morecomments' , component:MoreCommentsComponent},
  {path:'cardpost' , component:CardPostComponent},


  {path:'', component:OrganisationComponent}

<<<<<<< Updated upstream
<<<<<<< Updated upstream
=======
  {path:'' , component:AdminOrganizationComponent}
  // {path:'' , component:LoginComponent}
>>>>>>> Stashed changes

  {path:'' , component:AdminOrganizationComponent}
=======
  
>>>>>>> Stashed changes
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
