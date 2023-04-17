import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Latest from "./Latest";
import { Stack } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Stack
        sx={{ width: { xs: "100%", md: "70%" } }}
        mx={"auto"}
        justifyContent={"space-between"}
      >
        <Stack
          sx={{ borderBottom: 1, borderColor: "divider" }}
          direction={{ xs: "column", md: "row" }}
          justifyContent={"space-between"}
        >
          <Stack marginTop={2} p={1}>
            <input
              style={{  padding: "7px", borderRadius: "15px",border:"1px solid gray" }}
              type="text"
              placeholder="find Article..."
            />
          </Stack>

          <Box>
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              allowScrollButtonsMobile
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              sx={{
                "& .MuiTabs-indicator": {
                  backgroundColor: "#eb5757",
                },
                "& .MuiTab-root": {
                  color: "black",
                  fontWeight: "normal",
                },
                "& .Mui-selected": {
                  fontWeight: "bold",
                },
              }}
            >
              <Tab label="Latest" {...a11yProps(0)} />
              <Tab label="Tech" {...a11yProps(1)} />
              <Tab label="Designs" {...a11yProps(2)} />
              <Tab label="Light IT" {...a11yProps(3)} />
            </Tabs>
          </Box>
        </Stack>
        <TabPanel value={value} index={0}>
          <Latest />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Latest />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Latest />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Latest />
        </TabPanel>
      </Stack>
    </>
  );
}
