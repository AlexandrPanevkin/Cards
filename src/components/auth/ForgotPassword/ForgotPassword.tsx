import { FC } from 'react'

import { Card } from '../../ui/card'

type ForgotPasswordPropsType = {
  onSubmit: (email: string) => void
}
export const ForgotPassword: FC<ForgotPasswordPropsType> = ({ onSubmit }) => {
  return <Card></Card>
}
