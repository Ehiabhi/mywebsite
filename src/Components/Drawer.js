import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuButton: {
    position: "fixed",
    zIndex: "1000",
    top: "1%",
    left: "5%",
    marginRight: theme.spacing(2),
  },
  burger: {
    color: "#ff0080",
  },
  navIcon: {
    color: "#ff9100",
  },
  menuNav: {
    color: "#000",
    "&:hover": {
      textDecoration: "none",
      color: "#888",
    },
  },
}));

export default function TemporaryDrawer({ name_path }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {name_path.map((item) => (
          <ListItem button key={item.name}>
            <ListItemIcon className={classes.navIcon}>{item.icon}</ListItemIcon>
            <ListItemText>
              <Link className={classes.menuNav} to={item.path}>
                {item.name}
              </Link>
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      <>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer("left", true)}
        >
          <MenuIcon variant="contained" className={classes.burger} />
        </IconButton>
        <Drawer
          anchor={"left"}
          open={state["left"]}
          onClose={toggleDrawer("left", false)}
        >
          {list("left")}
        </Drawer>
      </>
    </div>
  );
}
