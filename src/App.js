import logo from './logo.svg';
import './App.css';
import kaboom from "kaboom";

function App() {

  const app = kaboom()

  app.add([
    app.text("hello"),
    app.pos(120, 80),
  ]);
  return (
    <div></div>
  );
}

export default App;
