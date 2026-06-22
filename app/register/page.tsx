'use client'

import Link from 'next/link'
import { Lock, Sparkles, UserPlus } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { supabase } from '../../Lib/supabase'

export default function RegisterPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  async function handleRegister() {
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    const { error } = await supabase.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
      setLoading(false)
    } else {
      alert('Account created! Please check your email to verify your account.')
      router.push('/login')
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(168,85,247,0.16),transparent_30%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.12),transparent_34%),#050816] text-white flex items-center justify-center py-12 px-6">
      <div className="w-full max-w-lg space-y-8 card">
        <div className="space-y-3 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-3xl bg-fuchsia-400/10 text-fuchsia-300 ring-1 ring-fuchsia-300/20">
            <UserPlus className="h-6 w-6" />
          </div>
          <h1 className="text-4xl font-semibold tracking-tight">Launch your CETRA account.</h1>
          <p className="mx-auto max-w-md text-sm text-slate-400">
            Create a secure login to manage collaborations and discover premium creator opportunities.
          </p>
        </div>

        {error && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/10 px-4 py-3 text-sm text-red-100">
            {error}
          </div>
        )}

        <div className="grid gap-4">
          <label className="space-y-2 text-sm text-slate-300">
            Email address
            <input
              type="email"
              placeholder="hello@brand.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/10"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Password
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/10"
            />
          </label>
          <label className="space-y-2 text-sm text-slate-300">
            Confirm password
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-fuchsia-400/60 focus:ring-2 focus:ring-fuchsia-400/10"
            />
          </label>
        </div>

        <button
          onClick={handleRegister}
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-3xl bg-fuchsia-400 px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-fuchsia-300 disabled:cursor-not-allowed disabled:opacity-50"
        >
          <Lock className="h-4 w-4" />
          {loading ? 'Creating account...' : 'Create account'}
        </button>

        <p className="text-center text-sm text-slate-400">
          Already have an account?{' '}
          <Link href="/login" className="font-semibold text-white hover:text-fuchsia-300">
            Login
          </Link>
        </p>

        <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-5 text-slate-400">
          <div className="flex items-center gap-3 text-sm">
            <Sparkles className="h-4 w-4 text-fuchsia-300" />
            <span>Secure onboarding built for premium brand and creator partnerships.</span>
          </div>
        </div>
      </div>
    </main>
  )
}
                    