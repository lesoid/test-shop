import { User , Product } from "@prisma/client";

export interface ICard  {
    id: number
    amount:  number| null
    show? :boolean| null
    user: User
    product : Product
   
   }