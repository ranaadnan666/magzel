import React from 'react'
import Services from '../../component/services/Services'
import Ceo from '../../component/indestries/Ceo'
import { Box } from '@mui/material'
import servicebg from '../../images/services-bg (1).jpg'
import Banner2 from '../../layout/Banner/Banner2'
function Service() {
  return (
      <div style={{ backgroundColor: '#f1f4fd' }}>
          {/* ================banner2=================*/}
          <Banner2
              title={'Software Solutions For All Needs'}
              title3={"Widen your business opportunities with our services"}
              disc={'As an IT company, we offer a wide range of consulting, development, and quality testing services. For more than 10 years in the field of web and mobile development, our team has created hundreds of websites, mobile applications, different kinds of software and individual components, and more.'}
              image={servicebg} />
          <Services />
          <Box sx={{backgroundColor:'white',paddingTop:'10px'}}>
              <Ceo /> 
          </Box>
        
      </div>
  )
}

export default Service