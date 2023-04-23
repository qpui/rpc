import {Paper} from "./paper.tsx";
import {Rock} from "./rock.tsx";
import {Scissor} from "./scissor.tsx";
import {WithActive} from "./hoc-active.tsx";
import {Dispatch, SetStateAction} from "react";
import {ComponentCoordinateT} from "./App.tsx";

interface SvgComponentI {
  priority: 0 | 1 | 2
  id: number,
  changeCoordinate: Dispatch<SetStateAction<Map<number, ComponentCoordinateT>>>
}

export function SvgComponent(props: SvgComponentI) {
  const PaperWithActive = () => WithActive(Paper, props.id, props.priority, props.changeCoordinate, 1200, 1);
  const ScissorWithActive = () => WithActive(Scissor, props.id, props.priority, props.changeCoordinate, 600, 600);
  const RockWithActive = () => WithActive(Rock, props.id, props.priority, props.changeCoordinate, 1, 1,);
  switch (props.priority) {
    case 1:
      return <PaperWithActive/>
    case 2:
      return <RockWithActive/>
    case 0:
      return <ScissorWithActive/>
    default:
      return <></>
  }
}
