import Link from 'next/link'
import { ShieldCheck, BarChart3, MessageSquare, Briefcase } from 'lucide-react'

export default function DashboardPage() {
    return (
        <main className="relative min-h-screen overflow-hidden bg-transparent px-6 py-16 sm:px-10 lg:px-20">
            <div className="absolute inset-x-0 top-0 -z-10 h-80 bg-[radial-gradient(circle_at_top_left,_rgba(124,99,255,0.14),_transparent_30%)] blur-3xl" />
                <div className="page-container space-y-10">
                    <div className="card">
                        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm uppercase tracking-[0.35em] text-gold">Brand Dashboard</p>
                            <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium campaign control for brands and teams.</h1>
                            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-300">
                                Navigate your creator collaboration workflow with enterprise-grade insights, trust indicators, and a modern command center built for growth.
                            </p>
                        </div>
                        <Link href="/admin-dashboard" className="btn btn-primary">Open Control Center</Link>
                    </div>
                </div>

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {[
                        {
                            title: 'Authenticity Score',
                            description: 'Track creator credibility and trust metrics.',
                            icon: ShieldCheck,
                        },
                        {
                            title: 'Campaigns',
                            description: 'Manage results-driven influencer activations.',
                            icon: Briefcase,
                        },
                        {
                            title: 'Analytics',
                            description: 'Measure performance and ROI across deals.',
                            icon: BarChart3,
                        },
                        {
                            title: 'Messages',
                            description: 'Connect directly with creator teams.',
                            icon: MessageSquare,
                        },
                    ].map((item) => (
                                                <Link
                                                        key={item.title}
                                                        href={
                                                            item.title === 'Campaigns'
                                                                ? '/campaigns'
                                                                : item.title === 'Analytics'
                                                                ? '/analytics'
                                                                : item.title === 'Messages'
                                                                ? '/messages'
                                                                : '/authenticity-score'
                                                        }
                                                        className="card p-8 transition hover:-translate-y-1"
                                                >
                            <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-gradient-to-br from-[#4f46e5] to-[#a855f7] text-white shadow-lg shadow-[#7c63ff]/20">
                                <item.icon className="h-6 w-6" />
                            </div>
                            <h2 className="mt-6 text-2xl font-semibold text-white">{item.title}</h2>
                            <p className="mt-3 text-sm leading-6 text-slate-400 group-hover:text-slate-200">{item.description}</p>
                        </Link>
                    ))}
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    <div className="card p-8">
                        <p className="text-sm uppercase tracking-[0.35em] text-gold">Strategy</p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">Command every collaboration like a premium launch.</h2>
                        <p className="mt-4 text-slate-300">
                            Use CETRA to discover trusted creators, invite collaboration, and keep your campaigns aligned with a luxury-grade operational experience.
                        </p>
                    </div>
                    <div className="card p-8">
                        <p className="text-sm uppercase tracking-[0.35em] text-gold">Trust</p>
                        <h2 className="mt-4 text-3xl font-semibold text-white">Secure creator relationships with clarity.</h2>
                        <p className="mt-4 text-slate-300">
                            CETRA helps brands reduce risk and scale collaborations with transparency, premium creator discovery, and performance-based decisions.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
}
                                                                    
                                                                        
                                                                    
                                                                
                    

                        