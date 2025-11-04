'use client'
import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'

type Benefit = {
  title: string
  desc: string
}

export function BenefitsGrid({ items }: { items: Benefit[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
      {items.map((b, i) => (
        <Card key={i} className="rounded-2xl border-black/5 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <h3 className="text-lg md:text-xl font-semibold">{b.title}</h3>
            <p className="mt-2 text-sm text-[#0f1417]/70 leading-relaxed">{b.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
