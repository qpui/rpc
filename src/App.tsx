import {useEffect, useState} from "react";
import mp3 from './assets/4653666681487360.wav'
import {SvgComponent} from "./SvgComponent.tsx";
import './App.css'

export type ComponentCoordinateT = {
  id: number
  t: number;
  x: number;
  y: number
}

function App() {
  const [count, setCount] = useState<number>(3);
  const [musicPlay] = useState<number>(1);
  const [coordinate, setCoordinate] = useState<Map<number, ComponentCoordinateT>>(new Map())
  const audio = new Audio(mp3);

  useEffect(() => {
    const interval = setInterval(() => {
      audio.play().then();
    })
    return () => clearInterval(interval);
  }, [musicPlay])

  useEffect(()=> {
    console.log(coordinate);
  }, [coordinate])

  return (
    <>
      {
        Array.from(Array(count), (_e, id) => {
          const priority = (id % 3) as 1 | 2 | 0
          return <SvgComponent key={id} id={id} priority={priority} changeCoordinate={setCoordinate}></SvgComponent>
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
