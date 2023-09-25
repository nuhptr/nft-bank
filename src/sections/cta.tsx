import { Button } from '../components'

export default function CTA() {
  return (
    <section className='flex-center margin-y padding sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow'>
      <div className='flex flex-col flex-1'>
        <h2 className='heading2'>Let’s try our service now!</h2>
        <p className='paragraph max-w-[470px] mt-5'>
          Everything you need to accept card payments and grow your business anywhere on the planet.
        </p>
      </div>

      <div className='mt-10 ml-0 flex-center sm:ml-10 sm:mt-0'>
        <Button name='Get Started' />
      </div>
    </section>
  )
}
