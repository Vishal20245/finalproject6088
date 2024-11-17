import { Component } from '@angular/core';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrl: './admindash.component.css'
})
export class AdmindashComponent{

  Patients:Patient[]=[];
   
  constructor(private patientService:PatientService){}
  ngOnInit():void{
    this.getPatients();
  }
    
    getPatients(){//methad hai
      this.patientService.getPatientList().subscribe(data=>{
      this.Patients=data;

      })
    }

    delete(id:number){
      this.patientService.delete(id).subscribe(data=>{
        console.log(data);
        this.getPatients(); 
      })
    }
    
}



