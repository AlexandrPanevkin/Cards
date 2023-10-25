import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field'
import { Typography } from '../../ui/typography'
import s from '../sign-up/sign-up.module.scss'
import { signUpScheme } from '../validation/sign-up-scheme.ts'

export type SignUpType = z.infer<typeof signUpScheme>

type SignInPropsType = {
  onSubmit: (data: SignUpType) => void
  isSubmitting: boolean
}

export const SignUp: FC<SignInPropsType> = ({ onSubmit, isSubmitting }) => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpType>({
    resolver: zodResolver(signUpScheme),
  })

  const onSubmitValue = (data: SignUpType) => {
    onSubmit(data)
  }

  return (
    <Card>
      <Typography variant={'large'} className={s.signUp}>
        Sign Up
      </Typography>
      <form onSubmit={handleSubmit(onSubmitValue)}>
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
        <ControlledTextField
          name={'password'}
          control={control}
          label={'Confirm password'}
          type={'password'}
          errorMessage={errors.password?.message}
        />

        <Button type="submit" fullWidth disabled={isSubmitting}>
          Sign Up
        </Button>
      </form>
      <span className={s.formFooter}>
        <Typography variant={'body2'} className={s.questionStyle}>
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          Already have an account?
        </Typography>
        <Button variant={'link'} as={'a'} disabled={isSubmitting} className={s.underlineBtn}>
          Sign In
        </Button>
      </span>
    </Card>
  )
}
