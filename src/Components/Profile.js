import React from "react";
import {
  LinkedIn,
  GitHub,
  PhoneAndroid,
  MailOutline,
  Twitter,
} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import TemporaryDrawer from "./Drawer";

const useStyles = makeStyles({
  root: {
    color: "white",
    fontSize: "2rem",
  },
});

export default function Profile() {
  const classes = useStyles();

  return (
    <>
      <TemporaryDrawer />
      <div id="profile" className="col-sm-12">
        <h1>Profile</h1>
      </div>
      <div id="skills_list" className="col-sm-12">
        <h2 className="heading" style={{ color: "green" }}>
          Skills
        </h2>
        <div className="row">
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>React</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>Nodejs</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>MongoDB</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>Express</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>Research</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>GitHub</span>
            </div>
          </div>
          <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack">
            <div className="card">
              <span>Progressive Web Apps</span>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-12" id="social_div">
        <div className="row" id="socials">
          <div className="col-xs-12" id="socials_wrap">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/ehiabhi-enimakpokpo-16436010a/"
            >
              <LinkedIn className={classes.root} fontSize="small" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/Ehiabhi"
            >
              <GitHub className={classes.root} fontSize="small" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:enimakpokpo@yahoo.com?subject=Inquiry from my portfolio"
            >
              <MailOutline className={classes.root} fontSize="small" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="tel:+234-803-0599-773"
            >
              <PhoneAndroid className={classes.root} fontSize="small" />
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/Ehiabhiehis"
            >
              <Twitter className={classes.root} />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
