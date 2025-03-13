import close from '../../assets/pescaito/close.svg'

const PescaditoCard = (props) => {
  const { title, description, videoURL, posterURL } = props
  return (
    <div className="flex flex-col justify-center gap-4 bg-[#414042] p-8 text-white md:w-[800px]">
      <div className="flex flex-col items-start gap-4 md:flex-row">
        <img src={close} alt="" className="mx-auto w-12 md:mx-0" />
        <div>
          <h1 className="text-center font-tomorrow text-xl font-bold text-[#ef4351] md:text-left">{title}</h1>
          <p className="text-center font-tomorrow text-lg md:text-left">{description}</p>
        </div>
      </div>
      <div className="mx-auto w-[419px]">
        <video src={videoURL} controls={true} preload="metadata" controlsList="nodownload" poster={posterURL} className="w-full"></video>
      </div>
    </div>
  )
}

export default PescaditoCard
