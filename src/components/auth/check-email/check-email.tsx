import { FC } from 'react'

import { CheckEmailSvg } from '../../../assets/icons/CheckEmailSvg.tsx'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './check-email.module.scss'

type CheckEmailPropsType = {
  email: string
}

export const CheckEmail: FC<CheckEmailPropsType> = ({ email }) => {
  return (
    <Card className={s.card}>
      <Typography as={'span'} className={s.title} variant={'large'}>
        Check Email
      </Typography>
      <span className={s.logo}>
        <CheckEmailSvg />
      </span>
      <div className={s.message}>
        <Typography as={'span'} variant={'body2'}>
          We’ve sent an Email with instructions to
        </Typography>
        <Typography as={'span'} variant={'body2'}>
          {email}
        </Typography>
      </div>
      <Button
        className={s.button}
        type="submit"
        variant={'primary'}
        as={'a'}
        href={'/sign-in'}
        fullWidth
      >
        <Typography variant={'subtitle2'}>Back to Sign In</Typography>
      </Button>
    </Card>
  )
}
