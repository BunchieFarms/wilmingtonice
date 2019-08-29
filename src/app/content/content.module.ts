import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { LandingComponent } from './components/landing/landing.component';
import { SchedulesComponent } from './components/schedules/schedules.component';
import { OnlineRegistrationComponent } from './components/online-registration/online-registration.component';

@NgModule({
    declarations: [
        LandingComponent,
        SchedulesComponent,
        OnlineRegistrationComponent
    ],
    imports: [
        BrowserModule,
        RouterModule,
        FormsModule
    ],
    exports: [],
    providers: []
})

export class ContentModule { }
