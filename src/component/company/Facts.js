import { Box, Grid } from "@mui/material";
import React from "react";

const Facts = () => {
  const Data = [
    {
      number: "200+",
      txt: "experts",
    },
    {
      number: "150+",
      txt: "years on market",
    },
    {
      number: "100+",
      txt: "end-to-end projects delivered",
    },
    {
      number: "300+",
      txt: "annual company growth rate",
    },
    {
      number: "600+",
      txt: "happy clients",
    },
    {
      number: "300+",
      txt: "offices and delivery locations",
    },
  ];
  return (
    <Box width={{ xs: "100%", md: "80%" }} mx={"auto"}>
      <h1 style={{ textAlign: "center" }}>Quick Facts</h1>
      <Grid container>
        {Data.map((item) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              textAlign={"center"}
              data-aos="zoom-in"
            >
              <h1 style={{ color: "red", fontSize: "3rem", fontWeight: "800" }}>
                {item.number}
              </h1>
              <span>{item.txt}</span>
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default Facts;
