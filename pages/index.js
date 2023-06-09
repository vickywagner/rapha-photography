import Hero from '@/components/Hero'
import Instagram from '@/components/Instagram'
import Slider from '@/components/Slider'
import { SliderData } from '@/components/SliderData'
import Head from 'next/head'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Rapha Photography</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero heading="Rapha Photography" message="I capture moments in nature and keep them alive."/>
      <Slider slides={SliderData} />
      <Instagram />
    </>
  )
}
