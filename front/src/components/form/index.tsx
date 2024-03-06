import { fetchUser, loginUser } from '@/store/user'
import { useState } from 'react'
import { useAppDispatch } from '@/store'
import { useNavigate } from 'react-router-dom'

export function Form() {
  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showError, setShowError] = useState(false)

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target?.value)
  }
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value)
  }

  const handleSubmit = async (event: any) => {
    event.preventDefault()
    try {
      await dispatch(loginUser({ email, password }))
      await dispatch(fetchUser())
      navigate(`/user`)
    } catch (error) {
      console.error(error)
      setShowError(true)
    }
  }

  return (
    <div className='bg-white w-2/3 lg:w-fit flex flex-col items-center p-16 gap-6 mt-16 h-fit'>
      <i className='fa-regular fa-circle-user fa-xl place-self-center'></i>
      <h1 className='text-lg lg:text-3xl font-bold'>Sign In</h1>
      <form className='flex flex-col gap-4' id='form' onSubmit={handleSubmit}>
        <div className='join flex flex-col'>
          <label htmlFor='email' className='text-base lg:text-xl font-semibold'>
            Username
          </label>
          <input
            className='max-md:h-8 pl-2 border-2 border-black h-12 w-max lg:w-[calc(300px)]'
            type='text'
            id='email'
            onChange={handleEmailChange}
            value={email}
          />
        </div>
        <div className='join flex flex-col'>
          <label
            htmlFor='Password'
            className='text-base lg:text-xl font-semibold'
          >
            Password
          </label>
          <input
            className='max-md:h-8 pl-2 border-2 border-black h-12 w-max lg:w-[calc(300px)]'
            type='password'
            id='password'
            onChange={handlePasswordChange}
            value={password}
          />
        </div>
        <div className='gap-2 flex items-center'>
          <input
            type='checkbox'
            className=' checked:bg-blue-500'
            id='remember-me'
          />
          <label htmlFor='remember-me' className='lg:text-xl'>
            Remember me
          </label>
        </div>
        <button className='button shadow-lg border-b-white border-r-white border-4 p-2 underline bg-[#00bc77] text-white font-bold lg:text-2xl text-lg max-md:h-8 flex justify-center items-center'>
          Sign In
        </button>
        {showError && (
          <span className='text-red-600'>Identifiants incorrects</span>
        )}
      </form>
    </div>
  )
}
