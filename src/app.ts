import P5 from "p5"
import { Tilemap } from "./Tilemap"
import { Player } from "./Player"

const TILE_SIZE = 32
const MAP_NUM_ROWS = 11
const MAP_NUM_COLS = 15
const WINDOW_WIDTH: number = MAP_NUM_COLS * TILE_SIZE
const WINDOW_HEIGHT: number = MAP_NUM_ROWS * TILE_SIZE
  
const game = (p5: P5): void => {
  let grid: Tilemap = new Tilemap(p5, TILE_SIZE, MAP_NUM_ROWS, MAP_NUM_COLS)
  let player: Player = new Player(p5, WINDOW_WIDTH/2, WINDOW_HEIGHT/2)

  const update: () => void = (): void => {
    player.update(grid)
  }

  p5.setup = (): void => {
    p5.createCanvas(WINDOW_WIDTH, WINDOW_HEIGHT)
  }

  p5.keyPressed = (): void => {
    if (p5.keyCode == p5.UP_ARROW) {
      player.walkDirection = 1
    } else if (p5.keyCode == p5.DOWN_ARROW) {
      player.walkDirection = -1
    } else if (p5.keyCode == p5.RIGHT_ARROW) {
      player.turnDirection = 1
    } else if (p5.keyCode == p5.LEFT_ARROW) {
      player.turnDirection = -1
    }   
  }

  p5.keyReleased = (): void => {
    if (p5.keyCode == p5.UP_ARROW) {
      player.walkDirection = 0
    } else if (p5.keyCode == p5.DOWN_ARROW) {
      player.walkDirection = 0
    } else if (p5.keyCode == p5.RIGHT_ARROW) {
      player.turnDirection = 0
    } else if (p5.keyCode == p5.LEFT_ARROW) {
      player.turnDirection = 0
    }   
  }

  p5.draw = (): void => {
    update()

    grid.render()
    player.render()
  }
}

new P5(game)
