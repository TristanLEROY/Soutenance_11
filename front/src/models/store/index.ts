import { SerializedError } from "@reduxjs/toolkit"
import { Nullable } from "@/models"

export interface IUser {
    email: string
    firstName: string
    lastName: string
    userName: string
    createdAt: string
    updatedAt: string
    id: string
}

export interface IUserState {
  id: Nullable<IUser>
  user: Nullable<IUser>
  error: Nullable<SerializedError>
}

export interface ILoginResponse {
  token: string
}

export interface IAPIResponse<T> {
  body: T
  status: number
  message: string
}