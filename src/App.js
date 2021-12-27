import './App.css';
import kaboom from "kaboom";
import logo from "./sprites/logo.svg"

function App() {

  const app = kaboom()

  // load assets
  app.loadSprite("bean", logo)

  const player = app.add([
    app.sprite("bean"),
    app.pos(80, 40),
    app.color(0, 0, 255),
    app.area(),
    app.body()
  ])

  const platform = app.add([
    app.rect(app.width(), 200),
    app.pos(0, app.height() - 50),
    app.area(),
    app.solid(),
    app.color(127, 200, 255),
  ])

  const tree = app.add([
    app.rect(48, 64),
    app.pos(app.width(), app.height() - 50),
    app.outline(),
    app.origin("botleft"),
    app.area(),
    app.color(255, 180, 255),
    app.move(app.LEFT, 240),
  ])

  app.onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump();
    }
  })


  app.keyDown("right", () => {
    player.move(100, 0)
  })

  app.keyDown("up", () => {
    player.move(0, 110)
  })

  player.collides('dangerous', () => {
    app.destroy(player)
  })
  return <></>
}

export default App;
