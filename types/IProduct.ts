import { Category } from "@prisma/client"

export interface IProduct  {
    id: number
    title: string
    amount:number
    price:  string
    codeproduct: number
    url?:string
    image?: string
    description?: string
    // category :     String
    category: Category
    rate:number
   }