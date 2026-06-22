'use client'

import { LayoutDashboard, MessageSquare, Sparkles, Users } from 'lucide-react'
import { useEffect, useState } from 'react'
import { supabase } from '../../Lib/supabase'

export default function AdminDashboard() {
  const [requests, setRequests] = useState<any[]>([])
  const [creators, setCreators] = useState<any[]>([])

  useEffect(() => {
    getRequests()
    getCreators()
  }, [])

  async function getRequests() {
    const { data, error } = await supabase
      .from('collaboration_requests')
      .select('*')
      .order('created_at', { ascending: false })

    console.log('DATA;', data)
    console.log('ERROR', error)

    if (!error) {
      setRequests(data || [])
    }
  }

  async function getCreators() {
    const { data, error } = await supabase.from('creators').select('*')

    console.log('CREATORS:', data)
    console.log('CREATOR ERROR:', error)
    if (!error) {
      setCreators(data || [])
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.10),transparent_30%),#050816] text-white px-6 py-10">
      <div className="page-container space-y-10">
        <header className="card p-10 backdrop-blur-2xl">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200 ring-1 ring-cyan-200/10">
                <LayoutDashboard className="h-4 w-4" />
                CETRA Control Center
              </span>
              <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white">
                Manage creators, requests, and campaign flow.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
                A premium admin experience with real-time insights and clean review workflows.
              </p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-6 text-slate-300 ring-1 ring-white/10">
              <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Live data</p>
              <p className="mt-3 text-3xl font-semibold text-white">{requests.length + creators.length}</p>
              <p className="text-sm text-slate-400">Total collaborators tracked</p>
            </div>
          </div>
        </header>

        <section className="grid gap-6 md:grid-cols-3">
          <div className="card p-8">
            <div className="flex items-center gap-3 text-cyan-300">
              <MessageSquare className="h-6 w-6" />
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Requests</span>
            </div>
            <p className="mt-6 text-5xl font-semibold text-white">{requests.length}</p>
            <p className="mt-2 text-sm text-slate-400">Pending collaboration requests</p>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-3 text-fuchsia-300">
              <Sparkles className="h-6 w-6" />
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Approval</span>
            </div>
            <p className="mt-6 text-5xl font-semibold text-white">Fast review</p>
            <p className="mt-2 text-sm text-slate-400">Streamline campaign approvals</p>
          </div>

          <div className="card p-8">
            <div className="flex items-center gap-3 text-slate-300">
              <Users className="h-6 w-6 text-cyan-300" />
              <span className="text-sm uppercase tracking-[0.24em] text-slate-400">Creators</span>
            </div>
            <p className="mt-6 text-5xl font-semibold text-white">{creators.length}</p>
            <p className="mt-2 text-sm text-slate-400">Registered creator profiles</p>
          </div>
        </section>

        <section className="grid gap-8 xl:grid-cols-[1.4fr_0.8fr]">
          <div className="card p-8">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <h2 className="text-3xl font-semibold text-white">Collaboration Requests</h2>
                <p className="mt-2 text-sm text-slate-400">Review recent brand outreach and assign status updates.</p>
              </div>
            </div>

            {requests.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/80 p-8 text-slate-400">
                No requests yet. New requests will appear here automatically.
              </div>
            ) : (
              <div className="space-y-4">
                {requests.map((request) => (
                  <div key={request.id} className="rounded-3xl border border-white/8 bg-slate-900/80 p-6 shadow-sm shadow-black/10">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                      <div>
                        <p className="text-sm uppercase tracking-[0.24em] text-cyan-300">{request.status || 'Pending'}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{request.brand_name}</h3>
                      </div>
                      <p className="text-sm text-slate-400">{request.brand_email}</p>
                    </div>
                    <p className="mt-4 text-slate-300">{request.message}</p>
                    <div className="mt-4 flex flex-wrap gap-2 text-sm text-slate-500">
                      <span>Creator: {request.creator_name}</span>
                      <span className="rounded-full bg-white/5 px-3 py-1">Status: {request.status ?? 'pending'}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <aside className="card p-8">
            <div className="mb-6 flex items-center gap-4">
              <div className="rounded-3xl bg-slate-900/80 p-4 text-cyan-300">
                <Users className="h-6 w-6" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold text-white">Registered Creators</h2>
                <p className="text-sm text-slate-400">Creator profiles currently in the network.</p>
              </div>
            </div>

            {creators.length === 0 ? (
              <div className="rounded-3xl border border-dashed border-white/10 bg-slate-900/80 p-6 text-slate-400">
                No creators registered yet. Their profiles will populate here automatically.
              </div>
            ) : (
              <div className="space-y-4">
                {creators.map((creator) => (
                  <div key={creator.id} className="rounded-3xl border border-white/10 bg-slate-900/80 p-5">
                    <div className="flex items-center gap-4">
                      {creator.profile_image ? (
                        <img
                          src={creator.profile_image}
                          alt={creator.full_name}
                          className="h-16 w-16 rounded-full object-cover"
                        />
                      ) : (
                        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/5 text-slate-400">
                          <Sparkles className="h-6 w-6" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-lg font-semibold text-white">{creator.full_name}</h3>
                        <p className="text-sm text-slate-400">{creator.email}</p>
                      </div>
                    </div>
                    <div className="mt-4 grid gap-2 text-sm text-slate-400">
                      <span>{creator.niche || 'Niche not set'}</span>
                      <span>{creator.location || 'Location not set'}</span>
                      <span>Followers: {creator.followers?.toLocaleString() ?? 'N/A'}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </section>
      </div>
    </main>
  )
}

