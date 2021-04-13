import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LinkIcon from "@material-ui/icons/Link";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
    margin: "0 auto",
  },
  cardContent: {
    color: "red",
    height: 52,
  },
  media: {
    height: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    backgroundBlendMode: "multiply",
    paddingTop: "56.25%", // 16:9
    border: "1px solid #fff",
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
  project: {
    color: "white",
    fontSize: "2rem",
  },
  cardHeader: {
    backgroundColor: "transparent",
    height: 64,
  },
  github: {
    color: "#ff9100",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#ff9100",
      borderRadius: "50%",
    },
  },
  collapseText: {
    color: "#ff9100",
    backgroundColor: "#000",
  },
  collapse: {
    color: "#ff9100",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#ff9100",
      borderRadius: "50%",
    },
  },
  link: {
    color: "#000",
    "&:hover": {
      color: "#fff",
      backgroundColor: "#000",
      borderRadius: "50%",
    },
  },
  tech: {
    color: "#000",
  },
}));

export default function ProjectCard({ info }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader title={info.title} className={classes.cardHeader} />
        <CardMedia
          className={classes.media}
          image={info.img}
          title={info.title}
        />
        <CardContent className={classes.cardContent}>
          <Typography variant="body2" className={classes.tech} component="p">
            {info.tech}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <a target="_blank" rel="noopener noreferrer" href={info.gitrepo}>
              <GitHubIcon className={classes.github} />
            </a>
          </IconButton>
          <IconButton aria-label="share">
            <a target="_blank" rel="noopener noreferrer" href={info.link}>
              <LinkIcon className={classes.link} />
            </a>
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.collapse} />
          </IconButton>
        </CardActions>
        <Collapse
          className={classes.collapseText}
          in={expanded}
          timeout="auto"
          unmountOnExit
        >
          <CardContent>
            <Typography paragraph>{info.note}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
