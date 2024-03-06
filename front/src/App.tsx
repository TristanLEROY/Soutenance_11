import { Outlet, Route, Routes, Navigate } from 'react-router-dom'
import '@/App.css'
import { Header } from '@/components/header'
import { Home } from '@/pages/home'
import { Footer } from '@/components/footer'
import { SignIn } from '@/pages/sign-in'
import { User } from '@/pages/user'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import { ReactNode } from 'react'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route
          path='/user'
          element={
            <Protected>
              <User />
            </Protected>
          }
        />
      </Route>
    </Routes>
  )
}

function Layout() {
  return (
    <div className='min-h-screen'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}

function Protected({ children }: { children: ReactNode }) {
  const { user } = useSelector((state: RootState) => state.user)

  if (!user) {
    return <Navigate to='/' replace />
  }
  return children
}
