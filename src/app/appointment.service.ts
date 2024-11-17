import { Injectable } from '@angular/core';
import { Appointment } from './appointment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8092/api/v2/appointments"

  getAllAppointments():Observable<Appointment[]>{
    return this.httpClient.get<Appointment[]>(`${this.baseurl}`);
  }

  createAppointment(appointment:Appointment):Observable<Appointment>{
    return this.httpClient.post<Appointment>(`${this.baseurl}`,appointment);
  }

  deleteAppointment(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`)
  }

}
