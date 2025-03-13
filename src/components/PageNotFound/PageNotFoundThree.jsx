import React from 'react'

const isFL = true
function PageNotFoundThree() {
  const content = isFL
    ? {
        title: 'OPS!',
        subtitle: 'THE PAGE NOT FOUND',
        description: 'The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.',
        button: 'GO TO HOME',
      }
    : {
        title: '¡OPS!',
        subtitle: 'PÁGINA NO ENCONTRADA',
        description: 'La página que buscas podría haber sido eliminada, cambiado su nombre o estar temporalmente no disponible.',
        button: 'IR AL INICIO',
      }

  return (
    <div className="flex h-auto w-full flex-col items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Fondos+mobile/Fondo+mobile+3-13.webp')] bg-cover bg-no-repeat py-[10vh] md:bg-[url('https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Fondos+Desktop/Fondo+engranaje+Desktop-06.webp')] md:py-[1vh]">
      <section className="flex items-center justify-center">
        <img className="w-[20%]" src="https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Imagenes+Page+not+found/Background1-09.webp" alt="" />
        <h1 className="text-[70px] font-extrabold text-[#1D429B] md:text-[200px]">{content.title}</h1>
      </section>
      <h1 className="mt-[3vh] text-[21px] font-medium text-[#1D429B] md:mt-0 md:text-[40px]">{content.subtitle}</h1>
      <img
        className="w-full md:w-[30%]"
        src="https://windmar-website-cms.s3.amazonaws.com/PageNotFound/Imagenes+Page+not+found/Background1-07.webp"
        alt=""
      />
      <p className="mt-[3vh] w-[50%] text-center text-[12px] md:mt-0">{content.description}</p>
      <a href="/pr">
        <button className="mt-[3vh] rounded-full bg-[#F49B1D] px-4 font-bold text-[] text-white md:mt-0 md:text-[30px]">{content.button}</button>
      </a>
    </div>
  )
}

export default PageNotFoundThree
