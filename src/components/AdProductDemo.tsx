import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import {
  ChevronUp,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  ShoppingBag,
  SkipForward,
} from 'lucide-react'
import { Section } from './Section'

type Phase = 'home' | 'ad' | 'shop' | 'skipped'

const features = [
  { title: 'Non-intrusive', desc: 'Respects viewing context and frequency caps.' },
  { title: 'Interactive', desc: 'Remote-friendly focus states and clear CTAs.' },
  { title: 'Skippable', desc: 'Skip unlocks after a short brand moment.' },
  { title: 'Contextual', desc: 'Creative adapts to content genre and time of day.' },
]

const posterStyles = {
  sunset:
    'from-amber-500/90 via-rose-600/80 to-indigo-950 bg-gradient-to-b',
  night: 'from-violet-600/90 via-[#4b286d] to-zinc-950 bg-gradient-to-b',
  studio: 'from-cyan-500/40 via-slate-700 to-zinc-950 bg-gradient-to-b',
} as const

function PosterCard({
  title,
  subtitle,
  progress,
  variant,
}: {
  title: string
  subtitle: string
  progress: number
  variant: keyof typeof posterStyles
}) {
  return (
    <div className="relative h-[7.25rem] w-[4.75rem] shrink-0 overflow-hidden rounded-md ring-1 ring-white/20 shadow-lg shadow-black/40">
      {/* Key art */}
      <div className={`absolute inset-0 ${posterStyles[variant]}`} />
      {/* Silhouette “city / horizon” */}
      <svg
        className="absolute bottom-8 left-0 right-0 h-10 text-black/35"
        viewBox="0 0 100 40"
        preserveAspectRatio="none"
        aria-hidden
      >
        <path
          fill="currentColor"
          d="M0 40V28l8-4 6 4 10-6 8 5 12-8 10 6 14-9 8 7 10-5 14 10V40z"
        />
      </svg>
      {/* Title block */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/80 to-transparent px-1.5 pb-1.5 pt-6">
        <p className="truncate text-[10px] font-bold leading-tight tracking-wide text-white drop-shadow">
          {title}
        </p>
        <p className="truncate text-[8px] font-medium text-white/65">{subtitle}</p>
      </div>
      {/* Progress (continue watching) */}
      {progress > 0 && (
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/15">
          <div
            className="h-full bg-fuchsia-400 shadow-[0_0_6px_rgba(232,121,249,0.9)]"
            style={{ width: `${Math.round(progress * 100)}%` }}
          />
        </div>
      )}
      {/* Play hint */}
      <div className="absolute left-1 top-1 flex size-5 items-center justify-center rounded-full bg-black/45 text-white ring-1 ring-white/25 backdrop-blur-[2px]">
        <svg className="ml-0.5 size-2.5" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
          <path d="M2 1.5v9l8-4.5-8-4.5z" />
        </svg>
      </div>
    </div>
  )
}

export function AdProductDemo() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const orb1Y = useTransform(scrollYProgress, [0, 1], [120, -140])
  const orb2Y = useTransform(scrollYProgress, [0, 1], [-80, 140])
  const orb3X = useTransform(scrollYProgress, [0, 1], [-40, 80])
  const glowOpacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.25, 0.95, 0.95, 0.3])
  const beamScale = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 1, 0.55])
  const tvY = useTransform(scrollYProgress, [0, 1], [48, -36])
  const remoteY = useTransform(scrollYProgress, [0, 1], [-32, 56])
  const remoteRotate = useTransform(scrollYProgress, [0, 1], [-2, 3])
  const lineProgress = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])
  const beamOp0 = useTransform(scrollYProgress, [0, 1], [0.12, 0.45])
  const beamOp1 = useTransform(scrollYProgress, [0, 1], [0.18, 0.52])
  const beamOp2 = useTransform(scrollYProgress, [0, 1], [0.22, 0.58])

  const [phase, setPhase] = useState<Phase>('home')
  const [focus, setFocus] = useState(0)
  const [canSkip, setCanSkip] = useState(false)
  const [highlightProduct, setHighlightProduct] = useState(0)

  useEffect(() => {
    if (phase !== 'ad') return
    const t = window.setTimeout(() => setCanSkip(true), 2800)
    return () => window.clearTimeout(t)
  }, [phase])

  const startAd = () => {
    setCanSkip(false)
    setPhase('ad')
    setFocus(0)
  }

  const pressOk = useCallback(() => {
    if (phase === 'ad') {
      if (focus === 0) setPhase('shop')
      else if (canSkip) {
        setPhase('skipped')
        window.setTimeout(() => setPhase('home'), 1600)
      }
    }
  }, [phase, focus, canSkip])

  const move = (dir: 'u' | 'd' | 'l' | 'r') => {
    if (phase === 'ad') {
      if (dir === 'l' || dir === 'u') setFocus(0)
      if (dir === 'r' || dir === 'd') setFocus(1)
    }
    if (phase === 'shop') {
      if (dir === 'l') setHighlightProduct((p) => Math.max(0, p - 1))
      if (dir === 'r') setHighlightProduct((p) => Math.min(2, p + 1))
    }
  }

  return (
    <Section
      ref={sectionRef}
      id="ad-demo"
      className="relative min-h-[110vh] overflow-hidden border-b border-white/10 py-20 sm:min-h-0 sm:py-28"
    >
      {/* Scroll-reactive ambient visuals */}
      <motion.div
        className="pointer-events-none absolute inset-0"
        style={{ opacity: glowOpacity }}
        aria-hidden
      >
        <motion.div
          className="absolute -left-24 top-10 size-[min(90vw,420px)] rounded-full bg-fuchsia-500/35 blur-[100px]"
          style={{ y: orb1Y }}
        />
        <motion.div
          className="absolute -right-16 bottom-20 size-[min(80vw,380px)] rounded-full bg-violet-600/30 blur-[90px]"
          style={{ y: orb2Y, x: orb3X }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 size-64 -translate-x-1/2 rounded-full bg-purple-400/20 blur-[80px]"
          style={{ scale: beamScale }}
        />
      </motion.div>

      {/* Horizontal “signal” beams — length reacts to scroll */}
      <div className="pointer-events-none absolute inset-x-0 top-24 flex flex-col gap-6 sm:top-32">
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-white/70 to-transparent"
          style={{ scaleX: beamScale, opacity: beamOp0 }}
        />
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
          style={{ scaleX: beamScale, opacity: beamOp1 }}
        />
        <motion.div
          className="h-px w-full bg-gradient-to-r from-transparent via-white/50 to-transparent"
          style={{ scaleX: beamScale, opacity: beamOp2 }}
        />
      </div>

      {/* SVG wave — stroke-dash style motion feel */}
      <svg
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 text-white/15 sm:h-40"
        preserveAspectRatio="none"
        viewBox="0 0 1200 120"
        aria-hidden
      >
        <defs>
          <linearGradient id="demoWave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.35)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        <motion.path
          fill="none"
          stroke="url(#demoWave)"
          strokeWidth="2"
          pathLength={1}
          d="M0,80 Q300,20 600,80 T1200,80"
          style={{ pathLength: scrollYProgress }}
        />
      </svg>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">Interactive prototype</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Interactive Shoppable Ad on TV
          </h2>
          <p className="mt-4 text-lg text-white/70">
            A lightweight simulation of how a viewer uses a remote to explore a brand moment—without
            leaving the lean-back experience. Scroll to see the scene react.
          </p>
          {/* Scroll progress bar */}
          <div className="mt-6 h-1 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-fuchsia-400 to-white"
              style={{ width: lineProgress }}
            />
          </div>
        </div>

        <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_340px] lg:items-start">
          <motion.div className="space-y-6" style={{ y: tvY }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-3 shadow-xl shadow-black/20 backdrop-blur-sm sm:p-4">
              <div className="overflow-hidden rounded-2xl bg-zinc-950 ring-1 ring-white/10">
                <div className="aspect-video w-full">
                  <AnimatePresence mode="wait">
                    {phase === 'home' && (
                      <motion.div
                        key="home"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="flex h-full flex-col bg-gradient-to-br from-zinc-900 to-zinc-950 p-5"
                      >
                        <p className="text-xs font-medium text-white/50">Continue watching</p>
                        <div className="mt-3 flex gap-3 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
                          <PosterCard
                            title="Coastal"
                            subtitle="S2 · E4"
                            progress={0.72}
                            variant="sunset"
                          />
                          <PosterCard
                            title={'Data & Fire'}
                            subtitle="Documentary"
                            progress={0.18}
                            variant="night"
                          />
                          <PosterCard
                            title="Kelley Live"
                            subtitle="News"
                            progress={0}
                            variant="studio"
                          />
                        </div>
                        <button
                          type="button"
                          onClick={startAd}
                          className="mt-auto w-full rounded-xl bg-white/10 py-3 text-sm font-semibold text-white ring-1 ring-white/15 transition hover:bg-white/15"
                        >
                          Simulate ad break
                        </button>
                      </motion.div>
                    )}

                    {phase === 'ad' && (
                      <motion.div
                        key="ad"
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative flex h-full flex-col bg-gradient-to-br from-[#2d1144] via-zinc-900 to-black p-5"
                      >
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%2240%22 height=%2240%22%3E%3Cpath d=%22M0 40h40V0H0z%22 fill=%22none%22/%3E%3Cpath d=%22M0 40L40 0%22 stroke=%22%23ffffff%22 stroke-opacity=%22.04%22/%3E%3C/svg%3E')] opacity-60" />
                        <div className="relative flex flex-1 flex-col justify-between">
                          <div>
                            <span className="inline-flex rounded-full bg-white/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-white/80">
                              Sponsored
                            </span>
                            <p className="mt-3 text-lg font-semibold text-white sm:text-xl">
                              Spring collection — shop the looks from your couch
                            </p>
                            <SpringCollectionVisual />
                          </div>
                          <div className="mt-4 flex flex-wrap gap-3">
                            <button
                              type="button"
                              onClick={pressOk}
                              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:flex-none ${
                                focus === 0
                                  ? 'bg-white text-[#4b286d] ring-2 ring-white'
                                  : 'bg-white/10 text-white ring-1 ring-white/20'
                              }`}
                            >
                              <ShoppingBag className="size-4" />
                              Shop the look
                            </button>
                            <button
                              type="button"
                              onClick={() => canSkip && pressOk()}
                              disabled={!canSkip}
                              className={`flex flex-1 items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold transition sm:flex-none ${
                                focus === 1
                                  ? canSkip
                                    ? 'bg-white text-zinc-900 ring-2 ring-white'
                                    : 'bg-white/5 text-white/40 ring-1 ring-white/10'
                                  : 'bg-white/10 text-white/70 ring-1 ring-white/15'
                              } ${!canSkip ? 'cursor-not-allowed opacity-70' : ''}`}
                            >
                              <SkipForward className="size-4" />
                              {canSkip ? 'Skip ad' : 'Skip in a moment…'}
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {phase === 'shop' && (
                      <motion.div
                        key="shop"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex h-full flex-col bg-zinc-950 p-5"
                      >
                        <p className="text-sm font-semibold text-white">Shoppable carousel</p>
                        <p className="mt-1 text-xs text-white/50">
                          Use ◀ ▶ on the remote to highlight a SKU, OK to select.
                        </p>
                        <div className="mt-6 flex gap-3">
                          {['Sneaker A', 'Jacket B', 'Watch C'].map((name, i) => (
                            <motion.div
                              key={name}
                              layout
                              className={`flex flex-1 flex-col rounded-xl p-3 ring-2 transition ${
                                highlightProduct === i
                                  ? 'bg-white text-[#4b286d] ring-white'
                                  : 'bg-white/5 text-white/80 ring-white/10'
                              }`}
                            >
                              <div className="mb-2 aspect-square rounded-lg bg-gradient-to-br from-fuchsia-400/30 to-zinc-800" />
                              <span className="text-center text-xs font-semibold">{name}</span>
                            </motion.div>
                          ))}
                        </div>
                        <button
                          type="button"
                          className="mt-auto w-full rounded-xl bg-[#662d91] py-3 text-sm font-semibold text-white"
                          onClick={() => setPhase('home')}
                        >
                          Done — return to Home
                        </button>
                      </motion.div>
                    )}

                    {phase === 'skipped' && (
                      <motion.div
                        key="skipped"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="flex h-full flex-col items-center justify-center bg-zinc-950 p-8 text-center"
                      >
                        <p className="text-lg font-semibold text-white">Ad skipped</p>
                        <p className="mt-2 text-sm text-white/55">
                          Viewer choice preserved — frequency and completion feed into pacing.
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm">
              <p className="text-sm font-semibold text-white">User flow (remote)</p>
              <ol className="mt-3 space-y-2 text-sm text-white/70">
                <li>
                  <span className="font-medium text-fuchsia-200">1.</span> Ad appears during a natural
                  break in viewing.
                </li>
                <li>
                  <span className="font-medium text-fuchsia-200">2.</span> D-pad moves focus between{' '}
                  <em>Shop the look</em> and <em>Skip</em>.
                </li>
                <li>
                  <span className="font-medium text-fuchsia-200">3.</span> OK opens a lightweight
                  shoppable carousel; Back/Home exits cleanly.
                </li>
              </ol>
            </div>
          </motion.div>

          <motion.div className="lg:sticky lg:top-28" style={{ y: remoteY, rotate: remoteRotate }}>
            <p className="mb-3 text-center text-xs font-semibold uppercase tracking-wider text-white/45">
              Remote (click to simulate)
            </p>
            <div className="mx-auto max-w-[220px] rounded-[2rem] border border-white/20 bg-gradient-to-b from-white/15 to-white/5 p-5 shadow-inner shadow-black/30 backdrop-blur-md">
              <div className="mb-4 flex justify-center">
                <motion.div
                  className="size-3 rounded-full bg-fuchsia-400/80 shadow-[0_0_12px_rgba(232,121,249,0.8)]"
                  style={{ opacity: glowOpacity }}
                />
              </div>
              <div className="grid grid-cols-3 gap-2 place-items-center">
                <span />
                <RemoteBtn icon={<ChevronUp className="size-5" />} label="Up" onClick={() => move('u')} />
                <span />
                <RemoteBtn icon={<ChevronLeft className="size-5" />} label="Left" onClick={() => move('l')} />
                <RemoteBtn
                  icon={<CircleDot className="size-6 text-[#c084fc]" />}
                  label="OK"
                  primary
                  onClick={pressOk}
                />
                <RemoteBtn icon={<ChevronRight className="size-5" />} label="Right" onClick={() => move('r')} />
                <span />
                <RemoteBtn icon={<ChevronDown className="size-5" />} label="Down" onClick={() => move('d')} />
                <span />
              </div>
              <div className="mt-5 grid grid-cols-2 gap-2">
                <button
                  type="button"
                  className="rounded-lg bg-white/20 py-2 text-xs font-semibold text-white"
                  onClick={() => setPhase('home')}
                >
                  Home
                </button>
                <button
                  type="button"
                  className="rounded-lg bg-white/20 py-2 text-xs font-semibold text-white"
                  onClick={() => {
                    if (phase === 'shop') setPhase('ad')
                    else setPhase('home')
                  }}
                >
                  Back
                </button>
              </div>
            </div>

            <ul className="mt-8 space-y-4">
              {features.map((f, i) => (
                <motion.li
                  key={f.title}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: i * 0.06 }}
                  className="rounded-xl border border-white/10 bg-white/5 p-4 shadow-sm backdrop-blur-sm transition hover:border-white/25"
                >
                  <p className="font-semibold text-white">{f.title}</p>
                  <p className="mt-1 text-sm text-white/65">{f.desc}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </Section>
  )
}

/** Wide spring fashion banner — illustrated collection, no external assets */
function SpringCollectionVisual() {
  return (
    <div className="relative mt-4 aspect-[21/9] min-h-[5.5rem] w-full overflow-hidden rounded-lg ring-1 ring-white/20">
      {/* Spring sky + studio floor */}
      <div className="absolute inset-0 bg-gradient-to-br from-rose-200/95 via-amber-50/90 to-emerald-100/85" />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/55 via-zinc-900/15 to-violet-200/20" />
      {/* Soft sun */}
      <div className="absolute -right-6 -top-8 size-24 rounded-full bg-amber-200/50 blur-2xl" />
      <div className="absolute left-1/4 top-2 size-16 rounded-full bg-white/40 blur-xl" />

      {/* Botanical accents */}
      <svg
        className="absolute bottom-0 left-0 h-12 w-20 text-emerald-600/35"
        viewBox="0 0 80 48"
        fill="none"
        aria-hidden
      >
        <path
          d="M8 48c4-12 8-20 20-28M12 48c8-10 18-18 32-22M0 40c6-4 14-6 22-4"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <ellipse cx="18" cy="42" rx="10" ry="4" fill="currentColor" opacity="0.2" />
      </svg>
      <svg
        className="absolute bottom-1 right-2 h-10 w-16 text-rose-400/40"
        viewBox="0 0 64 40"
        fill="none"
        aria-hidden
      >
        <path
          d="M48 40c-6-10-10-16-18-22M52 38c-10-8-16-14-20-22"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
        />
      </svg>

      {/* Product tiles — collection row */}
      <div className="absolute inset-0 flex items-end justify-center gap-1.5 px-2 pb-2 sm:gap-3 sm:px-4 sm:pb-3">
        <CollectionTile
          label="Linen blazer"
          sub="Sand"
          className="from-stone-200 to-amber-100/90"
        >
          <g className="text-stone-800/90" fill="currentColor">
            <path d="M8 12l4-2 4 2 4-2 4 2v1l-1 13H9L8 13v-1z" />
            <path
              d="M12 12h8v3l-1 10h-6l-1-10v-3z"
              opacity="0.35"
            />
            <path d="M14 10h4v2h-4v-2z" opacity="0.5" />
          </g>
        </CollectionTile>
        <CollectionTile
          label="Floral dress"
          sub="New"
          className="from-fuchsia-200/95 to-rose-100/90 ring-2 ring-white/50"
          featured
        >
          <g className="text-rose-700/88" fill="currentColor">
            <path d="M16 6c-3 0-5 2-5 4v1h10v-1c0-2-2-4-5-4z" />
            <path d="M10 12h12l-2 14h-8l-2-14z" />
            <circle cx="12" cy="17" r="1.2" className="text-amber-100" fill="currentColor" opacity="0.9" />
            <circle cx="18" cy="19" r="1" className="text-pink-100" fill="currentColor" opacity="0.85" />
            <circle cx="15" cy="22" r="0.9" className="text-violet-100" fill="currentColor" opacity="0.8" />
          </g>
        </CollectionTile>
        <CollectionTile
          label="Trail sneaker"
          sub="Sage"
          className="from-emerald-200/90 to-teal-100/85"
        >
          <g className="text-emerald-900/90" fill="currentColor">
            <path d="M6 20c3-3 9-4 14-2l4 2v2H5v-2l1-2z" />
            <path d="M7 22h20v3H7v-3z" opacity="0.45" />
            <ellipse cx="16" cy="23.5" rx="9" ry="2" opacity="0.25" />
            <path d="M18 18l3 2-1 2-3-2 1-2z" opacity="0.5" />
          </g>
        </CollectionTile>
      </div>

      <p className="absolute left-2 top-1.5 max-w-[55%] text-[8px] font-semibold uppercase tracking-wider text-white/90 drop-shadow sm:left-3 sm:top-2 sm:text-[9px]">
        Spring 26 · Lookbook
      </p>
    </div>
  )
}

function CollectionTile({
  label,
  sub,
  className,
  featured,
  children,
}: {
  label: string
  sub: string
  className: string
  featured?: boolean
  children: ReactNode
}) {
  return (
    <div
      className={`relative flex flex-1 flex-col overflow-hidden rounded-md bg-gradient-to-b shadow-lg ${className} ${
        featured ? 'z-10 scale-105 shadow-xl' : 'opacity-95'
      } ring-1 ring-black/10`}
    >
      <div className="relative flex flex-1 items-center justify-center px-1 pt-4 pb-5 sm:px-2 sm:pt-5 sm:pb-6">
        <svg
          className="h-8 w-full max-w-[3.25rem] sm:h-10 sm:max-w-[4rem]"
          viewBox="0 0 32 32"
          aria-hidden
        >
          {children}
        </svg>
      </div>
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/65 to-transparent px-1 py-1">
        <p className="truncate text-center text-[6px] font-bold leading-tight text-white drop-shadow sm:text-[7px]">
          {label}
        </p>
        <p className="truncate text-center text-[5px] font-medium text-white/75 sm:text-[6px]">{sub}</p>
      </div>
    </div>
  )
}

function RemoteBtn({
  icon,
  label,
  primary,
  onClick,
}: {
  icon: ReactNode
  label: string
  primary?: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={`flex size-12 items-center justify-center rounded-full border border-white/25 bg-white/90 text-zinc-800 shadow-sm transition hover:scale-105 active:scale-95 ${
        primary ? 'ring-2 ring-fuchsia-400/50' : ''
      }`}
    >
      {icon}
    </button>
  )
}
