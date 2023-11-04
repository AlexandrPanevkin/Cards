import { FC } from 'react'

import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'
import s from '../sign-in/sign-in.module.scss'

type ForgotPasswordPropsType = {
  onSubmit: (email: string) => void
}
export const ForgotPassword: FC<ForgotPasswordPropsType> = ({ onSubmit }) => {
  return (
    <Card>
      <Typography variant={'large'} className={s.signIn}>
        Forgot your password?
      </Typography>
    </Card>
  )
}
