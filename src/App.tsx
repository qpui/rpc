import {useEffect, useState} from "react";

import {WithActive} from "./hoc-active.tsx";
import {Rock} from "./assets/rock.tsx";
import {Paper} from "./assets/paper.tsx";
import {Scissor} from "./assets/scissor.tsx";
import './App.css'
import mp3 from './assets/4653666681487360.wav'

export type ComponentCoordinateT = {
  t: number;
  x: number;
  y: number
}

function App() {
  const [count, setCount] = useState<number>(3);
  const [musicPlay] = useState<number>(1);
  const [_coordinate, setCoordinate] = useState<Set<ComponentCoordinateT>>(new Set())
  const PaperWithActive = () => WithActive(Paper, 1200, 1, setCoordinate, 1);
  const ScissorWithActive = () => WithActive(Scissor, 600, 600, setCoordinate, 2);
  const RockWithActive = () => WithActive(Rock, 1, 1, setCoordinate, 3);
  const audio = new Audio(mp3);

  useEffect(() => {
    const interval = setInterval(() => {
      audio.play();
    })
    return () => clearInterval(interval);
  }, [musicPlay])

  return (
    <>
      {
        Array.from(Array(count / 3), (_e, y) => {
          return <div key={y}><PaperWithActive/><ScissorWithActive/><RockWithActive/></div>
        })
      }
      <div className={'control'}>
        <input onChange={(event) => setCount(+event.target.value)}
               type="range" step={3} min={3}
               max={150} value={count}/>
        <div>{count}</div>
      </div>
    </>
  )
}

export default App
