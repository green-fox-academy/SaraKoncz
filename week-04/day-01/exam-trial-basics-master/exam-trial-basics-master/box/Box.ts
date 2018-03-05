// Create a class that represents a cuboid:
// It should take its three dimensions as constructor parameters (numbers)
// It should have a method called `getSurface` that returns the cuboid's surface
// It should have a method called `getVolume` that returns the cuboid's volume
'use strict';
class Cuboid {
  public sideA: number;
  public sideB: number;
  public sideC: number;
  constructor(sideA: number, sideB: number, sideC: number) {
    this.sideA = sideA;
    this.sideB = sideB;
    this.sideC = sideC;
  }
  getSurface(): number {
    let a: number = this.sideA;
    let b: number = this.sideB;
    let c: number = this.sideC;
    let surface: number = 2 * ((a * b) + (b * c) + (c * a));
    return surface;
  }

  getVolume(): number {
    let a: number = this.sideA;
    let b: number = this.sideB;
    let c: number = this.sideC;
    let volume: number = a * b * c;
    return volume;
  }
}
