import React from 'react'
import MainPrograme from '../../component/expertise/MainPrograme'
import RecentProject from '../../component/expertise/RecentProject'
import Banner1 from '../../layout/Banner/Banner1'
import bannerimg from '../../images/expertise.png'
function Expertise() {
  return (
    <>
      <Banner1
        title={'Leading Technologies for Effective Solutions'}
        disc={'We want to be the best ones at what we do, and it is only logical that we use advanced technologies when working on our projects. The Light IT Global team understands that without professional knowledge and skills in cutting-edge technologies implementation, it would be difficult to provide a wide range of solutions. That is why, we try new technologies once they appear and continue using them if they bring a better perspective on problem-solving.'}
        image={bannerimg}
      />
      <MainPrograme />
      <RecentProject/>
    </>
  )
}

export default Expertise