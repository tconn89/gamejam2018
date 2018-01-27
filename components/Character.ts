import * as ex from 'excalibur'

export default class Character extends ex.Actor {

  public name:string = '';
  public health:number;

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.name = props.name
    this.health = props.health
  }

}
