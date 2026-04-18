import { Section } from './Section'
import { Briefcase, LineChart, Sparkles } from 'lucide-react'

export function About() {
  return (
    <Section id="about" className="border-b border-white/10 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-200">About me</p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Product-minded. Data-literate. Excited about TV’s next chapter.
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-white/70">
              I sit at the intersection of <strong className="font-semibold text-white">business</strong>{' '}
              and <strong className="font-semibold text-white">technology</strong>: translating goals into
              measurable product bets, partnering with engineering and design, and communicating
              outcomes with clarity.
            </p>
            <p className="mt-4 text-lg leading-relaxed text-white/70">
              I’m especially interested in <strong className="font-semibold text-white">ad tech</strong>,{' '}
              <strong className="font-semibold text-white">viewer experience</strong>, and how analytics
              can make advertising feel more respectful—not louder.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                icon: Briefcase,
                title: 'Bridge role',
                text: 'Comfortable with roadmaps, PRDs, and stakeholder alignment across functions.',
              },
              {
                icon: LineChart,
                title: 'Data-driven mindset',
                text: 'Experiments, dashboards, and storytelling with numbers—without losing the human narrative.',
              },
              {
                icon: Sparkles,
                title: 'AI & analytics focus',
                text: 'MSIS at Kelley with depth in analytics and AI applied to real product decisions.',
              },
            ].map((item) => {
              const Icon = item.icon
              return (
                <div
                  key={item.title}
                  className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20"
                >
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10 text-fuchsia-200 shadow-sm ring-1 ring-white/10">
                    <Icon className="size-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-white">{item.title}</p>
                    <p className="mt-1 text-sm text-white/65">{item.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </Section>
  )
}
