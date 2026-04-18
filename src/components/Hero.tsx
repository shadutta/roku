import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'

function FeaturedLandscape({
  title,
  meta,
  className,
}: {
  title: string
  meta: string
  className: string
}) {
  return (
    <div className="relative min-h-[4.75rem] flex-1 overflow-hidden rounded-md bg-gradient-to-br ring-1 ring-white/15 sm:min-h-[5.5rem]">
      <div className={`absolute inset-0 bg-gradient-to-br ${className}`} />
      <svg
        className="absolute bottom-6 left-0 right-0 h-8 text-black/30"
        viewBox="0 0 100 32"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path fill="currentColor" d="M0 32V20l12-3 10 5 18-8 14 7 20-10 8 6 18-7V32z" />
      </svg>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/55 to-transparent px-1.5 pb-1 pt-5">
        <p className="truncate text-[9px] font-bold leading-tight text-white drop-shadow sm:text-[10px]">{title}</p>
        <p className="truncate text-[7px] text-white/65 sm:text-[8px]">{meta}</p>
      </div>
    </div>
  )
}

function MicroPoster({ title, gradient }: { title: string; gradient: string }) {
  return (
    <div
      className={`relative h-14 w-10 shrink-0 overflow-hidden rounded bg-gradient-to-b ring-1 ring-white/20 ${gradient}`}
    >
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-0.5 pb-0.5 pt-3">
        <p className="truncate text-center text-[6px] font-bold text-white">{title}</p>
      </div>
    </div>
  )
}

function LiveChannelTile({ label, accent }: { label: string; accent: string }) {
  return (
    <div className="relative overflow-hidden rounded bg-black/40 ring-1 ring-white/15">
      <div className={`flex h-7 items-center bg-gradient-to-r px-1.5 ${accent}`}>
        <span className="relative mr-1 flex size-1.5 shrink-0">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-red-500 opacity-60" />
          <span className="relative inline-flex size-1.5 rounded-full bg-red-500 ring-1 ring-white/40" />
        </span>
        <span className="truncate text-[7px] font-semibold tracking-tight text-white">{label}</span>
      </div>
    </div>
  )
}

function AppTile({ label, icon, className }: { label: string; icon: string; className: string }) {
  return (
    <div
      className={`flex aspect-square flex-col items-center justify-center rounded-md bg-gradient-to-br ring-1 ring-white/20 ${className}`}
    >
      <span className="text-[10px] text-white/90">{icon}</span>
      <span className="text-[6px] font-medium text-white/75">{label}</span>
    </div>
  )
}

function CategoryBlock({
  label,
  tone,
  children,
}: {
  label: string
  tone: 'purple' | 'red' | 'violet'
  children: ReactNode
}) {
  const ring =
    tone === 'purple'
      ? 'ring-purple-400/25'
      : tone === 'red'
        ? 'ring-red-400/25'
        : 'ring-violet-400/25'
  return (
    <div className={`rounded-lg bg-white/5 p-1.5 ring-1 ${ring} sm:p-2`}>
      <p className="mb-1.5 text-center text-[9px] font-semibold uppercase tracking-wide text-white/55 sm:text-[10px]">
        {label}
      </p>
      {children}
    </div>
  )
}

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-white/10"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-10%,rgba(192,132,252,0.2),transparent)]" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center lg:py-28">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/90 shadow-sm backdrop-blur-sm"
          >
            Kelley MSIS · Data Analytics &amp; AI
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.25rem]"
          >
            Designing Ad Experiences That Balance{' '}
            <span className="bg-gradient-to-r from-purple-200 via-white to-fuchsia-200 bg-clip-text text-transparent">
              Revenue and User Delight
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-white/75"
          >
            I am <strong className="font-semibold text-white">Shamik Dutta Majumdar</strong>, an MSIS
            student at Kelley School of Business specializing in Data Analytics and AI, focused on
            building user-first, data-driven products.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#ad-demo"
              className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#4b286d] shadow-lg shadow-black/25 transition hover:scale-[1.02] hover:bg-white/95"
            >
              <Play className="size-4" fill="currentColor" />
              View Ad Product Demo
            </a>
            <a
              href="#thinking"
              className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-sm transition hover:border-white/40 hover:bg-white/10"
            >
              Explore My Work
              <ArrowRight className="size-4" />
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <StreamingUIMock />
        </motion.div>
      </div>
    </section>
  )
}

