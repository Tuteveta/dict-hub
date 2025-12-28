'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { 
  DollarSign,
  TrendingUp,
  TrendingDown,
  Wallet,
  CreditCard,
  FileText,
  LogOut,
  PieChart,
  AlertCircle
} from 'lucide-react'
import Link from 'next/link'

// Mock budget data
const budgetCategories = [
  { category: 'Personnel', allocated: 12.5, spent: 8.2, remaining: 4.3, percentage: 66 },
  { category: 'Infrastructure', allocated: 8.3, spent: 6.1, remaining: 2.2, percentage: 73 },
  { category: 'Operations', allocated: 5.7, spent: 4.2, remaining: 1.5, percentage: 74 },
  { category: 'Technology', allocated: 6.2, spent: 3.8, remaining: 2.4, percentage: 61 },
  { category: 'Training', allocated: 2.1, spent: 1.4, remaining: 0.7, percentage: 67 },
]

// Mock transactions
const recentTransactions = [
  { id: 'TRX-001', description: 'Software License Renewal', amount: 25000, type: 'expense', category: 'Technology', date: '2026-01-25', status: 'Approved' },
  { id: 'TRX-002', description: 'Salary Disbursement - January', amount: 850000, type: 'expense', category: 'Personnel', date: '2026-01-24', status: 'Processed' },
  { id: 'TRX-003', description: 'Government Grant', amount: 1200000, type: 'income', category: 'Revenue', date: '2026-01-23', status: 'Received' },
  { id: 'TRX-004', description: 'Office Equipment Purchase', amount: 45000, type: 'expense', category: 'Operations', date: '2026-01-22', status: 'Pending' },
]

// Mock pending approvals
const pendingApprovals = [
  { id: 'APP-001', requestor: 'IT Department', amount: 75000, purpose: 'Server Upgrade', priority: 'High', submittedOn: '2026-01-27' },
  { id: 'APP-002', requestor: 'HR Department', amount: 12000, purpose: 'Training Program', priority: 'Medium', submittedOn: '2026-01-26' },
  { id: 'APP-003', requestor: 'M&E Department', amount: 8500, purpose: 'Data Analytics Tools', priority: 'Low', submittedOn: '2026-01-25' },
]

