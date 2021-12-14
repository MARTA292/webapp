import { Component, OnInit } from '@angular/core';
import { EventSettingsModel} from '@syncfusion/ej2-angular-schedule';
import { CalendarDTO } from '../DTO/calendar.dto';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.css']

})

export class CalendarPage implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  eventData(): EventSettingsModel {
    return {
      dataSource: [{
        id: 1,
        subject: 'Board Meeting',
        startTime: new Date(2018, 10, 30, 9, 0),
        endTime: new Date(2018, 10, 30, 11, 0)
      },
      {
        id: 2,
        subject: 'Training session on JSP',
        startTime: new Date(2018, 10, 30, 15, 0),
        endTime: new Date(2018, 10, 30, 17, 0)
      },
      {
        id: 3,
        subject: 'Sprint Planning with Team members',
        startTime: new Date(2018, 10, 30, 9, 30),
        endTime: new Date(2018, 10, 30, 11, 0)
      }]
    };
  }
}
