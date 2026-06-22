'use client'

import { Briefcase, CheckCircle2, MessageCircle, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '../../Lib/supabase'

export default function RequestPage() {
  const [creatorName, setCreatorName] = useState('')
  const [brandName, setBrandName] = useState('')
  const [brandEmail, setBrandEmail] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function submitRequest() {
    if (!creatorName || !brandName || !brandEmail || !message) {
      alert('Please fill in all fields')
      return
    }

    setLoading(true)
    const { error } = await supabase
      .from('collaboration_requests')
      .insert([
        {
          creator_name: creatorName,
          brand_name: brandName,
          brand_email: brandEmail,
          message: message,
          status: 'pending',
        },
      ])

    if (!error) {
      setSuccess(true)
      setCreatorName('')
      setBrandName('')
      setBrandEmail('')
      setMessage('')
      setTimeout(() => setSuccess(false), 5000)
    } else {
      alert('Error submitting request')
    }
    setLoading(false)
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.14),transparent_30%),#050816] text-white py-10">
      <div className="page-container max-w-5xl space-y-10">
        <section className="card">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <MessageCircle className="h-4 w-4" /> Brand Requests
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white md:text-5xl">
                Request a creator collaboration.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
                Submit high-value campaign briefs and connect securely with top creators on CETRA.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5 text-slate-300 shadow-lg shadow-cyan-500/10 ring-1 ring-white/10">
                <Briefcase className="mb-3 h-6 w-6 text-cyan-300" />
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Campaign Type</p>
                <p className="mt-2 text-3xl font-semibold text-white">Sponsored</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-slate-300 shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10">
                <Sparkles className="mb-3 h-6 w-6 text-fuchsia-300" />
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Approval</p>
                <p className="mt-2 text-3xl font-semibold text-white">Fast</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          {success && (
            <div className="mb-8 rounded-3xl border border-emerald-500/20 bg-emerald-500/10 p-5 text-emerald-100 shadow-lg shadow-emerald-500/10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                <p className="font-semibold">Request submitted successfully!</p>
              </div>
              <p className="mt-2 text-sm text-slate-300">
                Your collaboration request is in review. We’ll notify you once a match is made.
              </p>
            </div>
          )}

            <div className="grid gap-4">
            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
              <label className="text-sm uppercase tracking-[0.28em] text-slate-500">Creator Name</label>
              <input
                type="text"
                placeholder="Creator Name"
                value={creatorName}
                onChange={(e) => setCreatorName(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
              <label className="text-sm uppercase tracking-[0.28em] text-slate-500">Brand Name</label>
              <input
                type="text"
                placeholder="Brand Name"
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
              <label className="text-sm uppercase tracking-[0.28em] text-slate-500">Brand Email</label>
              <input
                type="email"
                placeholder="Brand Email"
                value={brandEmail}
                onChange={(e) => setBrandEmail(e.target.value)}
                className="mt-3 w-full rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/85 p-5">
              <label className="text-sm uppercase tracking-[0.28em] text-slate-500">Message</label>
              <textarea
                placeholder="Collaboration Message & Details"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-3 h-40 w-full resize-none rounded-3xl border border-white/10 bg-slate-950/90 px-4 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
            </div>

            <button onClick={submitRequest} disabled={loading} className="btn btn-primary w-full" type="button">
              {loading ? 'Submitting...' : 'Submit Request'}
            </button>

            <p className="text-center text-sm text-slate-500">
              Your campaign brief is shared securely with creators and reviewed within 48 hours.
            </p>
          </div>
        </section>
      </div>
    </main>
  )
}
