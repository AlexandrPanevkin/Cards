import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import { Typography } from '../typography'

import s from './checkbox.module.scss'

export type CheckBoxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
}

export const Checkbox = ({ checked, onChange, label }: CheckBoxProps) => {
  return (
    <LabelRadix.Root>
      <CheckboxRadix.Root className={s.root} checked={checked} onCheckedChange={onChange}>
        <CheckboxRadix.Indicator>{checked && <Checkbox />}</CheckboxRadix.Indicator>
      </CheckboxRadix.Root>
      <Typography variant="body2" as={'label'}>
        {label}
      </Typography>
    </LabelRadix.Root>
  )
}
