import { Link } from 'react-router-dom'

const BannerHome = () => {
  return (
    <Link to="/pr/bsn">
      <div className="w-screen" id="BannIn">
        <article>
          <img
            src="https://scms.windmar.com/uploads/Banner_BSN_Movil_Mesa_de_trabajo_1_8093bc514b.webp"
            className="hidden w-full md:block"
            alt="BSN - WindmarHome"
          />
          <img src="https://scms.windmar.com/uploads/Banner_BSN_Movil_02_b9e69e3ba6.webp" className="w-full md:hidden" alt="BSN - WindmarHome" />
        </article>
      </div>
    </Link>
  )
}

export default BannerHome
