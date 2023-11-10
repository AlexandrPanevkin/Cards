import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field'
import { Typography } from '../../ui/typography'
import { createNewPasswordSchema } from '../validation/create-new-password-schema.tsx'

import s from './create-new-password.module.scss'

type CreateNewPasswordType = z.infer<typeof createNewPasswordSchema>
type CreateNewPasswordPropsType = {
  onSubmit: (password: string) => void
}
export const CreateNewPassword: FC<CreateNewPasswordPropsType> = ({ onSubmit }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateNewPasswordType>({
    resolver: zodResolver(createNewPasswordSchema),
  })

  const onSubmitForm = handleSubmit((data: CreateNewPasswordType) => {
    onSubmit(data.newPassword)
  })

  return (
    <Card className={s.card}>
      <Typography className={s.title} as={'span'} variant={'large'}>
        Create new password
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          name={'newPassword'}
          control={control}
          label={'Password'}
          type={'password'}
          className={s.password}
          errorMessage={errors.newPassword?.message}
        />
        <Typography className={s.text} variant={'body2'} color={'secondary'}>
          Create new password and we will send you further instructions to email
        </Typography>
        <Button className={s.button} fullWidth type={'submit'}>
          <Typography variant="subtitle2">Create new password</Typography>
        </Button>
      </form>
    </Card>
  )
}
