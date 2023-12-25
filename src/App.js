import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { animalsounds } from "./data1.js";
import { musicsounds } from "./data2.js";
import { cartoonsounds } from "./data3.js";
import { SoundBoard } from "./soundBoard.js";

function App() {
  const play = (id) => {
    const audio = document.getElementById(id);
    console.log(audio);
    audio.play();
  };

  return (
    <SoundBoard
      animalsounds={animalsounds}
      musicsounds={musicsounds}
      cartoonsounds={cartoonsounds}
      play={play}
    />
  );
}

export default App;
