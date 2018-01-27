import * as ex from 'excalibur';
import { PreCollisionEvent } from 'excalibur';
import Hero from './components/Hero'

var game = new ex.Engine({ width: 500, height: 500 });
var hello = new ex.Label('HearthstoneSim', 10, 30, 'Arial');
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
var mage = new Hero(heroOpts)

for(var i:number =0; i < 4; i++)
  mage.drawCard()



game.add(hello);

game.start();