export function Staff(props: {
  numBars: number;
  x: number;
  y: number;
  gap: number;
  barWidth: number;
}): JSX.Element {
  const indexes: Array<number> = [];
  for (let i = 0; i < props.numBars; i++) {
    indexes.push(i);
  }

  return (
    <>
      {indexes.map((i) => {
        const barX = i * props.barWidth;
        const barY = props.y;

        return (
          <Bar
            key={`bar-${i}`}
            x={barX}
            y={barY}
            gap={props.gap}
            width={props.barWidth}
          />
        );
      })}
    </>
  );
}

export function Bar(props: {
  x: number;
  y: number;
  gap: number;
  width: number;
}): JSX.Element {
  return (
    <>
      <line
        key={`line-0`}
        x1={props.x}
        y1={props.y}
        x2={props.x + props.width}
        y2={props.y}
        strokeWidth={1}
        stroke={"black"}
      />
      <line
        key={`line-1`}
        x1={props.x}
        y1={props.y + props.gap}
        x2={props.x + props.width}
        y2={props.y + props.gap}
        strokeWidth={1}
        stroke={"black"}
      />
      <line
        key={`line-2`}
        x1={props.x}
        y1={props.y + 2 * props.gap}
        x2={props.x + props.width}
        y2={props.y + 2 * props.gap}
        strokeWidth={1}
        stroke={"black"}
      />
      <line
        key={`line-3`}
        x1={props.x}
        y1={props.y + 3 * props.gap}
        x2={props.x + props.width}
        y2={props.y + 3 * props.gap}
        strokeWidth={1}
        stroke={"black"}
      />
      <line
        key={`line-4`}
        x1={props.x}
        y1={props.y + 4 * props.gap}
        x2={props.x + props.width}
        y2={props.y + 4 * props.gap}
        strokeWidth={1}
        stroke={"black"}
      />
      {/* vertical lines */}
      <line
        x1={props.x}
        y1={props.y}
        x2={props.x}
        y2={props.y + 4 * props.gap}
        strokeWidth={1}
        stroke={"black"}
      />
      <line
        x1={props.x + props.width}
        y1={props.y}
        x2={props.x + props.width}
        y2={props.y + 4 * props.gap}
        strokeWidth={1}
        stroke={"black"}
      />
    </>
  );
}
