import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field'
import { Typography } from '../../ui/typography'
import { forgotPasswordScheme } from '../validation/forgot-password-scheme.ts'

import s from './forgot-password.module.scss'

type ForgotPasswordType = z.infer<typeof forgotPasswordScheme>
type ForgotPasswordPropsType = {
  onSubmit: (email: string) => void
}
export const ForgotPassword: FC<ForgotPasswordPropsType> = ({ onSubmit }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ForgotPasswordType>({
    resolver: zodResolver(forgotPasswordScheme),
    mode: 'onSubmit',
  })
  const onSubmitForm = handleSubmit(data => {
    onSubmit(data.email)
  })

  return (
    <Card className={s.forgotPassword}>
      <Typography variant={'large'} className={s.title}>
        Forgot your password?
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          name={'email'}
          control={control}
          label={'Email'}
          type={'text'}
          errorMessage={errors.email?.message}
          className={s.emailInput}
        />
        <Typography variant={'body2'} className={s.enterEmailText}>
          Enter your email address and we will send you further instructions
        </Typography>
        <Button fullWidth className={s.sendInstructions}>
          <Typography variant="subtitle2">Send Instructions</Typography>
        </Button>
        <Typography variant="body2" className={s.rememberPassword}>
          Did you remember your password?
        </Typography>
        <Typography as={'a'} href={'/sign-in'} className={s.link}>
          Try logging in
        </Typography>
      </form>
    </Card>
  )
}
