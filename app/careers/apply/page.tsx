'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Upload, Briefcase } from 'lucide-react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

export default function ApplyPage() {
  const searchParams = useSearchParams()
  const jobId = searchParams.get('job')
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    education: '',
    experience: '',
    coverLetter: '',
    resume: null as File | null,
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    alert('Application submitted successfully! HR will review your application.')
    // In production, this would send to API
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFormData({ ...formData, resume: e.target.files[0] })
    }
  }

  return (
    <div className="min-h-screen bg-dict-darker">
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-11 h-11 bg-gradient-to-br from-dict-accent to-grafana-blue rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-display font-bold">
                  <span className="text-dict-accent">Job</span>
                  <span className="text-white"> Application</span>
                </h1>
                <p className="text-xs text-muted-foreground font-medium">Application ID: {jobId}</p>
              </div>
            </div>
            <Link href="/">
              <Button variant="outline" className="border-dict-accent/30 hover:bg-dict-accent/10">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Jobs
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-8 py-12 max-w-3xl">
        <Card className="border-dict-border/30">
          <CardHeader>
            <CardTitle className="text-3xl font-display font-bold">Submit Your Application</CardTitle>
            <CardDescription className="text-base">Please fill in all required fields</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-bold mb-4">Personal Information</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold mb-2">First Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Last Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground"
                      placeholder="Doe"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address *</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground"
                    placeholder="john.doe@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground"
                    placeholder="+675 1234 5678"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Address *</label>
                <input
                  type="text"
                  required
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground"
                  placeholder="Port Moresby, Papua New Guinea"
                />
              </div>

              {/* Qualifications */}
              <div>
                <h3 className="text-lg font-bold mb-4">Qualifications</h3>
                <div>
                  <label className="block text-sm font-semibold mb-2">Education *</label>
                  <textarea
                    required
                    value={formData.education}
                    onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground resize-none"
                    placeholder="List your educational qualifications..."
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Work Experience *</label>
                <textarea
                  required
                  value={formData.experience}
                  onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground resize-none"
                  placeholder="Describe your relevant work experience..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Cover Letter *</label>
                <textarea
                  required
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                  rows={6}
                  className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent text-foreground resize-none"
                  placeholder="Tell us why you're the right fit for this position..."
                />
              </div>

              {/* Resume Upload */}
              <div>
                <h3 className="text-lg font-bold mb-4">Documents</h3>
                <div>
                  <label className="block text-sm font-semibold mb-2">Resume/CV *</label>
                  <div className="border-2 border-dashed border-dict-border/30 rounded-lg p-6 text-center hover:border-dict-accent/30 transition-colors">
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={handleFileChange}
                      className="hidden"
                      id="resume-upload"
                      required
                    />
                    <label htmlFor="resume-upload" className="cursor-pointer">
                      <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                      {formData.resume ? (
                        <p className="text-sm font-semibold text-dict-accent">{formData.resume.name}</p>
                      ) : (
                        <>
                          <p className="text-sm font-semibold mb-1">Click to upload resume</p>
                          <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (Max 5MB)</p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
              </div>

              {/* Submit */}
              <div className="pt-4">
                <Button type="submit" className="w-full button-glow font-semibold py-6 text-base" size="lg">
                  Submit Application
                </Button>
                <p className="text-xs text-muted-foreground text-center mt-4">
                  By submitting this application, you agree to our privacy policy and terms of service.
                </p>
              </div>
            </form>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
