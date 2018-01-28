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
    this.hand = new Hand({x: 0, y:0, width:0, height: 0})
  }

  setDeck(path:string){
    this.deck = new Deck({name: 'First Deck', x: 400, y:400, width:50, height:80})
    this.deck.tmpInit()
    
  }
  drawCard(){
    var card = this.deck.draw()
    this.hand.cards.push(card)
    this.hand.render()
    
    window.game.add(card)
  }
}
