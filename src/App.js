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

  app.onKeyPress("space", () => {
    if (player.isGrounded()) {
      player.jump();
    }
  })
  return <></>
}

export default App;
