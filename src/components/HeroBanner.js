import React from 'react'
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/HeroBannerImage.png";
import "../App.css";
// import { WidthFull } from '@mui/icons-material';

const HeroBanner = () => {
  return (
    <Box sx={{ mt: {lg: '140px', xs:'70px'}, ml: { lg: '55px'}}} position= 'relative' p= '20px'>
    <Typography color= '#FF2625' fontWeight= "600" sx={{textAlign: {xs: "center", lg: 'initial'}, fontSize: {xs: "26px", lg: "34px"}}}>
        Fitness Club
    </Typography>
   
    <Typography fontWeight= '700' sx={{ fontSize : {lg: '55px', xs: '40px'}, textAlign: {xs: 'center', lg: 'initial'}}}>
        Sweat, Smile <br /> and Repeat
    </Typography>
    <Typography lineHeight= '35px' mb= '40px' sx={{textAlign: {xs: 'center', lg: 'initial'},  fontSize: {xs: "20px", lg: "24px"}, mt: "10px"}}>
        Check out the most effective exercises
    </Typography>
  <Button variant='contained' color='error' href = '#exercises' sx={{ display: 'flex', justifyContent: {xs: 'center', lg: 'initial'}, margin : { xs: "0 auto" , lg: 'initial'}, fontSize: {xs: "15px", lg: "17px"}, width : {xs: "200px", lg: '210px'}, textAlign: {xs: 'center', lg: 'center'}}}>
    Explore Exercises
  </Button>
  <Typography fontWeight={600} color= '#ff2625' sx = {{ opacity: 0.1, display: {lg: 'block', xs: 'none'}, fontSize : {lg: '230px', xs: '100px'}}}>
    Exercises
  </Typography>
      <img src={HeroBannerImage} alt='heroimage' className='hero-banner-img' style={{ sm: '40px', xs: '20px'}}/>
    </Box>
  )
}

export default HeroBanner
