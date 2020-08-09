import React from "react";
import Avatar from "@material-ui/core/Avatar";
import profPic from "../assets/IMG_0920_original.jpg";
import Typography from "@material-ui/core/Typography";
import HomeDetails from "./HomeDetails";

const Home = () => {
  return (
    <div align={"center"}>
      <Avatar
        alt="Ben Lambert"
        src={profPic}
        style={{
          justifySelf: "center",
          minWidth: "10vh",
          minHeight: "10vh",
          marginTop: "3vh",
          marginBottom: "3vh",
        }}
      />
      <br />
      <Typography component="div" variant="h4" align={"center"}>
        Hi!
        <Typography variant="body1">
          <br />
          My name is Ben Lambert.
        </Typography>
        <br />
        <Typography style={{ marginRight: 10, marginLeft: 10 }}>
          I am a full stack software engineer living in Denver, Colorado.
        </Typography>
        <br />
        <Typography variant="body1" style={{ marginRight: 10, marginLeft: 10 }}>
          I am currently a senior at Rutgers University, majoring in Computer
          Science and minoring in Cognitive Science. <br /> Graduating in May
          2021.
        </Typography>
        <br />
        <HomeDetails />
      </Typography>
    </div>
  );
};

export default Home;
