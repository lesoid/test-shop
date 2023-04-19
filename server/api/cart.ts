
import card from '../../data/card.json'
import { getMappedError } from '~~/server/app/errors/errorMapper';
import { sendError, H3Event,readBody } from "h3"
import { putCardTo } from '~/server/database/repositories/putCard';

const standardAuthError = getMappedError('Authentication', 'Invalid Credentials')
//  import fs from 'fs'
// import { createReadStream, createWriteStream } from 'node:fs';

export default  defineEventHandler(async(event) => { 
    if (event.node.req.method === 'GET') { 
      // вернуть список блогов; 
    //  fs.createReadStream('../../data/card.json')
      console.log('api card = ' +JSON.stringify (card))
      return card
    } 
    if (event.node.req.method === 'POST') { 
     
      console.log('New request: ' + event.node.req.url)
      const body = await readBody(event)
    //  createWriteStream('../../data/card.json')
     
     //fs.writeFileSync('../../data/card.json', JSON.stringify([...dbData, ...body]));
      // создать блог 
      // вернуть блог; 
      // await useStorage().setItem('redis:test', body)
     return event.node.res
   const query =  getQuery(event)
      
      //return { body }
    } 
    if (event.node.req.method === 'PUT') { 
      const data = await readBody(event)
  if (data.id === null) {
    console.log("!!! api/cartt data.id === null")
    return sendError(event, createError({ statusCode: 401, data: standardAuthError }))
  }
  const card = await putCardTo(data.id,data.count)
console.log("!!! api/card 555 data.id "+data.id + " "+data.count)
 // const card = await getCardById(data.id)
 console.log("!!! api/card8787 "+JSON.stringify(data))
  return card

    }
  });