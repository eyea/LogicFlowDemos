import LogicFlow from "@logicflow/core";
import "@logicflow/core/dist/style/index.css";
import { useEffect, useRef, useState } from "preact/compat";
import UserTask from "../../common/UserTask";

const data = {
  "nodes": [
    {
      "id": "1",
      "type": "rect",
      "x": 800,
      "y": 180,
      "properties": {},
      "text": {
        "x": 800,
        "y": 180,
        "value": "矩形"
      }
    },
    {
      "id": "2",
      "type": "circle",
      "x": 780,
      "y": 380,
      "properties": {},
      "text": {
        "x": 780,
        "y": 380,
        "value": "圆形"
      }
    },
    {
      "id": "3",
      "type": "ellipse",
      "x": 460,
      "y": 400,
      "properties": {},
      "text": {
        "x": 460,
        "y": 400,
        "value": "椭圆"
      }
    },
    {
      "id": "4",
      "type": "polygon",
      "x": 120,
      "y": 320,
      "properties": {},
      "text": {
        "x": 120,
        "y": 320,
        "value": "多边形"
      }
    },
    {
      "id": "5",
      "type": "diamond",
      "x": 820,
      "y": 660,
      "properties": {},
      "text": {
        "x": 820,
        "y": 660,
        "value": "菱形"
      }
    },
    {
      "id": "6",
      "type": "text",
      "x": 360,
      "y": 520,
      "properties": {},
      "text": {
        "x": 360,
        "y": 520,
        "value": "纯文本节点"
      }
    },
    {
      "id": "7",
      "type": "html",
      "x": 620,
      "y": 280,
      "properties": {},
      "text": {
        "x": 620,
        "y": 280,
        "value": "html节点"
      }
    }
  ],
  "edges": [
    {
      "id": "c968a24e-9d0b-49a5-bb1d-1b32205a53d4",
      "type": "polyline",
      "sourceNodeId": "1",
      "targetNodeId": "3",
      "startPoint": {
        "x": 800,
        "y": 140
      },
      "endPoint": {
        "x": 460,
        "y": 350
      },
      "properties": {},
      "pointsList": [
        {
          "x": 800,
          "y": 140
        },
        {
          "x": 800,
          "y": 110
        },
        {
          "x": 460,
          "y": 110
        },
        {
          "x": 460,
          "y": 350
        }
      ]
    },
    {
      "id": "f23ee4ca-2110-4e7c-861a-16cd39e15183",
      "type": "line",
      "sourceNodeId": "3",
      "targetNodeId": "4",
      "startPoint": {
        "x": 430,
        "y": 400
      },
      "endPoint": {
        "x": 170,
        "y": 320
      },
      "properties": {}
    },
    {
      "id": "121a6875-a196-4966-890c-2f6a47bb267c",
      "type": "bezier",
      "sourceNodeId": "3",
      "targetNodeId": "5",
      "startPoint": {
        "x": 460,
        "y": 445
      },
      "endPoint": {
        "x": 850,
        "y": 660
      },
      "properties": {},
      "pointsList": [
        {
          "x": 460,
          "y": 445
        },
        {
          "x": 460,
          "y": 545
        },
        {
          "x": 950,
          "y": 660
        },
        {
          "x": 850,
          "y": 660
        }
      ]
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
