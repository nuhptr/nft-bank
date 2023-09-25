import { footerLinks, socialMedia } from '../constant'
import logo from '../assets/logo.svg'

export default function Footer() {
  return (
    <section className='flex-col flex-center padding-y'>
      <div className='flex-col w-full mb-8 flex-start md:flex-row'>
        <div className='flex flex-col justify-start flex-1'>
          <img src={logo} alt='hoobank' className='w-[266px] h-[72px] object-contain' />
          <p className='paragraph mt-4 max-w-[310px]'>
            A new way to make the payments easy, reliable and secure.
          </p>
        </div>

        <div className='flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10'>
          {footerLinks.map((footerLink) => (
            <div key={footerLink.title} className='flex flex-col ss:my-0 my-4 min-w-[150px]'>
              <h4 className='font-poppins font-medium text-[18px] leading-[27px] text-white'>
                {footerLink.title}
              </h4>
              <ul className='mt-4 list-none'>
                {footerLink.links.map((link, index) => (
                  <li
                    key={link.name}
                    className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                      index !== footerLink.links.length - 1 ? 'mb-4' : 'mb-0'
                    }`}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className='w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]'>
        <p className='font-poppins font-normal text-[18px] leading[27px] text-white'>
          Copyright &copy; 2021 HooBank. All Rights Reserved.
        </p>
        <div className='flex flex-row mt-6 md:mt-0'>
          {socialMedia.map((social, index) => (
            <img
              key={social.id}
              src={social.icon}
              alt={social.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? 'mr-6' : 'mr-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
