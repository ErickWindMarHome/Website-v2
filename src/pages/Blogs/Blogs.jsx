import useTitle from '../../hooks/useTitle'
import Pixel from '../../components/Pixel/Pixel'
import Footer from '../../layouts/General/Footer/Footer'
import Header from '../../layouts/General/Header/Header'
import Barra from '../../layouts/General/Barra/Barra'
import BlogsCards from '../../components/BlogsCards/BlogsCards'

import { BlogListPR as blogPrDefault } from './BlogList/BlogListPR'
import { BlogListFL as blogFlDefault } from './BlogList/BlogListFL'
import { getBlogsFl, getBlogsPR } from '../../hooks/fetchDataStrapi'
import { useQuery } from '@tanstack/react-query'

import { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import { useSelector } from 'react-redux'
import { formatFecha } from '../../utils/data'

const Blogs = () => {
  useTitle('Blog energía solar y renovable - WindMar')
  const { locacion } = useSelector((state) => state.states)
  const { data: dataPR } = useQuery({
    queryKey: ['blogsPR'],
    queryFn: getBlogsPR,
  })
  const { data: dataFl } = useQuery({
    queryKey: ['blogsFl'],
    queryFn: getBlogsFl,
  })

  const blogListPR = dataPR ? dataPR.data : blogPrDefault
  const blogListFl = dataFl ? dataFl.data : blogFlDefault

  useEffect(() => {
    if (locacion === 'fl') {
      document.title = 'Solar and renewable energy blog - WindMar'
    } else {
      document.title = 'Blog energía solar y renovable - WindMar'
    }
  }, [locacion])

  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Expande tus conocimientos sobre energía solar y renovable; sistemas fotovoltaicos, paneles solares, baterías portátiles, Tesla, Roofing y mas con Windmar Home."
        />
      </Helmet>
      <Pixel pixelID="1826134724345924" />
      <Header />

      <div className="w-full">
        {locacion === 'pr' ? (
          <>
            <div className="relative mx-auto mt-[100px] flex h-[400px] w-[90%] items-center justify-center md:h-[592px]">
              <div className="absolute inset-0 h-full w-full rounded-xl bg-gradient-to-r from-[#233465] to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end gap-4 p-8 text-white">
                <span className="text-sm text-slate-300 lg:text-base">{formatFecha(blogListPR[1].attributes?.createdAt)}</span>
                <h1 className="font-bold lg:text-6xl">{blogListPR[1].attributes?.Titulopagina}</h1>
                <p className="text-xs lg:w-[45%] lg:text-sm">{blogListPR[1].attributes?.Metadescripcionfinal}</p>
              </div>
              <img
                src={'https://scms.windmar.com/' + blogListPR[1].attributes?.Imagen1.data?.attributes?.url}
                alt=""
                className="h-full w-full rounded-xl object-cover"
              />
            </div>

            <div className="flex flex-col justify-center p-8">
              <div className="mx-auto flex flex-col gap-4">
                <h1 className="b-4 w-fit text-xl font-bold text-slate-700">¡Descubre lo mejor de nuestros blogs!</h1>
                <div className="mx-auto grid w-fit gap-8 md:grid-cols-2 lg:mx-0 lg:grid-cols-3 xl:grid-cols-4">
                  {blogListPR.map((item, index) => {
                    return (
                      <BlogsCards
                        key={index}
                        image={'https://scms.windmar.com/' + item.attributes?.Imagen1.data?.attributes?.url}
                        title={item.attributes?.Titulopagina}
                        datepost={formatFecha(item.attributes?.createdAt)}
                        description={item.attributes?.Metadescripcionfinal}
                        linkpost={item.attributes?.URL}
                      />
                    )
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative flex h-[55vh] w-screen items-center justify-center bg-[url('https://windmar-website-cms.s3.amazonaws.com/Windmar1.0/FL/solar-and-renowable-energy.webp')] bg-bottom">
              <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black to-transparent"></div>
              <div className="sticky z-10 w-[70%] text-center text-white">
                <h1 className="text-balance text-3xl font-bold lg:text-7xl">Get more information about</h1>
                <h2 className="lg:text-3xl">Windmar Solar + Roofing</h2>
              </div>
            </div>
            <div className="p-8">
              <h1 className="mx-auto w-fit text-4xl font-bold text-[#1e429b]">BLOG</h1>
              <div className="mx-auto grid w-fit gap-4 md:grid-cols-2 lg:grid-cols-3">
                {blogListFl.map((item, index) => {
                  return (
                    <BlogsCards
                      key={index}
                      image={'https://scms.windmar.com/' + item.attributes?.Imagen1.data?.attributes?.url}
                      title={item.attributes?.Titulopagina}
                      datepost={item.attributes?.createdAt}
                      description={item.attributes?.Metadescripcionfinal}
                      linkpost={item.attributes?.URL}
                    />
                  )
                })}
              </div>
            </div>
          </>
        )}
      </div>
      <Footer color="blue" />
      {locacion === 'fl' ? <Barra caseLocation="solarfl" color="blue" /> : null}
    </>
  )
}

export default Blogs
