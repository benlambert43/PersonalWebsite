import React from "react";
import ListItem from "@material-ui/core/ListItem";
import HomeIcon from "@material-ui/icons/Home";
import ListItemText from "@material-ui/core/ListItemText";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import WebOutlinedIcon from "@material-ui/icons/WebOutlined";
import SentimentVerySatisfiedOutlinedIcon from "@material-ui/icons/SentimentVerySatisfiedOutlined";
import PhotoLibraryOutlinedIcon from "@material-ui/icons/PhotoLibraryOutlined";
import { Divider } from "@material-ui/core";

export const mainListItems = (
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
      <PhotoLibraryOutlinedIcon />
    </ListItem>
    <Divider />

    <ListItem button>
      <SentimentVerySatisfiedOutlinedIcon />
    </ListItem>
    <Divider />
  </div>
);
