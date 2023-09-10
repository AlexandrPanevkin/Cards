import { Outlet } from 'react-router-dom'

import { useMeQuery } from '../../services/auth/auth.ts'

import { Header } from './Header'

export const Layout = () => {
  const { data } = useMeQuery()

  return (
    <div>
      <Header userData={data} />
      <Outlet />
    </div>
  )
}
