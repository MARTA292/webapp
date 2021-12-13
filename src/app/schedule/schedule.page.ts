import { Component, OnInit } from '@angular/core';
import { ClassDTO } from '../DTO/class.dto';
import { ScheduleDTO } from '../DTO/schedule.dto';
import { ScheduleSchemaDTO } from '../DTO/schedule.schema.dto';
import { ScheduleService } from '../service/schedule/schedule.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  columnSize = 2;
  tiles: Tile[] = [
    {text: 'Hora', cols: this.columnSize, rows: 1, color: 'lightblue', text2: ''},
  ];

  constructor(private scheduleService: ScheduleService) {
  }

  public chooseStudent( event: any ) {
    console.log(event); // Normalmente el valor se encuentra en ( event.detail.value )
    //Vacío la lista
    this.tiles.splice(1, this.tiles.length - 1);
    this.scheduleService.getSchedule({id: 0, name: event.detail.value}).subscribe((schedule: ScheduleDTO)=>{
      this.columnSize = 12/schedule.scheduleSchema.days.length;
      this.showDays(schedule);
      this.showClass(schedule);
    });
}

  ngOnInit(): void {
    //Hacer un input para diferenciar de Jorge y de Marta
    this.scheduleService.getSchedule({id: 0, name: ''}).subscribe((schedule: ScheduleDTO)=>{this.showClass(schedule);});
  }

  private showDays(schedule: ScheduleDTO)
  {
    schedule.scheduleSchema.days.forEach(day => {
      this.tiles.push({text: day, cols: this.columnSize, rows: 1, color: 'lightblue', text2: ''});
    });
  }
  private showClass(schedule: ScheduleDTO)
  {
    schedule.scheduleSchema.hours.forEach(hour => this.calculateClass(hour,  schedule.scheduleSchema.days ,schedule.subjects));
  }
  private calculateClass(hour: string, days: string[], classes: ClassDTO[])
  {
    this.tiles.push({text: hour + ':00', cols: this.columnSize, rows: 1, color: '#DDBDF1', text2: ''});
    const classesAtHour = classes.filter(cls => cls.startTime === hour);
    console.log(days);
    days.forEach(day => this.tiles.push(this.calculateTile(day, classesAtHour)));
  }

  private calculateTile(day: string, classes: ClassDTO[]): Tile
  {
    const cls = classes.find(c => c.day === day);
    if (cls != null){
      return {text: cls.name, cols: this.columnSize, rows: 1, color: '', text2: cls.teacher};
    }else{
      return {text: '', cols: this.columnSize, rows: 1, color: '', text2: ''};
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
