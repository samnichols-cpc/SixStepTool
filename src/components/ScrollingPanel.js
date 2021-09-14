const positions = [-50, 25, 150];

const ScrollingPanel = (props) => {
  return (
    <div
      id="slideable"
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
