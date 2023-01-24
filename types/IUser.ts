
export interface IUser {
    id?: number
    loginType?: string
    password?: string
    email?: string
    name?: string
    username: string
    avatarUrl?: string
    stripeCustomerId?: string | null
  }
  