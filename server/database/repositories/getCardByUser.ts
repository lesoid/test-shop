import prisma from "~/server/database/client";
 //import { ICard } from "~~/types/ICard";

export async function getCardByUser( username: string): Promise<ICard[] | null> {
    return prisma.user.findUnique({
      where: {
        username:username
      }
    }).card()//возвращаем таблицу user подключеную к таблице Session
  }
  
  // async function getUserByAuthToken(authToken: string): Promise<User | null> {
  //   return prisma.session.findUnique({
  //     where: {
  //       authToken: authToken,
  //     }
  //   }).user()//возвращаем таблицу user подключеную к таблице Session
  // }
  