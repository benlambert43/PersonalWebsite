import React from "react";
import Typography from "@material-ui/core/Typography";

const Information = () => {
  return (
    <div align={"center"}>
      <br />
      <Typography
        component="div"
        variant="h5"
        align={"center"}
        style={{ marginRight: "5vw", marginLeft: "5vw" }}
      >
        This page (Info) is under construction.{" "}
        <Typography variant="body1">
          <br />
          <br />
        </Typography>
        <br />
        <Typography style={{ marginRight: 10, marginLeft: 10 }}>
          <br />
        </Typography>
        <br />
        <Typography variant="body1" style={{ marginRight: 10, marginLeft: 10 }}>
          Please check back later. Thank you!
        </Typography>
        <br />
      </Typography>
    </div>
  );
};

export default Information;
