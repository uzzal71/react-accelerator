import Item from "./Item";

export default function PackingList() {
  return (
    <section>
      <h1>Sally Rides Packing List</h1>
      <ul>
        <Item isPacked={true} name="Space suit" />
        <Item isPacked={true} name="Helmet with a golden leaf" />
        <Item isPacked={false} name="Photo of Tam" />
      </ul>
    </section>
  );
}

// just for memory
const lang = "JavaScript1";
const result1 = lang && "JavaScript"; // left side truthly hole right side return korbe, other wise left side return korbe
const result2 = lang || "JavaScript"; // left side falsy hole right side return korbe, other wise left side return korbe
const result3 = lang ?? "JavaScript"; // nullish coalesing operator: left side nullish(null or undefined) hole right side return korbe, otherwise left side return korbe
console.log(result1); // JavaScript
console.log(result2); // JavaScript1
console.log(result3); // JavaScript1
