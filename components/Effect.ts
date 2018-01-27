import * as ex from 'excalibur'

interface effects {
  type:number,
  cb: (target: Character) => {}
}
export default class Effect extends ex.Actor {

  public static BATTLECRY = 0;
  public static DEATHRATTLE = 1;

  public name:string = '';
  public description:string = '';
  public list:effects[];

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.name = props.name
  }

  battleCry(){
    this.list.forEach((effect) => {
      if(effect.type == Effect.BATTLECRY)
        return effect.cb()
    })
    return this.battleCry;
  }

}

