import { getMappedError } from '~~/server/app/errors/errorMapper';
import { sendError, H3Event,readBody } from "h3"
// import { getCardById } from '~/server/database/repositories/getCardById';
import { addCardTo } from '~/server/database/repositories/putCard';
const standardAuthError = getMappedError('Authentication', 'Invalid Credentials')


export default eventHandler(async (event: H3Event) =>  {
    const data = await readBody(event)
   
    if (data.id_prod === null || data.id_user === null) {
      console.log("!!! api/card data.id === null")
      return sendError(event, createError({ statusCode: 401, data: standardAuthError }))
    }
console.log("!!! api/card data.id_prod"+data.id_prod)
console.log("!!! api/card data.id_user"+data.id_user)
    const card = await addCardTo(data.id_prod,data.id_user)
    //console.log("!!! api/card data.id"+JSON.stringify(card))
    return card
  })