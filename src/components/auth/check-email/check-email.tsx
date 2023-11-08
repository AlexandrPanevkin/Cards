import { FC } from 'react'

import { CheckEmailSvg } from '../../../assets/icons/CheckEmailSvg.tsx'
import { Card } from '../../ui/card'
import { Typography } from '../../ui/typography'

type CheckEmailPropsType = {
  email: string
}

export const CheckEmail: FC<CheckEmailPropsType> = () => {
  return (
    <Card>
      <Typography variant={'large'}>Check Email</Typography>
      <CheckEmailSvg />
    </Card>
  )
}
