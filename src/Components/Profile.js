import React from "react";
import { makeStyles } from "@material-ui/core";
import TemporaryDrawer from "./Drawer";
import WorkIcon from "@material-ui/icons/Work";
import HomeIcon from "@material-ui/icons/Home";
import InfoIcon from "@material-ui/icons/Info";
import SendIcon from "@material-ui/icons/Send";
import Button from "@material-ui/core/Button";
import { skillsList, mediaLinks } from "./ProjectResource";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "white",
    fontSize: "2rem",
    "&:hover": {
      color: "#ff9100",
    },
  },
  button: {
    margin: theme.spacing(1),
    "&:hover": {
      color: "#ff0080",
      backgroundColor: "#ffffff",
    },
    backgroundColor: "#ff0080",
    color: "#ffffff",
    letterSpacing: "1.5px",
    borderRadius: "40px",
  },
}));

export default function Profile() {
  const classes = useStyles();
  const [form, setForm] = React.useState({
    name: "",
    sender: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setForm((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  function mail() {
    if (
      !Boolean(form.name) ||
      !Boolean(form.sender) ||
      !Boolean(form.message)
    ) {
      toast.error("All form fields must be filled.", {
        autoClose: 3000,
      });
      return false;
    }
    fetch("https://ehismailapi.herokuapp.com/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(form),
    })
      .then((res) => {
        console.log(res.status);
        if (res.ok) {
          toast.success("Mail sent successfully.");
          setForm({
            name: "",
            sender: "",
            message: "",
          });
        }
      })
      .catch((err) => {
        const error = new Error();
        error.message = err;
        toast.error("Mail not sent." + err);
      });
    return false;
  }

  return (
    <>
      <TemporaryDrawer
        name_path={[
          { name: "Home", path: "/", icon: <HomeIcon /> },
          { name: "About", path: "/about", icon: <InfoIcon /> },
          { name: "Portfolio", path: "/portfolio", icon: <WorkIcon /> },
        ]}
      />
      <div id="profile" className="col-sm-12">
        <h1>Profile</h1>
      </div>
      <div id="skills_list" className="col-sm-12">
        <h2 className="heading" style={{ color: "#ff9100" }}>
          Skills
        </h2>
        <div className="row">
          {skillsList.map((skill, index) => {
            return (
              <div
                key={index}
                className="col-xs-12 col-sm-6 col-md-4 col-lg-3 pack"
              >
                <div className="card">
                  {skill === "Progressive Web Apps" ? (
                    <span style={{ top: 20 }}>{skill}</span>
                  ) : (
                    <span>{skill}</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="col-sm-12">
        <div className="row">
          <form
            className="form-horizontal"
            id="mailForm"
            name="mailForm"
            autoComplete="off"
          >
            <div className="form-group">
              <div className="col-xs-12 col-lg-6 offset-lg-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Full Name"
                  name="name"
                  autoComplete="new-password"
                  onChange={(e) => handleChange(e)}
                  value={form.name}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12 col-lg-6 offset-lg-3">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Mail Address"
                  name="sender"
                  autoComplete="off"
                  onChange={(e) => handleChange(e)}
                  value={form.sender}
                />
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12 col-lg-6 offset-lg-3">
                <textarea
                  type="text"
                  className="form-control"
                  rows="5"
                  placeholder="Leave a message"
                  name="message"
                  onChange={(e) => handleChange(e)}
                  value={form.message}
                ></textarea>
              </div>
            </div>
            <div className="form-group">
              <div className="col-xs-12 col-lg-6 offset-lg-3">
                <Button
                  variant="contained"
                  className={classes.button}
                  id="submitted"
                  endIcon={<SendIcon />}
                  size="large"
                  fullWidth={true}
                  onClick={mail}
                >
                  Send Message
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="col-sm-12" id="social_div">
        <div className="row" id="socials">
          <div className="col-xs-12" id="socials_wrap">
            {mediaLinks.map((media, index) => {
              const TagName = media.component;
              return (
                <a
                  key={index}
                  target="_blank"
                  rel="noopener noreferrer"
                  href={media.url}
                >
                  <TagName className={classes.root} fontSize="small" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
