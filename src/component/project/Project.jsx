import React from "react";
import img1 from "../../../src/images/project/pro4.png";
import img2 from "../../../src/images/project/pro8.png";
import img3 from "../../../src/images/project/pro6.png";
import img4 from "../../../src/images/pro1.png";
import img5 from "../../../src/images/pro2.png";
import img6 from "../../../src/images/pro3.png";
import { Stack, Box } from "@mui/material";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Project = () => {
  const Data = [
    {
      id: 1,
      title: "DMP Analytics",
      img: img1,
      bgcolor: "red",
      des: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
    {
      id: 2,
      title: "DMP Analytics",
      img: img2,
      bgcolor: "blue",
      des: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
    {
      id: 3,
      title: "DMP Analytics",
      img: img3,
      bgcolor: "gray",
      des: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
    {
      id: 4,
      title: "DMP Analytics",
      img: img4,
      bgcolor: "green",
      des: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
    {
      id: 5,
      title: "DMP Analytics",
      img: img5,
      bgcolor: "tomato",
      des: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
    {
      id: 6,
      title: "DMP Analytics",
      img: img6,
      bgcolor: "red",
      des: "Our team built a Big Data processing tool that allows the analytical team of a large corporation to load, process, and save big amounts of data to receive the most accurate and extended reports for worldwide brands. The platform uses AWS cloud solutions to increase data protection and decrease resources on physical servers at the same time.",
    },
  ];
  return (
    <Stack direction={"column"} rowGap={3} p={1}>
      <h1 style={{ textAlign: "center" }}>YOUR PROJECT. OUR SOLUTION.</h1>
      {Data.map((item, i) => {
        return (
          <Stack
            key={i}
            width={{ xs: "90%", md: "70%" }}
            mx={"auto"}
            sx={{ backgroundColor: `${item.bgcolor}`, borderRadius: "15px" }}
            direction={{ md: "column" }}
            justifyContent={"space-between"}
            p={{xs:2,md:5}}
          >
            <Stack
              direction={{ xs: "column", md: "row" }}
              mx={"auto"}
              justifyContent={"space-between"}
            >
              <Box
                width={{ xs: "100%", md: "50%" }}
                mt={{ md: 0, lg: 4 }}
                data-aos="zoom-in-down"
              >
                <h1 style={{ color: "white" }}>{item.title}</h1>
                <span style={{ color: "white" }}>{item.des}</span>
              </Box>
              <Box
                width={{ xs: "100%", md: "50%" }}
                order={{ xs: "-1", md: "0" }}
           
                data-aos="zoom-in-up"
              >
                <img style={{ width: "100%" }} src={item.img}  alt=""/>
              </Box>
            </Stack>
            <Button
              sx={{
                width: "200px",
                marginTop: "15px",
                color: "white",
                border: "1px solid white",
              }}
              variant="outlined"
              endIcon={<ArrowRightAltIcon />}
            >
              View case study
            </Button>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default Project;
