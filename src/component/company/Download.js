import { Box, Button, Stack } from "@mui/material";
import React from "react";

const Download = () => {
  return (
    <Box sx={{ backgroundColor: "#db5156" }}>
      <Stack
        width={{ xs: "100%", md: "70%" }}
        mx={"auto"}
        direction={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        height={"250px"}
      >
        <h1 style={{ color: "white", textAlign: "center" }}>
          Download Company Presentation
        </h1>
        <Button
          sx={{ color: "white", border: "1px solid white" }}
          variant="outlined"
        >
          Download
        </Button>
      </Stack>
    </Box>
  );
};

export default Download;
