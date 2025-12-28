'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  FileText,
  CheckCircle,
  Clock,
  Edit,
  LogOut,
  File,
  AlertCircle,
  Archive
} from 'lucide-react'
import Link from 'next/link'

// Mock policies
const policies = [
  { id: 'POL-078', title: 'Data Privacy and Protection Policy', status: 'Active', version: '2.1', lastUpdated: '2025-11-15', department: 'All', compliance: 'Mandatory' },
  { id: 'POL-077', title: 'Remote Work Guidelines', status: 'Active', version: '1.5', lastUpdated: '2025-10-20', department: 'HR', compliance: 'Recommended' },
  { id: 'POL-076', title: 'Cybersecurity Framework', status: 'Active', version: '3.0', lastUpdated: '2025-09-10', department: 'IT', compliance: 'Mandatory' },
  { id: 'POL-075', title: 'Procurement Standards', status: 'Under Review', version: '1.8', lastUpdated: '2026-01-05', department: 'Finance', compliance: 'Mandatory' },
]

// Mock draft policies
const draftPolicies = [
  { id: 'DRAFT-005', title: 'AI Ethics and Governance', author: 'Policy Team', created: '2026-01-20', progress: 65, reviewers: 3 },
  { id: 'DRAFT-004', title: 'Sustainable IT Practices', author: 'IT Division', created: '2026-01-18', progress: 40, reviewers: 2 },
  { id: 'DRAFT-003', title: 'Employee Wellness Program', author: 'HR Division', created: '2026-01-15', progress: 80, reviewers: 4 },
]

export default function PolicyDashboard() {
  const activePolicies = policies.filter(p => p.status === 'Active').length
  const underReview = policies.filter(p => p.status === 'Under Review').length

  return (
    <div className="min-h-screen bg-dict-darker">
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                <span className="text-grafana-yellow">Policy Division</span>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Policies</p>
                  <p className="text-3xl font-display font-bold">78</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">+5 this year</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-yellow/10 to-grafana-yellow/5 border border-grafana-yellow/20">
                  <FileText className="w-6 h-6 text-grafana-yellow" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Active Policies</p>
                  <p className="text-3xl font-display font-bold">{activePolicies}</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">Compliant</p>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Under Review</p>
                  <p className="text-3xl font-display font-bold">{underReview}</p>
                  <p className="text-xs text-grafana-yellow font-semibold mt-1">Pending approval</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <Clock className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Draft Policies</p>
                  <p className="text-3xl font-display font-bold">{draftPolicies.length}</p>
                  <p className="text-xs text-grafana-purple font-semibold mt-1">In development</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-purple/10 to-grafana-purple/5 border border-grafana-purple/20">
                  <Edit className="w-6 h-6 text-grafana-purple" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="active" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="active" className="data-[state=active]:bg-grafana-yellow data-[state=active]:shadow-lg data-[state=active]:text-dict-darker font-semibold rounded-lg">
              Active Policies
            </TabsTrigger>
            <TabsTrigger value="drafts" className="data-[state=active]:bg-grafana-yellow data-[state=active]:shadow-lg data-[state=active]:text-dict-darker font-semibold rounded-lg">
              Drafts
            </TabsTrigger>
            <TabsTrigger value="compliance" className="data-[state=active]:bg-grafana-yellow data-[state=active]:shadow-lg data-[state=active]:text-dict-darker font-semibold rounded-lg">
              Compliance
            </TabsTrigger>
            <TabsTrigger value="archive" className="data-[state=active]:bg-grafana-yellow data-[state=active]:shadow-lg data-[state=active]:text-dict-darker font-semibold rounded-lg">
              Archive
            </TabsTrigger>
          </TabsList>

          <TabsContent value="active">
            <Card className="border-dict-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold tracking-tight">Active Policies</CardTitle>
                    <CardDescription className="text-base font-medium">Current organizational policies</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-grafana-yellow to-amber-600 hover:from-grafana-yellow/90 hover:to-amber-600/90 text-dict-darker font-semibold">
                    <FileText className="w-4 h-4 mr-2" />
                    New Policy
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {policies.map((policy) => (
                    <div key={policy.id} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-yellow/30 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{policy.title}</h3>
                          <p className="text-sm text-muted-foreground">{policy.id} • {policy.department} Department</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${
                          policy.status === 'Active'
                            ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                            : 'bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20'
                        }`}>
                          {policy.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Version</p>
                          <p className="font-semibold">v{policy.version}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Last Updated</p>
                          <p className="font-semibold text-sm">{new Date(policy.lastUpdated).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Compliance</p>
                          <p className={`font-semibold text-sm ${
                            policy.compliance === 'Mandatory' ? 'text-grafana-red' : 'text-grafana-blue'
                          }`}>{policy.compliance}</p>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-grafana-yellow/10">
                            View Policy
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="drafts">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Draft Policies</CardTitle>
                <CardDescription className="text-base font-medium">Policies in development</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {draftPolicies.map((draft) => (
                    <div key={draft.id} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{draft.title}</h3>
                          <p className="text-sm text-muted-foreground">{draft.id} • By {draft.author}</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full text-sm font-bold border bg-grafana-purple/10 text-grafana-purple border-grafana-purple/20">
                          Draft
                        </div>
                      </div>

                      <div className="mb-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium">Completion Progress</span>
                          <span className="text-sm font-bold">{draft.progress}%</span>
                        </div>
                        <div className="w-full bg-dict-dark rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-grafana-yellow to-amber-600 h-2 rounded-full transition-all duration-500"
                            style={{ width: `${draft.progress}%` }}
                          />
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>Created: {new Date(draft.created).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                          <span>•</span>
                          <span>{draft.reviewers} reviewers</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="hover:bg-grafana-yellow/10">
                            Edit
                          </Button>
                          <Button variant="ghost" size="sm" className="hover:bg-grafana-yellow/10">
                            Review
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="compliance">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Compliance Overview</CardTitle>
                <CardDescription className="text-base font-medium">Department compliance status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {['HR', 'IT', 'Finance', 'M&E', 'Information', 'Policy'].map((dept, index) => (
                    <div key={index} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="font-bold text-lg">{dept} Department</h3>
                        <CheckCircle className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-muted-foreground">Compliance Rate</span>
                          <span className="font-bold text-grafana-green">98%</span>
                        </div>
                        <div className="w-full bg-dict-dark rounded-full h-2">
                          <div className="bg-gradient-to-r from-grafana-green to-emerald-600 h-2 rounded-full w-[98%]" />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="archive">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Policy Archive</CardTitle>
                <CardDescription className="text-base font-medium">Retired and superseded policies</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center text-muted-foreground">
                  <div className="text-center">
                    <div className="p-6 bg-dict-panel rounded-2xl border border-dict-border/30 inline-block mb-4">
                      <Archive className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <p className="font-semibold text-lg">Policy archive</p>
                    <p className="text-sm mt-2">Historical policies stored securely</p>
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
