import { IUser } from '~/types/IUser';
import prisma from "~/server/database/client";
import { ISession } from '~~/types/ISession';
import { User } from '@prisma/client';

export async function createSession(sessionData: ISession): Promise<ISession> {
  if (!sessionData.authToken) {
    throw Error('missing auth token for session')
  }
  if (sessionData.userId){
  return await prisma.session.create({
    data: {
      userId: sessionData.userId ,
      authToken: sessionData.authToken
    },

  })}else{
    throw Error('missing userId for session')
  }
}

export async function getSessionByAuthToken(authToken: string): Promise<ISession> {
  const user: User = await getUserByAuthToken(authToken) as unknown as User

  return { authToken, user }
}
//возвращаем пользователя по токену
async function getUserByAuthToken(authToken: string): Promise<User | null> {
  return prisma.session.findUnique({
    where: {
      authToken: authToken,
    }
  }).user()//возвращаем таблицу user подключеную к таблице Session
}
