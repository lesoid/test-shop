import { User , Product } from "@prisma/client";

export interface ICard  {
    id: number
    amount:  number| null
    show? :boolean| null
    product? : Product| null
     user: User
     userId:number
   }