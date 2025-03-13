import { FaFacebookF, FaInstagram, FaYoutube, FaLinkedinIn } from 'react-icons/fa'
import { useSelector } from 'react-redux'

const Redes = ({ className }) => {
  const locacion = useSelector((state) => state.states.locacion)

  const socialLinks =
    locacion === 'pr'
      ? [
          { href: 'https://www.facebook.com/windmarhome', icon: <FaFacebookF className="text-2xl text-white" />, alt: 'facebook' },
          { href: 'https://www.instagram.com/windmarhome/?hl=en', icon: <FaInstagram className="text-2xl text-white" />, alt: 'instagram' },
          {
            href: 'https://www.youtube.com/channel/UCvYI6OJNFiS5JxQNVxNLQVA/about',
            icon: <FaYoutube className="text-2xl text-white" />,
            alt: 'youtube',
          },
          { href: 'https://www.linkedin.com/company/windmar-home/', icon: <FaLinkedinIn className="text-2xl text-white" />, alt: 'linkedin' },
        ]
      : [
          { href: 'https://www.facebook.com/windmarflorida/', icon: <FaFacebookF className="text-2xl text-white" />, alt: 'facebook' },
          { href: 'https://www.instagram.com/windmarsolarroofing/', icon: <FaInstagram className="text-2xl text-white" />, alt: 'instagram' },
          { href: 'https://www.youtube.com/@windmarsolar749', icon: <FaYoutube className="text-2xl text-white" />, alt: 'youtube' },
          {
            href: 'https://www.linkedin.com/company/windmar-home-florida/about/',
            icon: <FaLinkedinIn className="text-2xl text-white" />,
            alt: 'linkedin',
          },
        ]

  return (
    <div
      className={`fixed right-0 top-28 flex h-[200px] w-[45px] flex-col items-end justify-center gap-4 rounded-l-3xl bg-[#1e419b] p-2 ${className}`}
    >
      {socialLinks.map((link) => (
        <a href={link.href} rel="noreferrer" target="_blank" key={link.alt} className="h-[25px]">
          {link.icon}
        </a>
      ))}
    </div>
  )
}

export default Redes
