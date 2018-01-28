import * as ex from 'excalibur';
import { PreCollisionEvent, GameEvent } from 'excalibur';
import Hero from './components/Hero'
import Card from './components/Card'
import { Pointer, PointerEvent, KeyEvent } from 'Input/Index';
import * as $ from "jquery";


var game = window.game = new ex.Engine({ width: 1000, height: 800 });
var hello = new ex.Label('HearthstoneSim', 10, 30, 'Roboto');
hello.color = ex.Color.White;
hello.fontSize = 20;

// game.input.pointers.primary.on('move', function (evt: PointerEvent) {
//   paddle.pos.x = evt.x;
// });

// Other possible collision types:
// "ex.CollisionType.PreventCollision - this means do not participate in any collision notification at all"
// "ex.CollisionType.Active - this means participate and let excalibur resolve the positions/velocities of actors after collision"
// "ex.CollisionType.Fixed - this means participate, but this object is unmovable"



var heroOpts = {x:game.drawWidth * 0.4, y: game.drawHeight * 0.1, width: 0, height: 0,
                type: 'mage', name: 'Medivh', health: 30} 
var mage =  new Hero(heroOpts)
window.myHero = () => { return mage }
window.opponent = () => {}

mage.setDeck('./Decks/mage.json')

for(var i:number =0; i < 4; i++)
  mage.drawCard()

var heroUI = new ex.Label(mage.name, heroOpts.x, heroOpts.y, 'Arial');
heroUI.color = ex.Color.White;
heroUI.fontSize = 20;
var loader = new ex.Loader;
mage.hand.cards.forEach((card, i) => {
  var cardUI = new ex.Label(card.name, 60, game.drawHeight * (0.1 * i + 0.2), 'Arial');
  cardUI.color = ex.Color.White;
  cardUI.fontSize = 16;
  loader.addResource(card.texture)

  game.add(cardUI)



})
game.input.pointers.primary.on('mousedown', (evt: PointerEvent) => { 
  console.log('click')
})

var onKeyConfirm = $(document).on('keydown', (evt:KeyEvent) => {

})
var confirmKey = false;
$(document).on('keydown', (evt:KeyEvent) => {
  var key:string = evt.key.toString()
  if(key == 'a'){
    if(!confirmKey){
      mage.hand.cards[0].onKeyPress()
      confirmKey =true
    }
    else {
      mage.hand.cards[0].onConfirmPress()
      confirmKey = false
    }
    return 
  }
  if(key == 's')
    return mage.hand.cards[1].onKeyPress()
  if(key == 'd')
    return mage.hand.cards[2].onKeyPress()
  if(key == 'f')
    return mage.hand.cards[3].onKeyPress()
  if(key == 'z')
    return mage.hand.removeKeyHandlers()
})

var firstCard = mage.hand.cards[0]
var tmpHoverCard:Card = null;
game.input.pointers.primary.on('move', (evt: PointerEvent) => { 
  hello.text = `x: ${evt.x} y: ${evt.y}` 
  // cursor below hand viewport?
  if(mage.hand.viewport.top < evt.y) {
    mage.hand.cards.forEach((card)=>{
      if(card.x < evt.x && evt.x < card.x + card.getWidth()){
        heroUI.text = card.name
        return card.onHoverInHandler();
      }
      return card.onHoverOutHandler();
    })
  }
})


console.log(__dirname)
game.add(heroUI);
game.add(hello);

game.start(loader).then(() => {
  console.log("Game started!");
});