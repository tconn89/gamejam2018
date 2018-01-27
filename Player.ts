import * as ex from 'excalibur'

export default class Player extends ex.Actor {

  public name:string = '';
  public score:number = 0; 

  constructor(props){
    super(props.x, props.y, props.width, props.height)
    this.on('precollision', this.onCollision.bind(this))
  }
  onCollision(paddle: ex.Actor, bricks:ex.Actor[]) { 
    return (e: ex.PreCollisionEvent) => {
      console.log(e);
      console.log('collided with paddle');
      if (e.other == paddle) {
        return this.vel.y *= -1;
      }

      if (bricks.indexOf(e.other) > -1) {
        // kill removes an actor from the current scene
        // therefore it will no longer be drawn or updated
        e.other.kill();
      }

      // reverse course after any collision
      // intersections are the direction body A has to move to not be clipping body B
      // `ev.intersection` is a vector `normalize()` will make the length of it 1
      // `negate()` flips the direction of the vector
      var intersection = e.intersection.normalize();

      // The largest component of intersection is our axis to flip
      if (Math.abs(intersection.x) > Math.abs(intersection.y)) {
          this.vel.x *= -1;
      } else {
          this.vel.y *= -1;
      }
    }
  }
}
