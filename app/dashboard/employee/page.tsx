'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Calendar, 
  FileText, 
  CheckCircle, 
  Clock, 
  XCircle, 
  LogOut,
  User,
  Briefcase,
  CalendarDays,
  TrendingUp
} from 'lucide-react'
import Link from 'next/link'

// Mock data for leave requests
const leaveRequests = [
  { id: 1, type: 'Annual Leave', from: '2026-02-15', to: '2026-02-20', days: 5, status: 'Approved', submittedOn: '2026-01-28' },
  { id: 2, type: 'Sick Leave', from: '2026-01-10', to: '2026-01-12', days: 3, status: 'Pending', submittedOn: '2026-01-09' },
  { id: 3, type: 'Personal Leave', from: '2025-12-20', to: '2025-12-22', days: 3, status: 'Rejected', submittedOn: '2025-12-15' },
]

export default function EmployeeDashboard() {
  const [showLeaveForm, setShowLeaveForm] = useState(false)
  const [leaveType, setLeaveType] = useState('')
  const [fromDate, setFromDate] = useState('')
  const [toDate, setToDate] = useState('')
  const [reason, setReason] = useState('')

  const handleLeaveSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle leave application submission
    alert('Leave request submitted successfully!')
    setShowLeaveForm(false)
    // Reset form
    setLeaveType('')
    setFromDate('')
    setToDate('')
    setReason('')
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Approved':
        return <CheckCircle className="w-5 h-5 text-grafana-green" />
      case 'Pending':
        return <Clock className="w-5 h-5 text-grafana-yellow" />
      case 'Rejected':
        return <XCircle className="w-5 h-5 text-grafana-red" />
      default:
        return null
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Approved':
        return 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
      case 'Pending':
        return 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
      case 'Rejected':
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
                <span className="text-dict-accent">Employee</span>
                <span className="text-white"> Portal</span>
              </h1>
              <p className="text-sm text-muted-foreground font-medium">Welcome back, John Doe</p>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Leave Balance</p>
                  <p className="text-3xl font-display font-bold">15 Days</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20">
                  <Calendar className="w-6 h-6 text-grafana-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Used This Year</p>
                  <p className="text-3xl font-display font-bold">8 Days</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <CalendarDays className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Pending Requests</p>
                  <p className="text-3xl font-display font-bold">1</p>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Attendance Rate</p>
                  <p className="text-3xl font-display font-bold">98%</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-purple/10 to-grafana-purple/5 border border-grafana-purple/20">
                  <TrendingUp className="w-6 h-6 text-grafana-purple" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content */}
        <Tabs defaultValue="requests" className="space-y-8">
          <div className="flex items-center justify-between">
            <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
              <TabsTrigger value="requests" className="data-[state=active]:bg-dict-accent data-[state=active]:shadow-lg font-semibold rounded-lg">
                My Requests
              </TabsTrigger>
              <TabsTrigger value="apply" className="data-[state=active]:bg-dict-accent data-[state=active]:shadow-lg font-semibold rounded-lg">
                Apply for Leave
              </TabsTrigger>
              <TabsTrigger value="profile" className="data-[state=active]:bg-dict-accent data-[state=active]:shadow-lg font-semibold rounded-lg">
                My Profile
              </TabsTrigger>
            </TabsList>
          </div>

          {/* My Requests Tab */}
          <TabsContent value="requests">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Leave Requests</CardTitle>
                <CardDescription className="text-base font-medium">Track your leave applications and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {leaveRequests.map((request) => (
                    <div
                      key={request.id}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-dict-accent/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-start space-x-4">
                          <div className="p-3 rounded-lg bg-dict-dark border border-dict-border/30">
                            {getStatusIcon(request.status)}
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">{request.type}</h3>
                            <p className="text-sm text-muted-foreground">
                              {new Date(request.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })} - {new Date(request.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                            </p>
                          </div>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${getStatusColor(request.status)}`}>
                          {request.status}
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4 pt-4 border-t border-dict-border/30">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Duration</p>
                          <p className="font-semibold">{request.days} days</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Submitted</p>
                          <p className="font-semibold">{new Date(request.submittedOn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                        </div>
                        <div className="text-right">
                          <Button variant="ghost" size="sm" className="hover:bg-dict-accent/10">
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

          {/* Apply for Leave Tab */}
          <TabsContent value="apply">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Apply for Leave</CardTitle>
                <CardDescription className="text-base font-medium">Submit a new leave request</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleLeaveSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="leaveType" className="text-sm font-semibold text-foreground">
                      Leave Type
                    </label>
                    <select
                      id="leaveType"
                      value={leaveType}
                      onChange={(e) => setLeaveType(e.target.value)}
                      className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground"
                      required
                    >
                      <option value="">Select leave type</option>
                      <option value="annual">Annual Leave</option>
                      <option value="sick">Sick Leave</option>
                      <option value="personal">Personal Leave</option>
                      <option value="emergency">Emergency Leave</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label htmlFor="fromDate" className="text-sm font-semibold text-foreground">
                        From Date
                      </label>
                      <input
                        id="fromDate"
                        type="date"
                        value={fromDate}
                        onChange={(e) => setFromDate(e.target.value)}
                        className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="toDate" className="text-sm font-semibold text-foreground">
                        To Date
                      </label>
                      <input
                        id="toDate"
                        type="date"
                        value={toDate}
                        onChange={(e) => setToDate(e.target.value)}
                        className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="reason" className="text-sm font-semibold text-foreground">
                      Reason
                    </label>
                    <textarea
                      id="reason"
                      value={reason}
                      onChange={(e) => setReason(e.target.value)}
                      rows={4}
                      className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground resize-none"
                      placeholder="Please provide a brief reason for your leave request..."
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full button-glow font-semibold tracking-wide py-6 text-base" size="lg">
                    Submit Leave Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">My Profile</CardTitle>
                <CardDescription className="text-base font-medium">Your employee information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6 pb-6 border-b border-dict-border/30">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-dict-accent to-grafana-blue flex items-center justify-center text-3xl font-bold text-white">
                      JD
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-1">John Doe</h3>
                      <p className="text-muted-foreground font-medium">Software Engineer</p>
                      <p className="text-sm text-muted-foreground">EMP-2024-001</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Email</p>
                        <p className="font-semibold">john.doe@dict.gov</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Department</p>
                        <p className="font-semibold">Information Technology</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Join Date</p>
                        <p className="font-semibold">January 15, 2024</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Phone</p>
                        <p className="font-semibold">+675 1234 5678</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Manager</p>
                        <p className="font-semibold">Jane Smith</p>
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">Work Location</p>
                        <p className="font-semibold">Port Moresby</p>
                      </div>
                    </div>
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
