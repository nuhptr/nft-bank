import { GetStarted } from '../components'

// import discount from '../assets/discount.svg'
import robot from '../assets/robot.png'

export default function Hero() {
  return (
    <section id='home' className='flex flex-col md:flex-row padding-y'>
      <div className='flex-col flex-1 px-6 flex-start xl:px-0 sm:px-16'>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src='../assets/discount.svg' alt='discount' className='w-[32px] h-[32px]' />
          <p className='ml-2 paragraph'>
            <span className='text-white'>20%</span> Discount For{' '}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>

        <div className='flex flex-row items-center justify-between w-full'>
          <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]'>
            The Next <br className='hidden sm:block' />{' '}
            <span className='text-gradient'>Generation</span>{' '}
          </h1>
          <div className='hidden mr-0 ss:flex md:mr-4'>
            <GetStarted />
          </div>
        </div>

        <h1 className='font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full'>
          Payment Method.
        </h1>
        <p className='paragraph max-w-[470px] mt-5'>
          Our team of experts uses a methodology to identify the credit cards most likely to fit
          your needs. We examine annual percentage rates, annual fees.
        </p>
      </div>

      <div className='relative flex flex-1 my-10 flex-center md:my-0'>
        <img src={robot} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        {/* gradient start */}
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient' />
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40' />
        <div className='absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient' />
        {/* gradient end */}
      </div>

      <div className='flex items-center justify-center ss:hidden'>
        <GetStarted />
      </div>
    </section>
  )
}
