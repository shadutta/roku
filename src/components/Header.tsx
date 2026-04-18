import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#ad-demo', label: 'Ad Demo' },
  { href: '#thinking', label: 'Product' },
  { href: '#analytics', label: 'Metrics' },
  { href: '#experiments', label: 'A/B' },
  { href: '#how-ads-work', label: 'Ad Flow' },
  { href: '#case-study', label: 'Case Study' },
  { href: '#about', label: 'About' },
]

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#2d1050]/75 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6">
        <a href="#hero" className="group flex flex-col gap-0.5 text-left">
          <span className="text-lg font-semibold tracking-tight text-white transition group-hover:text-white/90 sm:text-xl">
            Shamik Dutta Majumdar
          </span>
          <span className="hidden text-xs font-medium text-white/55 sm:block">Product • Data • AI</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-white/80 transition hover:bg-white/10 hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-[#4b286d] shadow-sm transition hover:bg-white/95"
          >
            Contact
          </a>
        </nav>

        <button
          type="button"
          className="rounded-lg p-2 text-white lg:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/10 bg-[#2d1050]/95 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-4 py-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2.5 text-sm font-medium text-white/90 hover:bg-white/10"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 rounded-full bg-white px-3 py-3 text-center text-sm font-semibold text-[#4b286d]"
                onClick={() => setOpen(false)}
              >
                Contact
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
