export function SvgContainer(props: {
  width: number;
  height: number;
  children: React.ReactElement;
}): JSX.Element {
  return (
    <svg
      width={props.width}
      height={props.height}
      xmlns="http://www.w3.org/2000/svg"
    >
      {props.children}
    </svg>
  );
}
