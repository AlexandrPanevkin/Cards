import { SignUp } from '../../components/auth/sign-up'

export const SignUpPage = () => {
  const handleSignUp = () => {}

  return <SignUp onSubmit={handleSignUp} isSubmitting={false} />
}
