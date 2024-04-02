import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { BaseActivity } from '../interfaces/base_activity.interface';
import { Activity } from '../interfaces/activity.interface';
import { Party } from '../interfaces/parties.interface';
import { Device } from '../interfaces/device.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketRegService {

  private _activities: Activity[] = []

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  constructor() { }

  public get activities(){
    return this._activities;
  }

  getParties():Observable<Party[]>{
    const url = `${this.baseUrl}/parties`;
    return this.http.get<Party[]>(url);
  }

  getDeviceForParty(party_name: string): Observable<Device[]>{
    const url = `${this.baseUrl}/devices/party`
    const body = {party_name};
    return this.http.post<Device[]>(url, body)
  }

  getTicketDescription(activity_type: string): Observable<BaseActivity[]>{
    const url = `${this.baseUrl}/activity-base/activity-type`;
    const body = {activity_type}
    return this.http.post<BaseActivity[]>(url, body)
  }


}
