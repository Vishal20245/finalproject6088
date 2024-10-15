import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent {

  patients:Patient[]=[];
   
  constructor(private patientService:PatientService){}
  ngOnInt():void{
    this.getPatients();
  }
    
    getPatients(){
      this.patientService.getPatientList().subscribe(data=>{
      this.patients=data;

      })
    }
    
}



