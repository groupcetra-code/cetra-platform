'use client'

import { Camera, Globe, Sparkles, User } from 'lucide-react'
import { useState } from 'react'
import { supabase } from '../../Lib/supabase'

export default function CreatorProfilePage() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [instagram, setInstagram] = useState('')
  const [youtube, setYoutube] = useState('')
  const [followers, setFollowers] = useState('')
  const [bio, setBio] = useState('')
  const [profileImage, setProfileImage] = useState('')
  const [location, setLocation] = useState('')
  const [niche, setNiche] = useState('')

  const saveProfile = async () => {
    const { error } = await supabase
      .from('creators')
      .insert([
        {
          full_name: fullName,
          email: email,
          instagram: instagram,
          youtube: youtube,
          followers: Number(followers),
          bio: bio,
          profile_image: profileImage,
          location: location,
          niche: niche,
        },
      ])

    if (error) {
      alert('Error saving profile')
      console.log(error)
    } else {
      alert('Profile saved successfully!')
      setFullName('')
      setEmail('')
      setInstagram('')
      setYoutube('')
      setFollowers('')
      setBio('')
      setProfileImage('')
      setLocation('')
      setNiche('')
    }
  }

  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top,_rgba(14,165,233,0.14),transparent_26%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_30%),#050816] text-white py-12">
      <div className="page-container max-w-6xl flex flex-col gap-10">
        <section className="card">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-200">
                <Sparkles className="h-4 w-4" /> Creator Profile
              </p>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                Build a premium creator presence.
              </h1>
              <p className="mt-4 text-sm text-slate-300 sm:text-base">
                Capture your niche, audience, and channel links so top brands can discover you effortlessly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl bg-slate-950/70 p-5 text-slate-300 shadow-lg shadow-cyan-500/10 ring-1 ring-white/10">
                <User className="mb-3 h-6 w-6 text-cyan-300" />
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Creator Reach</p>
                <p className="mt-2 text-3xl font-semibold text-white">High Value</p>
              </div>
              <div className="rounded-3xl bg-slate-950/70 p-5 text-slate-300 shadow-lg shadow-fuchsia-500/10 ring-1 ring-white/10">
                <Globe className="mb-3 h-6 w-6 text-fuchsia-300" />
                <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Brand Visibility</p>
                <p className="mt-2 text-3xl font-semibold text-white">Optimized</p>
              </div>
            </div>
          </div>
        </section>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="card p-10">
            <div className="mb-8 flex items-center gap-3 text-slate-300">
              <Camera className="h-5 w-5 text-cyan-300" />
              <span className="text-sm uppercase tracking-[0.28em] text-cyan-200">Creator details</span>
            </div>

            <div className="grid gap-4">
              <input
                type="text"
                placeholder="Creator Name"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <input
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <input
                type="text"
                placeholder="Niche (Fitness, Tech, Fashion, etc.)"
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <textarea
                placeholder="Creator Bio"
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
                rows={4}
              />
              <input
                type="text"
                placeholder="Instagram Username"
                value={instagram}
                onChange={(e) => setInstagram(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <input
                type="text"
                placeholder="YouTube Channel"
                value={youtube}
                onChange={(e) => setYoutube(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <input
                type="number"
                placeholder="Followers"
                value={followers}
                onChange={(e) => setFollowers(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <input
                type="text"
                placeholder="Profile Image URL"
                value={profileImage}
                onChange={(e) => setProfileImage(e.target.value)}
                className="w-full rounded-3xl border border-white/10 bg-slate-900/90 px-5 py-4 text-white outline-none transition focus:border-cyan-400/60 focus:ring-2 focus:ring-cyan-400/10"
              />
              <button onClick={saveProfile} className="btn btn-primary mt-4 w-full">Save Profile</button>
            </div>
          </div>
          <aside className="card p-10">
            <div className="space-y-6">
              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3 text-slate-300">
                  <User className="h-5 w-5 text-fuchsia-300" />
                  <span className="uppercase tracking-[0.24em] text-xs text-slate-500">Profile Preview</span>
                </div>
                <div className="mt-6 space-y-4 text-slate-300">
                  <p className="text-sm text-slate-400">Showcase your creator brand with polished details and a clear voice.</p>
                  <div className="rounded-3xl bg-slate-900/95 p-5 text-white">
                    <p className="text-2xl font-semibold">{fullName || 'Creator Name'}</p>
                    <p className="text-sm text-slate-400">{niche || 'Niche'} • {location || 'Location'}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3 text-slate-300">
                  <Globe className="h-5 w-5 text-cyan-300" />
                  <span className="uppercase tracking-[0.24em] text-xs text-slate-500">Reach and channels</span>
                </div>
                <div className="mt-6 grid gap-4">
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-white">Instagram</p>
                    <p className="mt-1 text-slate-400">{instagram || 'username'}</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-white">YouTube</p>
                    <p className="mt-1 text-slate-400">{youtube || 'channel'}</p>
                  </div>
                  <div className="rounded-3xl bg-white/5 p-4 text-sm text-slate-300">
                    <p className="font-semibold text-white">Audience</p>
                    <p className="mt-1 text-slate-400">{followers ? `${followers} followers` : 'Audience size'}</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl bg-slate-900/80 p-6 ring-1 ring-white/10">
                <div className="flex items-center gap-3 text-slate-300">
                  <Sparkles className="h-5 w-5 text-fuchsia-300" />
                  <span className="uppercase tracking-[0.24em] text-xs text-slate-500">Why CETRA</span>
                </div>
                <p className="mt-4 text-slate-300">
                  Creators on CETRA get premium brand matching, visibility into high-value campaigns, and a polished profile experience.
                </p>
              </div>
            </div>
          </aside>
        </section>
      </div>
    </main>
  )
}
