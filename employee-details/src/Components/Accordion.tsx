import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import candidateJson from "./ResourceDashboard/Candidate.json";

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
              <div style={{ display: "flex" }}>
                <Typography style={{ width: "50%", flexShrink: 0 }}>
                  {row.role}
                </Typography>
                <Typography style={{ width: "20%", flexShrink: 0 }}>
                  {row.skillSet}
                </Typography>
                <Typography style={{ width: "20%", flexShrink: 0 }}>
                  {row.experience}
                </Typography>
                <Typography style={{ width: "20%", color: "textSecondary" }}>
                  {row.location}
                </Typography>
                <div style={{ width: "10%", display: "flex" }}>
                  <Button variant="outlined" component={Link} to="/login">
                    Edit
                  </Button>
                  <Button variant="outlined" style={{ marginLeft: "5px" }}>
                    View
                  </Button>
                </div>
              </div>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                {row.location}
              </Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </div>
  );
}
