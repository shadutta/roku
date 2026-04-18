import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { Section } from './Section'
import { TrendingUp } from 'lucide-react'

const weekly = [
  { w: 'W1', ctr: 2.1, eng: 14 },
  { w: 'W2', ctr: 2.4, eng: 16 },
  { w: 'W3', ctr: 2.6, eng: 18 },
  { w: 'W4', ctr: 2.9, eng: 21 },
  { w: 'W5', ctr: 3.2, eng: 23 },
  { w: 'W6', ctr: 3.5, eng: 25 },
]

const qualityBars = [
  { name: 'Relevance', score: 8.9 },
  { name: 'Load time', score: 8.4 },
  { name: 'Creative fit', score: 8.8 },
]

const kpis = [
  { label: 'CTR', value: '+18%', sub: 'vs. control', tone: 'up' as const },
  { label: 'Engagement rate', value: '+25%', sub: 'interactions / impression', tone: 'up' as const },
  { label: 'Ad quality score', value: '8.7', sub: '/10 blended index', tone: 'neutral' as const },
  { label: 'Ad fatigue signal', value: '−30%', sub: 'negative feedback rate', tone: 'down' as const },
]

const tooltipStyle = {
  borderRadius: 12,
  border: '1px solid rgba(255,255,255,0.15)',
  fontSize: 12,
  background: 'rgba(30, 16, 50, 0.95)',
  color: '#fff',
}

const axisTick = { fill: '#d4d4d8', fontSize: 11 }

export function AnalyticsDashboard() {
  return (
    <Section id="analytics" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">
              Analytics &amp; KPIs
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              How data drives iteration
            </h2>
            <p className="mt-4 text-lg text-white/70">
              Mock dashboard inspired by BI tools—pairing directional lift metrics with quality and
              fatigue signals to decide what ships next.
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 backdrop-blur-sm">
            <TrendingUp className="size-4 text-emerald-400" />
            Portfolio mock data
          </div>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {kpis.map((k) => (
            <div
              key={k.label}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-white/50">{k.label}</p>
              <p
                className={`mt-2 text-3xl font-semibold tracking-tight ${
                  k.tone === 'up'
                    ? 'text-emerald-400'
                    : k.tone === 'down'
                      ? 'text-emerald-400'
                      : 'text-fuchsia-200'
                }`}
              >
                {k.value}
              </p>
              <p className="mt-1 text-xs text-white/45">{k.sub}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">CTR &amp; engagement trend</h3>
              <span className="text-xs font-medium text-white/45">Weekly</span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={weekly} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                  <XAxis dataKey="w" tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                  <YAxis tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                  <Tooltip contentStyle={tooltipStyle} />
                  <Line
                    type="monotone"
                    dataKey="ctr"
                    name="CTR %"
                    stroke="#e9d5ff"
                    strokeWidth={2}
                    dot={{ fill: '#e9d5ff', r: 3 }}
                  />
                  <Line
                    type="monotone"
                    dataKey="eng"
                    name="Engagement index"
                    stroke="#c084fc"
                    strokeWidth={2}
                    dot={{ fill: '#c084fc', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-sm backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-semibold text-white">Quality score components</h3>
              <span className="text-xs font-medium text-white/45">Normalized</span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={qualityBars} layout="vertical" margin={{ top: 8, right: 16, left: 8, bottom: 0 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" horizontal={false} />
                  <XAxis type="number" domain={[0, 10]} tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                  <YAxis type="category" dataKey="name" width={88} tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                  <Tooltip cursor={{ fill: 'rgba(255,255,255,0.06)' }} contentStyle={tooltipStyle} />
                  <Bar dataKey="score" fill="url(#barPurpleDark)" radius={[0, 8, 8, 0]} />
                  <defs>
                    <linearGradient id="barPurpleDark" x1="0" y1="0" x2="1" y2="0">
                      <stop offset="0%" stopColor="#c084fc" />
                      <stop offset="100%" stopColor="#6b21a8" />
                    </linearGradient>
                  </defs>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-semibold text-white">Session quality (illustrative)</h3>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={weekly} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="fillEngDark" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" stopOpacity={0.45} />
                    <stop offset="100%" stopColor="#a855f7" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.08)" />
                <XAxis dataKey="w" tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                <YAxis tick={axisTick} stroke="rgba(255,255,255,0.25)" />
                <Tooltip contentStyle={tooltipStyle} />
                <Area
                  type="monotone"
                  dataKey="eng"
                  stroke="#d8b4fe"
                  fill="url(#fillEngDark)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm leading-relaxed text-white/65">
            In practice I’d connect these charts to experiment readouts and qualitative feedback loops.
            The goal is not vanity lifts—it is a repeatable decision framework: when engagement and
            quality rise together, we scale; when fatigue spikes, we throttle and redesign.
          </p>
        </div>
      </div>
    </Section>
  )
}
