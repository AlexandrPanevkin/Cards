import { useController, useForm } from 'react-hook-form'

import { Card } from '../../card'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'

import s from './login-form.module.scss'

type FormValues = {
  email: string
  password: string
}

export const LoginForm = () => {
  const { handleSubmit, control } = useForm<FormValues>()

  const {
    field: { value: emailValue, onChange: handleEmailChange },
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

  const onSubmit = (data: FormValues) => {
    console.log(data)
  }

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          value={emailValue}
          onValueChange={handleEmailChange}
          label={'email'}
          type={'text'}
        />
        <TextField
          value={passwordValue}
          onValueChange={handlePasswordChange}
          label={'email'}
          type={'password'}
        />
        <div className={s.submitButton}>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Card>
  )
}
