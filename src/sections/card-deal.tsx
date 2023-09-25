import card from '../assets/card.png'

import { Button } from '../components'

export default function CardDeal() {
  return (
    <section className='section'>
      <div className='section-info'>
        <h2 className='heading2'>
          Find a better card deal <br className='hidden sm:block' /> in few easy steps.
        </h2>
        <p className='paragraph max-w-[470px] mt-5'>
          Hobbank make you easy find card deal with your payment, don't worry about charge again.
        </p>
        <Button styles={'mt-10'} name='Get Started' />
      </div>

      <div className='section-img'>
        <img src={card} alt='card' className='w-[100%] h-[100%]' />
      </div>
    </section>
  )
}
