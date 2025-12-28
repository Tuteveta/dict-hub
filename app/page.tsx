'use client'

import { 
  Users, 
  BarChart3, 
  DollarSign, 
  Server, 
  FileText, 
  Database,
  TrendingUp,
  Activity,
  Clock,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  Search,
  Bell,
  Settings,
  UserCircle
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
    icon: Users,
    color: 'from-grafana-orange to-red-600',
    description: 'Manage personnel, recruitment, and employee development',
    stats: { total: 487, active: 456, pending: 31 },
    href: '/divisions/hr'
  },
  {
    id: 'monitoring',
    name: 'Monitoring & Evaluation',
    icon: BarChart3,
    color: 'from-grafana-blue to-cyan-600',
    description: 'Track performance metrics and project outcomes',
    stats: { projects: 24, completed: 18, ongoing: 6 },
    href: '/divisions/monitoring'
  },
  {
    id: 'finance',
    name: 'Finance',
    icon: DollarSign,
    color: 'from-grafana-green to-emerald-600',
    description: 'Budget management and financial operations',
    stats: { budget: '12.5M', spent: '8.2M', remaining: '4.3M' },
    href: '/divisions/finance'
  },
  {
    id: 'it',
    name: 'Information Technology',
    icon: Server,
    color: 'from-grafana-purple to-violet-600',
    description: 'Technology infrastructure and digital services',
    stats: { systems: 45, uptime: '99.8%', tickets: 12 },
    href: '/divisions/it'
  },
  {
    id: 'policy',
    name: 'Policy Division',
    icon: FileText,
    color: 'from-grafana-yellow to-amber-600',
    description: 'Policy development and regulatory compliance',
    stats: { policies: 78, draft: 5, active: 73 },
    href: '/divisions/policy'
  },
  {
    id: 'information',
    name: 'Information Division',
    icon: Database,
    color: 'from-pink-500 to-rose-600',
    description: 'Data management and information systems',
    stats: { records: '2.4M', updated: 'Today', growth: '+12%' },
    href: '/divisions/information'
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
    <div className="min-h-screen bg-dict-darker">
      {/* Header */}
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <div className="flex items-center justify-center space-x-3">
                    <Image 
                      src="/logo.png" 
                      alt="DICT Logo" 
                      width={80} 
                      height={80}
                      className="rounded-2xl shadow-2xl"
                    />
                    </div>
                <div>
                  <h1 className="text-xl font-display font-bold tracking-tight">
                    <span className="text-dict-accent">DICT</span>
                    <span className="text-white"> HUB</span>
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">Department Hub Portal</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link href="/login/employee">
                <Button variant="outline" className="border-dict-accent/30 hover:bg-dict-accent/10 hover:border-dict-accent font-semibold">
                  <UserCircle className="w-4 h-4 mr-2" />
                  Employee Portal
                </Button>
              </Link>
              <Button variant="ghost" size="icon" className="hover:bg-dict-panel">
                <Search className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="relative hover:bg-dict-panel">
                <Bell className="w-5 h-5" />
                <span className="absolute top-2 right-2 w-2 h-2 bg-dict-accent rounded-full animate-pulse" />
              </Button>
              <Button variant="ghost" size="icon" className="hover:bg-dict-panel">
                <Settings className="w-5 h-5" />
              </Button>
              <Avatar className="border-2 border-dict-accent/50 shadow-md">
                <AvatarFallback className="bg-gradient-to-br from-dict-accent/20 to-grafana-blue/20 text-dict-accent font-semibold">
                  AD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Welcome Section */}
        <div className="mb-12 animate-fade-in">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-5xl font-display font-bold mb-3 tracking-tight">
                Welcome to <span className="text-dict-accent">DICT Hub</span>
              </h2>
              <p className="text-muted-foreground text-lg font-medium">
                Centralized management system for all departmental divisions
              </p>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground bg-dict-panel/50 px-4 py-2 rounded-lg border border-dict-border/30">
              <Clock className="w-4 h-4" />
              <span className="font-medium">{new Date().toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
            </div>
          </div>

          {/* System Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {systemStats.map((stat, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                <Card className="stat-card group hover:scale-105 transition-all duration-500 border-dict-border/30">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className={`p-3 rounded-xl ${
                        stat.trend === 'up' 
                          ? 'bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20' 
                          : 'bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20'
                      }`}>
                        <stat.icon className={`w-6 h-6 ${
                          stat.trend === 'up' ? 'text-grafana-green' : 'text-grafana-blue'
                        }`} />
                      </div>
                      <div className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                        stat.trend === 'up' 
                          ? 'bg-grafana-green/10 text-grafana-green border border-grafana-green/20' 
                          : 'bg-grafana-blue/10 text-grafana-blue border border-grafana-blue/20'
                      }`}>
                        {stat.change}
                      </div>
                    </div>
                    <div>
                      <p className="text-4xl font-display font-bold mb-1.5 tracking-tight">{stat.value}</p>
                      <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="divisions" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="divisions" className="data-[state=active]:bg-dict-accent data-[state=active]:shadow-lg font-semibold rounded-lg">
              Divisions
            </TabsTrigger>
            <TabsTrigger value="activity" className="data-[state=active]:bg-dict-accent data-[state=active]:shadow-lg font-semibold rounded-lg">
              Recent Activity
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-dict-accent data-[state=active]:shadow-lg font-semibold rounded-lg">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Divisions Grid */}
          <TabsContent value="divisions" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {divisions.map((division, index) => {
                const loginRoutes: Record<string, string> = {
                  'hr': '/login/hr',
                  'monitoring': '/login/monitoring',
                  'finance': '/login/finance',
                  'it': '/login/it',
                  'policy': '/login/policy',
                  'information': '/login/information'
                }
                
                return (
                  <Link key={division.id} href={loginRoutes[division.id]} className="animate-fade-in block" style={{ animationDelay: `${index * 100}ms` }}>
                    <Card className="group hover:scale-105 transition-all duration-500 overflow-hidden border-dict-border/30 h-full cursor-pointer">
                      <div className={`h-1.5 bg-gradient-to-r ${division.color}`} />
                      <CardHeader className="pb-4">
                        <div className="flex items-start justify-between mb-6">
                          <div className={`p-4 rounded-xl bg-gradient-to-br ${division.color} shadow-lg flex items-center justify-center`}>
                            <division.icon className="w-7 h-7 text-white" strokeWidth={2.5} />
                          </div>
                          <Button 
                            variant="ghost" 
                            size="icon"
                            className="opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-dict-panel"
                          >
                            <ArrowRight className="w-5 h-5" />
                          </Button>
                        </div>
                        <CardTitle className="text-2xl font-display font-bold tracking-tight mb-2">{division.name}</CardTitle>
                        <CardDescription className="text-base font-medium leading-relaxed">{division.description}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-3 gap-4 py-4 border-y border-dict-border/30">
                          {Object.entries(division.stats).map(([key, value]) => (
                            <div key={key} className="text-center">
                              <p className="text-xl font-bold text-foreground tracking-tight">{value}</p>
                              <p className="text-xs text-muted-foreground capitalize font-medium mt-1">{key}</p>
                            </div>
                          ))}
                        </div>
                        <Button className="w-full mt-6 button-glow font-semibold tracking-wide" size="lg">
                          Access {division.name}
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                )
              })}
            </div>
          </TabsContent>

          {/* Recent Activity */}
          <TabsContent value="activity">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Recent Activity</CardTitle>
                <CardDescription className="text-base font-medium">Latest updates across all divisions</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivities.map((activity, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-5 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-dict-accent/30 transition-all duration-300 animate-fade-in hover:bg-dict-panel/70"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="flex items-center space-x-4">
                        <div className={`p-2.5 rounded-lg ${
                          activity.status === 'success' 
                            ? 'bg-grafana-green/10 border border-grafana-green/20' 
                            : 'bg-grafana-yellow/10 border border-grafana-yellow/20'
                        }`}>
                          {activity.status === 'success' ? (
                            <CheckCircle2 className="w-5 h-5 text-grafana-green" />
                          ) : (
                            <AlertCircle className="w-5 h-5 text-grafana-yellow" />
                          )}
                        </div>
                        <div>
                          <p className="font-semibold text-foreground">{activity.title}</p>
                          <p className="text-sm text-muted-foreground font-medium">{activity.time}</p>
                        </div>
                      </div>
                      <Button variant="ghost" size="sm" className="hover:bg-dict-accent/10 font-medium">
                        View Details
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics */}
          <TabsContent value="analytics">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <Card className="border-dict-border/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-display font-bold tracking-tight">System Performance</CardTitle>
                  <CardDescription className="text-base font-medium">Real-time metrics and monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="p-6 bg-grafana-green/10 rounded-2xl border border-grafana-green/20 inline-block mb-4">
                        <TrendingUp className="w-20 h-20 text-grafana-green" />
                      </div>
                      <p className="font-semibold text-lg">Performance charts coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-dict-border/30">
                <CardHeader>
                  <CardTitle className="text-3xl font-display font-bold tracking-tight">Division Overview</CardTitle>
                  <CardDescription className="text-base font-medium">Activity distribution across departments</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="h-72 flex items-center justify-center text-muted-foreground">
                    <div className="text-center">
                      <div className="p-6 bg-grafana-blue/10 rounded-2xl border border-grafana-blue/20 inline-block mb-4">
                        <BarChart3 className="w-20 h-20 text-grafana-blue" />
                      </div>
                      <p className="font-semibold text-lg">Analytics dashboard coming soon</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>

      {/* Footer */}
      <footer className="border-t border-dict-border/30 mt-20 py-8 bg-dict-dark/50">
        <div className="container mx-auto px-8">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <p className="font-medium">&copy; 2026 Department of Information and Communications Technology. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <span className="flex items-center space-x-2 bg-grafana-green/10 px-3 py-1.5 rounded-full border border-grafana-green/20">
                <div className="w-2 h-2 bg-grafana-green rounded-full animate-pulse" />
                <span className="font-semibold text-grafana-green">All Systems Operational</span>
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
