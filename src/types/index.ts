export enum Role {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export type LoginDto = {
  email: string
  password: string
}
