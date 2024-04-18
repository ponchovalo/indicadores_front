import { Component, OnInit, inject } from '@angular/core';
import { Message } from 'primeng/api';
import { Activity } from '../../interfaces/activity.interface';
import { Workshift } from '../../interfaces/workshift.interface';
import { TicketRegService } from '../../services/ticket-reg.service';

@Component({
  selector: 'app-reg-activities',
  templateUrl: './reg-activities.component.html',
  styleUrl: './reg-activities.component.css'
})
export class RegActivitiesComponent implements OnInit {

  //####   Variables Locales/Globales del Componente ##########//
  dialogVisible: boolean = false;
  date?: Date;
  activities: Activity[] = [];
  messages: Message[] = [];
  selectedWorkshift?: Workshift;
  workshifts: Workshift[] = [
    {
      id: 1,
      name: 'ADMINISTRATIVO',
      working_hours: '08:00 - 17:00'
    },
    {
      id: 1,
      name: 'GUARDIA TA',
      working_hours: '08:00 - 20:00'
    },
    {
      id: 1,
      name: 'NOCTURNO',
      working_hours: '20:00 - 08:00'
    }
  ]

  private ticketRegService = inject(TicketRegService)

  //#####  Ciclo inicial #####//
  ngOnInit(): void {
    this.date = new Date();
    this.messages = [{ severity: 'warn', summary: '', detail: 'Aun no hay regitros este dia' }];

    //-- Llamada a cargar actividades del dia --//
    this.getAllActivitiesDay(this.date)

  }

  //#####  Funciones del componente #####//
  //--Abrir Dialogo --//
  showDialogNewActivity() {
    this.dialogVisible = true;
  }

  //-- Llenado de tabla de actividades --//
  getAllActivitiesDay(date: Date): void{
    this.ticketRegService.getActivities(date)
      .subscribe(res => {
        console.log(res)
      })
    //--TODO: Cambiar inicializar workshift--//
  }

}
