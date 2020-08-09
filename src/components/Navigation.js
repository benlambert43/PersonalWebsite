import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
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
import RoomIcon from "@material-ui/icons/Room";
import Home from "./Home";
import Information from "./Information";
import Blog from "./Blog";
import Etc from "./Etc";
import "./NavStyling.css";
import NavButtons from "./NavButtons";
import { List } from "@material-ui/core";

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
    height: "50%",
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
    minHeight: `calc(100% - 61px - 0.75vw - 1vw - 0.75v)`,
  },
}));

export default function Navigation() {
  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);

  const RenderPage = () => {
    if (currentPage === 1) {
      return <Home />;
    } else if (currentPage === 2) {
      return <Information />;
    } else if (currentPage === 3) {
      return <Blog />;
    } else if (currentPage === 4) {
      return <Etc />;
    } else {
      return <Home />;
    }
  };

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
            style={{ marginBottom: 5 }}
          >
            benlambert.tech
          </Typography>
          <IconButton color="inherit"></IconButton>
        </Toolbar>
      </AppBar>
      {/* <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper),
        }}
        open={true}
      >
        <List>
          <div>
            <ListItem
              button
              onClick={() => {
                setCurrentPage(1);
              }}
            >
              <HomeIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                setCurrentPage(2);
              }}
            >
              <InfoOutlinedIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                setCurrentPage(3);
              }}
            >
              <WebOutlinedIcon />
            </ListItem>
            <Divider />
            <ListItem
              button
              onClick={() => {
                setCurrentPage(4);
              }}
            >
              <SentimentVerySatisfiedOutlinedIcon />
            </ListItem>
          </div>
        </List>
      </Drawer> */}
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
            }}
          >
            <RenderPage />
            <div style={{ marginTop: "5%" }}>
              <NavButtons buttonHandler={setCurrentPage} />
            </div>
          </Paper>
        </Container>
      </main>
    </div>
  );
}
