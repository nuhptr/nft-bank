import React from 'react'
import { clients } from '../constant'
import styles from '../style'

export default function Clients() {
  return (
    <section className={`${styles.flexCenter} my-4`}>
      <div className={`${styles.flexCenter} flex-wrap w-full`}>
        {clients.map((client) => (
          <div key={client.id} className={`flex-auto ${styles.flexCenter} sm:min-w-[192px]`}>
            <img src={client.logo} alt='client' className='sm:w-[192px] w-[100px] object-contain' />
          </div>
        ))}
      </div>
    </section>
  )
}
