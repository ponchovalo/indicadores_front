import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TicketRegService } from '../../services/ticket-reg.service';
import { BaseActivity } from '../../interfaces/base_activity.interface';

@Component({
  selector: 'ticket-reg-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrl: './new-activity.component.css'
})
export class NewActivityComponent implements OnInit {

  private fb = inject(FormBuilder);
  private ticketRegService = inject(TicketRegService)

  activityType: string = "PREVENTIVO"
  activityTypes: string[] = ['PREVENTIVO','NO PLANIFICADO','ACTIVIDADES ADMINISTRATIVAS']

  baseActivities: BaseActivity[] =[];

  public activityForm: FormGroup = this.fb.group({
    ticket_description: [''],
    initial_time:[''],
    final_time:[''],
    time_out_food:[''],
    time_out_transfer:[''],
    time_out_access:[''],
    time_out_code:[''],
    time_out_store:[''],
    area_name:[''],
    unit_name:['']
  })

  ngOnInit(): void {
  };

  activityTypeChange(){
    this.ticketRegService.getTicketDescription(this.activityType).subscribe( res => {
      this.baseActivities = res;
      console.log(this.baseActivities)
    })
  }




}





