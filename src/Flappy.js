import React from 'react'
import kaboom from "kaboom"
import bird from "./sprites/birdy.png"
import bg from "./sprites/bg.jpg"
import pipe from "./sprites/pipe.png"
import play from "./sprites/play.png"
import goimg from "./sprites/go.png"

let { loop, text, go, scene, onClick, action, loadSprite, add, pos, area, body, sprite, scale, keyDown, height, width, debug, origin, rand } = kaboom()

export default function Flappy() {
  loadSprite("bg", bg)
  loadSprite("bird", bird)
  loadSprite("pipe", pipe)
  loadSprite("play", play)
  loadSprite("go", goimg)

  scene("intro", () => {
    add([sprite("bg", { width: width(), height: height() })])
    add([
      text("ANGRY FLAPPY BIRD", 0, 10),
      pos(height() / 2, 250)
    ])
    add([
      sprite("play", { height: 100, width: 100 }),
      pos(width() - 200, height() - 150),
      area(),
      "play"
    ])

    onClick("play", () => {
      go("game")
    })
  })

  scene("game", () => {
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

    function producepipes() {

      const Pipe_gap = 250
      const center = height() / 2
      const ran = rand(-50, 50)

      add([
        sprite("pipe", { width: 150, flipY: true }),
        pos(width() - 200, center - Pipe_gap / 2 + ran),
        origin("botleft"),
        // move(LEFT, 240)
        area(),
        "pipe"
      ])

      add([
        sprite("pipe", { width: 150 }),
        pos(width() - 200, center + Pipe_gap / 2 + ran),
        area(),
        "pipe"
        // move(LEFT, 240)
      ])

      action("pipe", pipe => {
        pipe.move(-250, 0)
      });

    }

    loop(1.5, producepipes)


    // char.action(() => {
    //   if (char.pos.y > height() + 40 ||
    //     char.pos.y - 30 < 0) {
    //     go("gameover")
    //   }
    // })



    // key down event
    keyDown("space", () => {
      char.jump()
    })


    char.collides("pipe", () => {
      debug.log("collision")
      go("gameover")
    })
  })

  scene("gameover", () => {
    add([
      sprite("go"),
      pos(0, 0)
    ])
  })

  go("intro")
  return <></>
}
