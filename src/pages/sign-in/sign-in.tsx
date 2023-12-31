import { Navigate, useNavigate } from 'react-router-dom'

import { SignIn } from '../../components/auth/sign-in'
import { useLoginMutation, useMeQuery } from '../../services/auth/auth.api.ts'

export const SignInPage = () => {
  const { data, isLoading } = useMeQuery()
  const [signIn, { isLoading: isSignIn }] = useLoginMutation()
  const navigate = useNavigate()

  if (isLoading) return <div>Loading...</div>
  if (data) return <Navigate to="/" />

  const handleSignIn = (data: any) => {
    signIn(data)
      .unwrap()
      .then(() => {
        navigate('/')
      })
  }

  return <SignIn onSubmit={handleSignIn} isSubmitting={isSignIn} />
}
