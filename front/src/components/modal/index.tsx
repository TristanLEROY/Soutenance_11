import { changeUserName } from '@/store/user'
import { RootState } from '@/store'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { useAppDispatch } from '@/store'

export function Modal() {
  const dispatch = useAppDispatch()

  const { user } = useSelector((state: RootState) => state.user)

  const [userName, setUserName] = useState(user!.userName)
  const [showForm, setShowForm] = useState(false)

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      if (user) {
        await dispatch(changeUserName({ userName }))
      }
    } catch (error) {
      console.error(error)
    }
  }

  const handleUserName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value)
  }

  const handleClearInput = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault()
    if (user?.userName) {
      setUserName(user?.userName)
    }
  }

  const toggleButton = () => {
    setShowForm(!showForm)
  }

  return (
    <div className='flex flex-col items-center'>
      {!showForm ? (
        <button
          className='button shadow-lg border-b-white border-r-white border-4 p-2 bg-[#00bc77] text-white lg:text-xl w-30 lg:font-bold mt-9 border-solid border-black max-md:h-8 flex justify-center items-center font-semibold'
          onClick={toggleButton}
        >
          Edit Name
        </button>
      ) : (
        <button
          className='button shadow-lg border-b-white border-r-white border-4 p-2 bg-[#00bc77] text-white lg:text-xl w-30 lg:font-bold mt-9 border-solid border-black max-md:h-8 flex justify-center items-center font-semibold'
          onClick={toggleButton}
        >
          Close
        </button>
      )}
      {showForm && (
        <form className='flex flex-col gap-4 items-center'>
          <label
            htmlFor='username'
            className='text-xl font-semibold text-white'
          >
            User name
          </label>
          <input
            className='max-md:h-8 pl-2 border-2 border-black h-12 w-[calc(300px)]'
            type='text'
            value={userName}
            onChange={handleUserName}
          />
          <label
            htmlFor='firstname'
            className='text-xl font-semibold text-white'
          >
            First name
          </label>
          <input
            className='max-md:h-8 pl-2 border-2 border-black h-12 w-[calc(300px)]'
            type='text'
            value={user?.firstName}
            readOnly
            disabled
          />
          <label
            htmlFor='lastname'
            className='text-xl font-semibold text-white'
          >
            Last name
          </label>
          <input
            className='max-md:h-8 pl-2 border-2 border-black h-12 w-[calc(300px)]'
            type='text'
            value={user?.lastName}
            readOnly
            disabled
          />
          <div className='flex rows gap-4'>
            <button
              className='button shadow-lg border-b-white border-r-white border-4 p-2 bg-[#00bc77] text-white lg:text-xl w-24 lg:font-bold mt-9 max-md:h-8 flex justify-center items-center font-semibold'
              onClick={handleSubmit}
            >
              Save
            </button>
            <button
              className='button shadow-lg border-b-white border-r-white border-4  p-2 bg-[#00bc77] text-white lg:text-xl w-24 lg:font-bold mt-9 border-solid max-md:h-8 flex justify-center items-center font-semibold'
              onClick={handleClearInput}
            >
              Cancel
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
