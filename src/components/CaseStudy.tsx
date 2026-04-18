import { Section } from './Section'
import { Target, Wrench, Trophy } from 'lucide-react'

export function CaseStudy() {
  return (
    <Section id="case-study" className="border-b border-white/10 bg-white/[0.03] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">Case study</p>
          <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Improving engagement through data-driven decisions
          </h2>
        </div>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-red-500/20 text-red-300">
              <Target className="size-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Problem</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Engagement with a digital experience plateaued; stakeholders suspected content relevance,
              but hypotheses were not prioritized with evidence.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-sm backdrop-blur-sm">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-fuchsia-500/20 text-fuchsia-200">
              <Wrench className="size-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Action</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              Defined success metrics and funnels, instrumented key events, and ran iterative tests on
              onboarding and recommendations—framing tradeoffs for both users and business outcomes.
            </p>
          </div>

          <div className="rounded-3xl border border-fuchsia-400/30 bg-white/5 p-8 shadow-sm ring-1 ring-fuchsia-400/20 backdrop-blur-sm">
            <div className="flex size-12 items-center justify-center rounded-2xl bg-emerald-500/20 text-emerald-300">
              <Trophy className="size-6" />
            </div>
            <h3 className="mt-6 text-lg font-semibold text-white">Result</h3>
            <p className="mt-3 text-sm leading-relaxed text-white/65">
              <span className="text-2xl font-semibold text-emerald-400">+40%</span> improvement in core
              engagement (portfolio framing)—driven by clearer journeys and measurable iteration, not
              one-off campaigns.
            </p>
          </div>
        </div>
      </div>
    </Section>
  )
}
