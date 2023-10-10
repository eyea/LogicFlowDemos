import LogicFlow from "@logicflow/core";
// import "@logicflow/core/dist/style/index.css";
import { Group } from "@logicflow/extension";
// import "@logicflow/extension/lib/style/index.css";
import { useEffect, useRef, useState } from "preact/compat";
import UserTask from "../../common/UserTask";

const data = {
  nodes: [
    {
      id: "1",
      type: "rect",
      x: 100,
      y: 100,
      text: "rect 矩形",
    },
    {
      id: "2",
      type: "circle",
      x: 300,
      y: 100,
      text: "circle 圆形",
    },
    {
      id: "3",
      type: "ellipse",
      x: 500,
      y: 100,
      text: "ellipse 椭圆",
    },
    {
      id: "4",
      type: "polygon",
      x: 100,
      y: 250,
      text: "polygon 多边形",
    },
    {
      id: "5",
      type: "diamond",
      x: 300,
      y: 250,
      text: "diamond 菱形",
    },
    {
      id: "6",
      type: "text",
      x: 500,
      y: 250,
      text: "text 纯文本节点",
    },
    {
      id: "7",
      type: "html",
      x: 100,
      y: 400,
      text: "html节点",
    },
    {
      id: '8',
      type: "group",
      x: 300,
      y: 600,
      text: "group 组",
    },
  ],
};

export default () => {
  const [, setLf] = useState(null);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!rootRef) return;

    const lf = new LogicFlow({
      container: rootRef.current,
      grid: true,
      edgeType: "bezier",
      background: {
        color: "#f5f5f5",
      },
      plugins: [Group]
    });

    lf.register(UserTask);

    setLf(lf);
    lf.render(data);

    return () => {
      if (lf) {
        setLf(null);
      }
    };
  }, [rootRef]);

  return (
    <>
      <div ref={rootRef} style={{ width: "100vw", height: "100vh" }}></div>
    </>
  );
};
