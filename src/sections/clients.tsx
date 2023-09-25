import { clients } from '../constant'

export default function Clients() {
  return (
    <section className='my-4 flex-center'>
      <div className='flex-wrap w-full flex-center'>
        {clients.map((item) => (
          <div key={item.id} className='flex-auto flex-center sm:min-w-[192px]'>
            <img src={item.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}
