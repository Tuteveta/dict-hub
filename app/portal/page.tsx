'use client'

import { 
  Users, 
  BarChart3, 
  DollarSign, 
  Server, 
  FileText, 
  Megaphone,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Search,
  Bell,
  Settings,
  UserCircle,
  Briefcase,
  Building2,
  Shield,
  ChevronRight
} from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import Image from 'next/image'
import Link from 'next/link'

const divisions = [
  {
    id: 'hr',
    name: 'Human Resources',
    shortName: 'HR',
    icon: Users,
    gradient: 'from-orange-500 via-red-500 to-rose-600',
    glowColor: 'shadow-orange-500/20',
    description: 'Personnel management, recruitment, and employee development',
    stats: { 
      employees: { label: 'Employees', value: '487' },
      active: { label: 'Active', value: '456' }, 
      pending: { label: 'Pending', value: '31' }
    },
    href: '/login/hr'
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Evaluation',
    shortName: 'M&E',
    icon: BarChart3,
    gradient: 'from-blue-500 via-cyan-500 to-teal-600',
    glowColor: 'shadow-blue-500/20',
    description: 'Performance tracking, metrics analysis, and project outcomes',
    stats: { 
      projects: { label: 'Projects', value: '24' }, 
      completed: { label: 'Completed', value: '18' }, 
      ongoing: { label: 'Ongoing', value: '6' }
    },
    href: '/login/monitoring'
  },
  {
    id: 'finance',
    name: 'Finance',
    shortName: 'Finance',
    icon: DollarSign,
    gradient: 'from-emerald-500 via-green-500 to-teal-600',
    glowColor: 'shadow-emerald-500/20',
    description: 'Budget planning, financial operations, and fiscal management',
    stats: { 
      budget: { label: 'Budget', value: '12.5M' }, 
      spent: { label: 'Spent', value: '8.2M' }, 
      balance: { label: 'Balance', value: '4.3M' }
    },
    href: '/login/finance'
  },
  {
    id: 'it',
    name: 'Information Technology',
    shortName: 'IT',
    icon: Server,
    gradient: 'from-purple-500 via-violet-500 to-indigo-600',
    glowColor: 'shadow-purple-500/20',
    description: 'Technology infrastructure, systems, and digital services',
    stats: { 
      systems: { label: 'Systems', value: '45' }, 
      uptime: { label: 'Uptime', value: '99.8%' }, 
      tickets: { label: 'Tickets', value: '12' }
    },
    href: '/login/it'
  },
  {
    id: 'policy',
    name: 'Policy Division',
    shortName: 'Policy',
    icon: FileText,
    gradient: 'from-amber-500 via-yellow-500 to-orange-600',
    glowColor: 'shadow-amber-500/20',
    description: 'Policy development, compliance, and regulatory frameworks',
    stats: { 
      total: { label: 'Total', value: '78' }, 
      draft: { label: 'Draft', value: '5' }, 
      active: { label: 'Active', value: '73' }
    },
    href: '/login/policy'
  },
  {
    id: 'information',
    name: 'Information Division',
    shortName: 'Info',
    icon: Megaphone,
    gradient: 'from-pink-500 via-rose-500 to-red-600',
    glowColor: 'shadow-pink-500/20',
    description: 'News, media relations, publicity, and public communications',
    stats: { 
      releases: { label: 'Releases', value: '124' }, 
      media: { label: 'Media', value: '45' }, 
      events: { label: 'Events', value: '18' }
    },
    href: '/login/information'
  }
]

const recentActivities = [
  { title: 'New HR Policy Released', time: '2 hours ago', type: 'policy', status: 'success' },
  { title: 'Q4 Budget Review Completed', time: '5 hours ago', type: 'finance', status: 'success' },
  { title: 'Server Maintenance Scheduled', time: '1 day ago', type: 'it', status: 'warning' },
  { title: 'M&E Report Generated', time: '2 days ago', type: 'monitoring', status: 'success' }
]

const systemStats = [
  { label: 'Total Users', value: '1,247', change: '+12%', icon: Users, trend: 'up' },
  { label: 'Active Projects', value: '24', change: '+3', icon: Activity, trend: 'up' },
  { label: 'System Uptime', value: '99.8%', change: '+0.2%', icon: TrendingUp, trend: 'up' },
  { label: 'Pending Tasks', value: '18', change: '-5', icon: Clock, trend: 'down' }
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Header */}
      <header className="border-b border-white/5 bg-slate-900/50 backdrop-blur-2xl sticky top-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="relative">
  <div className="absolute inset-0 bg-gradient-to-br from-dict-accent to-blue-500 rounded-2xl blur-xl opacity-30"></div>
  <div className="relative w-12 h-12 bg-gradient-to-br from-dict-accent/20 to-blue-500/20 rounded-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm border border-white/10">
    <Image 
      src="/logo.png" 
      alt="DICT Logo" 
      width={40} 
      height={40}
      className="object-contain"
      priority
    />
  </div>
