import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BannerHomeFL = () => {
  const { lenguaje } = useSelector((state) => state.states)

  const banner_desktopFL =
    lenguaje === 'en'
      ? 'https://windmar-website-cms.s3.amazonaws.com/Banners/BANNERS_TESLA_FL_+PROMO/Banner_web_ENG_TESLA.webp'
      : 'https://windmar-website-cms.s3.amazonaws.com/Banners/BANNERS_TESLA_FL_+PROMO/Banner_Web_ESP_TESLA.webp'
  const banner_mobileFL =
    lenguaje === 'en'
      ? 'https://windmar-website-cms.s3.amazonaws.com/Banners/BANNERS_TESLA_FL_+PROMO/Banner_Moblie_Eng_TESLA.webp'
      : 'https://windmar-website-cms.s3.amazonaws.com/Banners/BANNERS_TESLA_FL_+PROMO/Banner_Moblie_Esp_TESLA.webp'

  return (
    <Link to="tel:3212511241">
      <div className="w-screen" id="BannIn">
        <article>
          <img src={banner_desktopFL} className="hidden w-full md:block" alt="logo" />
          <img src={banner_mobileFL} className="w-full md:hidden" alt="logo" />
        </article>
      </div>
    </Link>
  )
}

export default BannerHomeFL
