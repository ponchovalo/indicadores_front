import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RegActivitiesComponent } from './pages/reg-activities/reg-activities.component';
import { TicketRegRoutingModule } from './ticket-reg-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { RegLayoutComponent } from './layouts/reg-layout/reg-layout.component';
import { SharedModule } from '../shared/shared.module';
import { ActivityTableComponent } from './components/activity-table/activity-table.component';
import { NewActivityComponent } from './components/new-activity/new-activity.component';



@NgModule({
  declarations: [
    RegActivitiesComponent,
    RegLayoutComponent,
    ActivityTableComponent,
    NewActivityComponent
  ],
  imports: [
    CommonModule,
    TicketRegRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule,
    FormsModule
  ]
})
export class TicketRegModule { }
