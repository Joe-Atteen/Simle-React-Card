import React, { Component } from "react";

import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends Component {
  render() {
    return (
      <div className="card">
        <Image src={require("./Joe.jpeg")} alt="my-img" />
        <Title text="Joe Atteen" />
        <Description text="Front-End Developer * Software Engineer" />
      </div>
    );
  }
}

export default SimpleCard;
