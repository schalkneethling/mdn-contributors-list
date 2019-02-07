// @flow

import React from "react";

const Contributor = (props: { url: string, name: string }) => {
  return (
    <a href={props.url} rel="nofollow">
      {props.name}
    </a>
  );
};

export default Contributor;
