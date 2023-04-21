import { number } from "zod";
import prisma from "~/server/database/client";



export async function putCardTo(id: number,count:number) {

    return await prisma.card.update(
     {  
        where: { id: id },
            data: {
                amount:count
            }

        }

    ) }
  
    export async function addCardTo(id_prod: number, id_user:number) {
        const prod = await prisma.product.findUnique({
            where:{
                codeproduct:id_prod 
            },
            select: {
                id:true
              },
          })

        return await prisma.card.create({  
            data: {
                prodId: prod?.id,
                userId: id_user,
                amount: 1,
                show: true,
              },
               
    
            })
         }


         export async function deliteCart(id_to_cart: number) {
            return  await prisma.card.delete({
            where: {
              id: id_to_cart,
            },
          })
        }

        // const user = await prisma.user.create({
        //     data: {
        //       email: 'elsa@prisma.io',
        //       name: 'Elsa Prisma',
        //     },
        //   })

        //     where: { email: data.email },
        //     data: {
        //       stripeCustomerId: data.stripeCustomerId,
        //     }
        //   })


    // const cards = prisma.card.findMany({
    //   where: {
    //     userId:id
        
    //         },
  
    //  include:{
    //     product:true
    //   }
    //  } )
     //console.log("!!! api/ getCardById "+JSON.stringify(cards))
    // return cards
    