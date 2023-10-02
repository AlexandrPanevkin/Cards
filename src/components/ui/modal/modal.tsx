import { FC, ReactNode } from 'react'

import * as DialogRadix from '@radix-ui/react-dialog'

export type ModalProps = {
  trigger?: ReactNode
}

export const Modal: FC<ModalProps> = ({ trigger }) => {
  return (
    <DialogRadix.Root>
      <DialogRadix.Trigger asChild>{trigger}</DialogRadix.Trigger>
      <DialogRadix.Portal>
        <DialogRadix.Overlay />
        <DialogRadix.Content></DialogRadix.Content>
      </DialogRadix.Portal>
    </DialogRadix.Root>
  )
}
