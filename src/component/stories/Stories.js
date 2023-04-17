import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid, Stack } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { NavLink } from 'react-router-dom';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        id:1,
        title: 'Decentralized SaaS Big Data Solution for a Network of Clinics',
        dis:'A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.',
        img1: 'https://cdn.light-it.net/img/success_stories/slide1.1.jpg',
        img2: 'https://cdn.light-it.net/img/success_stories/slide1.2.jpg',
    },
    {
        id: 2,
        title: 'Decentralized SaaS Big Data Solution for a Network of Clinics',
        dis: 'A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.',
        img1: 'https://cdn.light-it.net/img/success_stories/slide2.1.jpg',
        img2: 'https://cdn.light-it.net/img/success_stories/slide2.2.jpg',
    },
    {
        id: 3,
        title: 'Decentralized SaaS Big Data Solution for a Network of Clinics',
        dis: 'A comprehensive, scalable SAAS solution helps medical professionals operate MRI images more efficiently. It not only reduces the need for manual labor but also provides employees with an easy-to-use digital catalog. The platform has already been successfully incorporated into the infrastructure of one of the clinics in Israel and has processed more than 1 million images.',
        img1: 'https://cdn.light-it.net/img/success_stories/slide3.jpg',
     
    }
];

function Stories() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box sx={{background:'white'}}>
            <Typography mt={3} mb={5} variant='h2' sx={{
                fontWeight: '700', textAlign: 'center', fontSize: {
                    xs:'30px',md:'60px'
                }
            }} pt={5} >
                Success Stories
            </Typography>

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((item, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container width={{md:'70%',xs:'80'}} mx="auto" spacing={2}>
                              
                                <Grid item md="6" xs={12}>
                                    <Typography variant="h5" component="div" sx={{
                                        // fontSize: '1.875em',
                                        width: { xs: '90%', md: '100%' },
                                        mx: 'auto',
                                        lineHeight: '120%',
                                        fontWeight: '600'
                                        
                                    }}>
                                        {item.title}
                                    </Typography>

                                    <Typography variant="body2" sx={{
                                        width: { xs: '90%', md: '100%' },
                                       mx:'auto',
                                        fontSize: '1.125em',
                                        marginTop: ' 27px',
                                        letterSpacing: '.002em',
                                        marginBottom: '28px',
                                        lineHeight: '150%'

                                    }} >
                                        {item.dis}
                                    </Typography>
                                    <NavLink to="/project"  style={{textDecoration:'none'}}>
                                    <Button sx={{
                                        color: '#db517c', gap: '4px', fontSize: '16px'
                                    }} mt={2}>Learn More  <ArrowRightAltIcon sx={{ fontSize: '40px' }} /></Button></NavLink>
                                </Grid>
                                <Grid item md="6" xs={12} order={{xs:-1,md:0}}>
                                    <Stack direction="row" spacing={2} width={{xs:'70%',md:'100%'}} mx={'auto'}>
                                        <Box>
                                            <img

                                                style={{
                                                    height: { xs: 300, md: 500 },
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={item.img1}
                                                alt=""
                                            />
                                        </Box>
                                        <Box >
                                            <img

                                                style={{
                                                    marginTop:'40px',
                                                    height:{xs:300,md:500},
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={item.img2}
                                                alt=""
                                            />
                                        </Box>
                                        </Stack>
                                    
                                 
                                </Grid>
                                
                           </Grid>
                        ) : null}
                    </div>
                ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    background: 'white',
                    justifyContent: 'center',
                    marginTop:'50px',
                    "& .MuiMobileStepper-dot:not(.MuiMobileStepper-dotActive)": {
                        backgroundColor: '#f8bcb8' // set the inactive dot color
                    },
                    
                    "& .MuiMobileStepper-dot": {
                backgroundColor: '#db5156' // set the inactive dot color
                    }
                }}
            />
        </Box>
    );
}

export default Stories;
