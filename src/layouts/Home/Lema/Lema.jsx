import { useSelector } from 'react-redux'

const Lema = ({ rute }) => {
  const locacion = useSelector((state) => state.states.locacion)

  const renderBanner = (backgroundUrl, logo, images) => (
    <div className="flex h-[80vh] w-full items-center justify-center">
      <img src={backgroundUrl} className="h-[80vh] w-full object-cover" alt="" />
      <div className="absolute flex flex-col items-center justify-center gap-8 px-5 lg:gap-12">
        <img src={logo} className="w-96" alt="" />
        <div className="flex flex-wrap items-center justify-center gap-4">
          {images.map((imgSrc, index) => (
            <img key={index} className="w-24 md:w-32 lg:w-44" src={imgSrc} alt="" />
          ))}
        </div>
      </div>
    </div>
  )

  const ruteHandler = () => {
    switch (locacion) {
      case 'fl':
        return renderBanner(
          'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/banner-fl-desktop.webp',
          'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/lema-fl.webp',
          [
            'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/tesla-fl.webp',
            'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/sinnova-fl.webp',
            'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/qcells-fl.webp',
            'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/enphase-fl.webp',
          ],
        )
      default:
        switch (rute) {
          case 'comofunciona':
            return (
              <div className="relative -z-10 box-border flex h-[80vw] max-h-[80vh] w-[100vw] flex-col items-center justify-center gap-[5vw] overflow-hidden bg-[url('https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/banner-pr-desktop.webp')] bg-cover bg-center bg-no-repeat">
                <p className="TextPRCF">
                  DISFRUTA DE <br /> ENERGÍA GRATIS <br /> EN TU HOGAR
                </p>
              </div>
            )
          default:
            return renderBanner(
              'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/banner-pr-desktop.webp',
              'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/lema-pr.webp',
              [
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/tesla-pr.webp',
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/sinnova-pr.webp',
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/Oriental-pr.webp',
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/qcells-pr.webp',
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/Anker-pr.webp',
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/enphase-pr.webp',
                'https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/Garner-pr.webp',
              ],
            )
        }
    }
  }
  return ruteHandler()
}

export default Lema
