import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import web from '../../images/web.jpg'
import ProvideServices from './ProvideServices';
import RecentProject from '../expertise/RecentProject';
function ServicesDetail() {
    return (
        <>
            <Box width={{ xs: '95%', md: '80%' }} mx={'auto'} mt={5}>
                <NavLink to="/services" style={{ color: "#db5156", textDecoration: 'none' }}>
                    <Stack direction={"row"} alignItems={"center"} spacing={2} >
                        <KeyboardBackspaceIcon sx={{ fontSize: '40px' }} />
                        <Typography fontSize={"20px"}>
                            Back
                        </Typography>

                    </Stack></NavLink>
            </Box>
            <Grid container spacing={3} width={{ xs: '95%', md: '80%'}} mx={'auto'} mb={5} >
                <Grid item md={6}>
                   
                    <Box >

                        <Typography variant="h2" sx={{
                            color: 'black',
                            marginBottom: '1rem',
                            fontWeight: { md: 700, xs: 500 },
                            fontSize: { xs: '2rem', sm: '2.5rem' },
                        }}>

                            Web Development For Business Process Automation
                        </Typography>
                        <Typography variant="h4" sx={{

                            color: 'black',
                            marginBottom: '1rem',
                            fontWeight: { md: 700, xs: 500 },
                            fontSize: '1.5rem',
                        }}>
                            We use and provide the best web development software
                        </Typography>

                        <Typography variant="body1" sx={{
                            width: { xs: '90%', sm: '100%' },
                            textAlign: 'justify',
                            color: 'black',
                            lineHeight: '1.5',
                            fontSize: { xs: '1rem', sm: '1.1rem' },

                        }}>
                            To us, the web development process is fascinating because each and every web development project is a chance to create something interesting and new using cutting-edge web development tools. Our vast experience in custom web application development has contributed to the formation and growth of different companies. Every web developer in our team understands that clients depend on the quality of their work, thus, puts all efforts into giving the best result possible.

                        </Typography>

                    </Box>
                </Grid>
                <Grid item md={6} order={{xs:'-1',md:0}}>
                    <img src={web} alt="web" width={"100%"} height={"auto"} />
                </Grid>

            </Grid >


            <Box>
            <ProvideServices/>
            </Box>
            <RecentProject/>
        </>
    )
}

export default ServicesDetail