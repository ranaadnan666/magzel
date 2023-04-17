import { Grid } from '@mui/material'
import React from 'react'
import ClientSlide from './ImgesCrousal'
function Client() {
  

  return (
      <div style={{
          padding:'10px 0px',backgroundColor:'white'
      }}>
          <Grid container width={{
              xs:'90%',md:'70%'
          }} mx={"auto"} spacing={5}> 
              
              <Grid item md={4} xs={12}>
                  <h1>Our Clients</h1>
                  <p> We are proud to tell that for over 10 years of providing software solutions we have collaborated with a significant number of companies that operate in different industries.</p>
              </Grid>
              {/* crousal images */}
              <Grid item md={8} xs={12}>
                 <ClientSlide/>
              </Grid>
              
          </Grid>
          
    </div>
  )
}

export default Client
