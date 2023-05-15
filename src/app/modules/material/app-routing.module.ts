import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnalyticsComponent } from 'src/app/components/analytics/analytics.component';
import { DepartmentsComponent } from 'src/app/components/departments/departments.component';
import { TimesheetComponent } from 'src/app/components/timesheet/timesheet.component';

const routes: Routes = [
  { path: '',   redirectTo: 'departments', pathMatch: 'full' },
  { path: 'departments', component: DepartmentsComponent },
  { path: 'timesheet', component: TimesheetComponent },
  { path: 'analytics', component: AnalyticsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
