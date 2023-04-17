import {  Button,  Stack } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const Contact = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Extract form data
    const formData = new FormData(event.target);
    const fullname = formData.get("fullname");
    const email = formData.get("email");
    const message = formData.get("message");

    // Construct email body
    const emailBody = `Full Name: ${fullname}%0D%0A%0D%0AEmail: ${email}%0D%0A%0D%0AMessage: ${message}`;

    // Construct mailto link
    const subject = "New Contact Form Submission";
    const mailToLink = `mailto:rizorizvi928@gmail.com?subject=${subject}&body=${emailBody}`;

    // Open user's default email client with pre-filled email
    window.location.href = mailToLink;

    // Reset form fields and show confirmation message
    event.target.reset();
  };

  const award = [
    {
      id: 1,
      url: require("../../images/clutch.png"),
    },
    {
      id: 2,
      url: require("../../images/top_app_dev.png"),
    },
    {
      id: 3,
      url: require("../../images/it_services.png"),
    },
    {
      id: 4,
      url: require("../../images/clutch2.png"),
    },
    {
      id: 5,
      url: require("../../images/it_services2.png"),
    },
    {
      id: 1,
      url: require("../../images/clutch.png"),
    },
    {
      id: 6,
      url: require("../../images/clutch3.png"),
    },
    {
      id: 7,
      url: require("../../images/up_work.png"),
    },
    {
      id: 8,
      url: require("../../images/DOU.png"),
    },
  ];
  return (
    <>
      <Box sx={{ textAlign: "center" }} p={1} id="contact">
        <h1>Have a project in mind?</h1>
        <h3>Book a free consultation with tech experts</h3>
      </Box>

      <Stack
        direction={{ xs: "column-reverse", md: "row" }}
        width={{ xs: "100%", md: "70%" }}
        mx="auto"
        p={2}
        justifyContent={"space-between"}
      >
        <Stack width={{ xs: "100%", md: "40%" }}>
          <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
            data-aos="fade-up"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField
                  autoComplete="given-name"
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
               <Grid item xs={12} >
                <textarea
                style={{width:"100%",padding:"10px",resize:"none"}}
                  required
                  rows={5}
                  fullWidth
                  id="company"
                  placeholder="Write Message?"
                  name="message"
                  autoComplete="organization"
                
                />
              </Grid>
            
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </Box>
        </Stack>
        <Grid container width={{ xs: "100%", md: "50%" }}>
          {award.map((action) => {
            return (
              <Grid item xs={6} md={4} data-aos="fade-down">
                <img style={{ width: "180px" }} src={action.url} alt="i" />
              </Grid>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default Contact;
