import { Link } from 'react-router-dom'
import logo from '@/assets/img/argentBankLogo.png'
import { useSelector } from 'react-redux'
import { RootState, useAppDispatch } from '@/store'
import { signOut } from '@/store/user'

export function Header() {
  const dispatch = useAppDispatch()
  const { user } = useSelector((state: RootState) => state.user)

  const handleClick = () => {
    if (!!user) {
      dispatch(signOut())
    }
  }

  return (
    <nav className='navbar bg-base-100 h-16 lg:h-24'>
      <div className='navbar-start'>
        <Link to='/'>
          <img src={logo} alt='logo' className='lg:h-14 h-10' />
        </Link>
      </div>
      <div className='navbar-end' id={!!user ? 'sign-out' : 'sign-in'}>
        <Link
          to={!!user ? '/' : '/sign-in'}
          className='flex row gap-2  pr-8'
          onClick={handleClick}
        >
          <i className='fa-regular fa-circle-user fa-xl place-self-center'></i>
          {!!user && (
            <span className='lg:text-2xl font-bold hover:underline'>
              {user?.userName}
            </span>
          )}
          <p className='font-bold lg:text-2xl hover:underline ml-2'>
            {!!user && (
              <i className='fa fa-solid fa-right-from-bracket mr-2'></i>
            )}
            Sign {!!user ? 'out' : 'in'}
          </p>
        </Link>
      </div>
    </nav>
  )
}
