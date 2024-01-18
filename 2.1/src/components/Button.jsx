export default function Button() {
  function handleClick() {
    alert("Hello World!");
  }
  return <button onClick={handleClick}>Click Me</button>;
}
