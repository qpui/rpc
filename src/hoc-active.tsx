import {Dispatch, FunctionComponent, SetStateAction, useEffect, useRef, useState} from "react";
import {useWindowDimensions} from "./shared.tsx";
import {ComponentCoordinateT} from "./App.tsx";

export function WithActive(Component: FunctionComponent, x = 1, y = 0, cb: Dispatch<SetStateAction<Set<ComponentCoordinateT>>>, type: number) {
  const windowSize = useWindowDimensions();
  const [xState, setX] = useState(x);
  const [yState, setY] = useState(y);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      // let myX: number | null;
      // let myY: number | null;
      setX((x) => {
        let response: number | null;
        if (x < 1 || x >= windowSize.width) {
          response = 1;
        } else {
          const random = Math.floor(Math.random() * 20 / 1.2) + 1
          if (random > 9) {
            response = x + random
          } else {
            response = x - random
          }
        }
        // myX = response;
        return response
      });
      setY((y) => {
        let response: number | null;
        if (y > 0 && y <= windowSize.height) {
          const random = Math.floor(Math.random() * 20 / 1.2) + 1;
          if (random > 9) {
            response = y + random
          } else {
            response = y - random
          }
        } else {
          response = 1;
        }
        // myY = response;
        return response
      });
      // setTimeout(() => {
      //   cb((value) => value.add({
      //     y: myY!,
      //     x: myX!,
      //     t: type
      //   }))
      // });
    }, 600);
    return () => clearInterval(interval);
  }, [])
  return (
    <div ref={componentRef} style={{position: "absolute", top: yState, left: xState}}>
      <Component/>
    </div>
  )
}
