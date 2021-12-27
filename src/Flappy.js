import React from 'react'
import kaboom from "kaboom"
import bird from "./sprites/birdy.png"
import bg from "./sprites/bg.jpg"

let { loadSprite, add, pos, area, body, sprite, scale, keyDown, height, width } = kaboom()

export default function Flappy() {
  loadSprite("bg", bg)
  loadSprite("bird", bird)

  const bgz = add(
    [sprite("bg", { width: width(), height: height() })]
  )

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
