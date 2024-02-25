export function QuarterNote(props: {
  cx: number;
  cy: number;
  r: number;
  flagHeight: number;
}): JSX.Element {
  return (
    <>
      <circle cx={props.cx} cy={props.cy} r={props.r} />
      <line
        x1={props.cx + props.r}
        y1={props.cy}
        x2={props.cx + props.r}
        y2={props.cy - props.flagHeight}
        strokeWidth={1}
        stroke={"black"}
      />
    </>
  );
}
