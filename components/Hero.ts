import * as ex from 'excalibur'
import Deck from './Deck'
import Character from './Character'
import Hand from './Hand'

export default class Hero extends Character {

  public type:string = '';
  public deck: Deck;
  public hand: Hand;

  constructor(props){
    super(props)
    this.type = props.type
  }

  setDeck(deck){
    this.deck = deck
  }
  drawCard(){
    var card = this.deck.draw()
    this.hand.cards.push(card)
  }
}
