import { Button } from '../../ui/button'

import s from './header.module.scss'
import { Cards } from './icons/Cards.tsx'

export const Header = () => {
  return (
    <div className={s.container}>
      <Cards className={s.cards} />
      <Button className={s.button}>Sign In</Button>
    </div>
  )
}
