import { number } from "zod";
import prisma from "~/server/database/client";
import { Title } from "~~/.nuxt/components";

import { ICard } from "~~/types/ICard";
import { IProduct } from "~~/types/IProduct";
import { IUser } from "~~/types/IUser";




export async function getCardById(id: number) {
  const cards = prisma.card.findMany({
    where: {
      userId:id
      
          },

   include:{
      product:true
    }
   } )
   //console.log("!!! api/ getCardById "+JSON.stringify(cards))
   return cards
}



// const getUser = await prisma.user.findUnique({
//   where: {
//     id: 19,
//   },
//   include: {
//     posts: true,
//   },
// })

// {
//   id: 19,
//   name: null,
//   email: 'emma@prisma.io',
//   profileViews: 0,
//   role: 'USER',
//   coinflips: [],
//   posts: [
//     {
//       id: 20,
//       title: 'My first post',
//       published: true,
//       authorId: 19,
//       comments: null,
//       views: 0,
//       likes: 0
//     },
//     {
//       id: 21,
//       title: 'How to make cookies',
//       published: true,
//       authorId: 19,
//       comments: null,
//       views: 0,
//       likes: 0
//     }
//   ]
// }

// export async function getCardByUser1(username: string): Promise<ICard[] | null> {
//   const cards = prisma.user.findUnique({
//     where: {
//       username: username
//     },
//     include: {
//       card: {
//        include:{
        
//         product:true
          
//  }
//  }}
//   })//возвращаем таблицу user подключеную к таблице Session
//   console.log("!!! getCardByUser "+JSON.stringify(cards.card))
//   console.log("!!! getCardByUser "+JSON.stringify(cards))
//   //return card[0] as unknown as IProduct
//   return cards.card()
//}

  // async function getUserByAuthToken(authToken: string): Promise<User | null> {
  //   return prisma.session.findUnique({
  //     where: {
  //       authToken: authToken,
  //     }
  //   }).user()//возвращаем таблицу user подключеную к таблице Session
  // }
