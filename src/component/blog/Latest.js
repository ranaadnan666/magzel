import React from 'react'
import BlogCard from '../../layout/card/Card'
import Data from './CardData'
import { Grid } from '@mui/material'

const Latest = () => {
  return (
    <Grid container gap={2} width={"100%"} justifyContent={"space-between"}>
            {
                Data.map((item,i)=>{
                    return(
                    <Grid  key={i} item xs={12} sm={5.5} md={5.5} lg={3.5} data-aos="zoom-in-up">
                    <BlogCard img={item.img} title={item.title} des={item.des}/> 
                    </Grid>
                 )
                })
            }
       
    </Grid>
  )
}

export default Latest