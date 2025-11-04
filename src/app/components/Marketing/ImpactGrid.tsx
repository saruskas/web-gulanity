'use client'
import * as React from 'react'
import { Card, CardContent } from '@/components/ui/card'

type Item = {
  stat: string   // ej. "+21 %"
  title: string  // ej. "Ticket medio"
  desc: string   // ej. "Gracias a upselling..."
}

export function ImpactGrid({ items }: { items: Item[] }) {
  return (
    <div className="grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((it, i) => (
        <Card key={i} className="rounded-2xl border-white/10 shadow-sm">
          <CardContent className="p-6 md:p-8">
            <p className="text-3xl md:text-4xl font-extrabold text-[var(--brand-gold)]">{it.stat}</p>
            <p className="mt-1 font-semibold">{it.title}</p>
            <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
