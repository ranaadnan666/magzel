import { Box, Button, Card, CardActions, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import servicesdata from './Data';
import { NavLink } from 'react-router-dom';
function Services() {
    return (
        <>
            <Typography paddingTop={3} variant='h2' sx={{
                fontWeight: '700', textAlign: 'center', fontSize: {
                    xs: '30px', md: '60px'
                }
            }} pt={5}>
                Services we provide
            </Typography>
            {/* <Box width={'70%'} mx={'auto'}  mt={2} >
                <Typography variant='p' >
                    We have a refined process after we have taken up a project. We offer the platform from where the projects take shape through stages of planning, testing and execution. In this aspect, we follow an agile methodology and run the project through a loop of feedback and constant improvement. We provide services like web 3.0 development and digital marketing services. Some of the services below are the following...
                </Typography>
            </Box> */}
          

            {/*==================service card============== */}
            
            <Grid container width={{ md: '70%', xs: '90%' }} mx={'auto'} spacing={2} mt={2} pb={5} >
                {servicesdata.map((item) => {
                    return (
                        <Grid item md="4" sm='6' xs="12" data-aos="zoom-in-down">
                            <NavLink to="/servicesdetail"  style={{textDecoration:'none'}}>
                    <Card  sx={{
                        cursor: 'pointer', padding: '10px',borderRadius:'15px',
                        ":hover": {
                            boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
                    }}}>
                                <CardContent>
                                    <Box mb={2} sx={{ color: 'black' }}>
                                        {item.icon}
                                    </Box>
                            <Typography variant="h3" component="div" sx={{
                                fontSize: '1.675em',
                                lineHeight: '120%',
                                // wordSpacing: '100vw',
                                fontWeight:'600'
                          }}>
                            {item.title}
                        </Typography>
                                
                            <Typography variant="body2" sx={{
                                fontSize: '1.125em',
                                 marginTop: ' 20px',
                                 height:'120px',
                                letterSpacing: '.002em',
                                marginBottom: '10px',
                                lineHeight:'150%'
                              
                        }} >
                          {item.disc}
                        </Typography>
                    </CardContent>
               
                    <CardActions>
                            <Button  sx={{
                                color: '#db517c',gap:'4px' ,fontSize:'16px'
                            }}>Learn More  <ArrowRightAltIcon sx={{ fontSize: '40px' }} /></Button>
                    </CardActions>
                      
                                </Card>
                            </NavLink>
            </Grid>
            
                    );
                })}
        </Grid >
        
      </>
  )
}

export default Services