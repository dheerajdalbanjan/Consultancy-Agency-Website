import Image from 'next/image'
import Hero from './_components/hero'
import Features from './_components/features'

export default function Home() {
  return (
    <main className='h-full'>
      <Hero />
      <Features />
    </main>
  )
}
