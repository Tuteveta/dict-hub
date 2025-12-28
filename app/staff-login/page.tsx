'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Shield, Lock, User, ArrowLeft, AlertCircle } from 'lucide-react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function StaffLoginPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
  })
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    
    // Mock authentication - In production, this would call an API
    // For demo: any credentials work
    if (formData.username && formData.password) {
      // Simulate successful authentication
      // In production: Store JWT token, set session, etc.
      alert('Staff authentication successful! Redirecting to division selection...')
      
      // Redirect to portal (division selection)
      setTimeout(() => {
        router.push('/portal')
      }, 1000)
    } else {
      setError('Please enter both username and password')
    }
  }

  return (
    <div className="min-h-screen bg-dict-darker flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-dict-accent to-grafana-blue rounded-2xl mb-4 shadow-2xl">
            <Shield className="w-11 h-11 text-white" strokeWidth={2.5} />
          </div>
          <h1 className="text-3xl font-display font-bold mb-2">
            <span className="text-dict-accent">DICT</span>
            <span className="text-white"> Staff Access</span>
          </h1>
          <p className="text-muted-foreground font-medium">
            First Layer Authentication - Staff Members Only
          </p>
        </div>

        {/* Login Card */}
        <Card className="border-dict-border/30 shadow-2xl">
          <CardHeader className="space-y-1 pb-4">
            <CardTitle className="text-2xl font-display font-bold text-center">Staff Login</CardTitle>
            <CardDescription className="text-center">
              Enter your DICT staff credentials to continue
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Error Message */}
              {error && (
                <div className="p-3 rounded-lg bg-grafana-red/10 border border-grafana-red/20 flex items-center space-x-2">
                  <AlertCircle className="w-5 h-5 text-grafana-red" />
                  <p className="text-sm text-grafana-red font-medium">{error}</p>
                </div>
              )}

              {/* Username */}
              <div className="space-y-2">
                <label htmlFor="username" className="text-sm font-semibold flex items-center space-x-2">
                  <User className="w-4 h-4" />
                  <span>Staff Username / Email</span>
                </label>
                <input
                  id="username"
                  type="text"
                  required
                  value={formData.username}
                  onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your staff username or email"
                />
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-semibold flex items-center space-x-2">
                  <Lock className="w-4 h-4" />
                  <span>Password</span>
                </label>
                <input
                  id="password"
                  type="password"
                  required
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent text-foreground placeholder:text-muted-foreground"
                  placeholder="Enter your password"
                />
              </div>

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.rememberMe}
                    onChange={(e) => setFormData({ ...formData, rememberMe: e.target.checked })}
                    className="w-4 h-4 rounded border-dict-border/30 bg-dict-panel text-dict-accent focus:ring-2 focus:ring-dict-accent focus:ring-offset-0"
                  />
                  <span className="text-sm font-medium">Remember me</span>
                </label>
                <button type="button" className="text-sm font-semibold text-dict-accent hover:underline">
                  Forgot password?
                </button>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full button-glow font-semibold py-6 text-base mt-6"
                size="lg"
              >
                Authenticate & Continue
              </Button>
            </form>

            {/* Info Box */}
            <div className="mt-6 p-4 rounded-lg bg-grafana-blue/10 border border-grafana-blue/20">
              <div className="flex items-start space-x-3">
                <Shield className="w-5 h-5 text-grafana-blue mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-grafana-blue mb-1">Two-Layer Authentication</p>
                  <p className="text-xs text-muted-foreground">
                    After successful authentication, you'll be redirected to select your division, where you'll need to login again with your division-specific credentials.
                  </p>
                </div>
              </div>
            </div>

            {/* Back to Home */}
            <div className="mt-6 text-center">
              <Link href="/">
                <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Security Notice */}
        <div className="mt-6 p-4 rounded-lg bg-dict-panel/50 border border-dict-border/30">
          <p className="text-xs text-center text-muted-foreground">
            🔒 This is a secure area. Only authorized DICT staff members may access this portal. All activities are logged and monitored.
          </p>
        </div>
      </div>
    </div>
  )
}
