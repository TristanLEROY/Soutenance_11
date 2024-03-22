import { Features } from '@/components/features'
import { Hero } from '@/components/hero'
import { IFeaturesItems } from '@/models/features'

const featuresArray: IFeaturesItems[] = [
  {
    img: '/src/assets/img/icon-chat.webp',
    title: 'You are our #1 priority',
    p: 'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
  },
  {
    img: '/src/assets/img/icon-money.webp',
    title: 'More savings means higher rates',
    p: 'The more you save with us, the higher your interest rate will be!',
  },
  {
    img: '/src/assets/img/icon-security.webp',
    title: 'Security you can trust',
    p: 'We use top of the line encryption to make sure your data and money is always safe.',
  },
]

export function Home() {
  return (
    <>
      <Hero />
      <Features elements={featuresArray} />
    </>
  )
}
