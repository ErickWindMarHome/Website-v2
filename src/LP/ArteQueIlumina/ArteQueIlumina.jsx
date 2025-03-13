import { useNavigate } from 'react-router-dom'
import { ArteQueIluminaData } from '../../utils/data'
import Footer from '../../layouts/General/Footer/Footer'
import Header from '../../layouts/General/Header/Header'

export default function ArteQueIlumina() {
  const navigate = useNavigate()
  const redirect2024 = (slug) => {
    navigate(`/pr/arte-que-ilumina/${slug}`)
  }
  const redirect2023 = (slug) => {
    navigate(`/pr/${slug}`)
  }
  return (
    <>
      <Header />
      <div>
        <section>
          <div className='relative mt-24 h-[300px] w-full bg-[url("https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ArteQueIlumina/Puerto-Rico-Arte-que-ilumina.webp")] bg-cover bg-center sm:h-[500px] lg:h-[500px] 2xl:h-[700px]'>
            <div className="absolute inset-0 bg-gradient-to-t from-[#1F1F1F]/40 to-transparent"></div>
            <div className="absolute flex h-full flex-col items-center justify-center p-7">
              <img
                className="w-[90%] sm:w-[60%]"
                src="https://windmar-website-cms.s3.us-east-1.amazonaws.com/LPs/ArteQueIlumina/ARTEQUEILUMINA+1.webp"
                alt="logo-arteQueIlumina"
              />
            </div>
          </div>
        </section>
        <section>
          <div className="flex flex-col items-center justify-center gap-y-10 lg:mx-auto lg:my-10 lg:grid lg:w-[90%] lg:grid-cols-2 lg:place-items-center">
            <div className="mt-10 flex flex-col items-center justify-center gap-y-10 text-[#1E429B] lg:mt-0">
              <h1 className="flex flex-col items-center justify-center text-4xl lg:text-5xl 2xl:text-6xl">
                Un Futuro <span className="font-extrabold">100% Renovable</span>
              </h1>
            </div>
            <div className="mb-14 flex w-[90%] flex-col items-center justify-center gap-y-5 text-center text-base lg:mb-0 lg:w-full lg:text-start 2xl:text-2xl">
              <h1 className="w-[80%] text-center text-3xl font-extrabold uppercase text-[#1E429B] lg:w-full lg:text-start lg:text-2xl 2xl:text-4xl">
                Juntos construimos un Puerto Rico más limpio, fuerte y autosuficiente
              </h1>
              <p>
                En WindMar Home, creemos que la energía del sol tiene el poder de transformar vidas. Nuestro lema, &quot;Un Futuro 100%
                Renovable,&quot; representa el compromiso de impulsar a las comunidades boricuas hacia un mañana más brillante, donde la
                sostenibilidad no sea una opción, sino la norma.
              </p>
              <p>
                Imagina un Puerto Rico donde cada hogar esté iluminado por energía limpia, cada comunidad empoderada y cada paso dado nos acerque a un
                futuro lleno de oportunidades. Este es nuestro llamado a la acción: juntos, hagamos de la energía renovable el motor que nos mueva
                hacia adelante
              </p>
            </div>
          </div>
        </section>
        <section className="bg-[#1E429B]">
          <section>
            <div>
              <div className="mx-auto mt-10 w-[90%] lg:grid lg:grid-cols-2 lg:gap-5">
                {ArteQueIluminaData.arte2024.map((item, index) =>
                  index === 0 ? (
                    <div
                      key={index}
                      className="flex cursor-pointer flex-col justify-center gap-y-3 pt-10 lg:col-span-2"
                      onClick={() => redirect2024(item.slug)}
                    >
                      <h1 className="text-4xl font-bold uppercase text-white lg:text-5xl">{item.title}</h1>
                      <p className="text-base font-bold uppercase text-[#F5991F] lg:text-2xl">PUEBLO: {item.town}</p>
                      <img
                        className="h-[220px] max-h-[90%] w-full object-cover object-center sm:h-[350px] lg:h-[500px] 2xl:h-[640px]"
                        src={item.banner}
                        alt=""
                      />
                    </div>
                  ) : (
                    <div
                      key={index}
                      className="flex cursor-pointer flex-col justify-center gap-y-2 pt-5 lg:pt-0"
                      onClick={() => redirect2024(item.slug)}
                    >
                      <img className="h-[220px] w-full object-cover object-center sm:h-[300px] 2xl:h-[400px]" src={item.banner} alt="" />
                      <h1 className="text-2xl font-bold uppercase text-white lg:text-3xl">{item.title}</h1>
                      <p className="text-base font-bold uppercase text-[#F5991F] lg:text-lg">PUEBLO: {item.town}</p>
                    </div>
                  ),
                )}
              </div>
              <div className="my-5 flex items-center gap-3">
                <h1 className="ml-[5%] text-2xl font-bold text-white">2023</h1>
                <hr className="w-full border-[1px] border-[#F5991F]" />
              </div>
              <div className="mx-auto mt-5 w-[90%] pb-10 lg:grid lg:grid-cols-3 lg:gap-5">
                {ArteQueIluminaData.arte2023.map((item, index) => (
                  <div key={index} className="flex cursor-pointer flex-col justify-center gap-y-2 pt-5" onClick={() => redirect2023(item.slug)}>
                    <img className="h-[220px] w-full object-cover object-center sm:h-[300px] lg:h-[250px] 2xl:h-[300px]" src={item.banner}></img>
                    <h1 className="text-2xl font-bold uppercase text-white">{item.title}</h1>
                    <p className="text-base font-bold uppercase text-[#F5991F]">PUEBLO: {item.town}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="mb-14">
            <h1 className="mx-auto w-[65%] text-center text-3xl font-bold text-white">¡VISITA LOS MURALES HOY!</h1>
            <img
              className="mt-10 h-fit w-full object-cover object-center"
              src="https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/LANDING+PAGE/mapa-arte-que-ilumina-windmar-home.webp"
            ></img>
          </section>
          <Footer />
        </section>
      </div>
    </>
  )
}
