import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingComponent } from './components/landing/landing.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { OnlineRegistrationComponent } from './components/online-registration/online-registration.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'schedules', component: SchedulesComponent },
    { path: 'online-registration', component: OnlineRegistrationComponent }
];

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule.forRoot(routes, { enableTracing: true })
  ],
  exports: [
    RouterModule
  ]
})
export class ContentRoutingModule { }
