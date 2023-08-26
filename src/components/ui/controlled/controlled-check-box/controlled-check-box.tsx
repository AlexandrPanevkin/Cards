import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { Checkbox, CheckBoxProps } from '../../checkbox'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<CheckBoxProps, 'onChange' | 'checked' | 'id'>

export const ControlledCheckBox = <T extends FieldValues>({
  control,
  name,
  defaultValue,
  rules,
  shouldUnregister,
  ...fieldProps
}: Props<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    control,
    defaultValue,
    rules,
    shouldUnregister,
  })

  return (
    <Checkbox
      {...{
        ...fieldProps,
        onChange,
        checked: value,
        id: name,
      }}
    />
  )
}
