// ---- Person (from API) ----
export type Person = {
  id: number
  fullName: string
  department: string
}

// ---- Gender Option ----
export type GenderOption = {
  value: string
  label: string
}

// ---- Submit Payload Item ----
export type SubmitItem = {
  person_id: number
  name: string
  age: number
  email: string
  gender: string
}

// ---- API Response Shape ----
export type ApiResponse<T = unknown> = {
  status: "success" | "error"
  msg: string
  data?: T
}
