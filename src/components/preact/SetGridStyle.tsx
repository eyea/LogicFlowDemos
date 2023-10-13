import LogicFlow from "@logicflow/core";
import { useEffect, useRef, useState } from "preact/compat";
import UserTask from "../../common/UserTask";

const data = {
  nodes: [
    {
      id: "node_id_1",
      type: "UserTask",
      x: 200,
      y: 100,
      text: { x: 200, y: 100, value: "节点1" },
      properties: {
        disabled: true
      }
    }
  ],
  edges: []
}

export default () => {
  const [, setLf] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if(!rootRef) return;

    const lf = new LogicFlow({
      container: rootRef.current,
      grid: {
        size: 20,
        visible: true,
        type: "dot",
        config: {
          color: "#ababab",
          thickness: 1
        }
      }
    });

    lf.register(UserTask)

    setLf(lf);
    lf.render(data);

    return () => {
      if(lf) {
        setLf(null);
      }
    }
  }, [rootRef]);

  return <>
    <div ref={rootRef} style={{width: '100vw', height: '100vh'}}></div>
  </>;
};
