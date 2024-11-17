import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  constructor(private httpClient:HttpClient) { }

    private baseurl="http://localhost:8092/api/v3/medicines"

    getMedicines():Observable<Medicine[]>{
      return this.httpClient.get<Medicine[]>(`${this.baseurl}`);
    }

    createMedicine(medicine:Medicine):Observable<Medicine>{
      return this.httpClient.post<Medicine>(`${this.baseurl}`,medicine);
    }

}
