import { PrismaClient } from '@prisma/client'

import { type MedicalAppointment } from '../../../domain/entities/medicalAppointment'
import { type MedicalAppointmentRepository } from '../../../domain/repositories/MedicalAppointmentRepository'

const prisma = new PrismaClient()

export class PostgresMedicalAppointmentRepository implements MedicalAppointmentRepository {
  async getAll (): Promise<MedicalAppointment[]> {
    return prisma.medicalAppointment.findMany()
  }

  async save (appointment: MedicalAppointment): Promise<MedicalAppointment> {
    return prisma.medicalAppointment.create({
      data: {
        id: appointment.id,
        hospital_id: appointment.hospital_id,
        patient_id: appointment.patient_id,
        doctor_id: appointment.doctor_id,
        diagnosis_id: appointment.diagnosis_id,
        appointment_status_id: appointment.appointment_status_id,
        appointment_date: appointment.appointment_date,
        appointment_time: appointment.appointment_time
      }
    })
  }

  async getById (id: string): Promise<MedicalAppointment | null> {
    return prisma.medicalAppointment.findUnique({
      where: { id }
    })
  }

  async update (appointment: MedicalAppointment): Promise<MedicalAppointment> {
    return prisma.medicalAppointment.update({
      where: { id: appointment.id },
      data: {
        hospital_id: appointment.hospital_id,
        patient_id: appointment.patient_id,
        doctor_id: appointment.doctor_id,
        diagnosis_id: appointment.diagnosis_id,
        appointment_status_id: appointment.appointment_status_id,
        appointment_date: appointment.appointment_date,
        appointment_time: appointment.appointment_time
      }
    })
  }

  async delete (id: string): Promise<void> {
    prisma.medicalAppointment.delete({
      where: { id }
    })
  }
}
