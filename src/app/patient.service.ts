import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Patient } from './patient';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  constructor(private httpClient:HttpClient) { }

  private baseurl="http://localhost:8092/api/v1/patients"

  getPatientList():Observable<Patient[]>{//method hai
    return this.httpClient.get<Patient[]>(`${this.baseurl}`)//rest api ko call kar na ka liya
  }

  delete(id:number):Observable<object>{
    return this.httpClient.delete(`${this.baseurl}/${id}`);
  }

  createPatient(patient:Patient):Observable<Patient>{
    return this.httpClient.post<Patient>(`${this.baseurl}`,patient);
  }

}
