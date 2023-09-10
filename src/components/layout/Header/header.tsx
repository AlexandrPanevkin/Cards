import { FC } from 'react'

import { UserType } from '../../../services/auth/types.ts'
import { Avatar } from '../../ui/avatar'
import { Button } from '../../ui/button'
import { DropDownMenuHeader } from '../../ui/drop-down-menu/drop-down-menu-header/drop-down-menu-header.tsx'
import { DropDownMenuItem } from '../../ui/drop-down-menu/drop-down-menu-item/drop-down-menu-item.tsx'
import { DropDownMenu } from '../../ui/drop-down-menu/drop-down-menu.tsx'
import logOutIcon from '../../ui/drop-down-menu/icons/logOut.svg'
import personIcon from '../../ui/drop-down-menu/icons/personOutline.svg'
import { Typography } from '../../ui/typography'

import s from './header.module.scss'
import { CardsSVG } from './icons/CardsSVG.tsx'

type HeaderType = {
  userData?: UserType | null
}

export const Header: FC<HeaderType> = ({ userData }) => {
  return (
    <div className={s.container}>
      <CardsSVG className={s.cards} />
      {userData ? (
        <div className={s.info}>
          <Typography variant={'subtitle1'} className={s.name}>
            {userData.name}
          </Typography>
          <DropDownMenu trigger={<Avatar src={userData.avatar} />}>
            <DropDownMenuHeader
              userPhoto={userData.avatar}
              userName={userData.name}
              userEmail={userData.email}
            />
            <DropDownMenuItem icon={personIcon} text={'My Profile'} />
            <DropDownMenuItem icon={logOutIcon} text={'Sign Out'} />
          </DropDownMenu>
        </div>
      ) : (
        <Button className={s.button}>Sign In</Button>
      )}
    </div>
  )
}
