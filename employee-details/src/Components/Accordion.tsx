import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Pagination, Stack } from "@mui/material";

type PersonListsProps = {
  names: {
    role: string;
    skillSet: string;
    experience: string;
    location: string;
  }[];
};

export default function ControlledAccordions(props: PersonListsProps) {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };
  const [pageCount, setPageCount] = React.useState(5);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Accordion</h1>

      {props.names.map((name, index) => {
        return (
          <Accordion
            expanded={expanded === `panel${index}`}
            onChange={handleChange(`panel${index}`)}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1bh-content"
              id="panel${index}bh-header"
            >
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                {name.role}
              </Typography>
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                {name.skillSet}
              </Typography>
              <Typography sx={{ width: "20%", flexShrink: 0 }}>
                {name.experience}
              </Typography>
              <Typography sx={{ width: "20%", color: "text.secondary" }}>
                {name.location}
              </Typography>
              <Typography sx={{ width: "10%" }}>
                <Button variant="outlined" component={Link} to="/login">
                  Edit
                </Button>
              </Typography>

              <Typography>
                <Button variant="outlined">View</Button>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Nulla facilisi. Phasellus sollicitudin nulla et quam mattis
                feugiat. Aliquam eget maximus est, id dignissim quam.
              </Typography>
            </AccordionDetails>
            <Stack>
              <Pagination count={pageCount} color="primary" />
            </Stack>
          </Accordion>
        );
      })}
    </div>
  );
}
