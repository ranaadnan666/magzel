import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
const BlogCard = (props) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Card
      sx={{
        cursor: "pointer",
        padding: "10px",
        borderRadius: "15px",
        ":hover": {
          boxShadow:
            "rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px",
        },
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="270"
          image={props.img}
          alt="green iguana"
        />

        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {isReadMore ? props.des.slice(0, 120) : props.des}

            {props.team === "team" ? null : (
              <Box mt={1}>
                {isReadMore ? (
                  <Button onClick={toggleReadMore} variant="outlined">
                    read more
                  </Button>
                ) : (
                  <Button onClick={toggleReadMore} variant="outlined">
                    show less
                  </Button>
                )}
              </Box>
            )}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BlogCard;
