import { ClassDTO } from './class.dto';
import { ScheduleSchemaDTO } from './schedule.schema.dto';

export class ScheduleDTO {
    constructor(public subjects: ClassDTO[], public scheduleSchema: ScheduleSchemaDTO) {

    }
}
