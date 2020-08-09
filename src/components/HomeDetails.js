import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { List, ListItem, Divider } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function SimpleAccordion() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
            Skills and Tech Stack
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div" align="right">
            <List>
              <ListItem>
                <Typography component="div" style={{ fontSize: 20 }}>
                  Skills <Divider />
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  TypeScript / JavaScript
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  3 years of JavaScript software development experience, using
                  web frameworks like React, React Native and Angular as well as
                  server-side frameworks such as NodeJS and Deno.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  Swift and iOS Development
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  Building and deploying iOS and iPadOS applications and
                  translating JavaScript web applications into native Swift
                  code.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  Python
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  Data analysis and microservices using Flask. Building device
                  driver libraries as an API and deploying them on a web server.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  C / C++
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  Systems programming and low level API calls for more
                  performant React Native applications. Creating extremely
                  lightweight service providers.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography> </Typography>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Work Experience</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography component="div" align="right">
            <List>
              <ListItem>
                <Typography component="div" style={{ fontSize: 20 }}>
                  Work Experience <Divider />
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  Software Developer at IGNW
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  2 consecutive summer internships at{" "}
                  <a
                    href="https://www.ignw.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    IGNW
                  </a>{" "}
                  developing full stack JavaScript applications. Production
                  applications were built with an Agile team using advanced
                  development practices such as Jest / Cypress unit testing, CI
                  / CD and database mocking.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  DevOps Engineer at IGNW
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  1 summer internship building and deploying Cisco HyperFlex
                  Partner Enablement Lab. Fully automated environment for
                  training Cisco customers on how to best utilize HyperFlex
                  equipment with modern technology stacks.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  HackRU Software Engineer
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  Building new features and maintaining the Rutgers Hackathon
                  web application.
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textPrimary" style={{ fontSize: 15 }}>
                  Lab staff at Rutgers OIT
                </Typography>
              </ListItem>
              <ListItem>
                <Typography color="textSecondary" style={{ fontSize: 12 }}>
                  Assisting students, faculty and staff with IT related issues.
                </Typography>
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography className={classes.heading}>Contact Me</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <List>
            <ListItem>
              <Typography color="textPrimary" style={{ fontSize: 15 }}>
                <b>
                  Got an idea? Need advice on modern software development? Want
                  to build the next big application? Reach out!
                </b>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography color="textPrimary" style={{ fontSize: 15 }}>
                <a href="mailto:benlambertdev43@gmail.com">Send me an email</a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography color="textPrimary" style={{ fontSize: 15 }}>
                <a
                  href="https://www.linkedin.com/in/benlambert43/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </Typography>
            </ListItem>
            <ListItem>
              <Typography color="textPrimary" style={{ fontSize: 15 }}>
                <a
                  href="https://twitter.com/DeadEndWorlds_"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>
              </Typography>
            </ListItem>
          </List>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
