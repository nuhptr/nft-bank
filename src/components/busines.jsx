import React from 'react'

import styles, { layout } from '../style'
import { features } from '../constant'
import Button from './buttons'

function FeatureCard({ icon, title, content, index }) {
  return (
    <div
      className={`flex flex-row p-6 rounded-[20px] ${
        index !== features.length - 1 ? 'mb-6' : 'mb-0'
      } feature-card`}>
      {/* icon */}
      <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
        <img src={icon} alt='star' className='w-[50%] h-[50%] object-contain' />
      </div>

      {/* title and content */}
      <div className='flex flex-col flex-1 ml-3'>
        <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23.4px] mb-1'>
          {title}
        </h4>
        <p className='font-poppins font-normal text-dimWhite text-[16px] leading-[24px]'>
          {content}
        </p>
      </div>
    </div>
  )
}

export default function Business() {
  return (
    <section id='features' className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className='hidden sm:block' /> we'll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          With the right credit card, you can improve your financial life by building credit,
          earning rewards and saving money. But with hundreds of credit cards on the market.
        </p>
        <Button styles='mt-10' name={'Get Started'} />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  )
}
