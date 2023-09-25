import { feedback } from '../constant'
import { FeedbackCard } from '../components'

export default function Testimonials() {
  return (
    <section id='clients' className='relative flex-col padding-y flex-center'>
      <div className='absolute z-0 w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient' />

      <div className='w-full flex justify-evenly items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1]'>
        <h1 className='heading2'>
          What people are <br className='hidden sm:block' /> saying about us
        </h1>
        <div className='w-full mt-6 ml-10 md:mt-0'>
          <p className='paragraph text-left max-w-[470px]'>
            Everything you need to accept card payments and grow your business anywhere on the
            planet.
          </p>
        </div>
      </div>

      <div className='flex flex-wrap sm:justify-start justify-between w-full feedback-container relative z-[1]'>
        {feedback.map((item) => (
          <FeedbackCard {...item} />
        ))}
      </div>
    </section>
  )
}
