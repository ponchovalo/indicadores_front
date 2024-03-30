import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegActivitiesComponent } from './pages/reg-activities/reg-activities.component';
import { TicketRegRoutingModule } from './ticket-reg-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { PrimengModule } from '../primeng/primeng.module';
import { RegLayoutComponent } from './layouts/reg-layout/reg-layout.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    RegActivitiesComponent,
    RegLayoutComponent
  ],
  imports: [
    CommonModule,
    TicketRegRoutingModule,
    ReactiveFormsModule,
    PrimengModule,
    SharedModule
  ]
})
export class TicketRegModule { }
