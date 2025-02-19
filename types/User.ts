import { Transaction } from "./Transaction"

export enum UserRole {
  BASIC,
  ADMIN
}

export interface User {
  id: string
  firstName: string
  lastName: string
  role: UserRole
  userLocalCompostStandId: number
  accountBalance: number
  createdAt: string
  transactions: Transaction[]
  phoneNumber: string
}

export type FetchUserArgs = Pick<User, 'firstName' | 'lastName' | 'phoneNumber'>
