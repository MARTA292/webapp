import { Component, OnInit } from '@angular/core';
// import { title } from 'process';
import { ClassDTO } from '../DTO/class.dto';
import { ScheduleDTO } from '../DTO/schedule.dto';
import { ScheduleService } from '../service/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  tiles: Tile[] = [
    {text: 'Hora', cols: 2, rows: 1, color: 'lightblue', text2: ''},
    {text: 'Lunes', cols: 2, rows: 1, color: '#DDBDF1', text2: ''},
    {text: 'Martes', cols: 2, rows: 1, color: 'lightpink', text2: ''},
    {text: 'Miércoles', cols: 2, rows: 1, color: 'lightyellow', text2: ''},
    {text: 'Jueves', cols: 2, rows: 1, color: 'lightgreen', text2: ''},
    {text: 'Viernes', cols: 2, rows: 1, color: 'orange', text2: ''}
  ];

  constructor(private scheduleService: ScheduleService) {
  }

  public chooseStudent( event: any ) {
    console.log(event); // Normalmente el valor se encuentra en ( event.detail.value )
    //Vacío la lista
    this.tiles.splice(6, this.tiles.length - 6);
    this.scheduleService.getSchedule({id: 0, name: event.detail.value}).subscribe((schedule: ScheduleDTO)=>{
      console.log(schedule);
      this.calculateClass('9', schedule.subjects);
      this.calculateClass('11', schedule.subjects);
      this.calculateClass('13', schedule.subjects);
      this.calculateClass('15', schedule.subjects);
      this.calculateClass('17', schedule.subjects);
      this.calculateClass('19', schedule.subjects);
    });
}

  ngOnInit(): void {
    //Hacer un input para diferenciar de Jorge y de Marta
    this.scheduleService.getSchedule({id: 0, name: ''}).subscribe((schedule: ScheduleDTO)=>{
      this.calculateClass('9', schedule.subjects);
      this.calculateClass('11', schedule.subjects);
      this.calculateClass('13', schedule.subjects);
      this.calculateClass('15', schedule.subjects);
      this.calculateClass('17', schedule.subjects);
      this.calculateClass('19', schedule.subjects);
    });
  }

  private calculateClass(hour: string, classes: ClassDTO[])
  {
    this.tiles.push({text: hour + ':00', cols: 2, rows: 1, color: '#DDBDF1', text2: ''});
    const classesAtHour = classes.filter(cls => cls.startTime === hour);
    this.tiles.push(this.calculateTile('Monday', classesAtHour));
    this.tiles.push(this.calculateTile('Tuesday', classesAtHour));
    this.tiles.push(this.calculateTile('Wednesday', classesAtHour));
    this.tiles.push(this.calculateTile('Thursday', classesAtHour));
    this.tiles.push(this.calculateTile('Friday', classesAtHour));
  }

  private calculateTile(day: string, classes: ClassDTO[]): Tile
  {
    const cls = classes.find(c => c.day === day);
    if (cls != null){
      return {text: cls.name, cols: 2, rows: 1, color: '', text2: cls.teacher};
    }else{
      return {text: '', cols: 2, rows: 1, color: '', text2: ''};
    }
  }

}

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
  text2: string;
}
