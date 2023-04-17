import { Grid, Box, Stack, Divider, Typography, IconButton } from '@mui/material'
import React, { useState } from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png'
import moment from 'moment/moment';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    const handleScroll = () => {
        if (window.pageYOffset > 200) {
            setShowButton(true);
        } else {
            setShowButton(false);
        }
    };

    window.addEventListener('scroll', handleScroll);
    return (
        <>

            {/* newsletter */}

            <Box sx={{ backgroundColor: 'black', color: 'white' }} mt={5}  >
                <Grid container spacing={4} width={'98%'} mx={'auto'} mb={5} padding={"10px 0px"} >
                    {/* logo */}
                    <Grid item lg={2.4} xs={12}>
                        <Box sx={{ bgcolor: 'white' ,width:'180px'}}>
                            <Link to='/' style={{
                                textDecoration: 'none',
                                color: 'white',

                            }}>

                                < img width={'100%'} height={"50px"} src={logo} alt="" style={{
                                    objectFit: 'cover',
                                    marginBottom: '-15px'
                                }} />
                            </Link>
                        </Box>
                        <Typography mt={5} display={{ xs: 'none', md: 'block' }}>
                        +923344826000
                        </Typography>
                      
                    </Grid>

                    <Grid item lg={2.4} display={{xs:'none',md:'block'}}>
                        <h3>Industries</h3>
                        <Stack direction={"column"} spacing={0.2} >

                            <p>Healthcare</p>
                            <p>Finance & Banking</p>
                            <p>Education</p>
                            <p>Media & Advertising</p>
                            <p>Retail</p>
                            <p> Travel & Transportation</p>
                            <p style={{
                                color: '#ad2322'
                            }}
                            > See more</p>

                        </Stack>
                    </Grid>
                    <Grid item lg={2.4} display={{ xs: 'none', md: 'block' }}>
                        <h3>Services</h3>
                        <Stack direction={"column"} spacing={0.2} >
                            <p>Web Development</p>
                            <p> Mobile Development</p>
                            <p> IT Consulting</p>
                            <p>Business Analysis</p>
                            <p> Quality Assurance</p>
                            <p>  Design Solutions</p>
                            <p style={{
                                color: '#ad2322'
                            }}
                            > See more</p>

                        </Stack>
                    </Grid>
                    <Grid item lg={2.4} display={{ xs: 'none', md: 'block' }}>
                        <h3>Expertise</h3>
                        <Stack direction={"column"} spacing={0.2} > 
                         
                            <p> Front-end Development</p>
                            <p> Back-end Development</p>
                            <p>SaaS Solutions</p>
                            <p> Data Mining & BI</p>
                            <p>AI & Chatbots</p>
                            <p> Cloud Solutions</p>
                            <p style={{
                                color: '#ad2322'
                            }}
                            > See more</p>

                        </Stack>
                    </Grid>
                    <Grid item lg={2.4} display={{ xs: 'none', md: 'block' }}>
                        <h3>About Us</h3>
                        <Stack direction={"column"} spacing={0.2} >
                            <p>Company</p>
                            <p>Academy</p>
                            <p>Career</p>
                            <p>Success stories</p>
                            <p>Blog</p>
                            <p style={{
                                color: '#ad2322'
                            }}
                            > See more</p>

                        </Stack>
                    </Grid>
                    <Grid item xs={12} width={"80%"} mx={'auto'}>
                        <Stack direction={"row"} spacing={5} alignItems={"center"} display={{xs:'flex',md:'none'}}  >
                           
                                <FacebookIcon />
                                <InstagramIcon />
                                <YouTubeIcon />
                                <LinkedInIcon />
                                <TwitterIcon />
                        </Stack>
                    </Grid>

                </Grid>


                {/* developed by: */}

                <Box width={'70%'} mx={'auto'} padding={"10px 0px"} >
                    <Divider sx={{ bgcolor: 'white' }} />
                    <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"}>
                        <p>© {moment().format('YYYY')} Magzel. All rights reserved | Terms of Use and Privacy Policy</p>
                        <Stack direction={"row"} spacing={5} alignItems={"center"} display={{ xs: 'none', md: 'flex' }}>
                            <Box>
                            <FacebookIcon />
                            </Box>
                            <Box>
                           <InstagramIcon/>
                            </Box>
                            <Box>
                             <YouTubeIcon />
                            </Box>
                            <Box>
                            <LinkedInIcon />
                            </Box>
                            <Box>
                         <TwitterIcon />
                            </Box>
                        </Stack>
                     </Stack>
                   
                </Box>
            </Box>
            <Box position="fixed" bottom={10} right={10} sx={{ display: showButton ? 'block' : 'none' }}>
                <IconButton onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="back to top">
                    <ArrowCircleUpIcon sx={{ color: '#fcd043 ',fontSize:'50px'}} />
                 
                </IconButton>
            </Box>
        </>
    )
}

export default Footer