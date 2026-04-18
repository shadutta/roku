import { motion } from 'framer-motion'
import { forwardRef, type ReactNode } from 'react'

type Props = {
  id: string
  className?: string
  children: ReactNode
}

export const Section = forwardRef<HTMLElement, Props>(function Section(
  { id, className = '', children },
  ref,
) {
  return (
    <motion.section
      ref={ref}
      id={id}
      className={`scroll-mt-24 ${className}`}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.section>
  )
})
