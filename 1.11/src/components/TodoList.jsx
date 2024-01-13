export default function TodoList() {
  const style1 = {
    backgroundColor: "red",
  };

  const style2 = {
    backgroundColor: "green",
  };

  const color = "green";

  let style = "";
  if (color === "green") {
    style = style1;
  } else {
    style = style2;
  }

  return (
    <ul style={style}>
      <li>Improve the videophone</li>
      <li>Prepare aeronautics lectures</li>
      <li>Work on the alcohol-fuelled engine</li>
    </ul>
  );
}
