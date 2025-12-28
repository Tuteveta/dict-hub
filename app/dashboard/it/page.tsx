'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Server,
  Activity,
  AlertTriangle,
  CheckCircle,
  Clock,
  LogOut,
  HardDrive,
  Cpu,
  Wifi,
  Shield
} from 'lucide-react'
import Link from 'next/link'

// Mock system data
const systems = [
  { name: 'Web Server 01', status: 'Online', uptime: '99.8%', cpu: 45, memory: 62, lastCheck: '2 mins ago' },
  { name: 'Database Server', status: 'Online', uptime: '99.9%', cpu: 72, memory: 81, lastCheck: '1 min ago' },
  { name: 'Email Server', status: 'Online', uptime: '99.7%', cpu: 38, memory: 55, lastCheck: '3 mins ago' },
  { name: 'Backup Server', status: 'Maintenance', uptime: '98.5%', cpu: 15, memory: 28, lastCheck: '5 mins ago' },
]

// Mock tickets
const tickets = [
  { id: 'TKT-145', title: 'Email sync issues', department: 'Finance', priority: 'High', status: 'Open', assignedTo: 'Tech Support', created: '2026-01-28' },
  { id: 'TKT-144', title: 'Printer not working', department: 'HR', priority: 'Low', status: 'In Progress', assignedTo: 'IT Support', created: '2026-01-27' },
  { id: 'TKT-143', title: 'VPN connection error', department: 'M&E', priority: 'High', status: 'Open', assignedTo: 'Network Team', created: '2026-01-27' },
  { id: 'TKT-142', title: 'Password reset request', department: 'Policy', priority: 'Medium', status: 'Resolved', assignedTo: 'Help Desk', created: '2026-01-26' },
]

export default function ITDashboard() {
  const openTickets = tickets.filter(t => t.status !== 'Resolved').length
  const onlineSystems = systems.filter(s => s.status === 'Online').length

  return (
    <div className="min-h-screen bg-dict-darker">
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                <span className="text-grafana-purple">Information Technology</span>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Systems Online</p>
                  <p className="text-3xl font-display font-bold">{onlineSystems}/{systems.length}</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">All operational</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-purple/10 to-grafana-purple/5 border border-grafana-purple/20">
                  <Server className="w-6 h-6 text-grafana-purple" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">System Uptime</p>
                  <p className="text-3xl font-display font-bold">99.8%</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">Last 30 days</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20">
                  <Activity className="w-6 h-6 text-grafana-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Open Tickets</p>
                  <p className="text-3xl font-display font-bold">{openTickets}</p>
                  <p className="text-xs text-grafana-yellow font-semibold mt-1">Needs attention</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-yellow/10 to-grafana-yellow/5 border border-grafana-yellow/20">
                  <AlertTriangle className="w-6 h-6 text-grafana-yellow" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Security Status</p>
                  <p className="text-3xl font-display font-bold">Secure</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">No threats</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <Shield className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="systems" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="systems" className="data-[state=active]:bg-grafana-purple data-[state=active]:shadow-lg font-semibold rounded-lg">
              Systems
            </TabsTrigger>
            <TabsTrigger value="tickets" className="data-[state=active]:bg-grafana-purple data-[state=active]:shadow-lg font-semibold rounded-lg">
              Support Tickets
            </TabsTrigger>
            <TabsTrigger value="security" className="data-[state=active]:bg-grafana-purple data-[state=active]:shadow-lg font-semibold rounded-lg">
              Security
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-grafana-purple data-[state=active]:shadow-lg font-semibold rounded-lg">
              Reports
            </TabsTrigger>
          </TabsList>

          <TabsContent value="systems">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">System Monitoring</CardTitle>
                <CardDescription className="text-base font-medium">Real-time infrastructure status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {systems.map((system, index) => (
                    <div key={index} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{system.name}</h3>
                          <p className="text-sm text-muted-foreground">Last checked: {system.lastCheck}</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${
                          system.status === 'Online'
                            ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                            : 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                        }`}>
                          {system.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-6">
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium flex items-center gap-2">
                              <Cpu className="w-4 h-4" />
                              CPU
                            </span>
                            <span className="text-sm font-bold">{system.cpu}%</span>
                          </div>
                          <div className="w-full bg-dict-dark rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                system.cpu > 80 ? 'bg-grafana-red' : system.cpu > 60 ? 'bg-grafana-yellow' : 'bg-grafana-green'
                              }`}
                              style={{ width: `${system.cpu}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-sm font-medium flex items-center gap-2">
                              <HardDrive className="w-4 h-4" />
                              Memory
                            </span>
                            <span className="text-sm font-bold">{system.memory}%</span>
                          </div>
                          <div className="w-full bg-dict-dark rounded-full h-2">
                            <div 
                              className={`h-2 rounded-full ${
                                system.memory > 80 ? 'bg-grafana-red' : system.memory > 60 ? 'bg-grafana-yellow' : 'bg-grafana-green'
                              }`}
                              style={{ width: `${system.memory}%` }}
                            />
                          </div>
                        </div>

                        <div>
                          <p className="text-sm font-medium mb-2">Uptime</p>
                          <p className="text-2xl font-bold text-grafana-purple">{system.uptime}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tickets">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Support Tickets</CardTitle>
                <CardDescription className="text-base font-medium">IT help desk requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {tickets.map((ticket) => (
                    <div key={ticket.id} className="p-5 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{ticket.title}</h3>
                          <p className="text-sm text-muted-foreground">{ticket.id} • {ticket.department} • Assigned to: {ticket.assignedTo}</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${
                          ticket.priority === 'High'
                            ? 'bg-grafana-red/10 text-grafana-red border-grafana-red/20'
                            : ticket.priority === 'Medium'
                            ? 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                            : 'bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20'
                        }`}>
                          {ticket.priority}
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                          ticket.status === 'Resolved'
                            ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                            : ticket.status === 'In Progress'
                            ? 'bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20'
                            : 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                        }`}>
                          {ticket.status}
                        </span>
                        <Button variant="ghost" size="sm" className="hover:bg-grafana-purple/10">
                          View Details
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="security">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Security Overview</CardTitle>
                <CardDescription className="text-base font-medium">System security monitoring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <Shield className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Firewall Status</h3>
                        <p className="text-sm text-grafana-green font-semibold">Active & Protected</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Last updated: 5 minutes ago</p>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <CheckCircle className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Antivirus</h3>
                        <p className="text-sm text-grafana-green font-semibold">Up to date</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Last scan: 2 hours ago</p>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <Wifi className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Network Security</h3>
                        <p className="text-sm text-grafana-green font-semibold">No threats detected</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Monitoring active</p>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-blue/10 border border-grafana-blue/20">
                        <Server className="w-6 h-6 text-grafana-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Backup Status</h3>
                        <p className="text-sm text-grafana-blue font-semibold">Last backup: Today</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Auto-backup enabled</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">IT Reports</CardTitle>
                <CardDescription className="text-base font-medium">System analytics and reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 cursor-pointer hover:border-grafana-purple/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-purple/10 border border-grafana-purple/20">
                        <Activity className="w-6 h-6 text-grafana-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">System Performance</h3>
                        <p className="text-sm text-muted-foreground">Monthly analysis</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 cursor-pointer hover:border-grafana-purple/30">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-blue/10 border border-grafana-blue/20">
                        <AlertTriangle className="w-6 h-6 text-grafana-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Incident Report</h3>
                        <p className="text-sm text-muted-foreground">Issue tracking</p>
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
