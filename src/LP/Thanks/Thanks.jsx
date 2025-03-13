import './Thanks.css'
import './Thanksmobile.css'

import { useState } from 'react'

// Redux toolkit
import { useSelector, useDispatch } from 'react-redux'
import BannerThanks from '../../assets/LearAndWin/THANKYOU.png'

import Pixel from '../../components/Pixel/Pixel'

//Layout
import Header from '../../layouts/General/Header/Header'
import Footer from '../../layouts/General/Footer/Footer'
import Barra from '../../layouts/General/Barra/Barra'

const Thanks = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  return (
    <>
      <Pixel pixelID="1826134724345924" />
      <Header />
      <div className={`Contenedor_Thanks-${mobileQuery}`}>
        <div className={`Thanks-${mobileQuery}`}>
          <article>
            <img src={BannerThanks} />
          </article>
        </div>

        <Footer color="blue" />
        <Barra caseLocation="incentivos" color="blue" />
      </div>
    </>
  )
}

export default Thanks
