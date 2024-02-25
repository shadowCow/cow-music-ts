import { QuarterNote } from "./Note";
import { Staff } from "./Staff";

export function SvgContainer(props: {
  width: number;
  height: number;
}): JSX.Element {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      <Staff numBars={2} x={10} y={10} gap={20} barWidth={200} />
      <QuarterNote cx={50} cy={50} r={10} flagHeight={20 * 3.5} />
    </svg>
  );
}