</div>
              <div>
                <h1 className="text-2xl font-display font-bold tracking-tight bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                  DICT Staff Portal
                </h1>
                <p className="text-sm text-slate-400 font-medium">Select Your Division</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" className="text-slate-300 hover:text-white hover:bg-white/5 border border-white/10 font-medium">
                  <ArrowRight className="w-4 h-4 mr-2 rotate-180" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12">
        {/* Authentication Notice */}
        <div className="mb-10 p-5 rounded-2xl bg-gradient-to-r from-emerald-500/10 via-green-500/10 to-teal-500/10 border border-emerald-500/20 backdrop-blur-sm">
          <div className="flex items-center space-x-4">
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-md opacity-30"></div>
              <div className="relative p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Shield className="w-6 h-6 text-emerald-400" />
              </div>
            </div>
            <div>
              <p className="font-bold text-emerald-400 text-lg">Authenticated Session Active</p>
              <p className="text-sm text-slate-300">You have successfully passed the first layer authentication. Please select your division below.</p>
            </div>
          </div>
        </div>

        {/* Welcome Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">
            <div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
                <span className="bg-gradient-to-r from-white via-white to-slate-300 bg-clip-text text-transparent">
                  Welcome, 
                </span>
                <span className="bg-gradient-to-r from-dict-accent via-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {" "}DICT Staff
                </span>
              </h2>
              <p className="text-slate-400 text-xl font-medium">
                Please select your division to access your dashboard
              </p>
            </div>
            <div className="flex items-center space-x-3 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
              <Clock className="w-5 h-5 text-slate-400 flex-shrink-0" />
              <span className="text-sm font-medium text-slate-300 whitespace-nowrap">
                {new Date().toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {systemStats.map((stat, index) => (
              <div key={index} className="animate-fade-in group" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <Card className="relative border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-5">
                        <div className={`p-4 rounded-xl bg-gradient-to-br ${
                          stat.trend === 'up' 
                            ? 'from-emerald-500/20 to-green-500/10 border border-emerald-500/30' 
                            : 'from-blue-500/20 to-cyan-500/10 border border-blue-500/30'
                        }`}>
                          <stat.icon className={`w-6 h-6 ${
                            stat.trend === 'up' ? 'text-emerald-400' : 'text-blue-400'
                          }`} />
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-xs font-bold ${
                          stat.trend === 'up' 
                            ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                            : 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                        }`}>
                          {stat.change}
                        </div>
                      </div>
                      <div>
                        <p className="text-4xl font-display font-bold mb-2 tracking-tight text-white">{stat.value}</p>
                        <p className="text-sm text-slate-400 font-medium">{stat.label}</p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="divisions" className="space-y-8">
          <TabsList className="bg-white/5 border border-white/10 p-2 rounded-2xl backdrop-blur-sm">
            <TabsTrigger 
              value="divisions" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-dict-accent data-[state=active]:to-blue-500 data-[state=active]:shadow-lg font-semibold rounded-xl data-[state=active]:text-white"
            >
              Divisions
            </TabsTrigger>
            <TabsTrigger 
              value="activity" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-dict-accent data-[state=active]:to-blue-500 data-[state=active]:shadow-lg font-semibold rounded-xl data-[state=active]:text-white"
            >
              Recent Activity
            </TabsTrigger>
            <TabsTrigger 
              value="analytics" 
              className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-dict-accent data-[state=active]:to-blue-500 data-[state=active]:shadow-lg font-semibold rounded-xl data-[state=active]:text-white"
            >
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Divisions Grid */}
          <TabsContent value="divisions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {divisions.map((division, index) => (
                <Link 
                  key={division.id} 
                  href={division.href} 
                  className="animate-fade-in block h-full group" 
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="relative h-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-r ${division.gradient} rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 ${division.glowColor}`}></div>
                    
                    {/* Card */}
                    <Card className="relative h-full border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:from-white/15 hover:to-white/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl overflow-hidden">
                      {/* Top gradient bar */}
                      <div className={`h-1.5 bg-gradient-to-r ${division.gradient}`} />
                      
                      <CardHeader className="pb-4 space-y-6 relative">
                        {/* Floating gradient orb background */}
                        <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${division.gradient} rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500`}></div>
                        
                        <div className="flex items-start justify-between gap-4 relative z-10">
                          {/* Icon */}
                          <div className="relative">
                            <div className={`absolute inset-0 bg-gradient-to-br ${division.gradient} rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500`}></div>
                            <div className={`relative p-4 rounded-2xl bg-gradient-to-br ${division.gradient} shadow-2xl ${division.glowColor}`}>
                              <division.icon className="w-8 h-8 text-white" strokeWidth={2.5} />
                            </div>
                          </div>
                          
                          {/* Arrow indicator */}
                          <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                            <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                              <ChevronRight className="w-5 h-5 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        {/* Title and description */}
                        <div className="space-y-3 relative z-10">
                          <CardTitle className="text-2xl font-display font-bold tracking-tight leading-tight text-white">
                            {division.name}
                          </CardTitle>
                          <CardDescription className="text-sm font-medium leading-relaxed text-slate-300 line-clamp-2">
                            {division.description}
                          </CardDescription>
                        </div>
                      </CardHeader>
                      
                      <CardContent className="space-y-6 relative z-10">
                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                          {Object.entries(division.stats).map(([key, stat]) => (
                            <div key={key} className="text-center">
                              <p className="text-2xl font-bold text-white tracking-tight mb-1" title={stat.value}>
                                {stat.value}
                              </p>
                              <p className="text-xs text-slate-400 font-medium truncate" title={stat.label}>
                                {stat.label}
                              </p>
                            </div>
                          ))}
                        </div>
                        
                        {/* Button */}
                        <Button 
                          className={`w-full bg-gradient-to-r ${division.gradient} hover:shadow-2xl ${division.glowColor} font-bold text-base py-6 rounded-xl transition-all duration-500 group-hover:scale-105`}
                          size="lg"
                        >
                          <span>Access Dashboard</span>
                          <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </Link>
              ))}

              {/* Employee Portal Card */}
              <Link 
                href="/login/employee" 
                className="animate-fade-in block h-full group" 
                style={{ animationDelay: '600ms' }}
              >
                <div className="relative h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-dict-accent to-blue-500 rounded-3xl blur-2xl opacity-0 group-hover:opacity-30 transition-all duration-500 shadow-dict-accent/20"></div>
                  
                  <Card className="relative h-full border-white/10 bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-md hover:from-white/15 hover:to-white/10 transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl overflow-hidden">
                    <div className="h-1.5 bg-gradient-to-r from-dict-accent to-blue-500" />
                    
                    <CardHeader className="pb-4 space-y-6 relative">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-dict-accent to-blue-500 rounded-full blur-3xl opacity-10 group-hover:opacity-20 transition-opacity duration-500"></div>
                      
                      <div className="flex items-start justify-between gap-4 relative z-10">
                        <div className="relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-dict-accent to-blue-500 rounded-2xl blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-500"></div>
                          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-dict-accent to-blue-500 shadow-2xl shadow-dict-accent/20">
                            <UserCircle className="w-8 h-8 text-white" strokeWidth={2.5} />
                          </div>
                        </div>
                        
                        <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-0 group-hover:translate-x-1">
                          <div className="p-2.5 rounded-xl bg-white/10 border border-white/20 backdrop-blur-sm">
                            <ChevronRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-3 relative z-10">
                        <CardTitle className="text-2xl font-display font-bold tracking-tight leading-tight text-white">
                          Employee Portal
                        </CardTitle>
                        <CardDescription className="text-sm font-medium leading-relaxed text-slate-300 line-clamp-2">
                          Leave management, internal jobs, and employee self-service
                        </CardDescription>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-6 relative z-10">
                      <div className="grid grid-cols-3 gap-4 p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white tracking-tight mb-1">487</p>
                          <p className="text-xs text-slate-400 font-medium truncate">Staff</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white tracking-tight mb-1">15</p>
                          <p className="text-xs text-slate-400 font-medium truncate">Requests</p>
                        </div>
                        <div className="text-center">
                          <p className="text-2xl font-bold text-white tracking-tight mb-1">3</p>
                          <p className="text-xs text-slate-400 font-medium truncate">Jobs</p>
                        </div>
                      </div>
                      
                      <Button 
                        className="w-full bg-gradient-to-r from-dict-accent to-blue-500 hover:shadow-2xl shadow-dict-accent/20 font-bold text-base py-6 rounded-xl transition-all duration-500 group-hover:scale-105"
                        size="lg"
                      >
                        <span>Access Portal</span>
                        <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </Link>
            </div>
          </TabsContent>

          {/* Recent Activity */}
          <TabsContent value="activity">
            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight text-white">Recent Activity</CardTitle>
                <CardDescription className="text-base font-medium text-slate-400">Latest updates across all divisions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center justify-between p-5 rounded-xl bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 flex-1 min-w-0">
                        <div className={`p-3 rounded-xl ${
                          activity.status === 'success' 
                            ? 'bg-emerald-500/10 border border-emerald-500/20' 
                            : 'bg-amber-500/10 border border-amber-500/20'
                        }`}>
                          {activity.status === 'success' ? (
                            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-amber-400" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold text-sm text-white truncate">{activity.title}</p>
                          <p className="text-xs text-slate-400">{activity.time}</p>
                        </div>
                      </div>
                      <span className="px-4 py-2 rounded-full text-xs font-bold bg-white/5 border border-white/10 capitalize flex-shrink-0 ml-3 text-slate-300">
                        {activity.type}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <Card className="border-white/10 bg-white/5 backdrop-blur-md">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight text-white">System Analytics</CardTitle>
                <CardDescription className="text-base font-medium text-slate-400">Overview of system performance and usage</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">Analytics dashboard coming soon...</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}