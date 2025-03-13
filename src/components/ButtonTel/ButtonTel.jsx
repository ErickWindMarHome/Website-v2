import { BsFillTelephoneFill } from 'react-icons/bs'

export default function ButtonTel({ number, className }) {
  return (
    <a
      className={
        className ? className : 'flex w-fit items-center justify-between gap-5 rounded-full bg-[#FF9E18] px-10 py-3 text-xl font-bold text-white'
      }
      href={`tel:${number}`}
    >
      <BsFillTelephoneFill /> {number}
    </a>
  )
}
