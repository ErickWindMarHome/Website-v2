import React from 'react'
import useExternalScriptRoofle from '../../hooks/useExternalScriptRoofle'

export default function Roofle() {
  useExternalScriptRoofle('https://app.roofle.com/roof-quote-pro-embedded-widget.js?id=CQXpUOQiuHZq8EdvszI7f', true)
  return (
    <form action="">
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
      <input type="text" />
    </form>
  )
}
