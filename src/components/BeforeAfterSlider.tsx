import { useCallback, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronsLeftRight, Maximize2, X } from 'lucide-react'

export interface BeforeAfterSlide {
  id: string
  title: string
  category: string
  description: string
  before: string
  after: string
}

export default function BeforeAfterSlider({ slide }: { slide: BeforeAfterSlide }) {
  const [pos, setPos] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [zoom, setZoom] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const update = useCallback((clientX: number) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const pct = ((clientX - rect.left) / rect.width) * 100
    setPos(Math.min(100, Math.max(0, pct)))
  }, [])

  const onPointerDown = (e: React.PointerEvent) => {
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
    setDragging(true)
    update(e.clientX)
  }
  const onPointerMove = (e: React.PointerEvent) => {
    if (dragging) update(e.clientX)
  }
  const stop = () => setDragging(false)

  return (
    <>
      <div
        ref={ref}
        className="group relative aspect-[4/3] w-full cursor-ew-resize select-none overflow-hidden rounded-2xl border border-gold-500/25 shadow-xl sm:aspect-[16/9]"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={stop}
        onPointerLeave={stop}
      >
        <img
          src={slide.after}
          alt={`${slide.title} \u2014 after demo view`}
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
          draggable={false}
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        >
          <img
            src={slide.before}
            alt={`${slide.title} \u2014 before demo view`}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>

        <span className="pointer-events-none absolute left-4 top-4 rounded-full bg-burgundy-950/70 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-ivory-100 backdrop-blur">
          Before
        </span>
        <span className="pointer-events-none absolute right-4 top-4 rounded-full bg-gold-500 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.2em] text-burgundy-900">
          After
        </span>

        <button
          type="button"
          onClick={() => setZoom(true)}
          aria-label="View fullscreen"
          className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-burgundy-950/70 text-gold-300 opacity-0 backdrop-blur transition-opacity duration-300 hover:bg-burgundy-900 group-hover:opacity-100"
        >
          <Maximize2 className="h-4 w-4" />
        </button>

        <div className="pointer-events-none absolute inset-y-0" style={{ left: `${pos}%` }}>
          <div className="absolute inset-y-0 -left-px w-0.5 bg-gold-400 shadow-[0_0_12px_rgba(201,164,92,0.8)]" />
          <div
            className={`absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-gold-400 bg-burgundy-900/85 text-gold-300 shadow-lg backdrop-blur transition-transform ${
              dragging ? 'scale-110' : 'group-hover:scale-105'
            }`}
          >
            <ChevronsLeftRight className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="mt-4 px-1">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="font-display text-xl text-burgundy-800 dark:text-gold-200">{slide.title}</h3>
          <span className="text-[11px] uppercase tracking-[0.2em] text-gold-600 dark:text-gold-500">
            {slide.category}
          </span>
        </div>
        <p className="mt-1.5 text-sm leading-relaxed text-charcoal/70 dark:text-ivory-100/65">
          {slide.description}
        </p>
      </div>

      <AnimatePresence>
        {zoom && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[80] flex items-center justify-center bg-burgundy-950/95 p-4 backdrop-blur"
            onClick={() => setZoom(false)}
          >
            <button
              type="button"
              aria-label="Close fullscreen view"
              className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-gold-500/50 text-gold-300 transition-colors hover:bg-gold-500 hover:text-burgundy-900"
              onClick={() => setZoom(false)}
            >
              <X className="h-5 w-5" />
            </button>
            <motion.div
              initial={{ scale: 0.92, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.94, y: 12 }}
              className="w-full max-w-6xl"
              onClick={(e) => e.stopPropagation()}
            >
              <BeforeAfterSlider slide={slide} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
