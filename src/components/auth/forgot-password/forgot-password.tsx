import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

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
    <Card>
      <Typography variant={'large'} className={s.forgotPassword}>
        Forgot your password?
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          name={'email'}
          control={control}
          label={'Email'}
          type={'text'}
          errorMessage={errors.email?.message}
          className={s.inputMargin}
        />
        <Typography variant={'body2'} className={s.forgotPassword}>
          Enter your email address and we will send you further instructions
        </Typography>
      </form>
    </Card>
  )
}
