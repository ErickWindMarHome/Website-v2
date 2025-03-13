import React from 'react'

const isFL = true
function PageNotFoundTwo() {
  const content = isFL
    ? {
        title: 'Oops!',
        subtitle: 'THE PAGE NOT FOUND',
        description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        button: 'GO TO HOME',
      }
    : {
        title: '¡Oops!',
        subtitle: 'PÁGINA NO ENCONTRADA',
        description: 'La página que buscas podría haber sido eliminada, cambiado su nombre o estar temporalmente no disponible.',
        button: 'IR AL INICIO',
      }
  return (
    <div className="flex h-auto w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Fondos+mobile/Fondo+mobile+1-02.webp')] bg-cover bg-no-repeat py-[20vh] md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Fondos+Desktop/Fondo+mancha+1+desktop_Mesa+de+trabajo+1.webp')] md:py-[5vh]">
      <section>
        <h1 className="bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Imagenes+Page+not+found/fondo2-11.webp')] bg-cover bg-clip-text bg-center text-[100px] font-extrabold text-transparent md:text-[206px]">
          {content.title}
        </h1>
      </section>
      <h1 className="mt-[5vh] text-[30px] font-medium text-[#1D429B] md:mt-0 md:text-[71.16px]">{content.subtitle}</h1>
      <p className="mt-[5vh] w-[70%] text-center text-[15px] md:mt-0 md:text-[23px]">{content.description}</p>
      <a href="/pr">
        <button className="mb-[22vh] mt-[5vh] w-full rounded-full bg-[#1D429B] px-4 text-[15px] font-bold text-white md:mt-0 md:text-[30px]">
          {content.button}
        </button>
      </a>
    </div>
  )
}

export default PageNotFoundTwo
