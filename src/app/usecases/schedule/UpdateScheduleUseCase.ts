import { type Schedule } from '../../../domain/entities/schedule'
import { type ScheduleRepository } from '../../../domain/repositories/ScheduleRepository'
import { ScheduleGetterById } from '../../../domain/services/schedule/ScheduleGetterById'

export class UpdateScheduleUseCase {
  private readonly _scheduleRepository: ScheduleRepository
  private readonly _getScheduleById: ScheduleGetterById

  constructor (scheduleRepository: ScheduleRepository) {
    this._scheduleRepository = scheduleRepository
    this._getScheduleById = new ScheduleGetterById(scheduleRepository)
  }

  async run (input: Schedule): Promise<Schedule> {
    const schedule = await this._getScheduleById.run(input.id)

    const dataToUpdate: Schedule = {
      id: input.id,
      startTime: input.startTime ?? schedule.startTime,
      endTime: input.endTime ?? schedule.endTime
    }

    return await this._scheduleRepository.update(dataToUpdate)
  }
}
