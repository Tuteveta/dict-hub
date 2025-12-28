'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Megaphone,
  Newspaper,
  Camera,
  Radio,
  TrendingUp,
  Calendar,
  LogOut,
  FileText,
  Users,
  Eye,
  Share2,
  Send
} from 'lucide-react'
import Link from 'next/link'

// Mock press releases
const pressReleases = [
  { id: 'PR-2024-045', title: 'DICT Launches New Digital Services Portal', date: '2026-01-26', status: 'Published', views: '12.5K', shares: 345 },
  { id: 'PR-2024-044', title: 'Ministry Partners with Tech Giants for AI Initiative', date: '2026-01-24', status: 'Published', views: '8.2K', shares: 234 },
  { id: 'PR-2024-043', title: 'National Cybersecurity Framework Announced', date: '2026-01-20', status: 'Published', views: '15.8K', shares: 567 },
  { id: 'PR-2024-042', title: 'Digital Literacy Program Reaches 10,000 Students', date: '2026-01-15', status: 'Draft', views: '0', shares: 0 },
]

// Mock media coverage
const mediaCoverage = [
  { outlet: 'The National', topic: 'Digital Transformation', date: '2026-01-25', type: 'Article', reach: '45K' },
  { outlet: 'Post-Courier', topic: 'Tech Innovation', date: '2026-01-23', type: 'Interview', reach: '32K' },
  { outlet: 'NBC TV', topic: 'Government Services', date: '2026-01-22', type: 'TV Segment', reach: '120K' },
  { outlet: 'FM100', topic: 'Digital Skills', date: '2026-01-20', type: 'Radio', reach: '78K' },
]

// Mock upcoming events
const upcomingEvents = [
  { name: 'Tech Summit 2026', date: '2026-02-15', type: 'Conference', attendees: '500+', status: 'Confirmed' },
  { name: 'Digital PNG Week', date: '2026-03-01', type: 'Campaign', attendees: 'National', status: 'Planning' },
  { name: 'Press Briefing - Q1 Updates', date: '2026-02-05', type: 'Press Conference', attendees: '50', status: 'Scheduled' },
]

export default function InformationDashboard() {
  return (
    <div className="min-h-screen bg-dict-darker">
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                <span className="text-pink-500">Information Division</span>
                <span className="text-white"> Dashboard</span>
              </h1>
              <p className="text-sm text-muted-foreground font-medium">News, Media & Publicity Portal</p>
            </div>
            <Link href="/">
              <Button variant="ghost" className="hover:bg-dict-panel font-medium">
                <LogOut className="w-4 h-4 mr-2" />
                Logout
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Press Releases</p>
                  <p className="text-3xl font-display font-bold">124</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">+15 this month</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <Newspaper className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Media Outlets</p>
                  <p className="text-3xl font-display font-bold">45</p>
                  <p className="text-xs text-grafana-blue font-semibold mt-1">8 partnerships</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <Radio className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Reach</p>
                  <p className="text-3xl font-display font-bold">2.4M</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">+18% increase</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <Eye className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Upcoming Events</p>
                  <p className="text-3xl font-display font-bold">18</p>
                  <p className="text-xs text-grafana-yellow font-semibold mt-1">3 this week</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <Calendar className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="releases" className="space-y-6">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="releases" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Press Releases
            </TabsTrigger>
            <TabsTrigger value="media" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Media Coverage
            </TabsTrigger>
            <TabsTrigger value="events" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Events
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Reports
            </TabsTrigger>
          </TabsList>

          {/* Press Releases Tab */}
          <TabsContent value="releases">
            <Card className="border-dict-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold tracking-tight">Press Releases</CardTitle>
                    <CardDescription className="text-base font-medium">Manage and publish official communications</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-500/90 hover:to-rose-600/90 font-semibold">
                    <Send className="w-4 h-4 mr-2" />
                    New Release
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pressReleases.map((release) => (
                    <div
                      key={release.id}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{release.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                              release.status === 'Published'
                                ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                                : 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                            }`}>
                              {release.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{release.id} • {new Date(release.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Views</p>
                          <p className="text-2xl font-bold flex items-center">
                            <Eye className="w-4 h-4 mr-1 text-muted-foreground" />
                            {release.views}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Shares</p>
                          <p className="text-2xl font-bold flex items-center">
                            <Share2 className="w-4 h-4 mr-1 text-muted-foreground" />
                            {release.shares}
                          </p>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-pink-500/10 font-semibold">
                            View Details
                          </Button>
                        </div>
                      </div>

                      <div className="flex space-x-2">
                        <Button variant="ghost" size="sm" className="flex-1 hover:bg-pink-500/10">
                          Edit
                        </Button>
                        <Button variant="ghost" size="sm" className="flex-1 hover:bg-pink-500/10">
                          Analytics
                        </Button>
                        {release.status === 'Draft' && (
                          <Button 
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-500/90 hover:to-rose-600/90"
                          >
                            Publish
                          </Button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Media Coverage Tab */}
          <TabsContent value="media">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Media Coverage</CardTitle>
                <CardDescription className="text-base font-medium">Track DICT mentions across media outlets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {mediaCoverage.map((coverage, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{coverage.outlet}</h3>
                          <p className="text-sm text-muted-foreground">{coverage.topic} • {new Date(coverage.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="px-3 py-1 rounded-full text-xs font-bold border bg-pink-500/10 text-pink-500 border-pink-500/20">
                            {coverage.type}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 pt-3 border-t border-dict-border/30">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Estimated Reach</p>
                          <p className="text-xl font-bold">{coverage.reach}</p>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-pink-500/10 font-semibold">
                            View Coverage
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events">
            <Card className="border-dict-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold tracking-tight">Upcoming Events</CardTitle>
                    <CardDescription className="text-base font-medium">Manage publicity events and campaigns</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-500/90 hover:to-rose-600/90 font-semibold">
                    <Calendar className="w-4 h-4 mr-2" />
                    Schedule Event
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingEvents.map((event, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="font-bold text-lg">{event.name}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                              event.status === 'Confirmed'
                                ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                                : event.status === 'Scheduled'
                                ? 'bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20'
                                : 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                            }`}>
                              {event.status}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.type} • {new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 pt-3 border-t border-dict-border/30">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Expected Attendees</p>
                          <p className="font-semibold">{event.attendees}</p>
                        </div>
                        <div className="col-span-2 text-right">
                          <div className="flex space-x-2 justify-end">
                            <Button variant="ghost" size="sm" className="hover:bg-pink-500/10">
                              Edit Details
                            </Button>
                            <Button variant="ghost" size="sm" className="hover:bg-pink-500/10">
                              Media Kit
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Reports Tab */}
          <TabsContent value="reports">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Communications Reports</CardTitle>
                <CardDescription className="text-base font-medium">Analytics and performance metrics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { name: 'Monthly Media Report', description: 'Coverage and reach analysis', icon: FileText },
                    { name: 'Press Release Performance', description: 'Engagement metrics', icon: TrendingUp },
                    { name: 'Public Sentiment Analysis', description: 'Social media monitoring', icon: Users },
                    { name: 'Event Impact Assessment', description: 'Post-event analysis', icon: Camera },
                  ].map((report, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="p-3 rounded-lg bg-pink-500/10 border border-pink-500/20">
                          <report.icon className="w-6 h-6 text-pink-500" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold">{report.name}</h3>
                          <p className="text-sm text-muted-foreground">{report.description}</p>
                        </div>
                      </div>
                      <Button variant="ghost" className="w-full hover:bg-pink-500/10 font-semibold">
                        Generate Report
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}