import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

const routes: Routes = [
    { path: '', component: LandingComponent },
    { path: 'schedules', component: SchedulesComponent }
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
