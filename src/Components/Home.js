import React from "react";
import Photo from "./Photo";
import Button from "./Button";

export default class Home extends React.Component {
  render() {
    return (
      <>
        <div className="col-sm-12">
          <Photo
            location={"../images/passport.jpg"}
            alt="ehis_passport"
            width="200px"
            height="200px"
          />
        </div>
        <div className="col-sm-12">
          <h1 id="name">
            Hi, I'm Enimakpokpo Ehiabhi Ehis;{" "}
            <span className="span">I'm a Fullstack Web Developer.</span>
          </h1>
        </div>
        <div className="col-sm-12 explore">
          <Button quote="Profile" location="/profile" />
          <Button quote="Portfolio" location="/portfolio" />
        </div>
      </>
    );
  }
}
