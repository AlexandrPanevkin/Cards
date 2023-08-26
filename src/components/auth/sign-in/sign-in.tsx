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
export const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInType>({
    resolver: zodResolver(signInScheme),
  })

  const onSubmit = (data: SignInType) => {
    console.log(data)
  }

  return (
    <Card>
      <Typography className={s.signIn}>Sign In</Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ControlledTextField
          name={'email'}
          control={control}
          label={'email'}
          type={'text'}
          errorMessage={errors.email?.message}
        />
        <ControlledTextField
          name={'password'}
          control={control}
          label={'password'}
          type={'text'}
          errorMessage={errors.password?.message}
        />
        <div className={s.checkbox}>
          <ControlledCheckBox control={control} label={'Remember me'} name={'rememberMe'} />
        </div>

        <div className={s.submitButton}>
          <Button type="submit" fullWidth>
            Submit
          </Button>
        </div>
      </form>
    </Card>
  )
}
