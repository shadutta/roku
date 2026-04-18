import { Section } from './Section'
import { motion } from 'framer-motion'
import { Scale, Sparkles, Users } from 'lucide-react'

export function ProductThinking() {
  return (
    <Section
      id="thinking"
      className="border-b border-white/10 bg-white/[0.03] py-20 backdrop-blur-[2px] sm:py-28"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">Product thinking</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            From problem to product-shaped solution
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-red-400/30 bg-white/5 p-8 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-red-300">
              <Users className="size-6" />
              <h3 className="text-lg font-semibold text-white">Problem</h3>
            </div>
            <p className="mt-4 leading-relaxed text-white/70">
              Full-screen video ads can feel interruptive on the biggest screen in the home. When
              viewers feel trapped, they tune out—or churn—hurting both experience and long-term
              revenue quality.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className="rounded-3xl border border-fuchsia-400/25 bg-white/5 p-8 shadow-sm backdrop-blur-sm"
          >
            <div className="flex items-center gap-3 text-fuchsia-200">
              <Sparkles className="size-6" />
              <h3 className="text-lg font-semibold text-white">Solution</h3>
            </div>
            <p className="mt-4 leading-relaxed text-white/70">
              Interactive, user-controlled formats turn passive impressions into intentional moments:
              clear opt-out, contextual relevance, and lightweight paths to action—without breaking
              the lean-back flow.
            </p>
          </motion.div>
        </div>

        <div className="mt-16">
          <p className="text-center text-sm font-semibold text-white/50">Wireframe · ad overlay + CTA rail</p>
          <div className="mt-6 overflow-hidden rounded-2xl border-2 border-dashed border-white/25 bg-white/5 p-6 sm:p-10">
            <div className="mx-auto max-w-xl space-y-4">
              <div className="flex h-10 items-center gap-2 border-b border-dashed border-white/20 pb-2">
                <div className="h-2 w-20 rounded bg-white/30" />
                <div className="h-2 flex-1 rounded bg-white/15" />
                <div className="h-6 w-16 rounded border border-dashed border-white/35" />
              </div>
              <div className="flex flex-col gap-3 rounded-lg border-2 border-dashed border-fuchsia-300/35 bg-fuchsia-500/10 p-4 sm:p-6">
                <div className="h-10 rounded-md border border-dashed border-white/30 bg-white/10" />
                <div className="h-10 rounded-md border border-dashed border-white/20 bg-white/5" />
              </div>
            </div>
          </div>

          <figure className="mt-8 overflow-hidden rounded-2xl border border-white/15 bg-zinc-950/50 shadow-xl shadow-black/30 ring-1 ring-white/10">
            <img
              src="/images/roku-city.png"
              alt="Stylized Roku City nighttime illustration with neon skyline, theater marquee, and glowing storefronts"
              className="mx-auto block h-auto w-full max-w-6xl object-contain"
              sizes="(min-width: 1152px) 1152px, 100vw"
              loading="lazy"
              decoding="async"
            />
            <figcaption className="border-t border-white/10 bg-black/30 px-4 py-3 text-center text-xs leading-relaxed text-white/55 sm:text-sm">
              Mood &amp; context: entertainment-forward cityscape—where branded moments meet discovery on the
              biggest screen at home.
            </figcaption>
          </figure>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-lg font-semibold text-white">Before · linear break</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-2">
                <span className="text-white/35">→</span> Ad plays to completion; limited signals beyond
                completion rate.
              </li>
              <li className="flex gap-2">
                <span className="text-white/35">→</span> Viewer may leave the room or mute—silent churn
                risk.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-white">After · interactive moment</h3>
            <ul className="mt-4 space-y-3 text-sm text-white/65">
              <li className="flex gap-2">
                <span className="text-fuchsia-300">→</span> Clear affordances: shop, learn more, or skip
                on viewer terms.
              </li>
              <li className="flex gap-2">
                <span className="text-fuchsia-300">→</span> Richer telemetry: engagement depth, pathing,
                and quality scores.
              </li>
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-white/15 bg-white/5 p-8 shadow-sm backdrop-blur-sm sm:p-10"
        >
          <div className="flex flex-wrap items-center gap-3">
            <Scale className="size-7 text-fuchsia-300" />
            <h3 className="text-xl font-semibold text-white">Tradeoff framing</h3>
          </div>
          <p className="mt-4 max-w-3xl leading-relaxed text-white/70">
            Short-term fill rate and CPM matter—but so does{' '}
            <strong className="font-semibold text-white">repeat exposure quality</strong>. I optimize for
            sustainable yield: fewer annoyed viewers, higher qualified interactions, and partner trust.
            The dashboard section shows how I’d prove movement on both sides of the ledger.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { label: 'Revenue lens', text: 'Qualified clicks & partner ROI, not just raw impressions.' },
              { label: 'UX lens', text: 'Skip rate, dwell, and post-ad session continuity.' },
              { label: 'Guardrails', text: 'Frequency caps, genre fit, and brand-safety checks.' },
            ].map((c) => (
              <div key={c.label} className="rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="text-sm font-semibold text-fuchsia-200">{c.label}</p>
                <p className="mt-2 text-sm text-white/65">{c.text}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  )
}