function StreamingUIMock() {
  return (
    <div className="relative">
      <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-fuchsia-500/20 via-transparent to-purple-500/25 blur-2xl" />
      <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-zinc-900/90 shadow-2xl shadow-black/40 ring-1 ring-white/10">
        <div className="aspect-[16/10] w-full bg-gradient-to-br from-zinc-800 to-zinc-950 p-3 sm:p-4">
          <div className="flex h-full flex-col overflow-hidden rounded-xl bg-zinc-950 ring-1 ring-white/10">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-3">
              <div className="flex items-center gap-2">
                <div className="size-2 rounded-full bg-[#c084fc]" />
                <span className="text-xs font-medium text-white/90">Home</span>
              </div>
              <div className="flex gap-1.5">
                <span className="h-1 w-6 rounded-full bg-white/20" />
                <span className="h-1 w-3 rounded-full bg-white/10" />
              </div>
            </div>
            <div className="relative flex-1 overflow-y-auto p-3 sm:p-4">
              <p className="mb-2 text-[10px] font-semibold uppercase tracking-widest text-white/40">
                Featured
              </p>
              <div className="flex gap-2 sm:gap-3">
                <FeaturedLandscape
                  title="Echo Ridge"
                  meta="Original · Drama"
                  className="from-teal-600/90 via-emerald-900/80 to-zinc-950"
                />
                <FeaturedLandscape
                  title="Midnight Run"
                  meta="Thriller · 4K"
                  className="from-orange-600/85 via-rose-900/70 to-zinc-950"
                />
                <FeaturedLandscape
                  title="Bloom"
                  meta="Limited series"
                  className="from-fuchsia-600/85 via-[#4b286d] to-zinc-950"
                />
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3">
                <CategoryBlock label="Movies" tone="purple">
                  <div className="flex justify-center gap-1.5">
                    <MicroPoster title="Nova" gradient="from-sky-500/80 to-indigo-950" />
                    <MicroPoster title="Arc" gradient="from-amber-600/80 to-zinc-900" />
                  </div>
                </CategoryBlock>
                <CategoryBlock label="Live TV" tone="red">
                  <div className="space-y-1.5">
                    <LiveChannelTile label="News 24" accent="from-slate-600 to-slate-900" />
                    <LiveChannelTile label="Sports HD" accent="from-green-700/80 to-zinc-900" />
                  </div>
                </CategoryBlock>
                <CategoryBlock label="Apps" tone="violet">
                  <div className="grid grid-cols-2 gap-1">
                    <AppTile label="Music" icon="♪" className="from-pink-500/70 to-rose-900" />
                    <AppTile label="Photos" icon="▣" className="from-blue-500/70 to-slate-900" />
                    <AppTile label="Games" icon="◇" className="from-violet-500/70 to-zinc-900" />
                    <AppTile label="Store" icon="◈" className="from-cyan-500/60 to-slate-900" />
                  </div>
                </CategoryBlock>
              </div>

              <motion.div
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute bottom-2 right-2 rounded-full bg-white/20 px-2.5 py-0.5 text-[9px] font-semibold text-white shadow-lg backdrop-blur-sm sm:bottom-3 sm:right-3 sm:px-3 sm:py-1 sm:text-[10px]"
              >
                Sponsored · Shoppable
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2 border-t border-white/5 bg-black/40 py-2">
          <span className="text-[10px] font-medium tracking-wide text-white/40">
            Streaming UI concept — built for this portfolio
          </span>
        </div>
      </div>
    </div>
  )
}