export default function FinanceDashboard() {
  const totalBudget = budgetCategories.reduce((sum, cat) => sum + cat.allocated, 0)
  const totalSpent = budgetCategories.reduce((sum, cat) => sum + cat.spent, 0)
  const totalRemaining = budgetCategories.reduce((sum, cat) => sum + cat.remaining, 0)

  const handleApprove = (id: string) => {
    alert(`Budget request ${id} approved!`)
  }

  const handleReject = (id: string) => {
    alert(`Budget request ${id} rejected!`)
  }

  return (
    <div className="min-h-screen bg-dict-darker">
      {/* Header */}
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-display font-bold">
                <span className="text-grafana-green">Finance</span>
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
                  <p className="text-sm text-muted-foreground font-medium mb-1">Total Budget</p>
                  <p className="text-3xl font-display font-bold">${totalBudget.toFixed(1)}M</p>
                  <p className="text-xs text-grafana-blue font-semibold mt-1">FY 2026</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-green/10 to-grafana-green/5 border border-grafana-green/20">
                  <Wallet className="w-6 h-6 text-grafana-green" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Spent</p>
                  <p className="text-3xl font-display font-bold">${totalSpent.toFixed(1)}M</p>
                  <p className="text-xs text-grafana-orange font-semibold mt-1">{Math.round((totalSpent/totalBudget)*100)}% utilized</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-orange/10 to-grafana-orange/5 border border-grafana-orange/20">
                  <CreditCard className="w-6 h-6 text-grafana-orange" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Remaining</p>
                  <p className="text-3xl font-display font-bold">${totalRemaining.toFixed(1)}M</p>
                  <p className="text-xs text-grafana-green font-semibold mt-1">Available</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-blue/10 to-grafana-blue/5 border border-grafana-blue/20">
                  <DollarSign className="w-6 h-6 text-grafana-blue" />
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="stat-card border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-sm text-muted-foreground font-medium mb-1">Pending Approvals</p>
                  <p className="text-3xl font-display font-bold">{pendingApprovals.length}</p>
                  <p className="text-xs text-grafana-yellow font-semibold mt-1">Needs review</p>
                </div>
                <div className="p-3 rounded-xl bg-gradient-to-br from-grafana-yellow/10 to-grafana-yellow/5 border border-grafana-yellow/20">
                  <AlertCircle className="w-6 h-6 text-grafana-yellow" />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="budget" className="space-y-8">
          <TabsList className="bg-dict-panel/80 border border-dict-border/30 p-1.5 rounded-xl">
            <TabsTrigger value="budget" className="data-[state=active]:bg-grafana-green data-[state=active]:shadow-lg font-semibold rounded-lg">
              Budget Overview
            </TabsTrigger>
            <TabsTrigger value="transactions" className="data-[state=active]:bg-grafana-green data-[state=active]:shadow-lg font-semibold rounded-lg">
              Transactions
            </TabsTrigger>
            <TabsTrigger value="approvals" className="data-[state=active]:bg-grafana-green data-[state=active]:shadow-lg font-semibold rounded-lg">
              Approvals
            </TabsTrigger>
            <TabsTrigger value="reports" className="data-[state=active]:bg-grafana-green data-[state=active]:shadow-lg font-semibold rounded-lg">
              Reports
            </TabsTrigger>
          </TabsList>

          {/* Budget Overview Tab */}
          <TabsContent value="budget">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Budget Allocation</CardTitle>
                <CardDescription className="text-base font-medium">Financial year 2026 budget breakdown by category</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {budgetCategories.map((budget, index) => (
                    <div key={index} className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="font-bold text-lg">{budget.category}</h3>
                        <span className="text-sm font-bold text-muted-foreground">{budget.percentage}% Utilized</span>
                      </div>

                      <div className="grid grid-cols-3 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Allocated</p>
                          <p className="text-xl font-bold">${budget.allocated}M</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Spent</p>
                          <p className="text-xl font-bold text-grafana-orange">${budget.spent}M</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Remaining</p>
                          <p className="text-xl font-bold text-grafana-green">${budget.remaining}M</p>
                        </div>
                      </div>

                      <div className="w-full bg-dict-dark rounded-full h-3">
                        <div 
                          className={`h-3 rounded-full transition-all duration-500 ${
                            budget.percentage > 80 
                              ? 'bg-gradient-to-r from-grafana-red to-red-600'
                              : budget.percentage > 60
                              ? 'bg-gradient-to-r from-grafana-yellow to-amber-600'
                              : 'bg-gradient-to-r from-grafana-green to-emerald-600'
                          }`}
                          style={{ width: `${budget.percentage}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Recent Transactions</CardTitle>
                <CardDescription className="text-base font-medium">Latest financial activities</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="p-5 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-green/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex items-start space-x-4 flex-1">
                          <div className={`p-3 rounded-lg ${
                            transaction.type === 'income'
                              ? 'bg-grafana-green/10 border border-grafana-green/20'
                              : 'bg-grafana-orange/10 border border-grafana-orange/20'
                          }`}>
                            {transaction.type === 'income' ? (
                              <TrendingUp className="w-5 h-5 text-grafana-green" />
                            ) : (
                              <TrendingDown className="w-5 h-5 text-grafana-orange" />
                            )}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold mb-1">{transaction.description}</h3>
                            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                              <span>{transaction.id}</span>
                              <span>•</span>
                              <span>{transaction.category}</span>
                              <span>•</span>
                              <span>{new Date(transaction.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className={`text-xl font-bold ${transaction.type === 'income' ? 'text-grafana-green' : 'text-foreground'}`}>
                            {transaction.type === 'income' ? '+' : '-'}${transaction.amount.toLocaleString()}
                          </p>
                          <p className={`text-xs font-semibold mt-1 ${
                            transaction.status === 'Processed' || transaction.status === 'Approved'
                              ? 'text-grafana-green'
                              : transaction.status === 'Pending'
                              ? 'text-grafana-yellow'
                              : 'text-grafana-blue'
                          }`}>
                            {transaction.status}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Approvals Tab */}
          <TabsContent value="approvals">
            <Card className="border-dict-border/30">
              <CardHeader>
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Pending Budget Approvals</CardTitle>
                <CardDescription className="text-base font-medium">Review and approve budget requests</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {pendingApprovals.map((approval) => (
                    <div
                      key={approval.id}
                      className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-green/30 transition-all duration-300"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-lg mb-1">{approval.purpose}</h3>
                          <p className="text-sm text-muted-foreground">{approval.id} • {approval.requestor}</p>
                        </div>
                        <div className={`px-3 py-1.5 rounded-full text-sm font-bold border ${
                          approval.priority === 'High'
                            ? 'bg-grafana-red/10 text-grafana-red border-grafana-red/20'
                            : approval.priority === 'Medium'
                            ? 'bg-grafana-yellow/10 text-grafana-yellow border-grafana-yellow/20'
                            : 'bg-grafana-blue/10 text-grafana-blue border-grafana-blue/20'
                        }`}>
                          {approval.priority} Priority
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Requested Amount</p>
                          <p className="text-2xl font-bold">${approval.amount.toLocaleString()}</p>
                        </div>
                        <div>
                          <p className="text-xs text-muted-foreground mb-1">Submitted On</p>
                          <p className="font-semibold">{new Date(approval.submittedOn).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <Button 
                          className="flex-1 bg-gradient-to-r from-grafana-green to-emerald-600 hover:from-grafana-green/90 hover:to-emerald-600/90 font-semibold"
                          onClick={() => handleApprove(approval.id)}
                        >
                          Approve
                        </Button>
                        <Button 
                          variant="outline"
                          className="flex-1 border-grafana-red/30 hover:bg-grafana-red/10 hover:border-grafana-red text-grafana-red font-semibold"
                          onClick={() => handleReject(approval.id)}
                        >
                          Reject
                        </Button>
                        <Button variant="ghost" className="hover:bg-grafana-green/10">
                          Details
                        </Button>
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
                <CardTitle className="text-3xl font-display font-bold tracking-tight">Financial Reports</CardTitle>
                <CardDescription className="text-base font-medium">Generate financial statements and analysis</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-green/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-green/10 border border-grafana-green/20">
                        <FileText className="w-6 h-6 text-grafana-green" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Budget Report</h3>
                        <p className="text-sm text-muted-foreground">Quarterly budget analysis</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-green/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-blue/10 border border-grafana-blue/20">
                        <PieChart className="w-6 h-6 text-grafana-blue" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Expense Breakdown</h3>
                        <p className="text-sm text-muted-foreground">Category-wise spending</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-green/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-orange/10 border border-grafana-orange/20">
                        <TrendingUp className="w-6 h-6 text-grafana-orange" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Financial Forecast</h3>
                        <p className="text-sm text-muted-foreground">Projection analysis</p>
                      </div>
                    </div>
                    <Button className="w-full" variant="outline">Generate Report</Button>
                  </div>

                  <div className="p-6 rounded-xl bg-dict-panel/50 border border-dict-border/30 hover:border-grafana-green/30 transition-all duration-300 cursor-pointer">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="p-3 rounded-xl bg-grafana-purple/10 border border-grafana-purple/20">
                        <Wallet className="w-6 h-6 text-grafana-purple" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg">Cash Flow Statement</h3>
                        <p className="text-sm text-muted-foreground">Monthly cash flow</p>
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
