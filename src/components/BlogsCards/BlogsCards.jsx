import { Link } from 'react-router-dom'
import { FaUserCircle } from 'react-icons/fa'

const BlogsCards = ({ image, title, datepost, description, linkpost }) => {
  return (
    <Link to={linkpost} className="group">
      <div className="flex h-full w-[282px] flex-col gap-5">
        <div className="h-[267px]">
          <img src={image} alt="" className="h-full w-full rounded-xl object-cover" />
        </div>
        <div className="flex flex-col justify-center gap-4">
          <h1 className="m-0 font-bold group-hover:text-blue-700">{title}</h1>
          <p className="text-sm text-[#6D6E71]">{description}</p>
        </div>
        <div className="mt-auto flex items-center gap-2 text-slate-500">
          <FaUserCircle className="h-7 w-7" />
          <p className="text-xs">{datepost}</p>
        </div>
      </div>
    </Link>
  )
}

export default BlogsCards
