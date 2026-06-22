'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { supabase } from '../Lib/supabase'
import { Sparkles, LogOut, ShieldCheck, Users, Briefcase } from 'lucide-react'

export default function Navigation() {
  const [user, setUser] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    checkUser()
  }, [])

  async function checkUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    setUser(session?.user || null)
    setIsLoading(false)
  }

  async function handleLogout() {
    await supabase.auth.signOut()
    setUser(null)
    window.location.href = '/'
  }

  if (isLoading) return null

  return (
    <nav className="relative border-b border-white/10 backdrop-section">
      <div className="page-container flex items-center justify-between py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-3xl bg-gradient-to-br from-[#f5e0a7] to-[#b58c3c] text-slate-950 shadow-lg shadow-[#b58c3c]/30">
            <Sparkles className="h-5 w-5" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-slate-400">CETRA</p>
            <p className="text-lg font-semibold text-white">Creator Intelligence</p>
          </div>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          <Link href="/Brands" className="text-sm text-slate-300 transition hover:text-white">
            For Brands
          </Link>
          <Link href="/Creators" className="text-sm text-slate-300 transition hover:text-white">
            For Creators
          </Link>
          <Link href="/creator-directory" className="text-sm text-slate-300 transition hover:text-white">
            Directory
          </Link>
        </div>

        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link href="/admin-dashboard" className="hidden md:inline-flex btn btn-soft">
                Admin
              </Link>
              <button onClick={handleLogout} className="btn btn-primary">
                <LogOut className="h-4 w-4" />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link href="/Creators" className="text-sm text-slate-300 hover:text-white">
              Join as Creator
              </Link>
              <Link href="/request" className="btn btn-primary">
                Join as Brand
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}
