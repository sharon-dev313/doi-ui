import { Avatar, AvatarGroup } from '@heroui/react'
import React from 'react'

const AvatarGroups = ({avatarNum }) => {
  return (
     <AvatarGroup isBordered max={avatarNum} >
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258a2462d826712d" />
      <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
      <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026302d" />

    </AvatarGroup>
  )
}

export default AvatarGroups
