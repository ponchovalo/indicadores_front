import { Component, OnInit, inject } from '@angular/core';
import { DefaultValueAccessor, FormBuilder, FormGroup } from '@angular/forms';
import { TicketRegService } from '../../services/ticket-reg.service';
import { BaseActivity } from '../../interfaces/base_activity.interface';
import { Party } from '../../interfaces/parties.interface';
import { Device } from '../../interfaces/device.interface';
import { Area } from '../../interfaces/area.interface';

@Component({
  selector: 'ticket-reg-new-activity',
  templateUrl: './new-activity.component.html',
  styleUrl: './new-activity.component.css'
})
export class NewActivityComponent implements OnInit {

  private fb = inject(FormBuilder);
  private ticketRegService = inject(TicketRegService)

  //Tipo de actividade seleccionada
  selectedActivityType: string = "";
  activityTypes: string[] = ['PREVENTIVO','NO PLANIFICADO','ACTIVIDADES ADMINISTRATIVAS']

  selectedParty?: Party;
  parties: Party[] = []

  selectedDevice?: Device;
  devices: Device[] = []

  baseActivities: BaseActivity[] =[];

  selectedArea?: Area;
  areas: Area[] = [];

  public activityForm: FormGroup = this.fb.group({
    baseActivity: [''], 
    initial_time:[''],
    final_time:[''],
    time_out_food:['00:00'],
    time_out_transfer:['00:00'],
    time_out_access:['00:00'],
    time_out_code:['00:00'],
    time_out_store:['00:00'],
    area:[null], 
    unit_name:['']
  })

  ngOnInit(): void {
    
  };

  onActivityTypeChange(){
    switch (this.selectedActivityType){
      case 'ACTIVIDADES ADMINISTRATIVAS': 
        this.ticketRegService.getTicketDescription(this.selectedActivityType)
          .subscribe( res => {
            this.baseActivities = res;
            console.log(this.baseActivities)
        });
        this.getAreas();
        break
      case 'NO PLANIFICADO':
        this.ticketRegService.getParties()
          .subscribe(res => {
            this.parties = res;
            console.log(this.parties)
          });
        this.getAreas();
        break
      default:
        return
    }
  }

  onPartyChange(){
    this.ticketRegService.getDeviceForParty(this.selectedParty!.party_name)
      .subscribe(res => {
        this.devices = res;
      })
  }

  onDeviceChange(){
    console.log(this.selectedDevice)
  }

  getAreas(){
    this.ticketRegService.getArea()
      .subscribe(res => {
        this.areas = res;
        console.log(this.areas)
      })
  }

  onAreaChange(){
    console.log(this.activityForm.value.area.area_name)
  }

  saveActivity(){
    const baseActivitySelected: BaseActivity = this.activityForm.value.baseActivity;
    console.log(this.activityForm)
    console.log(this.activityForm.value)
    console.log(baseActivitySelected.problem_description)
    this.activityForm.reset();
  }

  resetValues(){
    this.activityForm.controls['time_out_food'].setValue('00:00');
    this.activityForm.controls['time_out_transfer'].setValue('00:00');
    this.activityForm.controls['time_out_access'].setValue('00:00');
    this.activityForm.controls['time_out_code'].setValue('00:00');
    this.activityForm.controls['time_out_store'].setValue('00:00');
  }




}





