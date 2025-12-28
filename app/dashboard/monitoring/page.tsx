'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  BarChart3,
  TrendingUp,
  CheckCircle,
  Clock,
  AlertCircle,
  LogOut,
  FolderOpen,
  Target,
  Activity
} from 'lucide-react'
import Link from 'next/link'

// Mock data for projects
const projects = [
  { id: 'PRJ-001', name: 'Digital Infrastructure Upgrade', status: 'In Progress', progress: 75, budget: '5.2M', spent: '3.9M', deadline: '2026-06-30', manager: 'John Doe' },
  { id: 'PRJ-002', name: 'E-Government Portal', status: 'In Progress', progress: 45, budget: '3.8M', spent: '1.7M', deadline: '2026-08-15', manager: 'Jane Smith' },
  { id: 'PRJ-003', name: 'Cybersecurity Framework', status: 'Completed', progress: 100, budget: '2.1M', spent: '2.0M', deadline: '2025-12-20', manager: 'Mike Johnson' },
  { id: 'PRJ-004', name: 'Data Analytics Platform', status: 'Planning', progress: 15, budget: '4.5M', spent: '0.5M', deadline: '2026-12-31', manager: 'Sarah Williams' },
]

// Mock KPIs
const kpis = [
  { metric: 'Project Success Rate', current: 92, target: 90, trend: 'up', unit: '%' },
  { metric: 'On-Time Delivery', current: 85, target: 95, trend: 'down', unit: '%' },
  { metric: 'Budget Utilization', current: 78, target: 80, trend: 'up', unit: '%' },
  { metric: 'Stakeholder Satisfaction', current: 4.5, target: 4.0, trend: 'up', unit: '/5' },
]

