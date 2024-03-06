import { ICardsArray } from '@/models/card'

export function Card({ elements }: ICardsArray) {
  return (
    <div className=' gap-12 flex flex-col w-full'>
      {elements.map((element, index) => (
        <div
          key={index}
          className='bg-white flex flex-col lg:flex-row justify-between '
        >
          <div className='m-4 lg:m-7'>
            <h2 className='text-xl lg:text-2xl'>{element.title}</h2>{' '}
            <span className='text-4xl lg:text-5xl font-bold'>
              {element.price}
            </span>{' '}
            <p className='text-xl lg:text-2xl'>{element.balance}</p>
          </div>
          <button className=' button shadow-lg border-b-white border-r-white border-4 p-2 bg-[#00bc77] text-white font-semibold lg:font-bold lg:text-2xl w-64 h-14 lg:m-4 mb-4 self-center max-md:h-8 flex justify-center items-center'>
            View transactions
          </button>
        </div>
      ))}
    </div>
  )
}
