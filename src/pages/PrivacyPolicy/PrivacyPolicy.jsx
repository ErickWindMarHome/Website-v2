import React from 'react'
import { useSelector } from 'react-redux'
import PrivacyPolicy_ES from './PrivacyPolicy_ES.jsx'
import PrivacyPolicy_EN from './PrivacyPolicy_EN.jsx'
export default function PrivacyPolicy() {
  const { lenguaje, locacion } = useSelector((state) => state.states)
  if (lenguaje === 'en') {
    return <PrivacyPolicy_EN locacion={locacion} />
  } else {
    return <PrivacyPolicy_ES locacion={locacion} />
  }
}
