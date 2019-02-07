// @flow

import React from "react";

const ShowContributorsButton = (props: { showContributors: Function }) => {
  return (
    <button
      id="show-page-contributors"
      className="button neutral"
      type="button"
      onClick={props.showContributors}
    >
      Show contributors
    </button>
  );
};

export default ShowContributorsButton;
