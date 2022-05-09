import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSidebarComponent } from './admin/admin-sidebar/admin-sidebar.component';
import { AddAwardsComponent } from './admin/awards/add-awards/add-awards.component';
import { AwardsComponent } from './admin/awards/awards.component';
import { EditAwardComponent } from './admin/awards/edit-award/edit-award.component';
import { ViewAwardComponent } from './admin/awards/view-award/view-award.component';
import { AddDepartmentComponent } from './admin/department/add-department/add-department.component';
import { DepartmentComponent } from './admin/department/department.component';
import { EditDepartmentComponent } from './admin/department/edit-department/edit-department.component';
import { AddDesignationComponent } from './admin/designation/add-designation/add-designation.component';
import { DesignationComponent } from './admin/designation/designation.component';
import { EditDesignationComponent } from './admin/designation/edit-designation/edit-designation.component';
import { AddOrganisationComponent } from './admin/organisation/add-organisation/add-organisation.component';
import { EditOrganisationComponent } from './admin/organisation/edit-organisation/edit-organisation.component';
import { OrganisationComponent } from './admin/organisation/organisation.component';
import { ApproverAddrequestComponent } from './approver/approver-addrequest/approver-addrequest.component';
import { ApproverApprovalComponent } from './approver/approver-approval/approver-approval.component';
import { ApproverDashboardComponent } from './approver/approver-dashboard/approver-dashboard.component';
import { ApproverHomepageComponent } from './approver/approver-homepage/approver-homepage.component';
import { ApproverMyawardsComponent } from './approver/approver-myawards/approver-myawards.component';
import { ApproverComponent } from './approver/approver.component';
import { CardPostComponent } from './card-post/card-post.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { MoreCommentsComponent } from './more-comments/more-comments.component';

const routes: Routes = [
 
  {path:'layoutcomponent' , component:LayoutComponent},
  {path:'admin-sidebar', component:AdminSidebarComponent},
  {path:'login', component:LoginComponent},
  

 
  {path:'awards', component:AwardsComponent},
  {path:'add-awards', component:AddAwardsComponent},
  {path:'edit-award', component:EditAwardComponent},
  {path:'view-award', component:ViewAwardComponent},

  {path:'department', component:DepartmentComponent},
  {path:'add-department', component:AddDepartmentComponent},
  {path:'edit-department', component:EditDepartmentComponent},


  {path:'designation', component:DesignationComponent},
  {path:'add-designation', component:AddDesignationComponent},
  {path:'edit-designation', component:EditDesignationComponent},


  {path:'organisation', component:OrganisationComponent},
  {path:'add-organisation', component:AddOrganisationComponent},
  {path:'edit-organisation', component:EditOrganisationComponent},

  {path:'approver', component:ApproverComponent},
  {path:'approver-addrequest', component:ApproverAddrequestComponent},
  {path:'approver-approval', component:ApproverApprovalComponent},
  {path:'approver-dashboard', component:ApproverDashboardComponent},
  {path:'approver-homepage', component:ApproverHomepageComponent},
  {path:'approver-myawards', component:ApproverMyawardsComponent},
  
 




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
