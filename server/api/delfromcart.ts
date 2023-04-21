import { getMappedError } from '~~/server/app/errors/errorMapper';
import { sendError, H3Event,readBody } from "h3"
// import { getCardById } from '~/server/database/repositories/getCardById';
import { deliteCart} from '~/server/database/repositories/putCard';
const standardAuthError = getMappedError('Authentication', 'Invalid Credentials')


export default eventHandler(async (event: H3Event) =>  {
    const data = await readBody(event)
   
    if (data.id_to_cart === null || data.id_to_cart === null) {
      console.log("!!! api/delfromcart id_to_cart === null")
      return sendError(event, createError({ statusCode: 401, data: standardAuthError }))
    }
console.log("!!! api/delfromcart data.id_to_cart"+data.id_to_cart)
    const card = await deliteCart(data.id_to_cart)
    //console.log("!!! api/card data.id"+JSON.stringify(card))
    return card
  })