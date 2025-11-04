'use client'
import Image from 'next/image'
import * as React from 'react'

type Props = {
  src: string
  alt: string
  overlayClassName?: string // ej. "bg-black/65"
  priority?: boolean
}

export function HeroImage({ src, alt, overlayClassName = 'bg-black/65', priority = true }: Props) {
  return (
    <>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="100vw"
        className="object-cover"
      />
      <div className={`absolute inset-0 ${overlayClassName}`} />
    </>
  )
}
