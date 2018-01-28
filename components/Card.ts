import * as ex from 'excalibur'
import Effect from './Effect'
import Minion from './Minion'

export default class Card extends ex.Actor {

  public name:string = '';
  public effect:Effect;
  public sprite:ex.Sprite;
  public texture:ex.Texture;
  public isHovered:boolean = false;

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.name = props.name
    this.effect = props.effect
    this.sprite = this.setSprite(props.sprite)
  }

  setSprite(path:string){
    var texture = this.texture = new ex.Texture(path);
    return texture.asSprite();
  }

  onHoverInHandler(){
    this.y = 580;
    this.sprite.scale.setTo(0.75, 0.75)
    this.setZIndex(1);
  }
  onHoverOutHandler(){
    this.y = 700;
    this.sprite.scale.setTo(0.5, 0.5)
    this.setZIndex(0);
  }

  onKeyPress(){
    console.log('card clicked')
    window.game.input.pointers.primary.on('move', this.onTracking())
  }

  onTracking = () => {
    var self = this;
    return (evt:PointerEvent) => {
      self.x = evt.x
      self.y = evt.y
    }
  }
  onConfirmPress(){
    window.game.input.pointers.primary.off('move', this.onTracking())
    var minion = new Minion({name: this.name});
    this.kill()
    window.game.add(minion)
    window.game.add(minion.label)
  }
}
