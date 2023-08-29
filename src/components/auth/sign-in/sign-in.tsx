import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledCheckBox } from '../../ui/controlled/controlled-check-box'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field'
import { Typography } from '../../ui/typography'
import { signInScheme } from '../validation'

import s from './sign-in.module.scss'

type SignInType = z.infer<typeof signInScheme>
type SignInPropsType = {
  onSubmit: (data: SignInType) => void
  isSubmitting: boolean
}
export const SignIn: FC<SignInPropsType> = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInScheme),
    mode: 'onSubmit',
  })
  const onSubmitForm = handleSubmit(data => {
    onSubmit({ email: data.email, password: data.password, rememberMe: data.rememberMe })
  })

  return (
    <Card>
      <Typography variant={'large'} className={s.signIn}>
        Sign In
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
        <ControlledTextField
          name={'password'}
          control={control}
          label={'Password'}
          type={'password'}
          errorMessage={errors.password?.message}
        />
        <ControlledCheckBox
          className={s.rememberMe}
          control={control}
          label={'Remember me'}
          name={'rememberMe'}
        />
        <Typography variant={'body2'} className={s.forgotPassword}>
          Forgot Password?
        </Typography>

        <Button type="submit" fullWidth disabled={isSubmitting}>
          Sign In
        </Button>
      </form>
      <span className={s.formFooter}>
        <Typography variant={'body2'} className={s.questionStyle}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Don't have an account?
        </Typography>
        <Button variant={'link'} as={'a'} disabled={isSubmitting} className={s.underlineBtn}>
          Sign Up
        </Button>
      </span>
    </Card>
  )
}
