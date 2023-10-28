import { SignUp } from '../../components/auth/sign-up'

export const SignUpPage = () => {
  const handleSignUp = (data: any) => {}

  return <SignUp onSubmit={handleSignUp} isSubmitting={false} />
}
