import { FC } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '../../../ui/button'
import { ControlledTextField } from '../../../ui/controlled/controlled-text-field'

import { nickNameScheme } from './validation'

type EditNameType = {
  editName: (name: string) => void
} & z.infer<typeof nickNameScheme>

export const EditName: FC<EditNameType> = ({ editName }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<EditNameType>({
    resolver: zodResolver(nickNameScheme),
  })
  const onSubmit = (data: EditNameType) => {
    editName(data.nickname)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ControlledTextField
        errorMessage={errors.nickname?.message}
        type={'text'}
        label={'NickName'}
        control={control}
        name={'nickname'}
      />
      <Button type="submit" variant={'primary'}>
        Save Changes
      </Button>
    </form>
  )
}
