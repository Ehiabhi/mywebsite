import React from "react";
import TemporaryDrawer from "./Drawer";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";

export default class Portfolio extends React.Component {
  render() {
    return (
      <>
        <TemporaryDrawer
          name_path={[
            { name: "Home", path: "/", icon: <HomeIcon /> },
            { name: "Profile", path: "/profile", icon: <PersonIcon /> },
            { name: "Portfolio", path: "/portfolio", icon: <WorkIcon /> },
          ]}
        />
        <div id="profile" className="col-sm-12">
          <h1>About me!</h1>
        </div>
        <div id="about" className="col-sm-12">
          <p>
            I am a fullStack web developer with specialty in JavaScript, its
            frameworks and libraries.
          </p>
          <p>
            I build intuitive, fast, responsive, highly scalable and robust website to meet personal, business and company needs as well as web
            applications tailored to meet specific business needs.
          </p>
          <p>
            Basically, I translate all user requirements and desires into code
            which in turn produces visually appealling UI.
          </p>
          <p>Do well to check out my skills in the profile section.</p>
        </div>
      </>
    );
  }
}
