import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from "@material-ui/icons/Home";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import WebOutlinedIcon from "@material-ui/icons/WebOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import background from "../assets/background.JPG";
import RoomIcon from "@material-ui/icons/Room";
import Home from "./Home";

import "./NavStyling.css";
import NavButtons from "./NavButtons";

const mainListItems = (
  <div>
    <ListItem button>
      <HomeIcon />
    </ListItem>
    <Divider />
    <ListItem button>
      <InfoOutlinedIcon />
    </ListItem>
    <Divider />
    <ListItem button>
      <WebOutlinedIcon />
    </ListItem>
    <Divider />
    <ListItem button>
      <SentimentVerySatisfiedOutlinedIcon />
    </ListItem>
    <Divider />
  </div>
);

const drawerWidth = 55;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },

  appBar: {
    maxHeight: 55,
    minHeight: 55,
    backgroundColor: "#546F93",
    color: "#FFFFFF",
  },
  appBarShift: {},

  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    marginTop: 55,
    position: "relative",
    width: drawerWidth,
    height: `calc(100% - 55px)`,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },

  appBarSpacer: { marginTop: 55 },

  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },

  container: {
    justifyContent: "center",
    display: "flex",
    /* Responsive Full Background Image Using CSS
     * Tutorial URL: http://sixrevisions.com/css/responsive-background-image/
     */
    body: {
      /* Location of the image */
      backgroundImage: `${background}`,

      /* Image is centered vertically and horizontally at all times */
      backgroundPosition: " center center",

      /* Image doesn't repeat */
      backgroundRepeat: "no-repeat",

      /* Makes the image fixed in the viewport so that it doesn't move when 
     the content height is greater than the image height */
      backgroundAttachment: "fixed",

      /* This is what makes the background image rescale based on its container's size */
      backgroundSize: "cover",

      /* Pick a solid background color that will be displayed while the background image is loading */
      backgroundColor: "#464646",
    },

    minHeight: `calc(100% - 61px - 0.75vw - 1vw - 0.75v)`,
  },
}));

export default function Navigation() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar)}>
        <Toolbar className={classes.toolbar}>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Ben Lambert
          </Typography>
          <IconButton color="inherit"></IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={true}
      >
        <div>{mainListItems}</div>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Typography
          align={"right"}
          style={{
            paddingTop: "0.75vw",
            paddingBottom: "0.75vw",
            color: "#A2B4B9",
            fontSize: `calc(1vw - 5px)`,
            marginRight: "0.5vw",
          }}
        >
          Dent d'Arclusaz, France
          <RoomIcon
            style={{ marginLeft: "0.5vw", fontSize: `calc(1vw - 5px)` }}
          />
        </Typography>
        <Container className={classes.container} maxWidth={false}>
          <Paper
            elevation={20}
            style={{
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",

              marginTop: "3vh",
              marginBottom: "3vh",

              minWidth: "75vw",
              minHeight: "50vh",
            }}
          >
            <Home />
            <div style={{ marginTop: "5%", marginBottom: "2.5%" }}>
              <NavButtons />
            </div>
          </Paper>
        </Container>
      </main>
    </div>
  );
}
