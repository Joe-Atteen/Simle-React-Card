import React from "react";

function Image(props) {
  return (
    <div className="image">
      <img src={props.src} alt={props.alt} width={"30%"} height={"300vh"} />
    </div>
  );
}

export default Image;
