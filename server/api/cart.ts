import card from '../../data/card.json'
import fs from 'fs'
export default  defineEventHandler((event) => { 
    if (event.node.req.method === 'GET') { 
      // вернуть список блогов; 
      console.log('api card = ' +JSON.stringify (card))
      return card
    } 
    if (event.node.req.method === 'POST') { 
      const dbData = card
      console.log('New request: ' + event.node.req.url)
      // fs.writeFileSync('data.json', JSON.stringify([...dbData, ...data]));
      // создать блог 
      // вернуть блог; 
      const query =  getQuery(event)
      const body =  readBody(event)
      return { body ,query}
    } 
  });