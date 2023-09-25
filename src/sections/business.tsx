import { Button, FeaturedCard } from '../components'
import { features } from '../constant'

export default function Business() {
  return (
    <section id='features' className='section'>
      <div className='section-info'>
        <h2 className='heading2'>
          You do the business, <br className='hidden sm:block' /> we'll handle the money.
        </h2>
        <p className='paragraph max-w-[470px] mt-5'>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10' name='Get Started' />
      </div>

      <div className='flex-col section-img'>
        {features.map((feature, index) => (
          <FeaturedCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
