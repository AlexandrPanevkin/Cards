import { zodResolver } from '@hookform/resolvers/zod'
import { useController, useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Checkbox } from '../../ui/checkbox'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

type FormValues = {
  email: string
  password: string
  checkbox: boolean
}

const loginSchema = z.object({
  email: z.string().nonempty().email(),
  password: z.string().min(3),
  rememberMe: z.boolean().default(false),
})

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>({
    resolver: zodResolver(loginSchema),
  })

  const {
    field: { value: emailValue, onChange: handleEmailChange },
    formState: { errors },
  } = useController({
    name: 'email',
    control,
    defaultValue: '',
  })

  const {
    field: { value: passwordValue, onChange: handlePasswordChange },
  } = useController({
    name: 'password',
    control,
    defaultValue: '',
  })

  const {
    field: { value: checkboxValue, onChange: handleCheckboxChange },
  } = useController({
    name: 'checkbox',
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
        <TextField
          value={emailValue}
          onValueChange={handleEmailChange}
          label={'email'}
          type={'text'}
          errorMessage={errors.email?.message}
        />
        <TextField
          value={passwordValue}
          onValueChange={handlePasswordChange}
          label={'email'}
          type={'password'}
          errorMessage={errors.password?.message}
        />
        <div className={s.checkbox}>
          <Checkbox checked={checkboxValue} onValueChange={handleCheckboxChange} />
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
