
export interface IUser {
    id?: number
    loginType?: string 
    password?: string | null
    email?: string | null 
    name?: string | null
    username: string | null
    avatarUrl?: string | null
    stripeCustomerId?: string | null
  }
  