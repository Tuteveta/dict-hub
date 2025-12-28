'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Database, ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function InformationLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/dashboard/information'
  }

  return (
    <div className="min-h-screen bg-dict-darker flex items-center justify-center px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-dict-darker via-dict-dark to-dict-panel opacity-50" />
      
      <div className="relative z-10 w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="p-5 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-600 shadow-2xl">
              <Database className="w-14 h-14 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <h1 className="text-4xl font-display font-bold mb-2">
            <span className="text-pink-500">Information Division</span>
          </h1>
          <p className="text-muted-foreground font-medium text-lg">Admin Portal Login</p>
        </div>

        <Card className="border-dict-border/30 shadow-2xl">
          <CardHeader>
            <CardTitle className="text-2xl font-display font-bold tracking-tight">Welcome Back</CardTitle>
            <CardDescription className="text-base font-medium">Enter your admin credentials</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="admin@dict.gov"
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
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent transition-all text-foreground placeholder:text-muted-foreground"
                  placeholder="••••••••"
                  required
                />
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-dict-border/30 bg-dict-panel text-pink-500 focus:ring-2 focus:ring-pink-500"
                  />
                  <span className="text-sm text-muted-foreground font-medium">Remember me</span>
                </label>
                <button
                  type="button"
                  className="text-sm text-pink-500 hover:text-pink-500/80 font-semibold transition-colors"
                >
                  Forgot password?
                </button>
              </div>

              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-500/90 hover:to-rose-600/90 font-semibold tracking-wide py-6 text-base shadow-lg"
                size="lg"
              >
                Sign In to Information Dashboard
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-dict-border/30">
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
          &copy; 2026 DICT - Information Division
        </p>
      </div>
    </div>
  )
}
