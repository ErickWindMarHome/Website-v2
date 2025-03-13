import { useSelector } from 'react-redux'

const Lema_english = ({ rute }) => {
  const locacion = useSelector((state) => state.states.locacion)

  const ruteHandler = () => {
    switch (locacion) {
      case 'fl':
        return (
          <div className="relative -z-10 box-border flex h-[80vw] max-h-[80vh] w-[100vw] flex-col items-center justify-center gap-[5vw] overflow-hidden bg-[url('https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/banner-fl-desktop.webp')] bg-cover bg-center bg-no-repeat">
            <img
              className="w-[calc(120px+30vw)] max-w-[30vw] pb-[20px]"
              src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/lema-fl.webp"
              alt=""
            />
            <article className="flex w-[calc(100px+60vw)] flex-wrap justify-center">
              <img
                className="mx-1 my-2 mt-[-50px] w-[20%] md:max-w-[40vw] md:px-[20px]"
                src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/tesla-fl.webp"
                alt=""
              />
              <img
                className="mx-1 my-2 mt-[-50px] w-[20%] md:max-w-[40vw] md:px-[20px]"
                src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/sinnova-fl.webp"
                alt=""
              />
              <img
                className="mx-1 my-2 mt-[-50px] w-[20%] md:max-w-[40vw] md:px-[20px]"
                src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/qcells-fl.webp"
                alt=""
              />
              <img
                className="mx-1 my-2 mt-[-50px] w-[20%] md:max-w-[40vw] md:px-[20px]"
                src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/enphase-fl.webp"
                alt=""
              />
            </article>
          </div>
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
            return (
              <div className="relative -z-10 box-border flex h-[80vw] max-h-[80vh] w-[100vw] flex-col items-center justify-center gap-[5vw] overflow-hidden bg-[url('https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/banner-pr-desktop.webp')] bg-cover bg-center bg-no-repeat">
                <img
                  className="w-[calc(120px+30vw)] max-w-[30vw] pb-[20px]"
                  src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/lema-pr.webp"
                  alt=""
                />
                <article className="flex w-[calc(100px+60vw)] flex-wrap justify-center">
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/tesla-pr.webp"
                    alt=""
                  />
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/sinnova-pr.webp"
                    alt=""
                  />
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/Oriental-pr.webp"
                    alt=""
                  />
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/qcells-pr.webp"
                    alt=""
                  />
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/Anker-pr.webp"
                    alt=""
                  />
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/enphase-pr.webp"
                    alt=""
                  />
                  <img
                    className="w-[25%] px-3 md:max-w-[13vw]"
                    src="https://windmar-website-cms.s3.amazonaws.com/Layouts/Home/Lema/Garner-pr.webp"
                    alt=""
                  />
                </article>
              </div>
            )
        }
    }
  }
  return ruteHandler()
}

export default Lema_english
