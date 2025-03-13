import './Refuerzo.css'
// Importing image files
import img1 from '../../../assets/anker/ANKER-PR-desktop.jpg'
import img2 from '../../../assets/anker/ANKER-PR-GAN-PRIME-desktop.png'

import { useSelector } from 'react-redux'

const Refuerzo = () => {
  const mobileQuery = useSelector((state) => state.states.mobileQuery)

  return (
    <div className={`Refuerzo-${mobileQuery}`}>
      <div>
        <h1>Refuerzo energético para cuando más lo necesites.</h1>
        <img src={img1} alt="" />
        <img src={img2} alt="" />
      </div>
    </div>
  )
}

export default Refuerzo
