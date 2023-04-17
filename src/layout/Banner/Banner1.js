import { Box, Grid, Typography } from "@mui/material";
import React from "react";

function Banner1(props) {
  return (
    <Box sx={{ bgcolor: "white" }} pb={5}>
      <Grid
        container
        spacing={3}
        width={{ md: "70%", xs: "98%" }}
        alignItems={"center"}
        mx={"auto"}
        mb={5}
        mt={5}
      >
        {/* =================text===================== */}
        <Grid item md={6} xs={11}>
          <Box data-aos="zoom-in">
            <Typography
              variant="h2"
              sx={{
                color: "black",
                marginBottom: "1rem",
                fontWeight: { md: 700, xs: 500 },
                fontSize: { xs: "2rem", sm: "2.5rem" },
              }}
            >
              {props.title}
            </Typography>
            <Typography
              variant="h4"
              sx={{
                color: "black",
                marginBottom: "1rem",
                fontWeight: { md: 800, xs: 500 },
                fontSize: "1.5rem",
              }}
            >
              {props.head}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                width: { xs: "90%", sm: "100%" },
                textAlign: "justify",
                color: "black",
                lineHeight: "1.5",
                fontSize: { xs: "1rem", sm: "1.1rem" },
              }}
            >
              {props.disc}
            </Typography>
          </Box>
        </Grid>

        {/* =================image===================== */}
        <Grid item md={6} xs={11} order={{ xs: "-1", md: "0" }} data-aos="zoom-out">
          <img src={props.image} alt="web" width={"100%"} height={"auto"} />
        </Grid>
      </Grid>
    </Box>
  );
}

export default Banner1;
