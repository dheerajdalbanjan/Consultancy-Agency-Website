import Image from 'next/image'
import Hero from './_components/hero'
import Features from './_components/features'
import Offers from './_components/offers'

export default function Home() {
  return (
    <main className='h-full'>
      <Hero />
      <Offers/>
      <Features />
    </main>
  )
}
