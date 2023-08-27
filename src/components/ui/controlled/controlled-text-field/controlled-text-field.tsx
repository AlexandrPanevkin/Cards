import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField, TextFieldProps } from '../../text-field'

type Props<T extends FieldValues> = UseControllerProps<T> &
  Omit<TextFieldProps, 'onChangeValue' | 'value' | 'itemRef'>

export const ControlledTextField = <T extends FieldValues>({
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

  return <TextField value={value} onValueChange={onChange} {...fieldProps} />
}
