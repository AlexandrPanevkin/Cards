import { FC, useState } from 'react'

import { useUpdateMeMutation } from '../../../services/auth/auth.api.ts'
import { UserType } from '../../../services/auth/types.ts'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import { EditName } from './edit-name/edit-name.tsx'
import s from './edit-profile.module.scss'
import { ReplaceAvatar } from './replace-avatar/replace-avatar.tsx'

type EditProfileType = {
  data?: UserType | null
}

export const EditProfile: FC<EditProfileType> = ({ data }) => {
  const [switcher, setSwitcher] = useState(false)
  const [updateMe] = useUpdateMeMutation()

  const onReplaceAvatarHandler = (data: string | Blob) => {
    const form = new FormData()

    form.append('avatar', data)
    updateMe(form)
  }
  const onEditNameClickHandler = (name: string) => {
    const form = new FormData()

    form.append('name', name)
    updateMe(form)
    setSwitcher(!switcher)
  }

  return (
    <Card className={s.offset}>
      <Typography variant={'large'}>Personal Information</Typography>
      <ReplaceAvatar replaceAvatar={value => onReplaceAvatarHandler(value)} src={data?.avatar} />

      {switcher ? (
        <EditName
          editName={name => onEditNameClickHandler(name)}
          nickname={data?.name ? data?.name : ''}
        />
      ) : (
        <>
          <Typography
            onDoubleClick={() => setSwitcher(!switcher)}
            variant={'subtitle1'}
            as={'span'}
          >
            {data?.name}
          </Typography>
          <Typography variant={'subtitle1'} as={'span'}>
            {data?.email}
          </Typography>
          <Button>Logout</Button>
        </>
      )}
    </Card>
  )
}
