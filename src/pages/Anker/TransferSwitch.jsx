function TransferSwitch() {
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center gap-16 py-8 md:flex-row">
        <div className="flex h-[500px] flex-col items-center justify-around">
          <div>
            <h1 className="text-center text-3xl font-bold text-[#00A6E0]">Transfer Switch Manual</h1>
            <p className="m-0 mx-auto w-[70%] text-center text-[#757575] md:hidden">
              Compatible con Anker SOLIX F2600 <br className="hidden" /> y Anker SOLIX F3800
            </p>
          </div>
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Transfer+Witch+manual.webp" alt="" className="w-[200px]" />
          <div className="hidden items-start justify-center rounded-full bg-[#00A6E0] p-2 px-4 md:flex">
            <p className="m-0 text-center text-white">
              Compatible con Anker SOLIX F2600 <br /> y Anker SOLIX F3800
            </p>
          </div>
        </div>
        <div className="flex h-[500px] flex-col items-center justify-around">
          <div>
            <h1 className="text-center text-3xl font-bold text-[#00A6E0]">
              Transfer Switch <br className="md:hidden" /> Automático
            </h1>
            <p className="m-0 text-center text-[#757575] md:hidden">
              Compatible solo con Anker <br className="hidden" /> SOLIX F3800
            </p>
          </div>
          <img src="https://windmar-website-cms.s3.amazonaws.com/LPs/Anker/Transfger+switch+automatico.webp" alt="" className="w-[200px]" />
          <div className="hidden items-center justify-center rounded-full bg-[#00A6E0] p-2 px-4 md:flex">
            <p className="m-0 text-center text-white">
              Compatible solo con Anker <br /> SOLIX F3800
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TransferSwitch
