import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { AdProductDemo } from './components/AdProductDemo'
import { ProductThinking } from './components/ProductThinking'
import { AnalyticsDashboard } from './components/AnalyticsDashboard'
import { Experimentation } from './components/Experimentation'
import { HowAdsWork } from './components/HowAdsWork'
import { CaseStudy } from './components/CaseStudy'
import { About } from './components/About'
import { FinalCTA } from './components/FinalCTA'

function App() {
  return (
    <div className="min-h-svh">
      <Header />
      <main>
        <Hero />
        <AdProductDemo />
        <ProductThinking />
        <AnalyticsDashboard />
        <Experimentation />
        <HowAdsWork />
        <CaseStudy />
        <About />
        <FinalCTA />
      </main>
      <footer className="border-t border-white/10 bg-black/20 py-10 text-center text-sm text-white/55 backdrop-blur-sm">
        <p>© {new Date().getFullYear()} Shamik Dutta Majumdar · Portfolio concept for Roku Ad Experiences</p>
      </footer>
    </div>
  )
}

export default App
