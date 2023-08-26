import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Checkbox } from '../../ui/checkbox'
import { ControlledTextField } from '../../ui/controlled'
import { Typography } from '../../ui/typography'

import s from './sign-in.module.scss'

type FormValues = {
  email: string
  password: string
  rememberMe: boolean
}

const loginSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const SignIn = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    field: { value: checkboxValue, onChange: handleCheckboxChange },
  } = useController({
    name: 'rememberMe',
    control,
    defaultValue: false,
  })

  const onSubmit = (data: FormValues) => {
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
          <Checkbox checked={checkboxValue} onChange={handleCheckboxChange} />
          <span className={s.rememberMe}> Remember me</span>
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
