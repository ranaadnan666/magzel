import React from 'react'
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import {  Grid, Stack } from '@mui/material';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
    {
        id: 1,
        url1: require('../../images/top_android_dev.png'),
        url2: require('../../images/clutch.png'),
        url3: require('../../images/top_app_dev.png'),
        url4: require('../../images/it_services.png'),
        url5: require('../../images/clutch2.png'),
        url6: require('../../images/top_ios_dev.png')

    },
    {
        id: 2,
        url1: require('../../images/top_android_dev.png'),
        url2: require('../../images/clutch.png'),
        url3: require('../../images/top_app_dev.png'),
        url4: require('../../images/it_services.png'),
        url5: require('../../images/clutch2.png'),
        url6: require('../../images/top_ios_dev.png')

    },

]

function ClientSlide() {
    const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const maxSteps = images.length;

    const handleStepChange = (step) => {
        setActiveStep(step);
    };
    return (
        <>


            <AutoPlaySwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={activeStep}
                onChangeIndex={handleStepChange}
                enableMouseEvents
            >
                {images.map((item, index) => (
                    <div key={index}>
                        {Math.abs(activeStep - index) <= 2 ? (
                            <Grid item md={12} >
                              
                                <Stack direction="row">
                                    
                                            <img src={item.url1} alt="" width={"100%"} height={"auto"} />

                                      
                                    
                                            <img src={item.url2} alt="" width={"100%"} height={"auto"} />

                                   
                                    
                                            <img src={item.url3} alt="" width={"100%"} height={"auto"} />

                                      

                                </Stack>
                                <Stack direction="row">
                                      
                                            <img src={item.url4} alt="" width={"100%"} height={"auto"} />

                                      
                                        
                                            <img src={item.url5} alt="" width={"100%"} height={"auto"} />

                                       
                                      
                                            <img src={item.url6} alt="" width={"100%"} height={"auto"} />

                                    

                                </Stack>
                              
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
                    marginTop: '50px',
                    "& .MuiMobileStepper-dot:not(.MuiMobileStepper-dotActive)": {
                        backgroundColor: '#f8bcb8' // set the inactive dot color
                    },

                    "& .MuiMobileStepper-dot": {
                        backgroundColor: '#db5156' // set the inactive dot color
                    }
                }}
            />


        </>
    )
}

export default ClientSlide