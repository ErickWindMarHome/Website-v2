import { Link } from 'react-router-dom'

const Bannercybertruck = () => {
  return (
    <Link to="/pr/cybertruck">
      <div className="w-screen" id="BannIn">
        <article>
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Components/BannerIncentivos/BannerVisibilidadCybertruck-PR.webp"
            className="hidden w-full md:block"
            alt="logo"
          />
          <img
            src="https://windmar-website-cms.s3.amazonaws.com/Components/BannerIncentivos/BannerCybertruck-PR.webp"
            className="w-full md:hidden"
            alt="logo"
          />
        </article>
      </div>
    </Link>
  )
}

export default Bannercybertruck
