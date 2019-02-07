// @flow

import React from "react";
import { render } from "react-dom";
import Loadable from "react-loadable";

import ContributorsIcon from "./components/ContributorsIcon";
import ShowContributorsButton from "./components/ShowContributorsButton";

// $FlowFixMe
import "./style/contributors.scss";

type Props = {};
type State = {
  showContributors: boolean,
  showButton: boolean
};

const LoadableContributors = Loadable({
  loader: () => import("./components/ContributorsList"),
  loading: () => "Loading..."
});

class App extends React.Component<Props, State> {
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

const rootElement = document.getElementById("root");
if (rootElement !== null) {
  render(<App />, rootElement);
}
