import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegActivitiesComponent } from './pages/reg-activities/reg-activities.component';
import { RegLayoutComponent } from './layouts/reg-layout/reg-layout.component';
const routes: Routes = [

  {
    path: '',
    component: RegLayoutComponent,
    children: [
      { path: 'activities', component: RegActivitiesComponent }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TicketRegRoutingModule { }