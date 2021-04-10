import { ReactNode } from 'react'

export interface IButtonStyles {
  width?: number
  bgColor?: string
}

export interface IButtonProps extends IButtonStyles {
  onPress?: () => void
  children: Text | ReactNode
  iconName?: unknown
}
