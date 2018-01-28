import * as ex from 'excalibur'
import Card from './Card'
import shuffle from '../shuffle'
// import * as fs from 'fs'
import tmpDeck from '../Decks/mage'
import tmpCards from '../Cards/cultistClass'

export default class Deck extends ex.Actor {

  public name:string = '';
  public cards: Card[];

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.name = props.name
    this.initialize(props.cards)
  }

  draw(){
    return this.cards.pop()
  }

  tmpInit(){
    this.cards = shuffle(this.buildCards(tmpDeck.cards))
  }
  initialize(path:string){
      // fs.readFile(path, this.ShuffleDeck)
  }
  
  private buildCards = (list:string[]) => {
    var genericOpts = {x:0,y:0, width:0, height:0, name: '', sprite: ''};
    return list.map((cardName) => {
      var cardOpts = genericOpts
      var cardObj = tmpCards.filter((tmpCard) => { return tmpCard.name == cardName })
      cardOpts.name = cardName
      cardOpts.sprite = cardObj[0].image
      var card = new Card(cardOpts)
      var sprite = card.sprite
      sprite.scale = new ex.Vector(0.5, 0.5)
      card.addDrawing(sprite)
      return card
    })
  }
  private ShuffleDeck(err, file){
    var obj = JSON.parse(file.toString())
    this.cards = shuffle(this.buildCards(tmpDeck.cards))
  }
}
