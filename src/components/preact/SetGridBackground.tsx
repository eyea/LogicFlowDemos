import LogicFlow from "@logicflow/core";
import { useEffect, useRef, useState } from "preact/compat";


const data = {
  nodes: [
    {
      type: "rect",
      x: 120,
      y: 100
    },
    {
      type: "rect",
      x: 320,
      y: 100
    },
    {
      type: "circle",
      x: 320,
      y: 200
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
      background: {
        backgroundImage: 'url(/LogicFlowDemos/grid.svg)',
        backgroundRepeat: "repeat"
      }
    });


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
