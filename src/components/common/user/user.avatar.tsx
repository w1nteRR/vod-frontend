import { FC } from "react";

interface IUserAvatarProps {
  image?: string
  onClick?: () => void
}

const mockavatar = 'https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png'

export const UserAvatar: FC<IUserAvatarProps> = ({
  image,
  onClick
}) => 
  <div style={{ width: 30, height: 30, cursor: 'pointer' }} onClick={onClick}>
    <img 
      height='100%' 
      width='100%' 
      src={image || mockavatar} 
      alt=""
    />
  </div>