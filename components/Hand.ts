import * as ex from 'excalibur'
import Card from './Card'

export default class Hand extends ex.Actor {
  public viewport = { left: window.game.getWorldBounds().left + 200,
                      right:  window.game.getWorldBounds().right - 200,
                      top: window.game.getWorldBounds().bottom - 200,
                      bottom: window.game.getWorldBounds().bottom }
  public cards: Card[];

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.cards = [] 

  }

  render(){

    var handSize:number = this.cards.length
    var cardWidth:number = (this.viewport.right - this.viewport.left) / handSize
    var cardHeight:number = (this.viewport.bottom - this.viewport.top)

    // console.log(`hand size: ${handSize}`)
    // console.log(`card width: ${cardWidth}`)
    // console.log(`card height: ${cardHeight}`)
    this.cards.forEach((card, i) => {
      card.x = i * cardWidth + this.viewport.left 
      card.y = this.viewport.bottom - 100 
      card.setWidth(cardWidth)
      card.setHeight(cardHeight)
    })
  }
  removeKeyHandlers(){
    this.cards.forEach((card) => {
      return window.game.input.pointers.primary.off('move', card.onTracking())
    })
  }

}
