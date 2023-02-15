import { Category } from "@prisma/client"

export interface IProduct  {
    id: number
    title: string
    amount:number
    price:  number
    codeproduct: number
    url?:string
    image?: string
    description?: string
     rate:number
    // category :     String
    category?: Category
   
   }