import card from '../../data/card.json'
import {IncomingMessage, ServerResponse} from 'http'

export default function(req: IncomingMessage, res: ServerResponse){
    console.log('card = '+card)
    console.log('req = '+req!)
    return {
      res
    }
}