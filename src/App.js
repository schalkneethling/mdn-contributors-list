import React from "react";
import { render } from "react-dom";
import Loadable from "react-loadable";

import ContributorsIcon from "./ContributorsIcon";
import ShowContributorsButton from "./ShowContributorsButton";

import "./style/contributors.scss";

const LoadableContributors = Loadable({
  loader: () => import("./ContributorsList"),
  loading: () => "Loading..."
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showContributors: false, showButton: true };
  }

  showContributors = () => {
    this.setState({ showContributors: true, showButton: false });
  };

  render() {
    return (
      <div id="page-contributor-list" className="contributors-sub">
        <ContributorsIcon />
        <h4>Contributors to this page:</h4>
        {this.state.showButton && (
          <ShowContributorsButton showContributors={this.showContributors} />
        )}
        {this.state.showContributors && <LoadableContributors />}
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
