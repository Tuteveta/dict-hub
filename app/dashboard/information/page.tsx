'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Database,
  TrendingUp,
  HardDrive,
  RefreshCw,
  LogOut,
  FileText,
  Users,
  BarChart3
} from 'lucide-react'
import Link from 'next/link'

// Mock data statistics
const dataStats = [
  { category: 'Employee Records', count: '2.4M', growth: '+12%', storage: '145 GB', lastUpdate: 'Today' },
  { category: 'Financial Records', count: '856K', growth: '+8%', storage: '89 GB', lastUpdate: 'Today' },
  { category: 'Project Documents', count: '1.2M', growth: '+15%', storage: '234 GB', lastUpdate: 'Yesterday' },
  { category: 'Policy Documents', count: '45K', growth: '+5%', storage: '12 GB', lastUpdate: '2 days ago' },
]

// Mock system health
const systemHealth = [
  { system: 'Primary Database', status: 'Operational', uptime: '99.9%', load: 65, connections: 847 },
  { system: 'Backup Database', status: 'Operational', uptime: '99.8%', load: 45, connections: 523 },
  { system: 'Archive Storage', status: 'Operational', uptime: '100%', load: 28, connections: 145 },
  { system: 'File Server', status: 'Maintenance', uptime: '98.5%', load: 82, connections: 1024 },
]

export default function InformationDashboard() {
  const totalRecords = dataStats.reduce((sum, stat) => {
    const count = parseFloat(stat.count.replace('M', '').replace('K', '000'))
    return sum + (stat.count.includes('M') ? count * 1000 : count)
  }, 0)

  const totalStorage = dataStats.reduce((sum, stat) => sum + parseFloat(stat.storage.replace(' GB', '')), 0)

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
              <p className="text-sm text-muted-foreground font-medium">Admin Portal</p>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Records</p>
                  <p className="text-3xl font-display font-bold">{(totalRecords / 1000).toFixed(1)}M</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">+12% growth</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-pink-500/10 to-pink-500/5 border border-pink-500/20">
                  <Database className="w-6 h-6 text-pink-500" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Storage</p>
                  <p className="text-3xl font-display font-bold">{totalStorage.toFixed(0)} GB</p>
                  <p className="text-xs text-grafana-blue font-semibold mt-1">78% capacity</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <HardDrive className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Active Users</p>
                  <p className="text-3xl font-display font-bold">487</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">Currently online</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20">
                  <Users className="w-6 h-6 text-grafana-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Last Backup</p>
                  <p className="text-3xl font-display font-bold">Today</p>
                  <p className="text-xs text-grafana-purple font-semibold mt-1">Automated</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-purple/10 to-grafana-purple/5 border border-grafana-purple/20">
                  <RefreshCw className="w-6 h-6 text-grafana-purple" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="data" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="data" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Data Overview
            </TabsTrigger>
            <TabsTrigger value="systems" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Systems
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Analytics
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-pink-500 data-[state=active]:shadow-lg font-semibold rounded-lg">
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="data">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Data Categories</CardTitle>
                <CardDescription className="text-base font-medium">Overview of all data repositories</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {dataStats.map((stat, index) => (
                    <div key={index} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{stat.category}</h3>
                          <p className="text-sm text-muted-foreground">Last updated: {stat.lastUpdate}</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full text-sm font-bold border bg-grafana-green/10 text-grafana-green border-grafana-green/20">
                          {stat.growth}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Total Records</p>
                          <p className="text-2xl font-bold">{stat.count}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Storage Used</p>
                          <p className="text-2xl font-bold text-grafana-blue">{stat.storage}</p>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-pink-500/10">
                            View Details
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="systems">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">System Health</CardTitle>
                <CardDescription className="text-base font-medium">Database and storage systems status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systemHealth.map((system, index) => (
                    <div key={index} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{system.system}</h3>
                          <p className="text-sm text-muted-foreground">Uptime: {system.uptime}</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${
                          system.status === 'Operational'
                            ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                            : 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                        }`}>
                          {system.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium">System Load</span>
                            <span className="text-sm font-bold">{system.load}%</span>
                          </div>
                          <div className="w-full bg-dict-dark rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                system.load > 80 ? 'bg-grafana-red' : system.load > 60 ? 'bg-grafana-yellow' : 'bg-grafana-green'
                              }`}
                              style={{ width: `${system.load}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">Active Connections</p>
                          <p className="text-2xl font-bold">{system.connections}</p>
                        </div>

                        <div className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-pink-500/10">
                            Manage
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="analytics">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Data Analytics</CardTitle>
                <CardDescription className="text-base font-medium">Usage patterns and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                    <h3 className="font-bold text-lg mb-4">Most Accessed Data</h3>
                    <div className="space-y-3">
                      {['Employee Records', 'Financial Data', 'Project Files', 'Policy Documents'].map((item, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{item}</span>
                          <span className="text-sm font-bold text-pink-500">{Math.floor(Math.random() * 500) + 100} queries/day</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                    <h3 className="font-bold text-lg mb-4">Top Users</h3>
                    <div className="space-y-3">
                      {['IT Department', 'HR Department', 'Finance Team', 'M&E Division'].map((user, index) => (
                        <div key={index} className="flex items-center justify-between">
                          <span className="text-sm">{user}</span>
                          <span className="text-sm font-bold text-grafana-green">{Math.floor(Math.random() * 200) + 50} requests</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="h-64 flex items-center justify-center text-muted-foreground border border-dict-border/30 rounded-xl bg-dict-panel/30">
                  <div className="text-center">
                    <BarChart3 className="w-16 h-16 mx-auto mb-4 text-pink-500" />
                    <p className="font-semibold text-lg">Advanced analytics charts</p>
                    <p className="text-sm mt-2">Data visualization coming soon</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Information Reports</CardTitle>
                <CardDescription className="text-base font-medium">Generate data and system reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-pink-500/10 border border-pink-500/20">
                        <Database className="w-6 h-6 text-pink-500" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Data Growth Report</h3>
                        <p className="text-sm text-muted-foreground">Monthly trends</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-blue/10 border border-grafana-blue/20">
                        <Users className="w-6 h-6 text-grafana-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Usage Statistics</h3>
                        <p className="text-sm text-muted-foreground">User access patterns</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <HardDrive className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Storage Analysis</h3>
                        <p className="text-sm text-muted-foreground">Capacity planning</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-pink-500/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-purple/10 border border-grafana-purple/20">
                        <RefreshCw className="w-6 h-6 text-grafana-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Backup Report</h3>
                        <p className="text-sm text-muted-foreground">Backup history</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
