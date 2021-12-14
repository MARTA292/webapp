import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BrowserModule } from '@angular/platform-browser';
import {ScheduleModule, AgendaService, DayService, WeekService, WorkWeekService, MonthService } from '@syncfusion/ej2-angular-schedule';

import { CalendarPageRoutingModule } from './calendar-routing.module';
import { CalendarPage } from './calendar.page';


@NgModule({
  imports: [
    BrowserModule,
    ScheduleModule,
    CommonModule,
    FormsModule,
    IonicModule,
    CalendarPageRoutingModule
  ],
  providers: [AgendaService, DayService, WeekService, WorkWeekService, MonthService],
  declarations: [CalendarPage]
})
export class CalendarPageModule {}
