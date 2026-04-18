import { Section } from './Section'
import { ArrowRight, Radio, Server, BarChart3, Tv } from 'lucide-react'
import { motion } from 'framer-motion'

const steps = [
  {
    icon: Radio,
    title: 'Ad request',
    body: 'The device asks for a relevant ad for this profile, placement, and context.',
  },
  {
    icon: Server,
    title: 'Ad server',
    body: 'Decisioning picks a creative, enforces rules, and prepares the response.',
  },
  {
    icon: Tv,
    title: 'Delivery',
    body: 'The ad renders on screen—interactive layers sit on top of the video canvas.',
  },
  {
    icon: BarChart3,
    title: 'Tracking',
    body: 'Events stream back: impressions, interactions, skips, and downstream outcomes.',
  },
]

export function HowAdsWork() {
  return (
    <Section id="how-ads-work" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">Under the hood</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            How ads work (simple flow)
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A product-friendly mental model—enough to align design, data, and go-to-market without
            getting lost in stack specifics.
          </p>
        </div>

        <div className="mt-16 grid gap-6 lg:grid-cols-4">
          {steps.map((s, i) => {
            const StepIcon = s.icon
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="relative"
              >
                {i < steps.length - 1 && (
                  <div className="absolute -right-3 top-10 hidden text-white/25 lg:block">
                    <ArrowRight className="size-6" />
                  </div>
                )}
                <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-200">
                    <StepIcon className="size-6" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/65">{s.body}</p>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="mt-14 overflow-x-auto rounded-2xl border border-dashed border-white/20 bg-white/5 p-8">
          <div className="flex min-w-[640px] items-center justify-between gap-4 text-center text-sm font-medium text-white/85">
            <span className="rounded-full bg-white/10 px-4 py-2 shadow-sm ring-1 ring-white/15">
              Request
            </span>
            <span className="text-white/30">———</span>
            <span className="rounded-full bg-white/10 px-4 py-2 shadow-sm ring-1 ring-white/15">
              Decision
            </span>
            <span className="text-white/30">———</span>
            <span className="rounded-full bg-white/10 px-4 py-2 shadow-sm ring-1 ring-white/15">
              Render
            </span>
            <span className="text-white/30">———</span>
            <span className="rounded-full bg-fuchsia-500 px-4 py-2 text-white shadow-md">Learn</span>
          </div>
        </div>
      </div>
    </Section>
  )
}