export default function MonitoringDashboard() {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
      case 'In Progress':
        return 'bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20'
      case 'Planning':
        return 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
      case 'At Risk':
        return 'bg-grafana-red/10 text-grafana-red border-grafana-red/20'
      default:
        return ''
    }
  }

  return (
    <div className="min-h-screen bg-dict-darker">
      {/* Header */}
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                <span className="text-grafana-blue">Monitoring & Evaluation</span>
                <span className="text-white"> Dashboard</span>
              </h1>
              <p className="text-sm text-muted-foreground font-medium">Admin Portal</p>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link href="/">
                <Button variant="ghost" className="hover:bg-dict-panel font-medium">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Projects</p>
                  <p className="text-3xl font-display font-bold">24</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">+3 this quarter</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <FolderOpen className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Completed</p>
                  <p className="text-3xl font-display font-bold">18</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">75% success rate</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20">
                  <CheckCircle className="w-6 h-6 text-grafana-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">In Progress</p>
                  <p className="text-3xl font-display font-bold">6</p>
                  <p className="text-xs text-grafana-blue font-semibold mt-1">On track</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-yellow/10 to-grafana-yellow/5 border border-grafana-yellow/20">
                  <Clock className="w-6 h-6 text-grafana-yellow" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Budget</p>
                  <p className="text-3xl font-display font-bold">$45M</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">$35M utilized</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-purple/10 to-grafana-purple/5 border border-grafana-purple/20">
                  <TrendingUp className="w-6 h-6 text-grafana-purple" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="projects" className="data-[state=active]:bg-grafana-blue data-[state=active]:shadow-lg font-semibold rounded-lg">
              Projects
            </TabsTrigger>
            <TabsTrigger value="kpis" className="data-[state=active]:bg-grafana-blue data-[state=active]:shadow-lg font-semibold rounded-lg">
              KPIs
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-grafana-blue data-[state=active]:shadow-lg font-semibold rounded-lg">
              Reports
            </TabsTrigger>
            <TabsTrigger value="analytics" className="data-[state=active]:bg-grafana-blue data-[state=active]:shadow-lg font-semibold rounded-lg">
              Analytics
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects">
            <Card className="border-dict-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold tracking-tight">Project Portfolio</CardTitle>
                    <CardDescription className="text-base font-medium">Monitor all active and completed projects</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-grafana-blue to-cyan-600 hover:from-grafana-blue/90 hover:to-cyan-600/90 font-semibold">
                    <FolderOpen className="w-4 h-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projects.map((project) => (
                    <div
                      key={project.id}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-blue/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{project.name}</h3>
                          <p className="text-sm text-muted-foreground">{project.id} • Manager: {project.manager}</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${getStatusColor(project.status)}`}>
                          {project.status}
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Progress</span>
                          <span className="text-sm font-bold">{project.progress}%</span>
                        </div>
                        <div className="w-full bg-dict-dark rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-grafana-blue to-cyan-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${project.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Budget</p>
                          <p className="font-semibold">${project.budget}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Spent</p>
                          <p className="font-semibold text-grafana-orange">${project.spent}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Remaining</p>
                          <p className="font-semibold text-grafana-green">
                            ${(parseFloat(project.budget.replace('M', '')) - parseFloat(project.spent.replace('M', ''))).toFixed(1)}M
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Deadline</p>
                          <p className="font-semibold text-sm">
                            {new Date(project.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex space-x-3">
                        <Button variant="ghost" className="flex-1 hover:bg-grafana-blue/10">
                          View Details
                        </Button>
                        <Button variant="ghost" className="flex-1 hover:bg-grafana-blue/10">
                          Edit Project
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* KPIs Tab */}
          <TabsContent value="kpis">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Key Performance Indicators</CardTitle>
                <CardDescription className="text-base font-medium">Track performance metrics against targets</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {kpis.map((kpi, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-bold text-lg">{kpi.metric}</h3>
                        <div className={`p-2 rounded-lg ${
                          kpi.trend === 'up' 
                            ? 'bg-grafana-green/10 border border-grafana-green/20'
                            : 'bg-grafana-red/10 border border-grafana-red/20'
                        }`}>
                          <TrendingUp className={`w-5 h-5 ${
                            kpi.trend === 'up' ? 'text-grafana-green' : 'text-grafana-red rotate-180'
                          }`} />
                        </div>
                      </div>

                      <div className="flex items-end space-x-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Current</p>
                          <p className="text-4xl font-display font-bold">{kpi.current}{kpi.unit}</p>
                        </div>
                        <div className="pb-2">
                          <p className="text-xs text-muted-foreground mb-1">Target</p>
                          <p className="text-2xl font-bold text-muted-foreground">{kpi.target}{kpi.unit}</p>
                        </div>
                      </div>

                      <div className="w-full bg-dict-dark rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full transition-all duration-500 ${
                            kpi.current >= kpi.target
                              ? 'bg-gradient-to-r from-grafana-green to-emerald-600'
                              : 'bg-gradient-to-r from-grafana-yellow to-amber-600'
                          }`}
                          style={{ width: `${Math.min((kpi.current / kpi.target) * 100, 100)}%` }}
                        />
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
                <CardTitle className="text-3xl font-display font-bold tracking-tight">M&E Reports</CardTitle>
                <CardDescription className="text-base font-medium">Generate monitoring and evaluation reports</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-blue/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-blue/10 border border-grafana-blue/20">
                        <BarChart3 className="w-6 h-6 text-grafana-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Project Performance</h3>
                        <p className="text-sm text-muted-foreground">Quarterly analysis</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-blue/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <Target className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">KPI Dashboard</h3>
                        <p className="text-sm text-muted-foreground">Monthly metrics</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-blue/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-orange/10 border border-grafana-orange/20">
                        <Activity className="w-6 h-6 text-grafana-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Budget Utilization</h3>
                        <p className="text-sm text-muted-foreground">Financial overview</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-blue/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-purple/10 border border-grafana-purple/20">
                        <CheckCircle className="w-6 h-6 text-grafana-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Impact Assessment</h3>
                        <p className="text-sm text-muted-foreground">Outcome evaluation</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Analytics Dashboard</CardTitle>
                <CardDescription className="text-base font-medium">Data visualization and insights</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-96 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="p-6 bg-grafana-blue/10 rounded-2xl border border-grafana-blue/20 inline-block mb-4">
                      <BarChart3 className="w-20 h-20 text-grafana-blue" />
                    </div>
                    <p className="font-semibold text-lg">Analytics charts coming soon</p>
                    <p className="text-sm mt-2">Connect to data visualization tools</p>
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
