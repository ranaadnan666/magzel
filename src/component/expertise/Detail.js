import React from 'react'
import slide from '../../images/project-bg.png'
import { Box,  Stack,  Typography } from '@mui/material'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import { NavLink } from 'react-router-dom';
;

function Detail() {
    return (
        <div style={{ position: 'relative' }}>

            <img
                src={slide}
                alt="Artist"
                style={{
                    width: '100%',
                    height: '70vh',
                    objectFit: 'cover',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '70%',
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box width={{ md: '60%', xs: '90%', }} mb={5} >
                    <NavLink to="/expertise" style={{ color: "#db5156", textDecoration: 'none' }}>   <Stack direction={"row"} alignItems={"center"} spacing={2} >
                        <KeyboardBackspaceIcon sx={{fontSize:'40px'}} />
                        <Typography fontSize={"20px"}>
                            Back
                        </Typography>

                    </Stack></NavLink>
                </Box>
                <Box width={{ md: '50%', xs: '90%', }} >
                    
                    <Typography variant="h2" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: '800', xs: '500' } }}>

                        Front-End Development
                    </Typography>
                    <Typography variant="h5" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: '800', xs: '500' } }}>
                        This developmental expertise usually interacts with Mobile Development, SaaS Solutions, Back-end Development
                    </Typography>

                    <Typography variant="body1" style={{ color: 'black', fontSize: '1.25em' }}>
                        Front-end is, basically, a client-side part of any website or a web page. Since the result of the front-end development is visible to users, it has to be aesthetically pleasing and technologically flawless at the same time. Our front-end specialists use a variety of development tools (such as HTML5, JavaScript, AngularJS, and a lot more) to make sure that each and every client gets exactly what they need and that the websites we create get the most user-friendly interface and navigation.

                    </Typography>

                </Box>



            </div>
        </div>
    )
}

export default Detail
