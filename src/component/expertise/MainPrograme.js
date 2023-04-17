import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'
import { NavLink } from 'react-router-dom';
const programedata = [
    {
        id: 1,
        maintitle: 'Development Of Any Type & Complexity',
        title: 'Front-End Development',
        title1: ' Back- end Development',
        title2: 'Mobile Development',
        title3: 'SaaS Solutionst',
    },
    {
        id: 2,
        maintitle: 'Complex & Innovative Technologies',
        title: 'Data Mining & BI',
        title1: 'AI & Chatbots',
        title2: 'Cloud Solutions',
    },
    {

        id: 3,
        maintitle: 'Data & Processes Organization',
        title: 'High Load',
        title1: 'Front-End Development',
        title2: 'DevOps',
        title3: 'Quality Testing',
    }
]
function MainPrograme() {
    return (
        <>
            <Box pt={5} mb={5}>
                <Grid container spacing={6} width={{ xs: '95%', md: '70%' }} mx={'auto'}>
                    {programedata.map((item) => {
                        return (
                            <Grid item md={4} xs={12}>

                                <Typography variant="h3" component="div" sx={{
                                    fontSize: '1.675em',
                                    lineHeight: '120%',
                                    fontWeight: '600'
                                }}>
                                    {item.maintitle}
                                </Typography>
                                <Stack direction={'column'} mt={5} color={"#db5156"}>
                                    <NavLink to="/detail" style={{ color: "#db5156", textDecoration: 'none' }}>  <Typography variant='h6' >
                                        {item.title}

                                    </Typography></NavLink>
                                    <NavLink to="/detail" style={{ color: "#db5156", textDecoration: 'none' }}>   <Typography variant='h6'>
                                        {item.title1}

                                    </Typography></NavLink>
                                    <NavLink to="/detail" style={{ color: "#db5156", textDecoration: 'none' }}>   <Typography variant='h6'>
                                        {item.title2}

                                    </Typography></NavLink>
                                    <NavLink to="/detail" style={{ color: "#db5156", textDecoration: 'none' }}>   <Typography variant='h6' mb={5}>
                                        {item.title3}

                                    </Typography></NavLink>
                                </Stack>
                            </Grid>
                        );
                    })}
                </Grid>

            </Box>
        </>
    )
}

export default MainPrograme