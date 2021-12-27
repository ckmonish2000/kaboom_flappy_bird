import React from 'react'
import kaboom from "kaboom"
import bird from "./sprites/birdy.png"

let { loadSprite, add, pos, area, body, sprite } = kaboom()

export default function Flappy() {
  loadSprite("bird", bird)

  const char = add([
    sprite
  ])
  return <></>
}
