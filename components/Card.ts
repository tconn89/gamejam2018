import * as ex from 'excalibur'
import Effect from './Effect'

export default class Card extends ex.Actor {

  public name:string = '';
  public effect:Effect;

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.name = props.name
    this.effect = props.effect
  }

}
