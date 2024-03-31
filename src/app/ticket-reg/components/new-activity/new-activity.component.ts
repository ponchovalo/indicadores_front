import { Component, OnInit } from '@angular/core';
import { ActivityType } from '../../interfaces/activity-type-interface';

@Component({
  selector: 'ticket-reg-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrl: './new-activity.component.css'
})
export class NewActivityComponent implements OnInit {

  activityType: string = "PREVENTIVO"

  activityTypes: string[] = ['PREVENTIVO','NO PLANIFICADO','ADMINISTRATIVO']

  ngOnInit(): void {
  };


}





