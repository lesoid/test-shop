import { User } from "@prisma/client";
import prisma from "~/server/database/client";
import { IUser } from '~/types/IUser';
// import { ISubscription } from "~/types/ISubscription";
//найти уникального пользователя по email  если не нашел вернет 0
export async function getUserByEmail(emailOrEmail: string): Promise<User|null> {
  return await prisma.user.findFirst({
    where: {
      OR:
        [
          { email: emailOrEmail },
          { username: emailOrEmail },
        ]
    }
  })
}
//найти уникального пользователя по username если не нашел вернет 0
export async function getUserByUserName(username: string) {
  return await prisma.user.findUnique({
    where: {
      username: username,
    },
    select: {
      id: true,
      username: true,
    },
  })
}
//Создаем пользователя когда пройдена проверка что такого пользователя не существует
export async function createUser(data: IUser) {
  const user = await prisma.user.create({
    data: {
      username: data.username,
      name: data.name,
      email: data.email,
      loginType: data.loginType,
      password: data.password,
    },
  })

  return user
}
//найти уникального пользователя по id  если не нашел вернет 0
export async function getUserById(id: number) {
  return await prisma.user.findUnique({
    where: {
      id: id,
    },
    select: {
      id: true,
      username: true,
      email: true,
      stripeCustomerId: true,
    },
  })
}

export async function getUserByStripeCustomerId(stripeCustomerId: string) {
  return await prisma.user.findFirst({
    where: {
      stripeCustomerId: stripeCustomerId,
    },
    select: {
      id: true,
      username: true,
      email: true,
      stripeCustomerId: true,
    },
  })
}

// export async function getSubscriptionById(stripeId: string) {
//   return await prisma.subscription.findFirst({
//     where: {
//       stripeId: stripeId,
//     }
//   })
// }

// export async function updateStripeCustomerId(data: IUser) {
//   return await prisma.user.update({
//     where: { email: data.email },
//     data: {
//       stripeCustomerId: data.stripeCustomerId,
//     }
//   })
// }

// export async function createOrUpdateSubscription(data: ISubscription) {
//   return await prisma.subscription.upsert({
//     where: {
//       stripeId: data.stripeId
//     },
//     create: {
//       userId: data.userId,
//       stripeId: data.stripeId,
//       stripeStatus: data.stripeStatus,
//       stripePriceId: data.stripePriceId,
//       quantity: data.quantity,
//       trialEndsAt: data.trialEndsAt,
//       endsAt: data.endsAt,
//       lastEventDate: data.lastEventDate,
//       startDate: data.startDate
//     },
//     update: {
//       stripeStatus: data.stripeStatus,
//       stripePriceId: data.stripePriceId,
//       quantity: data.quantity,
//       trialEndsAt: data.trialEndsAt,
//       endsAt: data.endsAt,
//       lastEventDate: data.lastEventDate,
//       startDate: data.startDate
//     }
//   })
// }
