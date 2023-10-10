import { FC, ReactNode } from 'react'

import * as Dialog from '@radix-ui/react-dialog'
import { clsx } from 'clsx'

import { CloseIcon } from '../../../assets/icons/CloseIcon.tsx'
import { Typography } from '../typography'

import s from './modal.module.scss'
export type ModalPropsType = {
  trigger?: ReactNode
  title: string
  children: ReactNode
}

const Root: FC<ModalPropsType> = ({ trigger, title, children }) => {
  const cNames = {
    content: clsx(s.content),
    overlay: clsx(s.overlay),
    body: clsx(s.body),
    footer: clsx(s.footer),
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className={cNames.overlay} />
        <Dialog.Content className={cNames.content}>
          {title && <ModalTitle title={title} />}
          {children}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}

type ModalTitlePropsType = {
  title: string
}

const ModalTitle: FC<ModalTitlePropsType> = ({ title }) => {
  return (
    <Dialog.Title className={s.titleContainer}>
      <Typography variant={'h2'}>{title}</Typography>
      <Dialog.Close>
        <button className={s.closeIcon}>
          <CloseIcon />
        </button>
      </Dialog.Close>
    </Dialog.Title>
  )
}

type ModalChildType = {
  children: ReactNode
  className?: string
}

const Body: FC<ModalChildType> = ({ className, children }) => {
  const cNames = {
    body: clsx(s.body, className),
  }

  return <div className={cNames.body}>{children}</div>
}

const Footer: FC<ModalChildType> = ({ className, children }) => {
  const cNames = {
    footer: clsx(s.footer, className),
  }

  return <div className={cNames.footer}>{children}</div>
}

export const Modal = { Root, Body, Footer }
