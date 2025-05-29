import { createSchedule } from './schedule/createSchedule.controller'
import { getAllSchedules } from './schedule/getAllSchedules.controller'
import { createSpecialty } from './specialty/createSpecialty.controller'
import { getAllSpecialties } from './specialty/getAllSpecialties.controller'
import { createUserType } from './userType/createUserType.controller'
import { getAllUserTypes } from './userType/getAllUserTypes.controller'
import { createHospital } from './hospital/createHospital.controller'
import { getAllHospitals } from './hospital/getAllHospitals.controller'
import { createClinic } from './clinic/createClinic.controller'
import { getAllClinics } from './clinic/getAllClinics.controller'

export {
  createSchedule as createScheduleController,
  getAllSchedules as getAllSchedulesController
}

export {
  createSpecialty as createSpecialtyController,
  getAllSpecialties as getAllSpecialtiesController
}

export {
  createUserType as createUserTypeController,
  getAllUserTypes as getAllUserTypesController
}

export {
  createHospital as createHospitalController,
  getAllHospitals as getAllHospitalsController
}

export {
  createClinic as createClinicController,
  getAllClinics as getAllClinicsController
}
