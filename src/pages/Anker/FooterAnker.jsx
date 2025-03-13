function FooterAnker({ text = 'Obtenen una consulta gratuita (787-395-7766) o has', scrollToForm }) {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-12 bg-black py-8">
      <div className="flex flex-col items-center justify-center">
        <p className="w-[90%] text-center text-sm text-white md:w-auto md:text-xl">{text}</p>
        <button className="rounded-full bg-[#00A6E0] p-2 px-5 text-3xl font-bold text-white md:px-4" onClick={scrollToForm}>
          clic aquí
        </button>
      </div>
      <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Logo+Windmar+N01.webp" alt="" className="w-48" />
    </div>
  )
}

export default FooterAnker
