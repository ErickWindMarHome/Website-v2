import React from 'react'
import { useSelector } from 'react-redux'
import CarrouselFundationAnker from '../../components/CarrouselFundationAnker/CarrouselFundationAnker'
import CarrouselFundatioAnnkerNeveras from '../../components/CarrouselFundationAnker/CarrouselFundationAnkerNeveras'

export default function FundacionAnkerSlider() {
  const slider = useSelector((state) => state.states.slider)

  return slider === 'mobile' ? <CarrouselFundatioAnnkerNeveras /> : <CarrouselFundationAnker />
}
