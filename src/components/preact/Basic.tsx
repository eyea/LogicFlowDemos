import LogicFlow from "@logicflow/core";
// import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef, useState } from "preact/compat";
import UserTask from "../../common/UserTask";

const data = {
  nodes: [
    {
      id: "node_id_1",
      type: "UserTask",
      x: 100,
      y: 100,
      text: { x: 100, y: 100, value: "节点1" },
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
      grid: true,
      background: {
        color: "#f5f5f5",
      },
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
