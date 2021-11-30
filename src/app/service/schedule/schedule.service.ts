import { Injectable } from '@angular/core';
import { ScheduleDTO } from 'src/app/DTO/schedule.dto';
import { StudentDTO} from 'src/app/DTO/student.dto';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  placeHolderSchedules: {[id: string]: ScheduleDTO} = {};

  constructor(private http: HttpClient) {
    // this.placeHolderSchedules.vacio = {
    //   classes:[]
    // };
    // this.placeHolderSchedules.Jorge = {
    //   classes: [
    //     {
    //       id: 'DIPR_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Monday',
    //       name: 'DIPR',
    //       room: 'M101',
    //       teacher: 'Eugenio'
    //     },
    //     {
    //       id: 'PWIC_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Monday',
    //       name: 'PWIC',
    //       room: 'M101',
    //       teacher: 'Naira'
    //     },
    //     {
    //       id: 'PRES_B',
    //       startTime: 17,
    //       endTime: 19,
    //       day: 'Monday',
    //       name: 'PRES',
    //       room: 'M205',
    //       teacher: 'Mar'
    //     },
    //     {
    //       id: 'PROY_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Tuesday',
    //       name: 'PROY',
    //       room: 'M101',
    //       teacher: 'Teresa'
    //     },
    //     {
    //       id: 'INAR_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Tuesday',
    //       name: 'INAR',
    //       room: 'M101',
    //       teacher: 'Pedro'
    //     },
    //     {
    //       id: 'INAR_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Wednesday',
    //       name: 'INAR',
    //       room: 'M101',
    //       teacher: 'Pedro'
    //     },
    //     {
    //       id: 'INIS_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Wednesday',
    //       name: 'INIS',
    //       room: 'M101',
    //       teacher: 'Eduardo'
    //     },
    //     {
    //       id: 'PRES_B',
    //       startTime: 17,
    //       endTime: 19,
    //       day: 'Wednesday',
    //       name: 'PRES',
    //       room: 'M205',
    //       teacher: 'Mar'
    //     },
    //     {
    //       id: 'ISIN_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Thurday',
    //       name: 'ISIN',
    //       room: 'M101',
    //       teacher: 'Eduardo'
    //     },
    //     {
    //       id: 'PSDI_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Thurday',
    //       name: 'PSDI',
    //       room: 'M101',
    //       teacher: 'Marcos'
    //     },
    //     {
    //       id: 'PWIC_A',
    //       startTime: 9,
    //       endTime: 11,
    //       day: 'Friday',
    //       name: 'PWIC',
    //       room: 'M101',
    //       teacher: 'Naira'
    //     },
    //     {
    //       id: 'PSDI_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Friday',
    //       name: 'PSDI',
    //       room: 'M101',
    //       teacher: 'Marcos'
    //     }
    //   ]
    // };

    // this.placeHolderSchedules.Marta = {
    //   classes: [
    //     {
    //       id: 'DIPR_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Monday',
    //       name: 'DIPR',
    //       room: 'M101',
    //       teacher: 'Eugenio'
    //     },
    //     {
    //       id: 'PWIC_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Monday',
    //       name: 'PWIC',
    //       room: 'M101',
    //       teacher: 'Naira'
    //     },
    //     {
    //       id: 'PROY_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Tuesday',
    //       name: 'PROY',
    //       room: 'M101',
    //       teacher: 'Teresa'
    //     },
    //     {
    //       id: 'INAR_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Tuesday',
    //       name: 'INAR',
    //       room: 'M101',
    //       teacher: 'Pedro'
    //     },
    //     {
    //       id: 'INAR_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Wednesday',
    //       name: 'INAR',
    //       room: 'M101',
    //       teacher: 'Pedro'
    //     },
    //     {
    //       id: 'INIS_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Wednesday',
    //       name: 'INIS',
    //       room: 'M101',
    //       teacher: 'Eduardo'
    //     },
    //     {
    //       id: 'ISIN_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Thurday',
    //       name: 'ISIN',
    //       room: 'M101',
    //       teacher: 'Eduardo'
    //     },
    //     {
    //       id: 'PSDI_A',
    //       startTime: 13,
    //       endTime: 15,
    //       day: 'Thurday',
    //       name: 'PSDI',
    //       room: 'M101',
    //       teacher: 'Marcos'
    //     },
    //     {
    //       id: 'PWIC_A',
    //       startTime: 9,
    //       endTime: 11,
    //       day: 'Friday',
    //       name: 'PWIC',
    //       room: 'M101',
    //       teacher: 'Naira'
    //     },
    //     {
    //       id: 'PSDI_A',
    //       startTime: 11,
    //       endTime: 13,
    //       day: 'Friday',
    //       name: 'PSDI',
    //       room: 'M101',
    //       teacher: 'Marcos'
    //     }
    //   ]
    // };
  }


  public getSchedule(student: StudentDTO) {
    return this.http.get<ScheduleDTO>(environment.apiUrl + 'schedule', {
      params: {
        id: student.id,
        name: student.name
      }
    }
    );
  }
}
