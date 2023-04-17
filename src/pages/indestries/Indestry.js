import React from 'react'
import Indestries from '../../component/indestries/Indestries'
import Client from '../../component/client/Client'
import Banner1 from '../../layout/Banner/Banner1'
import bannerimg from '../../images/industries-bg (1).jpg'

function Indestry() {
  return (
    <div style={{ backgroundColor: '#f1f4fd' }}>
      <Banner1
        title={'Custom Software Solutions Of Any Complexity'}
        head={"Grow stronger with our information technology solutions"}
        disc={'Specialization is the key to high-quality software development and resolving even the toughest technological challenges. Over the years, Light IT Global has mastered the craft of building custom solutions for specific industries and is ready to deliver advanced digital products that will cover your every business need'}
        image={bannerimg}
      />
      
      <Indestries />
      <Client/>
      </div>
  )
}

export default Indestry