import './loading.css'

function Loading() {
  return (
    <div className="fixed bottom-0 left-0 z-50 flex h-full w-screen items-center justify-center bg-white/80">
      <div className="flex h-[250px] w-[250px] items-center justify-center p-[15px]">
        <div className="animate-clouds absolute z-[11] ml-[25px] inline w-[250px] pt-[45px]">
          <span className="z-[5] inline-block h-[65px] w-[65px] rounded-[50%_50%_0%_50%] bg-[#4c9beb]"></span>
          <span className="z-[5] ml-[-25px] inline-block h-[45px] w-[45px] rounded-[50%_50%_50%_0%] bg-[#4c9beb]"></span>
        </div>
        <span className="absolute inline h-[120px] w-[120px] rounded-[60px] bg-gradient-to-r from-[#fcbb04] to-[#fffc00]"></span>
        <span className="animate-sunshines absolute inline h-[120px] w-[120px] rounded-[60px] bg-gradient-to-r from-[#fcbb04] to-[#fffc00]"></span>
        <div className="animate-clouds-slow z-[12] ml-[150px] mt-[-30px] w-[250px]">
          <span className="z-[5] inline-block h-[30px] w-[30px] rounded-[50%_50%_0%_50%] bg-[#4c9beb]"></span>
          <span className="z-[5] ml-[-20px] inline-block h-[50px] w-[50px] rounded-[50%_50%_50%_0%] bg-[#4c9beb]"></span>
        </div>
      </div>
    </div>
  )
}

export default Loading
