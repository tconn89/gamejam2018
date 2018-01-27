import * as ex from 'excalibur'
import Card from './Card'

export default class Hand extends ex.Actor {

  public cards: Card[];

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.cards = props.cards

  }

}
