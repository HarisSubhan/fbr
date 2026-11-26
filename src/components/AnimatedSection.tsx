import { motion, useReducedMotion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right' | 'none'
  amount?: number
}

const offsets = {
  up: { y: 36, x: 0 },
  down: { y: -36, x: 0 },
  left: { x: 36, y: 0 },
  right: { x: -36, y: 0 },
  none: { x: 0, y: 0 },
}

export default function AnimatedSection({ children, className, delay = 0, direction = 'up', amount = 0.25 }: Props) {
  const reduce = useReducedMotion()
  const off = offsets[direction]

  const variants: Variants = {
    hidden: reduce ? { opacity: 0 } : { opacity: 0, ...off },
    visible: { opacity: 1, x: 0, y: 0 },
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}
