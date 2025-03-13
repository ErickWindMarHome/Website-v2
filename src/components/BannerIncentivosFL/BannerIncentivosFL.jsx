import { Link } from 'react-router-dom'

const BannerIncentivosFL = () => {
  return (
    <Link to="/fl/cybertruck">
      <div className="w-screen" id="BannIn">
        <article>
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Components/BannerIncentivosFL/BannerVisibilidadCybertruck-FL.webp"
            className="hidden w-full md:block"
            alt="logo"
          />
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Components/BannerIncentivosFL/BannerCybertruck-FL.webp"
            className="w-full md:hidden"
            alt="logo"
          />
        </article>
      </div>
    </Link>
  )
}

export default BannerIncentivosFL
