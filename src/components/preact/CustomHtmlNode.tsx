import LogicFlow from "@logicflow/core";
import { useEffect, useRef, useState } from "preact/compat";
import customHtmlNode from "../../common/customHtmlNode";
import '../../common/customHtmlNode.css'

const data = {
  nodes: [
    {
      id: "1",
      type: "button-node",
      x: 300,
      y: 100,
      properties: {
        name: "hello",
        body: "world"
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

    lf.register(customHtmlNode)

    setLf(lf);


    lf.render(data);

    lf.on("custom:button-click", (model) => {
      lf.setProperties(model.id, {
        body: "看我呀"
      });
    });

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
