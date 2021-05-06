import React from "react";
import Photo from "./Photo";
import Button from "@material-ui/core/Button";
import InfoIcon from "@material-ui/icons/Info";
import PersonIcon from "@material-ui/icons/Person";
import WorkIcon from "@material-ui/icons/Work";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    width: "10rem",
    color: "#ff0080",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#ff0080",
    },
  },
}));

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <div className="col-sm-12" id="photo">
        <Photo
          location={"../images/passport.jpg"}
          alt="ehis_passport"
          width="200px"
          height="200px"
        />
      </div>
      <div className="col-sm-12">
        <h1 id="name">Hi, I'm Enimakpokpo Ehiabhi Ehis</h1>
        <h3 id="intro">A Fullstack Web Developer.</h3>
      </div>
      <div className="col-sm-12">
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<InfoIcon />}
          href="/about"
          size="large"
        >
          About Me
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<PersonIcon />}
          href="/profile"
          size="large"
        >
          Profile
        </Button>
        <Button
          variant="contained"
          className={classes.button}
          endIcon={<WorkIcon />}
          href="/portfolio"
          size="large"
        >
          Portfolio
        </Button>
          
      </div>
    </>
  );
}
