import heroLogo from '@/assets/img/bank-tree.jpeg'

export function Hero() {
  return (
    <section className='mt-0  relative'>
      <img
        src={heroLogo}
        alt='logo tree'
        className=' w-full h-[calc(40vh)] object-cover'
      />
      <div className='hero-content flex flex-col text-left absolute top-1/4 bg-white right-[18%] lg:right-14 lg:p-10 lg:gap-2 gap-0 w-2/3'>
        <p className='flex lg:text-2xl font-bold mr-auto'>No fees.</p>
        <p className='flex lg:text-2xl font-bold mr-auto'>
          No minimum deposit.
        </p>
        <p className='flex lg:text-2xl font-bold mr-auto'>
          High interest rates
        </p>
        <p className='lg:text-2xl'>
          Open a savings account with Argent Bank today
        </p>
      </div>
    </section>
  )
}
