import * as CheckboxRadix from '@radix-ui/react-checkbox'
import * as LabelRadix from '@radix-ui/react-label'

import { Typography } from '../typography'

import s from './checkbox.module.scss'
import { CheckboxSVG } from './icons/CheckboxSVG.tsx'

export type CheckBoxProps = {
  checked?: boolean
  onChange?: (checked: boolean) => void
  label?: string
  id?: string
  disabled?: boolean
}

export const Checkbox = ({ checked, onChange, label, id, disabled }: CheckBoxProps) => {
  const classLabel = disabled ? s.label + ' ' + s.disabled : s.label
  const classButtonWrapper = disabled ? s.buttonWrapper + ' ' + s.disabled : s.buttonWrapper

  return (
    <LabelRadix.Root className={classLabel}>
      <div className={classButtonWrapper}>
        <CheckboxRadix.Root className={s.root} checked={checked} onCheckedChange={onChange} id={id}>
          <CheckboxRadix.Indicator className={s.indicator}>
            {checked && <CheckboxSVG />}
          </CheckboxRadix.Indicator>
        </CheckboxRadix.Root>
      </div>
      <Typography variant="body2" as={'label'}>
        {label}
      </Typography>
    </LabelRadix.Root>
  )
}
