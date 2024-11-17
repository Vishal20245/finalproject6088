import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrl: './docdash.component.css'
})
export class DocdashComponent {

  constructor(private patientService:PatientService){}
  Patients:Patient[]=[];
  ngOnInit():void{
    this.getpatients();
  }
  getpatients(){
    this.patientService.getPatientList().subscribe(data=>{
      this.Patients=data;
    })
  }
}
