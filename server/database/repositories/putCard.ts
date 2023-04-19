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
    