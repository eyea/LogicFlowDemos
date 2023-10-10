import LogicFlow from "@logicflow/core";
// import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef, useState } from "preact/compat";
import UserTask from "../../common/UserTask";

const data = {
  nodes: [
    {
      id: "node_id_1",
      type: "UserTask",
      x: 400,
      y: 300,
      text: { x: 400, y: 300, value: "文本节点，没有父子关系哦" },
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

    // 注册事件
    lfEvent(lf);

    // 渲染
    lf.render(data);

    return () => {
      if(lf) {
        setLf(null);
      }
    }
  }, [rootRef]);

  const lfEvent = (lf) => {
    lf.on("node:click", ({ data }) => {
      lf.setProperties(data.id, {
        disabled: !data.properties.disabled,
        scale: 2
      });
    });
  }

  return <>
    <div ref={rootRef} style={{width: '100vw', height: '100vh'}}></div>
  </>;
};
