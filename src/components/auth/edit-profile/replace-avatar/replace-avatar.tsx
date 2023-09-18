import { ChangeEvent, FC } from 'react'

import { Avatar } from '../../../ui/avatar'
import { DarkPensil } from '../icons/darkPensil.tsx'

import s from './replace-avatar.module.scss'

type ReplaceAvatarType = {
  src?: string
  replaceAvatar: (data: string | Blob) => void
}

export const ReplaceAvatar: FC<ReplaceAvatarType> = ({ src, replaceAvatar }) => {
  const onChangeFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const imgFile = e.currentTarget.files[0]

      if (imgFile.type === 'image/jpeg' || imgFile.type === 'image/png') {
        replaceAvatar(imgFile)
      } else {
        alert('This file is not not .jpg / .png')
      }
    }
  }

  return (
    <div className={s.container}>
      <Avatar className={s.avatar} src={src} size={96} />
      <DarkPensil className={s.avatarEdit} />
      <label className={s.avatarEdit}>
        <input type="file" className={s.input} onChange={onChangeFile} />
      </label>
    </div>
  )
}
