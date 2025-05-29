# 🏥 Hospital Management API - REST

Esta API permite gestionar el ecosistema completo de un hospital, incluyendo usuarios, horarios, clínicas, especialidades, tipos de usuario, hospitales, citas médicas, diagnósticos y estados de citas.

---

## 🌐 Base URL

```
http://localhost:2426
```

---

## 📋 Endpoints

### 🗓️ Schedule

#### ✅ Crear horario
- `POST /schedules`
```json
{
  "startTime": "08:00",
  "endTime": "12:00"
}
```

#### 📥 Obtener todos los horarios
- `GET /schedules`

---

### 🩺 Specialty

#### ✅ Crear especialidad
- `POST /specialties`
```json
{
  "specialty_name": "Cardiology"
}
```

#### 📥 Obtener todas las especialidades
- `GET /specialties`

---

### 👤 User Type

#### ✅ Crear tipo de usuario
- `POST /user-types`
```json
{
  "type_name": "Doctor"
}
```

#### 📥 Obtener todos los tipos de usuario
- `GET /user-types`

---

### 🏨 Hospital

#### ✅ Crear hospital
- `POST /hospitals`
```json
{
  "name": "Santa Cruz General Hospital"
}
```

#### 📥 Obtener todos los hospitales
- `GET /hospitals`

---

### 🏥 Clinic

#### ✅ Crear clínica
- `POST /clinics`
```json
{
  "clinic_code": "A101",
  "hospital_id": "uuid-of-hospital"
}
```

#### 📥 Obtener todas las clínicas
- `GET /clinics`

---

### 👨‍⚕️ Users

#### ✅ Crear usuario
- `POST /users`
```json
{
  "firebase_uid": "auth_uid_123",
  "user_type_id": "uuid-user-type",
  "specialty_id": "uuid-specialty",
  "schedule_id": "uuid-schedule",
  "full_name": "Dr. John Doe",
  "phone": "+123456789",
  "userHospitals": [{ "id": "uuid-hospital" }],
  "userClinics": [{ "id": "uuid-clinic" }]
}
```

#### 📥 Obtener todos los usuarios
- `GET /users`

#### 🔍 Obtener usuario por ID
- `GET /users/:id`

#### ✏️ Actualizar usuario
- `PUT /users/:id`
```json
{
  "full_name": "Dr. Jane Doe"
}
```

#### 🗑️ Eliminar usuario
- `DELETE /users/:id`

---

### 📈 Medical Appointment Status

#### ✅ Crear estado de cita médica
- `POST /appointment-statuses`
```json
{
  "status_name": "Completed"
}
```

#### 📥 Obtener todos los estados
- `GET /appointment-statuses`

---

### 🧾 Medical Appointments

#### ✅ Crear cita médica
- `POST /medical-appointments`
```json
{
  "hospital_id": "uuid-hospital",
  "patient_id": "uuid-patient",
  "doctor_id": "uuid-doctor",
  "appointment_status_id": "uuid-status",
  "appointment_date": "2025-06-10",
  "appointment_time": "10:30"
}
```

#### 📥 Obtener todas las citas médicas
- `GET /medical-appointments`

#### 🔍 Obtener cita médica por ID
- `GET /medical-appointments/:id`

#### ✏️ Actualizar cita médica (y registrar diagnóstico)
- `PUT /medical-appointments/:id`
```json
{
  "appointment_status_id": "uuid-new-status",
  "diagnosis_description": "Patient shows signs of hypertension."
}
```

#### 🗑️ Eliminar cita médica
- `DELETE /medical-appointments/:id`

---

## ⚙️ Estructura

- Basado en **Clean Architecture**
- Implementado con **TypeScript**, **Express**, **Prisma**, y **PostgreSQL**
- Autenticación integrada con `firebase_uid`
- Relaciones many-to-many para clínicas y hospitales con manejo automático

---

## 🧪 Testing

Puedes utilizar herramientas como **Postman** o **Thunder Client** para probar estos endpoints.

---


