import { Box, Grid, Typography } from "@mui/material";
import React from "react";
const award = [
  {
    id: 1,
    url: require("../../images/top_android_dev.png"),
  },
  {
    id: 2,
    url: require("../../images/clutch.png"),
  },
  {
    id: 3,
    url: require("../../images/top_app_dev.png"),
  },
  {
    id: 4,
    url: require("../../images/it_services.png"),
  },
  {
    id: 5,
    url: require("../../images/clutch2.png"),
  },
  {
    id: 6,
    url: require("../../images/top_ios_dev.png"),
  },
  {
    id: 7,
    url: require("../../images/it_services2.png"),
  },
  {
    id: 8,
    url: require("../../images/clutch3.png"),
  },
  {
    id: 9,
    url: require("../../images/up_work.png"),
  },
  {
    id: 10,
    url: require("../../images/DOU.png"),
  },
];

function Award() {
  return (
    <>
      <Box sx={{ bgcolor: "#ffffff", padding: "15px 0px" }}>
        <Typography
          mt={3}
          variant="h2"
          sx={{
            fontWeight: "700",
            textAlign: "center",
            fontSize: {
              xs: "30px",
              md: "60px",
            },
          }}
          pt={5}
        >
          Awards and Recognitions
        </Typography>

        {/*==================service card============== */}

        <Grid
          container
          width={{ md: "70%", xs: "90%" }}
          mx={"auto"}
          spacing={2}
          mt={2}
          pb={5}
        >
          {award.map((item) => {
            return (
              <Grid item md="2.4" sm={4} xs={6}>
                <Box>
                  <img src={item.url} alt="" width={"100%"} height={"auto"} />
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </>
  );
}

export default Award;
