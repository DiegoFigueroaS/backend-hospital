import { type Schedule } from '../../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../../domain/repositories/ScheduleRepository'

export class ScheduleGetterById {
  private readonly _scheduleRepository: ScheduleRepository

  constructor (scheduleRepository: ScheduleRepository) {
    this._scheduleRepository = scheduleRepository
  }

  async run (id: string): Promise<Schedule> {
    const schedule = await this._scheduleRepository.getById(id)

    if (schedule == null) throw Error('The schedule does not exist')

    return schedule
  }
}
