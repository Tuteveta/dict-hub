'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  Users, 
  UserPlus, 
  CheckCircle, 
  XCircle, 
  Clock,
  LogOut,
  Calendar,
  TrendingUp,
  BarChart3,
  FileText
} from 'lucide-react'
import Link from 'next/link'

// Mock data for leave requests pending approval
const pendingLeaveRequests = [
  { id: 1, employeeName: 'John Doe', employeeId: 'EMP-2024-001', department: 'IT', type: 'Annual Leave', from: '2026-02-15', to: '2026-02-20', days: 5, reason: 'Family vacation', submittedOn: '2026-01-28' },
  { id: 2, employeeName: 'Jane Smith', employeeId: 'EMP-2024-002', department: 'Finance', type: 'Sick Leave', from: '2026-02-01', to: '2026-02-03', days: 3, reason: 'Medical appointment', submittedOn: '2026-01-27' },
  { id: 3, employeeName: 'Mike Johnson', employeeId: 'EMP-2024-003', department: 'M&E', type: 'Personal Leave', from: '2026-02-10', to: '2026-02-12', days: 3, reason: 'Personal matters', submittedOn: '2026-01-26' },
]

// Mock data for employees
const employees = [
  { id: 'EMP-2024-001', name: 'John Doe', position: 'Software Engineer', department: 'IT', status: 'Active', joinDate: '2024-01-15', email: 'john.doe@dict.gov' },
  { id: 'EMP-2024-002', name: 'Jane Smith', position: 'Financial Analyst', department: 'Finance', status: 'Active', joinDate: '2024-02-01', email: 'jane.smith@dict.gov' },
  { id: 'EMP-2024-003', name: 'Mike Johnson', position: 'Project Manager', department: 'M&E', status: 'Active', joinDate: '2024-03-10', email: 'mike.johnson@dict.gov' },
  { id: 'EMP-2024-004', name: 'Sarah Williams', position: 'Policy Analyst', department: 'Policy', status: 'Active', joinDate: '2024-04-05', email: 'sarah.williams@dict.gov' },
  { id: 'EMP-2024-005', name: 'Robert Brown', position: 'Data Administrator', department: 'Information', status: 'On Leave', joinDate: '2024-05-20', email: 'robert.brown@dict.gov' },
]

// Mock data for recruitment
const recruitmentData = [
  { position: 'Senior Developer', department: 'IT', applicants: 24, shortlisted: 8, status: 'In Progress' },
  { position: 'HR Manager', department: 'HR', applicants: 15, shortlisted: 5, status: 'Interview Stage' },
  { position: 'Budget Officer', department: 'Finance', applicants: 18, shortlisted: 6, status: 'Pending Review' },
]

