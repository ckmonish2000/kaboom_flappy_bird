import './App.css';
import kaboom from "kaboom";
import logo from "./sprites/logo.svg"

function App() {

  const app = kaboom()

  // load assets
  app.loadSprite("bean", logo)

  app.add([
    app.sprite("bean"),
    app.pos(80, 40),
  ])
  return (
    <div></div>
  );
}

export default App;
