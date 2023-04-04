'use client'

import Image from "next/image"

const Avatar = () => {
  return (
    <Image 
        alt=""
        height="30"
        width="30"
        src="/images/placeholder.jpg"
        className="rounded-full"
    />
  )
}

export default Avatar
