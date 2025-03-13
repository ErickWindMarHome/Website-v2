import { useSelector } from 'react-redux'

const Marcas = () => {
  const { locacion } = useSelector((state) => state.states)

  // Definir los enlaces para Puerto Rico (pr) y Florida (fl)
  const links = {
    pr: 'https://g.page/r/CQADCaERtR2uEB0/review',
    fl: 'https://www.google.com/maps/place/Windmar+Solar+%2B+Roofing/@28.4581795,-81.4394021,20.5z/data=!4m6!3m5!1s0x88e77e8f40400001:0x9c43f9b724722db4!8m2!3d28.4581881!4d-81.4393779!16s%2Fg%2F11ggw9mw1l?entry=ttu',
  }
  // Seleccionar el enlace correspondiente según la consulta móvil (pr o fl)
  const currentLink = locacion === 'pr' ? links.pr : links.fl

  return (
    <div className="mt-[40px] flex w-[100vw] flex-col items-center justify-center bg-[#f89b24] md:flex-row md:justify-center">
      <a href={currentLink} target="_blank" rel="noreferrer">
        <img
          className="m-[20px] my-[40px] h-[60px]"
          src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Marcas/googlereviews.webp"
          alt=""
        />
      </a>
      <a href="https://www.angi.com/" target="_blank" rel="noreferrer">
        <img className="m-[20px] my-[40px] h-[60px]" src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Marcas/angielistra.webp" alt="" />
      </a>
      <a href="https://www.bbb.org/get-accredited" target="_blank" rel="noreferrer">
        <img
          className="m-[20px] my-[40px] h-[60px]"
          src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Marcas/acreditedbusines.webp"
          alt=""
        />
      </a>
      <a href="https://energia.pr.gov/" target="_blank" rel="noreferrer">
        <img className="m-[20px] my-[40px] h-[60px]" src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Marcas/nepr.webp" alt="" />
      </a>
      <a href="https://www.re-plus.com/installer-awards/" target="_blank" rel="noreferrer">
        <img className="my-[40px] h-[60px]" src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Marcas/N9lYOLCc.webp" alt="" />
      </a>
    </div>
  )
}

export default Marcas
