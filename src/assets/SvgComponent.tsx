import {Paper} from "./paper.tsx";
import {Rock} from "./rock.tsx";
import {Scissor} from "./scissor.tsx";
import {WithActive} from "../hoc-active.tsx";

interface SvgComponentI {
  priority: 0 | 1 | 2
  id: number
}

export function SvgComponent(props: SvgComponentI) {
  const PaperWithActive = () => WithActive(Paper, 1200, 1);
  const ScissorWithActive = () => WithActive(Scissor, 600, 600);
  const RockWithActive = () => WithActive(Rock, 1, 1,);
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
