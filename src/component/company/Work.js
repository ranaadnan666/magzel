import * as React from "react";
import { Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";

const Work = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [icon, setIcon] = React.useState(false);

  const handleChange = () => {
    setIcon(!icon);
    setExpanded(false);
  };

  const handlesecond = () => {
    setExpanded(!expanded);
    setIcon(false);
  };

  return (
    <Box width={{ sx: "100%", md: "70%" }} mx={"auto"} p={2}>
      <h1 style={{ textAlign: "center" }}>Our Working Culture</h1>
      <Accordion expanded={icon}>
        <AccordionSummary
          onClick={handleChange}
          expandIcon={icon ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <h1>Flexibility</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Without a doubt, flexibility matters! We believe that it helps to
            achieve greater success and gives us the ability to create web and
            mobile software of the highest quality. Building custom software
            that resolves specific business problems isn't exactly an easy task.
            It is common for unexpected challenges to appear along the way.
            That's why we believe that a flexible approach is important,
            especially when it comes to development and new technology
            implementation. Our goal is to give all our clients the most
            productive discussions on their projects and top-quality
            technological solutions to make sure that their products become
            highly competitive and profitable in their respective business
            fields.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded}>
        <AccordionSummary
          onClick={handlesecond}
          expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <h1>Transparency</h1>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Transparency in working on the projects is what makes us one of the
            most trusted solution providers. We believe that such an approach is
            the only way to increase the efficiency of mutual collaboration. Our
            goal is to give our clients maximum security and safety on their
            information and projects using high-tech solutions. All new clients
            and challenges that come with their projects help us improve our
            transparency and increase its level in communication to ensure
            maximized quality of product development and its successful entering
            into the market. This approach gives clients an opportunity to
            participate in all stages of the product development and see what
            tools and technologies we offer and use. Thus, as our client, you'll
            be able to monitor the quality of the solution implementation
            ranging from a minor feature to complex software architecture.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Work;
