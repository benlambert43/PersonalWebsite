import React from "react";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function NavButtons(props) {
  const classes = useStyles();

  const pageSwitch = (page) => {
    props.buttonHandler(page);
  };

  return (
    <div className={classes.root}>
      <ButtonGroup size="small" aria-label="small outlined button group">
        <Button onClick={() => pageSwitch(1)}>Home</Button>
        <Button onClick={() => pageSwitch(2)}>Info</Button>
        <Button onClick={() => pageSwitch(3)}>Blog</Button>
        <Button onClick={() => pageSwitch(4)}>Etc.</Button>
      </ButtonGroup>
    </div>
  );
}
