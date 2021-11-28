import { Injectable } from '@angular/core';
import { ScheduleDTO } from 'src/app/DTO/schedule.dto';
import { StudentDTO} from 'src/app/DTO/student.dto';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  placeHolderSchedules: {[id: string]: ScheduleDTO} = {};

  constructor() {
    this.placeHolderSchedules.Jorge = {
      classes: [
        {
          id: 0,
          startTime: 11,
          endTime: 13,
          day: 'Monday',
          name: 'DIPR',
          room: 'M101',
          teacher: 'Eugenio'
        },
        {
          id: 1,
          startTime: 17,
          endTime: 19,
          day: 'Monday',
          name: 'PRES',
          room: 'M205',
          teacher: 'Mar'
        },
        {
          id: 2,
          startTime: 13,
          endTime: 15,
          day: 'Wednesday',
          name: 'CIB',
          room: 'M205',
          teacher: 'Eduardo'
        }
      ]
    };
  }

  public getSchedule(student: StudentDTO): ScheduleDTO{

    return this.placeHolderSchedules[student.name];
  }
}
