import React from 'react'

const isFL = true
function PageNotFoundFour() {
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
    <div className="flex h-auto w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Fondos+mobile/Fondo+Mobile+4-14.webp')] bg-cover bg-no-repeat py-[30vh] md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Fondos+Desktop/Fondo+engranaje+Desktop-06.webp')] md:py-[5vh]">
      <section>
        <img src="" alt="" />
        <h1 className="bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Imagenes+Page+not+found/fondo1-10.webp')] bg-cover bg-clip-text text-[100px] font-extrabold text-transparent md:text-[206px]">
          {content.title}
        </h1>
      </section>
      <h1 className="mt-[5vh] text-[26px] font-medium text-[#1D429B] md:mt-0 md:text-[71.16px]">{content.subtitle}</h1>
      <p className="mt-[5vh] w-[70%] text-center text-[15px] md:mt-0 md:text-[26px]">{content.description}</p>
      <a href="/pr">
        <button className="mt-[5vh] w-full rounded-full bg-[#F49B1D] px-4 text-[15px] font-bold text-white md:mt-0 md:text-[30px]">
          {content.button}
        </button>
      </a>
    </div>
  )
}

export default PageNotFoundFour
