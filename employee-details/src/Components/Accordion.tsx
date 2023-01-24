import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import candidateJson from "./ResourceDashboard/Candidate.json";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


export default function ControlledAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);
  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [rows] = React.useState(candidateJson);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion</h1>
      {rows.map((row, index) => {
        return (
          <Accordion
            key={row.experience}
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}bh-content`}
              id={`panel${index}bh-header`}
            >
                <Container>
                  <Row>
                    <Col md={3} xs={6}>{row.role}</Col>
                    <Col md={3} xs={6}>{row.skillSet}</Col>
                    <Col md={2} xs={6}>{row.experience}</Col>
                    <Col md={2} xs={6}>{row.location}</Col>
                    <Col md={1} xs={6}><Button component={Link} to="/login">Edit</Button></Col>
                    <Col md={1} xs={6}><Button>View</Button></Col>
                  </Row>
                </Container>

{/* 
                <Typography style={{ width: "50%", flexShrink: 0 }}>
                  {row.role}
                </Typography>
                <Typography
                  style={{ width: "50%", flexShrink: 0, textAlign: "left" }}
                >
                  {row.skillSet}
                </Typography>
                <Typography style={{ width: "50%", flexShrink: 0 }}>
                  {row.experience}
                </Typography>
                <Typography style={{ width: "50%", color: "textSecondary" }}>
                  {row.location}
                </Typography>
                <div
                  style={{ width: "10%", display: "flex", marginLeft: "6rem" }}
                >
                  <Button variant="outlined" component={Link} to="/login">
                    Edit
                  </Button>
                  <Button variant="outlined" style={{ marginLeft: "5px" }}>
                    View
                  </Button>
                </div> */}
            </AccordionSummary>
            <AccordionDetails>
            <Container>
                  <Row>
                    <Col md={3} xs={6}>{row.role}</Col>
                    <Col md={3} xs={6}>{row.skillSet}</Col>
                    <Col md={2} xs={6}>{row.experience}</Col>
                    <Col md={2} xs={6}>{row.location}</Col>
                    <Col md={1} xs={6}><Button component={Link} to="/login">Edit</Button></Col>
                    <Col md={1} xs={6}><Button>View</Button></Col>
                  </Row>
                </Container>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
