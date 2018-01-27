import * as ex from 'excalibur'
import Card from './Card'
import shuffle from './shuffle'
import * as fs from 'fs'

export default class Deck extends ex.Actor {

  public name:string = '';
  public deck: Deck;
  public cards: Card[];

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.name = props.name
    this.initialize(props.cards)
  }

  draw(){
    return this.cards.pop()
  }

  initialize(path:string){
      fs.readFile(path, this.ShuffleDeck)
    }
  
  private ShuffleDeck(err, file){
    var obj = JSON.parse(file.toString())
    this.cards = shuffle(obj.cards)
  }
}
