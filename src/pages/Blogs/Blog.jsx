import { useEffect } from 'react'
import { getBlog } from '../../hooks/fetchDataStrapi'
import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from '../../layouts/General/Header/Header'
import { BlocksRenderer } from '@strapi/blocks-react-renderer'
import { formatFecha } from '../../utils/data'
import { FaUserCircle } from 'react-icons/fa'

export default function Blog() {
  const { slug } = useParams()
  const { locacion } = useSelector((state) => state.states)

  useEffect(() => {
    if (locacion === 'fl') {
      document.title = 'Solar and renewable energy blog - WindMar'
    } else {
      document.title = 'Blog energía solar y renovable - WindMar'
    }
  }, [locacion])

  const { data } = useQuery({
    queryKey: ['blog'],
    queryFn: () => getBlog(slug, locacion === 'pr' ? 'es-PR' : 'en'),
  })

  const contenido = data?.data[0]?.attributes?.Contenido

  if (!data) return null
  console.log(data)

  return (
    <>
      <Header />
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative mx-auto mt-[100px] flex h-[400px] w-[95%] max-w-[1600px] items-center justify-center md:h-[592px]">
          <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-r from-[#233465] to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end gap-4 p-8 text-white">
            <span className="text-sm text-slate-300 lg:text-base">{formatFecha(data?.data[0]?.attributes?.createdAt)}</span>
            <h1 className="font-bold lg:text-6xl">{data?.data[0]?.attributes?.Titulopagina}</h1>
            <p className="text-xs lg:w-[45%] lg:text-sm">{data?.data[0]?.attributes?.Metadescripcionfinal}</p>
          </div>
          <img
            src={'https://scms.windmar.com/' + data?.data[0]?.attributes?.Imagen1.data?.attributes?.url}
            alt=""
            className="h-full w-full rounded-xl object-cover"
          />
        </div>
        <div className="mt-2 max-w-[1200px] p-4">
          <div className="my-4 flex items-center gap-2 text-slate-500">
            <FaUserCircle className="h-7 w-7" />
            <p className="text-xs">Windmar Home - {formatFecha(data?.data[0]?.attributes?.createdAt)}</p>
          </div>
          <div className="px-5">
            <BlocksRenderer
              content={contenido}
              blocks={{
                image: ({ image }) => (
                  <img src={image.url} alt={image.alternativeText} className="mx-auto my-4 h-auto w-[80%] rounded-xl object-cover" />
                ),
                list: ({ children }) => <ul className="my-2 flex list-inside list-disc flex-col gap-2 px-2 lg:px-4">{children}</ul>,
                link: ({ children, url }) => (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cursor-pointer font-bold text-blue-600 underline hover:text-blue-700"
                  >
                    {children}
                  </a>
                ),
                paragraph: ({ children }) => <p className="my-4">{children}</p>,
                heading: ({ children, level }) => {
                  switch (level) {
                    case 1:
                      return <h1 className="mb-4 font-bold text-[#FF9E18] lg:text-4xl">{children}</h1>
                    case 2:
                      return <h2 className="mb-4 font-bold text-[#FF9E18] lg:text-3xl">{children}</h2>
                    case 3:
                      return <h3 className="mb-4 font-bold text-[#FF9E18] lg:text-2xl">{children}</h3>
                    case 4:
                      return <h4 className="mb-4 font-bold text-[#FF9E18] lg:text-xl">{children}</h4>
                    case 5:
                      return <h5 className="mb-4 font-bold text-[#FF9E18] lg:text-lg">{children}</h5>
                    case 6:
                      return <h6 className="mb-4 font-bold text-[#FF9E18] lg:text-base">{children}</h6>
                    default:
                      return <p>{children}</p>
                  }
                },
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}
