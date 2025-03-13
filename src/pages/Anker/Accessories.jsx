function Accessories() {
  return (
    <div className="w-full">
      <div className="mx-auto flex w-[90%] flex-col justify-center gap-10 md:p-12">
        <div>
          <h1 className="mx-auto font-bold text-[#00A6E0] md:text-left md:text-5xl">Anker SOLIX PD400</h1>
          <p className="m-0 mx-auto font-medium text-[#757575] md:text-left md:text-xl">Compatible con Anker SOLIX F2600 y Anker SOLIX F3800</p>
        </div>
        <div className="flex flex-col justify-around gap-2 md:flex-row md:gap-8">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Paneles.webp" alt="" className="border-b border-[#00A6E0]" />
        </div>
      </div>
      <div className="mx-auto mt-12 flex w-[90%] flex-col justify-center gap-10 md:p-12">
        <div>
          <h1 className="mx-auto font-bold text-[#00A6E0] md:text-left md:text-5xl">Anker 531 – Solar Panel (22W)</h1>
          <p className="m-0 mx-auto font-medium text-[#757575] md:text-left md:text-xl">Compatible con Anker SOLIX F2600 y Anker SOLIX F3800</p>
        </div>
        <div className="flex flex-col justify-around gap-2 md:flex-row md:gap-8">
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Paneles.webp" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Accessories
