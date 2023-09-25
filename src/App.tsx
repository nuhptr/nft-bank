import {
  Billing,
  Business,
  CTA,
  CardDeal,
  Clients,
  Hero,
  Navbar,
  Stats,
  Testimonials,
  Footer,
} from './sections'

export default function App() {
  return (
    <div className='w-full overflow-hidden bg-primary'>
      <div className='flex-center padding-x'>
        <div className='box-width'>
          <Navbar />
        </div>
      </div>

      <div className='bg-primary flex-start'>
        <div className='box-width'>
          <Hero />
        </div>
      </div>

      <div className='bg-primary flex-start padding-x'>
        <div className='box-width'>
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
