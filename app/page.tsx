import Link from 'next/link'
import { ArrowUpRight, ShieldCheck, Sparkles, Users, BarChart3 } from 'lucide-react'

export default function Home() {
  return (
    <main className="relative overflow-hidden bg-transparent">
      <section className="relative isolate min-h-screen py-16">
        <div className="absolute inset-x-0 top-0 -z-10 h-72 bg-[radial-gradient(circle_at_top_left,_rgba(216,182,87,0.18),_transparent_35%)] blur-3xl" />
        <div className="absolute left-1/2 top-[20%] -z-10 h-96 w-96 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(124,99,255,0.18),_transparent_40%)] blur-3xl" />

        <div className="page-container flex flex-col gap-10">
          <div className="grid gap-6 lg:grid-cols-[1.25fr_0.85fr] lg:items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-200 shadow-[0_0_0_1px_rgba(255,255,255,0.06)]">
                <ShieldCheck className="h-4 w-4 text-gold" />
                Premium collaboration for brands and creators
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl font-semibold tracking-tight text-white md:text-6xl">
                  CETRA is the elite creator and brand collaboration platform.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300">
                  Discover verified creators, manage campaign requests, and own every partnership with a luxury-grade control center built for modern brand teams.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link href="/Brands" className="btn btn-primary">
                  Explore for Brands
                  <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
                <Link href="/Creators" className="btn btn-soft">
                  For Creators
                </Link>
              </div>
            </div>

            <div className="card p-8">
              <div className="mb-6 flex items-center justify-between text-sm text-slate-300">
                <span className="font-semibold text-white">Trusted by modern teams</span>
                <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300">Live</span>
              </div>
              <div className="space-y-5">
                {[
                  {
                    title: 'Creator Discovery',
                    description: 'Find top talent with premium metrics and audience certainty.',
                    icon: Sparkles,
                  },
                  {
                    title: 'Campaign Control',
                    description: 'Review requests, approve deals, and manage creators with ease.',
                    icon: Users,
                  },
                  {
                    title: 'Data-Led Trust',
                    description: 'Use premium scoring to reduce risk and increase performance.',
                    icon: BarChart3,
                  },
                ].map((item) => (
                  <div key={item.title} className="rounded-3xl border border-white/10 bg-slate-950/80 p-5 transition hover:border-gold/60 hover:bg-slate-900/90">
                    <div className="flex items-center gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-[#f9e6a6] to-[#d0a931] text-slate-950 shadow-lg shadow-[#d0a931]/20">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="font-semibold text-white">{item.title}</p>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <section className="grid gap-6 card sm:grid-cols-3">
            {[
              { value: '120+', label: 'Verified creators' },
              { value: '240+', label: 'Collaboration requests' },
              { value: '98%', label: 'Match accuracy' },
            ].map((stat) => (
              <div key={stat.label} className="space-y-2">
                <p className="text-4xl font-semibold text-white">{stat.value}</p>
                <p className="text-sm uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
              </div>
            ))}
          </section>

          <section className="space-y-8 pb-16">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-gold">Curated creator showcase</p>
                <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">Luxury creator profiles for trusted brands</h2>
              </div>
              <Link
                href="/creator-directory"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:border-gold hover:bg-white/10"
              >
                Browse the directory
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  name: 'Avery Lane',
                  niche: 'Fashion & Luxury',
                  followers: '380K',
                  platform: 'Instagram',
                },
                {
                  name: 'Milo Reign',
                  niche: 'Tech Creator',
                  followers: '185K',
                  platform: 'YouTube',
                },
                {
                  name: 'Nova Silva',
                  niche: 'Wellness & Lifestyle',
                  followers: '270K',
                  platform: 'TikTok',
                },
              ].map((creator) => (
                <article key={creator.name} className="glass-card overflow-hidden rounded-[2rem] p-6">
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <div className="h-16 w-16 rounded-3xl bg-gradient-to-br from-[#4f46e5] to-[#a855f7]" />
                    <span className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.35em] text-slate-300">Top tier</span>
                  </div>
                  <p className="text-2xl font-semibold text-white">{creator.name}</p>
                  <p className="mt-3 text-sm text-slate-400">{creator.niche}</p>
                  <div className="mt-6 flex items-center justify-between text-sm text-slate-300">
                    <span>{creator.followers}</span>
                    <span className="rounded-full bg-white/5 px-3 py-1">{creator.platform}</span>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  )
}
