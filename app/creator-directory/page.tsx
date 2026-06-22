'use client'

import { useEffect, useState } from 'react'
import { supabase } from '../../Lib/supabase'
import { Search, Sparkles } from 'lucide-react'

export default function CreatorDirectory() {
  const [creators, setCreators] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {
    getCreators()
  }, [])

  async function getCreators() {
    const { data, error } = await supabase
      .from('creators')
      .select('*')
      .order('created_at', { ascending: false })

    if (data) {
      setCreators(data)
    }
    setLoading(false)
  }

  const filteredCreators = creators.filter((creator) =>
    creator.full_name?.toLowerCase().includes(query.toLowerCase()) ||
    creator.niche?.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <main className="relative min-h-screen overflow-hidden bg-transparent py-16">
      <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_right,_rgba(124,99,255,0.14),_transparent_30%)] blur-3xl" />
      <div className="page-container space-y-10">
        <div className="card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-gold">Creator Directory</p>
              <h1 className="mt-4 text-5xl font-semibold text-white sm:text-6xl">
                Discover elite creators for your next campaign.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
                Browse premium creator profiles with verified audiences, niches, and campaign-ready credentials.
              </p>
            </div>
            <div className="flex items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-slate-300 shadow-lg shadow-black/20">
              <Search className="h-5 w-5 text-gold" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search by name or niche"
                className="w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
              />
            </div>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-3">
            {loading ? (
            <div className="card p-12 text-center text-slate-400">Loading creators...</div>
          ) : filteredCreators.length === 0 ? (
            <div className="card p-12 text-center text-slate-400">No creators match your search.</div>
          ) : (
            filteredCreators.map((creator) => (
              <article key={creator.id} className="glass-card overflow-hidden rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white/10">
                {creator.profile_image ? (
                  <img
                    src={creator.profile_image}
                    alt={creator.full_name}
                    className="mb-6 h-60 w-full rounded-[1.5rem] object-cover"
                  />
                ) : (
                  <div className="mb-6 h-60 w-full rounded-[1.5rem] bg-gradient-to-br from-[#4f46e5] to-[#a855f7]" />
                )}
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h2 className="text-2xl font-semibold text-white">{creator.full_name}</h2>
                    <p className="mt-2 text-sm uppercase tracking-[0.25em] text-slate-400">{creator.niche || 'Creator'}</p>
                  </div>
                  <div className="rounded-full bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-slate-300">Elite</div>
                </div>
                <div className="mt-5 space-y-2 text-slate-300">
                  <p>{creator.location || 'Global'}</p>
                  <p>Followers: {creator.followers?.toLocaleString() || 'N/A'}</p>
                  {creator.instagram && <p>Instagram: {creator.instagram}</p>}
                  {creator.youtube && <p>YouTube: {creator.youtube}</p>}
                </div>
                {creator.bio && <p className="mt-6 text-sm leading-6 text-slate-400">{creator.bio}</p>}
                <a href="/request" className="btn btn-primary mt-8 w-full text-center">Request Collaboration</a>
              </article>
            ))
          )}
        </section>
      </div>
    </main>
  )
}
                