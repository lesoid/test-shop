import { sanitizeUserForFrontend } from '~~/server/app/services/userService';
import { H3Event } from "h3"
import { v4 as uuidv4 } from 'uuid';
import { createSession, getSessionByAuthToken } from "~~/server/database/repositories/sessionRepository"
import { User } from '@prisma/client';

//создается сессия (юзер, событие)в параметрах
export async function makeSession(user: User, event: H3Event): Promise<User|undefined> {
    const authToken = uuidv4().replaceAll('-', '')//создаем ид без дефисов
    const session = await createSession({ authToken, userId: user.id })
    const userId = session.userId

    if (userId) {//идентификатор пользователя есть установим файл куки
        //path: '/' чтобы файл был доступен везде,  httpOnly: true чтобы небыло манипуляций
        setCookie(event, 'auth_token', authToken, { path: '/', httpOnly: true })
        return getUserBySessionToken(authToken)
    }

    throw Error('Error Creating Session')
}
//функция проверка сеанса по токену
export async function getUserBySessionToken(authToken: string): Promise<User|undefined> {
    const session = await getSessionByAuthToken(authToken)

    return sanitizeUserForFrontend(session.user)


}
