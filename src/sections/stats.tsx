import { stats } from '../constant'

export default function Stats() {
  return (
    <section className='flex-row flex-wrap mb-6 flex-center sm:mb-20'>
      {stats.map((stat) => (
        <div key={stat.id} className={`flex-1 flex justify-start items-center flex-row m-3`}>
          <h4 className='font-poppins font-semibold xs:text-[40.89px] text-[30.89px] xs:leading-[53.16px] leading-[43.16px] text-white mr-4'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal xs:text-[20.45px] text-[15.45px] xs:leading-[26.58px] leading-[21.58px] text-gradient uppercase'>
            {stat.title}
          </p>
        </div>
      ))}
    </section>
  )
}
