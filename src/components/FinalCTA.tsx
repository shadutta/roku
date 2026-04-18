import { motion } from 'framer-motion'
import { CONTACT_EMAIL } from '../constants'
import { Mail } from 'lucide-react'

export function FinalCTA() {
  const mailto = `mailto:${CONTACT_EMAIL}?subject=Let%E2%80%99s%20connect%20%E2%80%94%20Roku%20Ad%20Experiences`

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-white/10 bg-gradient-to-br from-[#3d1760] via-[#662d91] to-[#7c3aed] py-24 sm:py-32"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.15),transparent_55%)]" />
      <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-white/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 size-80 rounded-full bg-black/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[2.75rem]"
        >
          Let’s Build the Future of TV Advertising Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.08 }}
          className="mt-6 text-lg text-white/85"
        >
          If you’re hiring on the Ad Experiences team, I’d love to talk about how product, data, and
          craft come together on the biggest screen in the home.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-10"
        >
          <a
            href={mailto}
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-semibold text-[#4b286d] shadow-xl shadow-black/20 transition hover:scale-[1.02] hover:bg-zinc-50"
          >
            <Mail className="size-5" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
