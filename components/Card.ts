import * as ex from 'excalibur'
import Effect from './Effect'

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
}
