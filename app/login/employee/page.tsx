'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { UserCircle, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

export default function EmployeeLoginPage() {
  const [employeeId, setEmployeeId] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/dashboard/employee'
  }

  return (
    <div className="min-h-screen bg-dict-darker flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-dict-darker via-dict-dark to-dict-panel opacity-50" />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-6">
            <Image 
              src="/logo.png" 
              alt="DICT Logo" 
              width={80} 
              height={80}
              className="rounded-2xl shadow-2xl"
            />
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">
            <span className="text-dict-accent">Employee</span>
            <span className="text-white"> Portal</span>
          </h1>
          <p className="text-muted-foreground font-medium text-lg">Access your employee dashboard</p>
        </div>

        <Card className="border-dict-border/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display font-bold tracking-tight">Employee Login</CardTitle>
            <CardDescription className="text-base font-medium">Sign in with your employee credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="employeeId" className="text-sm font-semibold text-foreground">
                  Employee ID
                </label>
                <input
                  id="employeeId"
                  type="text"
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="EMP-2024-001"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold text-foreground">
                  Password
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-dict-border/30 bg-dict-panel text-dict-accent focus:ring-2 focus:ring-dict-accent"
                  />
                  <span className="text-sm text-muted-foreground font-medium">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-dict-accent hover:text-dict-accent/80 font-semibold transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full button-glow font-semibold tracking-wide py-6 text-base"
                size="lg"
              >
                Sign In to Employee Portal
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-dict-border/30 space-y-3">
              <p className="text-center text-sm text-muted-foreground">
                Don't have access? Contact your HR department
              </p>
              <Link href="/">
                <Button variant="ghost" className="w-full hover:bg-dict-panel font-medium">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
          &copy; 2026 DICT - Employee Self-Service Portal
        </p>
      </div>
    </div>
  )
}
