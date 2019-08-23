import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { LandingComponent } from './components/landing/landing.component';
import { SchedulesComponent } from './components/schedules/schedules.component';

@NgModule({
    declarations: [
        LandingComponent,
        SchedulesComponent
    ],
    imports: [
        BrowserModule
    ],
    exports: [],
    providers: []
})

export class ContentModule { }
