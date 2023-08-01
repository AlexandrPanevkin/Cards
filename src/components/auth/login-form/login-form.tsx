import { useController, useForm } from 'react-hook-form'

import { Card } from '../../card'
import { Checkbox } from '../../checkbox'
import { Button } from '../../ui/button'
import { TextField } from '../../ui/text-field'
import { Typography } from '../../ui/typography'

import s from './login-form.module.scss'

type FormValues = {
  email: string
  password: string
  checkbox: boolean
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
        />
        <TextField
          value={passwordValue}
          onValueChange={handlePasswordChange}
          label={'email'}
          type={'password'}
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
