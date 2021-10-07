import React, { useState, useEffect, useRef } from "react";
import useWindowDimensions from "./WindowDimensions";

const ScrollingPanel = (props) => {
  const ref = useRef(null);
  const { windowHeight, windowWidth } = useWindowDimensions();
  const [positions, setPositions] = useState([-50, 25, 150]);

  useEffect(() => {
    const height = props.baseRef.current.clientHeight;

    const heightPercentage = Math.round(
      (ref.current.clientHeight / height) * 100
    );
    if (positions[0] != -heightPercentage) {
      setPositions([
        -heightPercentage,
        (100 - heightPercentage) / 2,
        100 + heightPercentage,
      ]);
    }
  });

  return (
    <div
      ref={ref}
      id="sst_slideable"
      style={{
        top: positions[props.panelProperties.position] + "%",
        visibility: props.panelProperties.visible ? "visible" : "hidden",
      }}
    >
      {props.children}
    </div>
  );
};

export default ScrollingPanel;
