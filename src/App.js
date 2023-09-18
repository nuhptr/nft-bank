import React from 'react'

import styles from './style'
import {
  Navbar,
  Hero,
  Stats,
  Business,
  CardDeal,
  Testimonials,
  Clients,
  Billing,
  CTA,
  Footer,
} from './components'

export default function App() {
  return (
    <div className='w-full overflow-hidden bg-primary'>
      <div className={`${styles.flexCenter} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.flexStart} ${styles.paddingX}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Business />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
          <Footer />
        </div>
      </div>
    </div>
  )
}
