import React from "react";
import Project from "./Project";
import { ProjectList } from "./ProjectResource";
import TemporaryDrawer from "./Drawer";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <TemporaryDrawer
          name_path={[
            { name: "Home", path: "/", icon: <HomeIcon /> },
            { name: "Profile", path: "/profile", icon: <PersonIcon /> },
          ]}
        />
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
