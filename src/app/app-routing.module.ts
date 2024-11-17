import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmindashComponent } from './admindash/admindash.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { CreateAppointmentComponent } from './create-appointment/create-appointment.component';
import { HomePageComponent } from './home-page/home-page.component';
import { DocdashComponent } from './docdash/docdash.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { MedicinelistComponent } from './medicinelist/medicinelist.component';
import { CreateMedicineComponent } from './create-medicine/create-medicine.component';


const routes: Routes = [

  {path:'admin',component:AdmindashComponent},
  {
    path:'appointmentlist',component:AppointmentComponent
  },
  {
    path:'create-appointment',component:CreateAppointmentComponent
  },
  {
    path:'home-page',component:HomePageComponent
  },
  {
    path:'',redirectTo:'home-page',pathMatch:'full'
  },
  {
    path:'docdash',component:DocdashComponent
  },
  {
    path:'create-patient',component:CreatePatientComponent
  },
  {
    path:'view-medicine',component:MedicinelistComponent
  },
  {
    path:'create-medicine', component:CreateMedicineComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 