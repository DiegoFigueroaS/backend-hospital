export interface User {
  id: string
  firebase_uid: string
  user_type_id: string
  specialty_id?: string | null
  schedule_id?: string | null
  full_name: string
  phone: string
  createdAt?: Date
  updatedAt?: Date
}
