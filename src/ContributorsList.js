import React from "react";
import Contributor from "./Contributor";
import Contributors from "./data/contributors.json";

const ContributorsList = () => {
  return (
    <ul>
      {Contributors.map((contributor, index) => {
        return (
          <li key={index}>
            <Contributor url={contributor.url} name={contributor.name} />
            {Contributors.length - 1 !== index ? "," : ""}
          </li>
        );
      })}
    </ul>
  );
};

export default ContributorsList;
