import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'

import { Layout } from './components/layout/layout.tsx'
import { Decks } from './pages/decks'
import { SignInPage } from './pages/sign-in/sign-in.tsx'
import { useMeQuery } from './services/auth/auth.ts'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        element: <PrivateRoutes />,
        children: [
          {
            index: true,
            element: <Decks />,
          },
        ],
      },
    ],
  },
  {
    path: '/login',
    element: <SignInPage />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}

function PrivateRoutes() {
  const { data, isLoading } = useMeQuery()

  if (isLoading) return <div>Loading...</div>

  const isAuthenticated = !!data

  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />
}
