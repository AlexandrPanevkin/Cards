import { Outlet } from 'react-router-dom'

import { Header } from './Header/header.tsx'

export const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  )
}
