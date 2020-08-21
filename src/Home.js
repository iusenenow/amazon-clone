import React from 'react'
import Product from './Product'

const Home = () => {
  return (
    <div className="home">
      <img src="https://images-fe.ssl-images-amazon.com/images/G/35/digital/video/merch/2020/TV/ECCH_S1_00000_GWBleedingHero_3000x1200_POST_Final_en-AU_PVD5268._CB408557760_.jpg" alt="" className="home-image" />

      <div className="home-row">
        <Product
          id="1"
          title='Nintendo Switch Console [Neon Blue/Red]'
          price={'448.00'}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51vKlrdRKYL._AC_UL480_SR480,480_.jpg"
        />
        <Product
          id="2"
          title='Ghost of Tsushima - PlayStation 4'
          price={'69.00'}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71kpwRGYwqL._AC_UL480_SR381,480_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="3"
          title='The Last of Us Part 2 - PlayStation 4'
          price={'68.00'}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71T0ogpJS1L._AC_UL405_SR321,405_.jpg"
        />
        <Product
          id="4"
          title='Kindle Paperwhite – Now Waterproof with twice the Storage (8GB)'
          price={'199.00'}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_UL480_SR480,480_.jpg"
        />
        <Product
          id="5"
          title='Echo Dot (3rd Gen) – Smart speaker with Alexa - Charcoal Fabric'
          price={'69.00'}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61MdyHSbxHL._AC_UL480_SR480,480_.jpg"
        />
      </div>

      <div className="home-row">
        <Product
          id="5"
          title='LG 38WN95C 38" UWQHD+ Curved Nano IPS Monitor'
          price={'2,299.00'}
          rating={6}
          image="https://images-fe.ssl-images-amazon.com/images/I/71iRe--kVtL._AC_SY400_.jpg"
        />
      </div>

    </div>
  )
}

export default Home
