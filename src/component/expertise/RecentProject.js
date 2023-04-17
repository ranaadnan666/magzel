import React from 'react'
import slide from '../../images/programebg.jpg'
import { Box, Button, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'


function RecentProject() {
    return (
        <div style={{ position: 'relative' }}>
            <img
                src={slide}
                alt="Artist"
                style={{
                    width: '100%',
                    height: '40vh',
                    objectFit: 'cover',
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    width: '100%',
                    height: '100%',
                    // backgroundColor: 'rgba(0, 0, 0, 0.5)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                }}
            >
                <Box width={{ md: '70%', xs: '90%', }} textAlign={"center"}>
                    <Typography variant="h2" style={{ color: 'black', marginBottom: '1rem', fontWeight: { md: '800', xs: '500' } }}>

                        Discover our recent projects
                    </Typography>
                    <NavLink to="/project" style={{textDecoration:'none'}}>
                    <Button variant="contained" sx={{
                        bgcolor: '  #db5156', color: 'white', marginTop: '10px', padding: '14.5px 64.5px', borderRadius: '64px', ":hover": {
                            bgcolor: '  #db5156'
                        }
                        }} >Learn More</Button> </NavLink>

                </Box>



            </div>
        </div>
    )
}

export default RecentProject




