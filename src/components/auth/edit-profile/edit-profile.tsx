import { FC, useState } from 'react'

import { UserType } from '../../../services/auth/types.ts'
import { Button } from '../../ui/button'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

import s from './edit-profile.module.scss'
import { ReplaceAvatar } from './replace-avatar/replace-avatar.tsx'

type EditProfileType = {
  data?: UserType | null
  replaceAvatar: (avatar: string | Blob) => void
}

export const EditProfile: FC<EditProfileType> = ({ data, replaceAvatar }) => {
  const [switcher, setSwitcher] = useState(false)
  const onReplaceAvatarHandler = (avatar: string | Blob) => {
    replaceAvatar(avatar)
  }

  return (
    <Card className={s.offset}>
      <Typography variant={'large'}>Personal Information</Typography>
      <ReplaceAvatar replaceAvatar={value => onReplaceAvatarHandler(value)} src={data?.avatar} />
      {switcher ? (
        <input />
      ) : (
        <>
          <Typography variant={'subtitle1'} as={'span'}>
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
