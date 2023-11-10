import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Card } from '../../ui/card'
import { ControlledTextField } from '../../ui/controlled/controlled-text-field'
import { Typography } from '../../ui/typography'
import { createNewPasswordSchema } from '../validation/create-new-password-schema.tsx'

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
    <Card>
      <Typography as={'span'} variant={'large'}>
        Create new password
      </Typography>
      <form onSubmit={onSubmitForm}>
        <ControlledTextField
          name={'newPassword'}
          control={control}
          label={'Password'}
          type={'password'}
          errorMessage={errors.newPassword?.message}
        />
      </form>
    </Card>
  )
}
