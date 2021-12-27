import React from 'react'
import kaboom from "kaboom"
import bird from "./sprites/birdy.png"

let { loadSprite, add, pos, area, body, sprite, scale, keyDown } = kaboom()

export default function Flappy() {
  loadSprite("bird", bird)

  const char = add([
    sprite("bird", { width: 90 }),
    pos(80, 10),
    area(),
    body()
  ])


  keyDown("space", () => {
    char.jump()
  })
  return <></>
}
