
import card from '../../data/card.json'
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
  });