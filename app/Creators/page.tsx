import Link from 'next/link'
import { Sparkles, Star, Search } from 'lucide-react'

export default function CreatorsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent py-16">
      <div className="absolute inset-x-0 bottom-0 -z-10 h-80 bg-[radial-gradient(circle_at_bottom_right,_rgba(124,99,255,0.14),_transparent_30%)] blur-3xl" />
      <div className="page-container flex flex-col gap-10">
        <section className="card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-3xl">
              <p className="text-sm uppercase tracking-[0.35em] text-gold">For Creators</p>
              <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
                Launch your creator journey with luxury visibility.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Showcase your audience, build trusted brand partnerships, and attract high-value campaigns with CETRA's premium platform.
              </p>
            </div>
            <Link href="/creator-profile" className="btn btn-primary">
              Join as Creator
            </Link>
          </div>
        </section>

        <section className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Search,
              title: 'Get Discovered',
              description: 'Be found by premium brands seeking authentic creator partnerships.',
            },
            {
              icon: Sparkles,
              title: 'Rate Calculator',
              description: 'Know your value with smarter, data-led pricing insight.',
            },
            {
              icon: Star,
              title: 'Professional Profiles',
              description: 'Craft an exclusive creator presence tailored for campaigns.',
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
            <p className="text-sm uppercase tracking-[0.35em] text-gold">Creator impact</p>
            <h2 className="text-3xl font-semibold text-white">Showcase your premium brand appeal.</h2>
            <p className="text-slate-300">
              Build a creator profile that resonates with high-value brands, improves discoverability, and elevates your reputation.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { value: '150K', label: 'Avg. reach' },
              { value: '4.8/5', label: 'Brand match rate' },
              { value: 'Exclusive', label: 'Curated network' },
              { value: 'Fast', label: 'Campaign approvals' },
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
