import { Section } from './Section'
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts'
import { FlaskConical } from 'lucide-react'

const compare = [
  { metric: 'CTR', a: 2.1, b: 3.4 },
  { metric: 'Engagement', a: 12, b: 22 },
  { metric: 'Brand lift (proxy)', a: 3.2, b: 5.1 },
]

const tooltipStyle = {
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.15)',
  fontSize: 12,
  background: 'rgba(30, 16, 50, 0.95)',
  color: '#fff',
}

const axisTick = { fill: '#d4d4d8', fontSize: 11 }

export function Experimentation() {
  return (
    <Section id="experiments" className="border-b border-white/10 bg-white/[0.03] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">Experimentation</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            A/B mindset: traditional vs. interactive
          </h2>
          <p className="mt-4 text-lg text-white/70">
            Side-by-side view of two creatives with the same placement—Version B adds lightweight
            interactivity and clearer viewer control.
          </p>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-2">
              <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-bold text-white">
                A
              </span>
              <h3 className="text-lg font-semibold text-white">Traditional video ad</h3>
            </div>
            <div className="flex aspect-video items-center justify-center overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
              <img
                src="/images/traditional-video-ad.png"
                alt="Vintage Coca-Cola poster: hand holding a glass bottle with the slogan It's the real thing"
                className="max-h-full max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/65">
              <li>Linear playback; primary signal is completion.</li>
              <li>Limited differentiation between curious viewers and passive exposure.</li>
            </ul>
          </div>

          <div className="rounded-3xl border-2 border-fuchsia-400/35 bg-white/5 p-8 shadow-lg shadow-purple-950/40 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-2">
              <span className="rounded-full bg-fuchsia-500 px-3 py-1 text-xs font-bold text-white">
                B
              </span>
              <h3 className="text-lg font-semibold text-white">Interactive shoppable ad</h3>
            </div>
            <div className="relative aspect-video overflow-hidden rounded-xl bg-black ring-1 ring-white/10">
              <img
                src="/images/interactive-shoppable-ad.png"
                alt="Three people toasting with personalized glass Coca-Cola bottles on a sunny day"
                className="absolute inset-0 h-full w-full object-cover object-center"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-black/10" />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(105deg,transparent_40%,rgba(255,255,255,0.1)_50%,transparent_60%)]" />
              <div className="absolute bottom-4 left-4 right-4 flex gap-2">
                <div className="flex-1 rounded-lg bg-white/95 py-2 text-center text-xs font-semibold text-[#4b286d] shadow-lg shadow-black/25">
                  Shop
                </div>
                <div className="rounded-lg bg-white/20 px-3 py-2 text-xs font-semibold text-white ring-1 ring-white/30 backdrop-blur-sm">
                  Skip
                </div>
              </div>
            </div>
            <ul className="mt-6 space-y-2 text-sm text-white/65">
              <li>Viewer opts into depth—signals intent, not just exposure.</li>
              <li>Skip preserves agency; pacing rules protect experience.</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <FlaskConical className="size-6 text-fuchsia-300" />
            <h3 className="text-xl font-semibold text-white">Results (mock experiment readout)</h3>
          </div>
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={compare} margin={{ top: 8, right: 16, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="metric" tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                <YAxis tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Legend wrapperStyle={{ color: '#e4e4e7' }} />
                <Bar dataKey="a" name="Version A" fill="rgba(255,255,255,0.35)" radius={[6, 6, 0, 0]} />
                <Bar dataKey="b" name="Version B" fill="#c084fc" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-8 rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
            <p className="font-semibold text-white">Why Version B performs better</p>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Interactivity converts a subset of impressions into{' '}
              <strong className="font-semibold text-white">high-intent events</strong> without forcing
              everyone through a long spot. The format also surfaces clearer diagnostics—where viewers
              pause, branch, or skip—so product and sales teams iterate with shared language.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
