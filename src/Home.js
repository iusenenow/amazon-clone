import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <img src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/TV/ECCH_S1_00000_GWBleedingHero_3000x1200_POST_Final_en-AU_PVD5268._CB408557760_.jpg" alt="" className="home-image" />

      <Product
        id="12321341"
        title='LG 38WN95C 38" UWQHD+ Curved Nano IPS Monitor'
        price={'2,299.00'}
        rating={5}
        image="https://images-fe.ssl-images-amazon.com/images/I/71iRe--kVtL._AC_SY400_.jpg"
      />
    </div>
  )
}

export default Home
