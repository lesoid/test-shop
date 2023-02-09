// import card from '../../data/card.json'
// import {IncomingMessage, ServerResponse} from 'http'

// export default function(req: IncomingMessage, res: ServerResponse){
//     console.log('card = '+card)
//     console.log('req = '+req!)
//     return {
//       res
//     }
// }
import { getMappedError } from '~~/server/app/errors/errorMapper';
import { sendError, H3Event,readBody } from "h3"
import { getCardByUser } from '~/server/database/repositories/getCardByUser';

const standardAuthError = getMappedError('Authentication', 'Invalid Credentials')

export default eventHandler(async (event: H3Event) =>  {
  const data = await readBody(event)
  if (data.username === null) {
    console.log("!!! api/card data.username === null")
    return sendError(event, createError({ statusCode: 401, data: standardAuthError }))
  }
console.log("!!! api/card data.username"+data.username)
  const card = await getCardByUser(data.username)
  return card
})