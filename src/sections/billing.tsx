import bill from '/bill.png'
import apple from '/apple.svg'
import google from '/google.svg'

export default function Billing() {
  return (
    <section id='product' className='section-reverse'>
      {/* image and gradient background */}
      <div className='section-img-reverse'>
        <img src={bill} alt='billing' className='w-[100%] h-[100%] relative z-[5]' />
        <div className='absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient' />
        <div className='absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient' />
      </div>

      {/* Information */}
      <div className='section-info'>
        <h2 className='heading2'>
          Easily control your <br className='hidden sm:block' />
          billing & invoicing.
        </h2>
        <p className='paragraph max-w-[470px] mt-5'>
          We can easily control your billing and invoice without you thinking about it, so don't
          worry about forget it. We can help you.
        </p>

        {/* icon apple and google play */}
        <div className='flex flex-row flex-wrap mt-6 sm:mt-10'>
          <img
            src={apple}
            alt='apple_store'
            className='w-[128px] h-[42px] object-contain mr-5 cursor-pointer'
          />
          <img
            src={google}
            alt='play_store'
            className='w-[128px] h-[42px] object-contain cursor-pointer'
          />
        </div>
      </div>
    </section>
  )
}
