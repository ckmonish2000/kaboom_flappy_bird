import React from 'react'
import kaboom from "kaboom"
import bird from "./sprites/birdy.png"
import bg from "./sprites/bg.jpg"
import pipe from "./sprites/pipe.png"

let { loadSprite, add, pos, area, body, sprite, scale, keyDown, height, width, debug, origin } = kaboom()

export default function Flappy() {
  loadSprite("bg", bg)
  loadSprite("bird", bird)
  loadSprite("pipe", pipe)

  // background
  const bgz = add(
    [sprite("bg", { width: width(), height: height() })]
  )

  // birdy
  const char = add([
    sprite("bird", { width: 90 }),
    pos(80, 10),
    area(),
    body()
  ])


  // pipe 
  const Pipe_gap = 100
  const center = height() / 2
  add([
    sprite("pipe", { width: 150, flipY: true }),
    pos(width() - 200, center - Pipe_gap / 2),
    origin("botleft")
  ])

  add([
    sprite("pipe", { width: 150 }),
    pos(width() - 200, center + Pipe_gap / 2),
    // origin("topleft")
  ])

  // key down event
  keyDown("space", () => {
    char.jump()
  })

  return <></>
}
