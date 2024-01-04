import Image from 'next/image'
import Hero from './_components/hero'
import Features from './_components/features'
import Offers from './_components/offers'
import Pricing from './_components/pricing'

export default function Home() {
  return (
    <main className='h-full'>
      <Hero />
      <Offers/>
      <Pricing />
      <Features />
    </main>
  )
}
