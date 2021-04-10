import React from "react";
import Project from "./Project";
import { ProjectList } from "./ProjectResource";
import TemporaryDrawer from "./Drawer";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <TemporaryDrawer />
        <div id="profile" className="col-sm-12">
          <h1>Portfolio</h1>
        </div>
        {ProjectList.map((project, index) => {
          return (
            <div key={index} className="col-xs-12 col-md-4 portfolio">
              <Project info={project} />
            </div>
          );
        })}
      </>
    );
  }
}
