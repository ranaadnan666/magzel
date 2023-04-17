import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import React from 'react'
import indestriesdata from './Data';
function Indestries() {
    return (
        <>
            <Typography pt={3} variant='h2' sx={{
                fontWeight: '700', textAlign: 'center', fontSize: {
                    xs: '30px', md: '60px'
                }
            }} paddingTop={5}>
                Our Industries
            </Typography>

            {/*==================service card============== */}

            <Grid container width={{ md: '70%', xs: '90%' }} mx={'auto'} spacing={2} mt={2} pb={5} >
                {indestriesdata.map((item) => {
                    return (
                        <Grid item md="4" sm='6' xs="12" data-aos="zoom-in">
                            <Card sx={{
                                cursor: 'pointer', padding: '10px', borderRadius: '15px',
                                ":hover": {
                                    boxShadow: 'rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px'
                                }
                            }}>
                                <CardMedia
                                    sx={{ height: 170 }}
                                    image={item.imgurl}
                                    title="green iguana"
                                />
                                <CardContent>
                                    <Typography variant="h3" component="div" sx={{
                                        fontSize: '1.875em',
                                        lineHeight: '120%',
                                        fontWeight: '600'
                                    }}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{
                                        fontSize: '1.125em',
                                        marginTop: ' 27px',
                                        height: '100px',
                                        letterSpacing: '.002em',
                                        marginBottom: '28px',
                                        lineHeight: '150%'

                                    }} >
                                        {item.disc}
                                    </Typography>
                                </CardContent>
                              
                            </Card>
                        </Grid>

                    );
                })}
            </Grid >

        </>
    )
}

export default Indestries
