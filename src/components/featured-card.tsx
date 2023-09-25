import clsx from 'clsx'

import { features } from '../constant'

interface FeatureCardProps {
  icon: string
  title: string
  content: string
  index: number
}

export default function FeaturedCard({ icon, title, content, index }: FeatureCardProps) {
  return (
    <div
      className={clsx(
        'flex flex-row p-6 rounded-[20px] feature-card',
        index !== features.length - 1 ? 'mb-6' : 'mb-0'
      )}>
      {/* icon */}
      <div className='w-[64px] h-[64px] rounded-full flex-center bg-dimBlue'>
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