export default function HRDashboard() {
  const [selectedRequest, setSelectedRequest] = useState<number | null>(null)

  const handleApprove = (id: number) => {
    alert(`Leave request ${id} approved!`)
  }

  const handleReject = (id: number) => {
    alert(`Leave request ${id} rejected!`)
  }

  return (
    <div className="min-h-screen bg-dict-darker">
      {/* Header */}
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                <span className="text-grafana-orange">Human Resources</span>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Employees</p>
                  <p className="text-3xl font-display font-bold">487</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">+12 this month</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-orange/10 to-grafana-orange/5 border border-grafana-orange/20">
                  <Users className="w-6 h-6 text-grafana-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Pending Leave Requests</p>
                  <p className="text-3xl font-display font-bold">{pendingLeaveRequests.length}</p>
                  <p className="text-xs text-grafana-yellow font-semibold mt-1">Needs approval</p>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Active Recruitments</p>
                  <p className="text-3xl font-display font-bold">{recruitmentData.length}</p>
                  <p className="text-xs text-grafana-blue font-semibold mt-1">57 total applicants</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <UserPlus className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Departments</p>
                  <p className="text-3xl font-display font-bold">6</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">All active</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20">
                  <BarChart3 className="w-6 h-6 text-grafana-green" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="leave" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="leave" className="data-[state=active]:bg-grafana-orange data-[state=active]:shadow-lg font-semibold rounded-lg">
              Leave Approvals
            </TabsTrigger>
            <TabsTrigger value="employees" className="data-[state=active]:bg-grafana-orange data-[state=active]:shadow-lg font-semibold rounded-lg">
              Employees
            </TabsTrigger>
            <TabsTrigger value="recruitment" className="data-[state=active]:bg-grafana-orange data-[state=active]:shadow-lg font-semibold rounded-lg">
              Recruitment
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-grafana-orange data-[state=active]:shadow-lg font-semibold rounded-lg">
              Reports
            </TabsTrigger>
          </TabsList>

          {/* Leave Approvals Tab */}
          <TabsContent value="leave">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Pending Leave Requests</CardTitle>
                <CardDescription className="text-base font-medium">Review and approve employee leave applications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingLeaveRequests.map((request) => (
                    <div
                      key={request.id}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-orange/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{request.employeeName}</h3>
                          <p className="text-sm text-muted-foreground">{request.employeeId} • {request.department}</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full text-sm font-bold border bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20">
                          Pending
                        </div>
                      </div>

                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Leave Type</p>
                          <p className="font-semibold">{request.type}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Duration</p>
                          <p className="font-semibold">{request.days} days</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">From - To</p>
                          <p className="font-semibold text-sm">
                            {new Date(request.from).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })} - {new Date(request.to).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                          </p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Submitted</p>
                          <p className="font-semibold text-sm">{new Date(request.submittedOn).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</p>
                        </div>
                      </div>

                      <div className="mb-4 p-3 bg-dict-dark rounded-lg border border-dict-border/30">
                        <p className="text-xs text-muted-foreground mb-1">Reason</p>
                        <p className="text-sm">{request.reason}</p>
                      </div>

                      <div className="flex space-x-3">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-grafana-green to-emerald-600 hover:from-grafana-green/90 hover:to-emerald-600/90 font-semibold"
                          onClick={() => handleApprove(request.id)}
                        >
                          <CheckCircle className="w-4 h-4 mr-2" />
                          Approve
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 border-grafana-red/30 hover:bg-grafana-red/10 hover:border-grafana-red text-grafana-red font-semibold"
                          onClick={() => handleReject(request.id)}
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Reject
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Employees Tab */}
          <TabsContent value="employees">
            <Card className="border-dict-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold tracking-tight">Employee Management</CardTitle>
                    <CardDescription className="text-base font-medium">Manage all department employees</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-grafana-orange to-red-600 hover:from-grafana-orange/90 hover:to-red-600/90 font-semibold">
                    <UserPlus className="w-4 h-4 mr-2" />
                    Add Employee
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-dict-border/30">
                        <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Employee ID</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Name</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Position</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Department</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Status</th>
                        <th className="text-left py-3 px-4 font-semibold text-sm text-muted-foreground">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {employees.map((employee) => (
                        <tr key={employee.id} className="border-b border-dict-border/30 hover:bg-dict-panel/50 transition-colors">
                          <td className="py-4 px-4 font-mono text-sm">{employee.id}</td>
                          <td className="py-4 px-4 font-semibold">{employee.name}</td>
                          <td className="py-4 px-4 text-sm">{employee.position}</td>
                          <td className="py-4 px-4 text-sm">{employee.department}</td>
                          <td className="py-4 px-4">
                            <span className={`px-2.5 py-1 rounded-full text-xs font-bold border ${
                              employee.status === 'Active' 
                                ? 'bg-grafana-green/10 text-grafana-green border-grafana-green/20'
                                : 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                            }`}>
                              {employee.status}
                            </span>
                          </td>
                          <td className="py-4 px-4">
                            <Button variant="ghost" size="sm" className="hover:bg-grafana-orange/10">
                              View Details
                            </Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Recruitment Tab */}
          <TabsContent value="recruitment">
            <Card className="border-dict-border/30">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-display font-bold tracking-tight">Active Recruitments</CardTitle>
                    <CardDescription className="text-base font-medium">Track ongoing recruitment processes</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-grafana-orange to-red-600 hover:from-grafana-orange/90 hover:to-red-600/90 font-semibold">
                    <UserPlus className="w-4 h-4 mr-2" />
                    New Position
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recruitmentData.map((recruitment, index) => (
                    <div
                      key={index}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-orange/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{recruitment.position}</h3>
                          <p className="text-sm text-muted-foreground">{recruitment.department} Department</p>
                        </div>
                        <div className="px-3 py-1.5 rounded-full text-sm font-bold border bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20">
                          {recruitment.status}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Total Applicants</p>
                          <p className="text-2xl font-bold">{recruitment.applicants}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Shortlisted</p>
                          <p className="text-2xl font-bold text-grafana-green">{recruitment.shortlisted}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Success Rate</p>
                          <p className="text-2xl font-bold">{Math.round((recruitment.shortlisted / recruitment.applicants) * 100)}%</p>
                        </div>
                      </div>

                      <Button variant="ghost" className="w-full hover:bg-grafana-orange/10 font-semibold">
                        View Applicants
                      </Button>
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
                <CardTitle className="text-3xl font-display font-bold tracking-tight">HR Reports</CardTitle>
                <CardDescription className="text-base font-medium">Generate and view HR analytics</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-orange/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-orange/10 border border-grafana-orange/20">
                        <FileText className="w-6 h-6 text-grafana-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Leave Report</h3>
                        <p className="text-sm text-muted-foreground">Monthly leave analysis</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-orange/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-blue/10 border border-grafana-blue/20">
                        <Users className="w-6 h-6 text-grafana-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Headcount Report</h3>
                        <p className="text-sm text-muted-foreground">Department distribution</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-orange/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <TrendingUp className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Performance Report</h3>
                        <p className="text-sm text-muted-foreground">Annual review summary</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-orange/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-purple/10 border border-grafana-purple/20">
                        <Calendar className="w-6 h-6 text-grafana-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Attendance Report</h3>
                        <p className="text-sm text-muted-foreground">Timesheet analysis</p>
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
