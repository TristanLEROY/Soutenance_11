import { IFeaturesArray } from '@/models/features'

export function Features({ elements }: IFeaturesArray) {
  return (
    <section className='grid lg:grid-cols-3 grid-cols-1 mt-32 gap-32 mx-9 pb-8'>
      {elements.map((element, index) => (
        <div key={index} className='flex flex-col items-center gap-4 '>
          {' '}
          <img
            src={element.img}
            alt={element.title}
            className='border-[calc(14px)] border-[#00bc77] rounded-full w-[calc(152px+2rem)] p-4'
          />{' '}
          <span className='text-2xl font-semibold'>{element.title}</span>{' '}
          <p className='text-center'>{element.p}</p>{' '}
        </div>
      ))}
    </section>
  )
}
