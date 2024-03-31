import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '../../environments/environments';
import { Observable } from 'rxjs';
import { BaseActivity } from '../interfaces/base_activity.interface';

@Injectable({
  providedIn: 'root'
})
export class TicketRegService {

  private readonly baseUrl: string = environment.baseUrl;
  private http = inject( HttpClient );

  constructor() { }

  getTicketDescription(activity_type: string): Observable<BaseActivity[]>{
    const url = `${this.baseUrl}/activity-base/activity-type`;
    const body = {activity_type}
    return this.http.post<BaseActivity[]>(url, body)
  }

}
