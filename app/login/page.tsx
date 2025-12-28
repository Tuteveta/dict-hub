'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Users, ArrowLeft } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function HRLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Add your authentication logic here
    console.log('Login attempt:', { email, password })
  }

  return (
    <div className="min-h-screen bg-dict-darker flex items-center justify-center px-4">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dict-darker via-dict-dark to-dict-panel opacity-50" />
      
      <div className="relative z-10 w-full max-w-md">
        {/* Logo and Title */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-4 rounded-2xl bg-gradient-to-br from-grafana-orange to-red-600 shadow-2xl">
              <Users className="w-12 h-12 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">
            <span className="text-dict-accent">Human Resources</span>
            <span className="text-white"> Portal</span>
          </h1>
          <p className="text-muted-foreground font-medium">Sign in to access the HR dashboard</p>
        </div>

        {/* Login Card */}
        <Card className="border-dict-border/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display font-bold tracking-tight">Welcome Back</CardTitle>
            <CardDescription className="text-base font-medium">Enter your credentials to continue</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              {/* Email Input */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="you@example.com"
                  required
                />
              </div>

              {/* Password Input */}
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

              {/* Remember Me & Forgot Password */}
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

              {/* Login Button */}
              <Button
                type="submit"
                className="w-full button-glow font-semibold tracking-wide py-6 text-base"
                size="lg"
              >
                Sign In to HR Dashboard
              </Button>
            </form>

            {/* Back to Home */}
            <div className="mt-6 pt-6 border-t border-dict-border/30">
              <Link href="/">
                <Button
                  variant="ghost"
                  className="w-full hover:bg-dict-panel font-medium"
                >
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <p className="text-center text-sm text-muted-foreground mt-6 font-medium">
          &copy; 2026 DICT - Department of Information and Communications Technology
        </p>
      </div>
    </div>
  )
}
