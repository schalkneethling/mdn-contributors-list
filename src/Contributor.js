import React from "react";

const Contributor = props => {
  return (
    <a href={props.url} rel="nofollow">
      {props.name}
    </a>
  );
};

export default Contributor;
