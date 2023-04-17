import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Typography from '@mui/material/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid, Stack } from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
    {
        id: 1,
        title: 'We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.',
        dis: 'Senegal Country Director, Head of QA  ',
        name:'Muhammad Ahmad',
        img1: 'https://cdn.light-it.net/icons/testimonials/edacy.svg',
        
    },
    {
        id: 2,
        title: 'We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.',
        dis: 'Ceo',
        name: 'Saim Raza',
        img1: 'https://cdn.light-it.net/icons/testimonials/tigerq.svg',
      
    },
    {
        id: 3,
        title: 'We found the most impressive about Light IT Global their engagement and availability as well as their focus on quality. Our cooperation was very successful, and the process was really clear.',
        name: 'Sania Mirza',
        dis: 'Director Of Technology ',
        img1: 'https://cdn.light-it.net/icons/testimonials/tutorpeers.svg',

    }
];

function Ceo() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };

    return (
        <Box mt={ 5 }  >
           

            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((item, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid container width={{ md: '70%', xs: '90%' }} mx="auto" spacing={2}>

                                
                                <Grid item md='4'xs={12} >
                                    <Stack direction="row" spacing={2}>
                                        <Box>
                                            <img

                                                style={{
                                                    height:"auto",
                                                    display: 'block',
                                                    overflow: 'hidden',
                                                    width: '100%',
                                                }}
                                                src={item.img1}
                                                alt=""
                                            />
                                        </Box>
                                        
                                    </Stack>


                                </Grid>
                                <Grid item md="8" xs={12}>
                                    <Typography variant="h6" component="div" sx={{
                                        // fontSize: '1.875em',
                                        lineHeight: '120%',
                                        fontWeight: '600'
                                    }}>
                                        <span style={{ color:'#db5156',fontSize:'30px'}}>"</span> {item.title}
                                    </Typography>
                                    <Typography sx={{marginTop:'20px',fontSize:'25px',color:'black',fontWeight:600}}>{item.name}</Typography>

                                    <Typography variant="body2" sx={{
                                        fontSize: '1.125em',
                                        letterSpacing: '.002em',
                                        marginBottom: '28px',
                                        lineHeight: '150%'

                                    }} >
                                        {item.dis}
                                    </Typography>

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
                    backgroundColor: '#f1f4fd',
                    justifyContent: 'center',
                    marginTop: '50px',
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

export default Ceo;
