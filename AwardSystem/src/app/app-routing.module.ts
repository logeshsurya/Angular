import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminAddAwardComponent } from './admin-add-award/admin-add-award.component';
import { AdminAddDepartmentComponent } from './admin-add-department/admin-add-department.component';
import { AdminAddDesignationComponent } from './admin-add-designation/admin-add-designation.component';
import { AdminAddEmployeeComponent } from './admin-add-employee/admin-add-employee.component';
import { AdminAddOrganizationComponent } from './admin-add-organization/admin-add-organization.component';
import { AdminAwardComponent } from './admin-award/admin-award.component';
import { AdminDepartmentComponent } from './admin-department/admin-department.component';
import { AdminDesignationComponent } from './admin-designation/admin-designation.component';

import { AdminEditAwardComponent } from './admin-edit-award/admin-edit-award.component';
import { AdminEditDepartmentComponent } from './admin-edit-department/admin-edit-department.component';
import { AdminEditDesignationComponent } from './admin-edit-designation/admin-edit-designation.component';
import { AdminEditEmployeeComponent } from './admin-edit-employee/admin-edit-employee.component';
import { AdminEditOrganizationComponent } from './admin-edit-organization/admin-edit-organization.component';
import { AdminEmployeeComponent } from './admin-employee/admin-employee.component';
import { AdminOrganizationComponent } from './admin-organization/admin-organization.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { AdminViewAwardComponent } from './admin-view-award/admin-view-award.component';
import { AdminViewEmployeeComponent } from './admin-view-employee/admin-view-employee.component';
import { CardPostComponent } from './card-post/card-post.component';
import { LoginComponent } from './login/login.component';


import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';



import { LayoutComponent } from './layout/layout.component';
import { MoreCommentsComponent } from './more-comments/more-comments.component';

const routes: Routes = [
  {path:'admin-sidebarcomponent' , component:AdminSidebarComponent},
  {path:'layoutcomponent' , component:LayoutComponent},
  {path:'admin-award' , component:AdminAwardComponent},
  {path:'admin-add-awardcomponent' , component:AdminAddAwardComponent},
  {path:'admin-employeecomponent' , component:AdminEmployeeComponent},
  {path:'admin-add-employeecomponent' , component:AdminAddEmployeeComponent},
  {path:'admin-edit-employee' , component:AdminEditEmployeeComponent},
  {path:'admin-view-employeecomponent' , component:AdminViewEmployeeComponent},
  {path:'admin-edit-awardcomponent' , component:AdminEditAwardComponent},
  {path:'admin-view-awardcomponent' , component:AdminViewAwardComponent},
  {path:'admin-organization' , component:AdminOrganizationComponent},
  {path:'admin-edit-organization' , component:AdminEditOrganizationComponent},
  {path:'admin-department' , component:AdminDepartmentComponent},
  {path:'admin-edit-department' , component:AdminEditDepartmentComponent},
  {path:'admin-designation' , component:AdminDesignationComponent},
  {path:'admin-add-department' , component:AdminAddDepartmentComponent},
  {path:'admin-edit-designation' , component:AdminEditDesignationComponent},
  {path:'admin-add-designation' , component:AdminAddDesignationComponent},
  {path:'admin-add-organisation' , component:AdminAddOrganizationComponent},
  {path:'login', componenet:LoginComponent},

  {path:'footer' , component:FooterComponent},
  {path:'homepage' , component:HomePageComponent},
  {path:'morecomments' , component:MoreCommentsComponent},
  {path:'cardpost' , component:CardPostComponent},



<<<<<<< Updated upstream
=======
  {path:'' , component:AdminOrganizationComponent}
  // {path:'' , component:LoginComponent}
>>>>>>> Stashed changes

  {path:'' , component:AdminOrganizationComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
