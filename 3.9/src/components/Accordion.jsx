import { useState } from "react";
import Panel from "./Panel";

export default function Accordion() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <h2>Learn with sumit</h2>
      <Panel
        title="Pain course"
        isActive={activeIndex === 0 && true}
        onActive={() => setActiveIndex(0)}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem,
        laboriosam sequi, vero commodi nobis eaque ducimus nostrum, distinctio
        est unde illo. Quasi, expedita dignissimos rem illo deleniti quibusdam
        neque accusamus.
      </Panel>
      <Panel
        title="Free course"
        isActive={activeIndex === 1 && true}
        onActive={() => setActiveIndex(1)}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae
        voluptatem itaque provident harum ut, sapiente voluptate architecto quod
        natus consectetur repellat, neque esse veniam enim voluptates nihil.
        Vel, doloremque saepe!
      </Panel>
    </>
  );
}
