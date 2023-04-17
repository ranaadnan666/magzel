import React from "react";
import img1 from "../../../src//images/team/team1.png";
import img2 from "../../../src//images/team/team2.png";
import img3 from "../../../src//images/team/team3.png";
import img4 from "../../../src//images/team/team4.png";
import img5 from "../../../src/images/Design.png";
import { Grid, Stack, Typography } from "@mui/material";
import BlogCard from "../../layout/card/Card";
import Button from "@mui/material/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
const Team = () => {
  const Data = [
    {
      id: 1,
      img: img1,
      title: "Mr,Arham ",
      des: " CEO  ",
    },
    {
      id: 2,
      img: img2,
      title: " Mr,Naveed ",
      des: "Head Of HR",
    },
    {
      id: 3,
      img: img3,
      title: " Umaima  ",
      des: " Bussiness Developer ",
    },
    {
      id: 4,
      img: img4,
      title: "Mr,Usman  ",
      des: " Hr Manager ",
    },
  ];
  return (
    <>
      <h1 style={{ textAlign: "center" }}>Our Leadership Team</h1>
      <Grid
        container
        width={{ xs: "100%", md: "70%" }}
        justifyContent={"space-between"}
        mx={"auto"}
        gap={1}
        p={1}
      >
        {Data.map((item, i) => {
          return (
            <Grid key={i} item xs={12} sm={6} md={2.9} data-aos="fade-up">
              <BlogCard
                team={"team"}
                img={item.img}
                title={item.title}
                des={item.des}
              />
            </Grid>
          );
        })}
      </Grid>
      <Stack
        direction={{ xs: "column", md: "row" }}
        width={{ xs: "100%", md: "70%" }}
        mx={"auto"}
        p={2}
      >
        <Stack width={{ xs: "100%", md: "50%" }}>
          <h1>Magzel Academy</h1>
          <Typography sx={{ width: { xs: "100%", md: "60%" } }}>
            Join our academy to upgrade your knowledge and skills in the most
            popular programming languages, software practices, app development ,
            and a lot more. Our courses will show you the way from just knowing
            fundamentals to mastering cutting-edge technologies.
          </Typography>
          <Button
            sx={{ width: "200px", marginTop: "15px" }}
            variant="outlined"
            endIcon={<ArrowRightAltIcon />}
          >
            Learn More
          </Button>
        </Stack>
        <Stack width={{ xs: "100%", md: "50%" }}>
          <img src={img5} alt="" />
        </Stack>
      </Stack>
    </>
  );
};

export default Team;
