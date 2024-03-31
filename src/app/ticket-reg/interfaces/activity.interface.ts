import { Time } from "@angular/common";

export interface Activity {
  date: Date
  activity: string;
  ticket_id: string;
  initial_time: Date;
  final_time: Date;
  time_out_food: Date;
  time_out_transfer: Date;
  time_out_access: Date;
  time_out_code: Date;
  time_out_store: Date;
  time_out_total: Date;
  total_efective_activity: Date;
  total_real_activity: Date;
  activity_type: string;
  ticket_description: string;
  problem_description: string;
  device_name: string;
  party_name: string;
  party_description: string;

}
