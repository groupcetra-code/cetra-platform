import Link from 'next/link'
import { Target, ShieldCheck, BarChart3 } from 'lucide-react'

export default function BrandsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent py-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-96 bg-[radial-gradient(circle_at_top_left,_rgba(216,182,87,0.16),_transparent_30%)] blur-3xl" />
      <div className="page-container flex flex-col gap-10">
        <section className="card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">For Brands</p>
              <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
                Discover premium creator collaborations with confidence.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                CETRA brings luxury brands and verified creators together with trust-first discovery, authenticity signals, and strategic campaign intelligence.
              </p>
            </div>
            <Link href="/creator-directory" className="btn btn-primary">
              Browse Verified Creators
            </Link>
          </div>
        </section>

        <section className="grid gap-6 lg:grid-cols-3">
          {[
            {
              icon: Target,
              title: 'Creator Discovery',
              description: 'Find niche creators with authentic audiences and premium trust metrics.',
            },
            {
              icon: ShieldCheck,
              title: 'Authenticity Score',
              description: 'Evaluate credibility with clear, modern brand risk indicators.',
            },
            {
              icon: BarChart3,
              title: 'Campaign Intelligence',
              description: 'Optimize outcomes with data-driven collaboration insight.',
            },
          ].map((item) => (
            <div key={item.title} className="card p-8 transition hover:-translate-y-1">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#4f46e5] to-[#a855f7] text-white shadow-lg shadow-[#7c63ff]/20">
                <item.icon className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-semibold text-white">{item.title}</h2>
              <p className="mt-4 text-slate-300">{item.description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Brand advantage</p>
            <h2 className="text-3xl font-semibold text-white">Operate like an elite collaboration agency.</h2>
            <p className="text-slate-300">
              Manage creator partnerships with premium detail, streamline approvals, and access the most trusted talent in your vertical.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: '98%', label: 'Trust retention' },
              { value: '120+', label: 'Verified creators' },
              { value: '24/7', label: 'Dedicated support' },
              { value: '4.9/5', label: 'Brand satisfaction' },
            ].map((item) => (
              <div key={item.label} className="card p-6">
                <p className="text-3xl font-semibold text-white">{item.value}</p>
                <p className="mt-2 text-sm text-slate-400">{item.label}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
