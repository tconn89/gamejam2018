import * as ex from 'excalibur'

export default class Minion extends ex.Actor {

  public index:number;
  public name:string;
  public label:ex.Label
  private static colors:ex.Color[] = [ex.Color.Green, ex.Color.Red, ex.Color.White, ex.Color.Yellow]

  constructor(props){
    props.x = 500;
    props.y = 500;
    props.width = 60;
    props.height = 30;
    super(props.x, props.y, props.width, props.height)
    this.index = window.myHero().minions.length
    this.name = props.name;
    this.colorMinion()
    this.addMinionInLine()
    this.addLabel()
  }

  colorMinion(){
    this.color = Minion.colors[Math.floor(Math.random() * 4)]
  }
  addMinionInLine(){
    var padding = 15;
    window.myHero().minions.push(this)
    this.x = (this.index * (this.getWidth() + padding)) + this.x
  }
  addLabel(){
    this.label = new ex.Label(this.name, this.x, this.y, 'Roboto')
  }

}
