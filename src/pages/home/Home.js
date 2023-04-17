import React from 'react'
import Services from '../../component/services/Services'
import Award from '../../component/home/Award'
import Indestries from '../../component/indestries/Indestries'
import Stories from '../../component/stories/Stories'
import Ceo from '../../component/indestries/Ceo'
import Banner2 from '../../layout/Banner/Banner2'
import bannerimg from '../../images/home-background.jpg'


function Home() {
  return (
    <div style={{ backgroundColor:'#f1f4fd'}}>
      
      {/* ================banner2=================*/}
      <Banner2
        title={"We are a Web 3.0 Development Company"}
        title2={" We are Experienced in the development of "}
        disc={"Magzel (pvt) Limited is one of the pioneers in web 3.0 development"}
        button={"Let's talk"}
        image={bannerimg } />
      <Services />
      <Award />
      <Indestries />
      <Stories />
      <Ceo/>
      
    </div>
  )
}

export default Home