import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { LoginComponent } from "./login/login.component";
import { AdminSidebarComponent } from "./admin-sidebar/admin-sidebar.component";
import { AdminAddIndividualsComponent } from "./admin-add-individuals/admin-add-individuals.component";
import { AssignprivilegesComponent } from "./assignprivileges/assignprivileges.component";
import { HomeComponent } from "./home/home.component";
import { ManageUsersComponent } from "./manage-users/manage-users.component";
import { TeamLeaderSideBarComponent } from "./team-leader-side-bar/team-leader-side-bar.component";
import { TeamLeaderAssignJobsComponent } from "./team-leader-assign-jobs/team-leader-assign-jobs.component";
import { TeamLeaderCreateJobCardComponent } from "./team-leader-create-job-card/team-leader-create-job-card.component";
import { TeamLeaderHomeComponent } from "./team-leader-home/team-leader-home.component";
import { TeamLeaderInventoryManagementComponent } from "./team-leader-inventory-management/team-leader-inventory-management.component";
import { TeamLeaderSparePartsRequestComponent } from "./team-leader-spare-parts-request/team-leader-spare-parts-request.component";
import { TeamLeaderViewJobCardComponent } from "./team-leader-view-job-card/team-leader-view-job-card.component";
import { TeamLeaderViewQuotationComponent } from "./team-leader-view-quotation/team-leader-view-quotation.component";
import { TechnicianSidebarComponent } from "./technician-sidebar/technician-sidebar.component";
import { TechnicianHomeComponent } from "./technician-home/technician-home.component";
import { TechnicianRequestSparePartsComponent } from "./technician-request-spare-parts/technician-request-spare-parts.component";
import { TechnicianViewJobCardComponent } from "./technician-view-job-card/technician-view-job-card.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, AdminSidebarComponent, AdminAddIndividualsComponent, AssignprivilegesComponent, HomeComponent, ManageUsersComponent, TeamLeaderSideBarComponent, TeamLeaderAssignJobsComponent, TeamLeaderCreateJobCardComponent, TeamLeaderHomeComponent, TeamLeaderInventoryManagementComponent, TeamLeaderSparePartsRequestComponent, TeamLeaderViewJobCardComponent, TeamLeaderViewQuotationComponent, TechnicianSidebarComponent, TechnicianHomeComponent, TechnicianRequestSparePartsComponent, TechnicianViewJobCardComponent],
  template: `<router-outlet></router-outlet>`,
  styleUrls: ['./app.component.css']

})
export class AppComponent {
  title = 'client';
}
