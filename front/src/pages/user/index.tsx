import { Card } from '@/components/card'
import { Modal } from '@/components/modal'
import { ICardsItems } from '@/models/card'
import { RootState, useAppDispatch } from '@/store'
import { fetchUser } from '@/store/user'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

const CardsArray: ICardsItems[] = [
  {
    price: '$2,082.79',
    title: 'Argent Bank Checking (x8349)',
    balance: 'Available Balance',
  },
  {
    price: '$10,928.42',
    title: 'Argent Bank Savings (x6712)',
    balance: 'Available Balance',
  },
  {
    price: '$184.30',
    title: 'Argent Bank Credit Card (x8349)',
    balance: 'Current Balance',
  },
]

export function User() {
  const dispatch = useAppDispatch()
  const { user } = useSelector((state: RootState) => state.user)

  useEffect(() => {
    if (!user) {
      dispatch(fetchUser())
    }
  })

  return (
    <section className='bg-[#12002b] min-h-[calc(100vh-12rem)] flex items-center flex-col pb-8'>
      <div className='text-center mt-4 pl-8 pr-8'>
        <h1 className='text-white text-4xl font-bold  '>
          Welcome back {user?.firstName} {user?.userName}!
        </h1>
        <Modal />
      </div>
      <div className='w-9/12 pt-9'>
        <Card elements={CardsArray} />
      </div>
    </section>
  )
}
