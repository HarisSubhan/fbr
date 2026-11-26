import { useRef, useState, type ReactNode } from 'react'
import { useReducedMotion } from 'framer-motion'

interface Props {
  children: ReactNode
  className?: string
  maxTilt?: number
}

export default function TiltCard({ children, className = '', maxTilt = 6 }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const [style, setStyle] = useState<{ rx: number; ry: number }>({ rx: 0, ry: 0 })
  const reduce = useReducedMotion()

  const onMove = (e: React.MouseEvent) => {
    if (reduce) return
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    setStyle({ rx: -py * maxTilt, ry: px * maxTilt })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={() => setStyle({ rx: 0, ry: 0 })}
      className="transition-transform duration-300 ease-out will-change-transform"
      style={
        reduce
          ? undefined
          : { transform: `perspective(900px) rotateX(${style.rx}deg) rotateY(${style.ry}deg)` }
      }
    >
      {children}
    </div>
  )
}
