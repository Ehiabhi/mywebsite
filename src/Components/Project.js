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
    paddingTop: "56.25%", // 16:9
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
          <Typography variant="body2" color="textSecondary" component="p">
            {info.tech}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <a target="_blank" rel="noopener noreferrer" href={info.gitrepo}>
              <GitHubIcon />
            </a>
          </IconButton>
          <IconButton aria-label="share">
            <a target="_blank" rel="noopener noreferrer" href={info.link}>
              <LinkIcon />
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
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>{info.note}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </>
  );
}
