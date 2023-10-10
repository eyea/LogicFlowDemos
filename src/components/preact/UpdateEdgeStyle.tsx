import LogicFlow from "@logicflow/core";
// import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef, useState } from "preact/compat";
import UserTask from "../../common/UserTask";
import sequence from "../../common/sequence";

const data = {
  nodes: [
    {
      id: "1",
      type: "rect",
      x: 100,
      y: 100,
      text: "矩形"
    },
    {
      id: "3",
      type: "ellipse",
      x: 500,
      y: 100,
      text: "椭圆"
    },
    {
      id: "4",
      type: "polygon",
      x: 100,
      y: 250,
      text: "多边形"
    },
    {
      id: "5",
      type: "diamond",
      x: 300,
      y: 250,
      text: "菱形"
    }
  ],
  edges: [
    {
      sourceNodeId: "1",
      targetNodeId: "3",
      startPoint: {
        x: 100,
        y: 60
      },
      endPoint: {
        x: 500,
        y: 50
      },
      text: "连线上的文本",
      type: "sequence"
    },
    {
      sourceNodeId: "3",
      targetNodeId: "4",
      type: "line"
    },
    {
      sourceNodeId: "3",
      targetNodeId: "5",
      type: "bezier"
    }
  ]
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
    lf.register(sequence);
    lf.setDefaultEdgeType("sequence");

    setLf(lf);
    lf.render(data);

    lf.focusOn({coordinate: {x: 350, y: 60}})

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
