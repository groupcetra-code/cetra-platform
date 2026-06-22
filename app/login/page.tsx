'use client'

import { Lock, ShieldCheck, Sparkles } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../Lib/supabase'

export default function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleLogin() {
    setLoading(true)
    setError('')

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      router.push('/admin-dashboard')
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(59,130,246,0.12),transparent_30%),radial-gradient(circle_at_bottom,_rgba(168,85,247,0.10),transparent_30%),#030712] text-white py-10">
      <div className="page-container flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
        <section className="card">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-3 rounded-full border border-sky-400/20 bg-sky-400/10 px-4 py-2 text-sm text-sky-200">
              <Sparkles className="h-4 w-4" /> Welcome back to CETRA
            </div>
            <div>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Secure access for premium brand partners.
              </h1>
              <p className="mt-4 max-w-2xl text-sm text-slate-300 sm:text-base">
                Sign in to manage campaigns, review creator requests, and keep your brand collaborations moving.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5 text-slate-300 shadow-lg shadow-sky-500/10 ring-1 ring-white/10">
                <ShieldCheck className="mb-3 h-6 w-6 text-sky-300" />
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Trusted Security</p>
                <p className="mt-2 text-2xl font-semibold text-white">Enterprise grade</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-slate-300 shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10">
                <Lock className="mb-3 h-6 w-6 text-fuchsia-300" />
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Protected Login</p>
                <p className="mt-2 text-2xl font-semibold text-white">Secure</p>
              </div>
            </div>
          </div>
        </section>

        <section className="card">
          <div className="mb-8 flex items-center gap-3 text-slate-300">
            <Lock className="h-5 w-5 text-cyan-300" />
            <span className="uppercase tracking-[0.24em] text-xs text-slate-500">Admin login</span>
          </div>

          {error && (
            <div className="mb-6 rounded-3xl border border-red-500/20 bg-red-500/10 p-4 text-red-100 shadow-lg shadow-red-500/10">
              {error}
            </div>
          )}

          <div className="grid gap-4">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
            />
            <button onClick={handleLogin} disabled={loading} className="btn btn-primary w-full" type="button">
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </div>

          <p className="mt-6 text-center text-slate-400">
            Need access? <a href="/register" className="text-white font-semibold hover:underline">Create an account</a>
          </p>
          <p className="mt-3 text-center text-sm text-slate-500">
            Secured by Supabase authentication for trusted brand partners.
          </p>
        </section>
      </div>
    </main>
  )
}
