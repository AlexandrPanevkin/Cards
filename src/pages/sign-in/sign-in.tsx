import { SignIn } from '../../components/auth/sign-in'
import { useLoginMutation } from '../../services/auth/auth.ts'

export const SignInPage = () => {
  const [signIn, { loading, error }] = useLoginMutation()

  return <SignIn onSubmit={signIn} />
}
