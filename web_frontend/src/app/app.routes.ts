import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AdminAddIndividualComponent } from './pages/admin-add-individuals/admin-add-individuals.component';
import { AdminAssignprivilegesComponent } from './pages/admin-assignprivileges/assignprivileges.component';
import { AdminHomeComponent } from './pages/admin-home/home.component';
import { AdminManageUsersComponent } from './pages/admin-manage-users/manage-users.component';
import { TeamLeaderAssignJobComponent } from './pages/team-leader-assign-jobs/team-leader-assign-jobs.component';
import { TeamLeaderCreateJobCardsComponent } from './pages/team-leader-create-job-card/team-leader-create-job-card.component';
import { TeamleaderHomeComponent } from './pages/team-leader-home/team-leader-home.component';
import { TeamLeaderInventorymanagementComponent } from './pages/team-leader-inventory-management/team-leader-inventory-management.component';
import { TeamLeaderSparePartRequestComponent } from './pages/team-leader-spare-parts-request/team-leader-spare-parts-request.component';
import { TeamLeaderViewjobCardComponent } from './pages/team-leader-view-job-card/team-leader-view-job-card.component';
import { TeamLeaderViewquotationComponent } from './pages/team-leader-view-quotation/team-leader-view-quotation.component';
import { TechnicianMachinecheckComponent } from './pages/technician-machine-check/technician-machine-check.component';
import { TechnicianMakequotationComponent } from './pages/technician-make-quotation/technician-make-quotation.component';
import { TechnicianRequestSparepartsComponent } from './pages/technician-request-spare-parts/technician-request-spare-parts.component';
import { TechnicianViewjobCardComponent } from './pages/technician-view-job-card/technician-view-job-card.component';
import { TechnicianhomeComponent } from './pages/technician-home/technician-home.component';

export const routes: Routes = [
  { path: '', component: LoginComponent },

  { path: 'adminmanageusers', component: AdminManageUsersComponent },
  { path: 'adminhome', component: AdminHomeComponent },
  { path: 'assignprivileges', component: AdminAssignprivilegesComponent },
  { path: 'adminAddIndividual', component: AdminAddIndividualComponent },

  { path: 'teamLeaderassignjob', component: TeamLeaderAssignJobComponent },
  { path: 'teamleadercreatejobCards', component: TeamLeaderCreateJobCardsComponent },
  { path: 'teamleaderhome', component: TeamleaderHomeComponent },
  { path: 'teamLeaderinventorymanagement', component: TeamLeaderInventorymanagementComponent },
  { path: 'teamLeadersparepartrequest', component: TeamLeaderSparePartRequestComponent },
  { path: 'teamLeaderviewjobcard', component: TeamLeaderViewjobCardComponent },
  { path: 'teamleaderviewquotation', component: TeamLeaderViewquotationComponent },

  { path: 'technicianhome', component: TechnicianhomeComponent },
  { path: 'technicianmachinecheck', component: TechnicianMachinecheckComponent },
  { path: 'technicianmakequotation', component: TechnicianMakequotationComponent },
  { path: 'technicianrequestspareparts', component: TechnicianRequestSparepartsComponent },
  { path: 'technicianviewjobcard', component: TechnicianViewjobCardComponent },

];
