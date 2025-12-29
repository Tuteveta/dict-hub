'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  DollarSign,
  Users,
  ArrowRight,
  Search,
  LogIn,
  Building2,
  Shield
} from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
// External job postings only
const externalJobs = [
  {
    id: 'JOB-001',
    title: 'Senior Software Engineer',
    department: 'IT',
    type: 'Full-time',
    location: 'Port Moresby',
    salary: 'K80,000 - K120,000',
    posted: '2026-01-20',
    deadline: '2026-02-28',
    applicants: 24,
    description: 'Lead development of government digital services and mentor junior developers.',
    requirements: ['5+ years experience', 'React/Next.js', 'TypeScript', 'Team leadership'],
  },
  {
    id: 'JOB-002',
    title: 'HR Manager',
    department: 'HR',
    type: 'Full-time',
    location: 'Port Moresby',
    salary: 'K70,000 - K100,000',
    posted: '2026-01-18',
    deadline: '2026-02-25',
    applicants: 15,
    description: 'Oversee HR operations, recruitment, and employee relations.',
    requirements: ['HR certification', '3+ years management', 'Policy development', 'Team building'],
  },
  {
    id: 'JOB-003',
    title: 'Budget Officer',
    department: 'Finance',
    type: 'Full-time',
    location: 'Port Moresby',
    salary: 'K60,000 - K85,000',
    posted: '2026-01-15',
    deadline: '2026-02-20',
    applicants: 18,
    description: 'Manage departmental budgets and financial planning.',
    requirements: ['Accounting degree', 'Budget management', 'Financial reporting', 'Excel proficiency'],
  },
  {
    id: 'JOB-004',
    title: 'Data Analyst',
    department: 'Information',
    type: 'Contract',
    location: 'Port Moresby',
    salary: 'K55,000 - K75,000',
    posted: '2026-01-12',
    deadline: '2026-02-15',
    applicants: 22,
    description: 'Analyze departmental data and create insightful reports.',
    requirements: ['Data analysis', 'SQL', 'Tableau/Power BI', 'Statistical methods'],
  },
]

export default function HomePage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('All')

  const departments = ['All', 'IT', 'HR', 'Finance', 'M&E', 'Policy', 'Information']

  const filteredJobs = externalJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment
    return matchesSearch && matchesDepartment
  })

  return (
    <div className="min-h-screen bg-dict-darker">
      {/* Header */}
      <header className="border-b border-dict-border/30 bg-dict-dark/90 backdrop-blur-xl sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-8 py-5">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 flex items-center justify-center">
                                <Image 
                                  src="/logo.png" 
                                  alt="DICT Logo" 
                                  width={50} 
                                  height={50}
                                  className="object-contain"
                                  priority
                                />
                              </div>
                <div>
                  <h1 className="text-2xl font-display font-bold tracking-tight">
                    <span className="text-dict-accent">DICT</span>
                    <span className="text-white"> Recruitment Portal</span>
                  </h1>
                  <p className="text-xs text-muted-foreground font-medium tracking-wide">Department of Information and Communications Technology</p>
                </div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <Link href="/staff-login">
                <Button className="button-glow font-semibold">
                  <LogIn className="w-4 h-4 mr-2" />
                  Staff Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-dict-dark via-dict-panel to-dict-dark py-20 border-b border-dict-border/30">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-6xl font-display font-bold mb-6 tracking-tight">
              Welcome to <span className="text-dict-accent">DICT Recruitment Portal</span>
            </h2>
            <p className="text-xl text-muted-foreground font-medium mb-8 leading-relaxed">
              Join the Department of Information and Communications Technology and help drive Papua New Guinea's digital transformation. Browse our current job openings and apply online.
            </p>
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <p className="text-4xl font-bold text-dict-accent mb-1">{externalJobs.length}</p>
                <p className="text-sm text-muted-foreground font-medium">Open Positions</p>
              </div>
              <div className="w-px h-16 bg-dict-border/30" />
              <div className="text-center">
                <p className="text-4xl font-bold text-grafana-green mb-1">487</p>
                <p className="text-sm text-muted-foreground font-medium">Team Members</p>
              </div>
              <div className="w-px h-16 bg-dict-border/30" />
              <div className="text-center">
                <p className="text-4xl font-bold text-grafana-blue mb-1">6</p>
                <p className="text-sm text-muted-foreground font-medium">Divisions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-8 py-12">
        {/* Info Banner */}
        <div className="mb-8 p-6 rounded-xl bg-gradient-to-r from-grafana-blue/10 to-grafana-purple/10 border border-grafana-blue/20">
          <div className="flex items-start space-x-4">
            <div className="p-3 bg-grafana-blue/20 rounded-lg">
              <Shield className="w-6 h-6 text-grafana-blue" />
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">Current DICT Staff?</h3>
              <p className="text-muted-foreground mb-3">
                If you're a DICT existing and active member, please use the Staff Login to select your division and access your dashboard.
              </p>
              <Link href="/staff-login">
                <Button variant="outline" className="border-grafana-blue/30 hover:bg-grafana-blue/10">
                  <LogIn className="w-4 h-4 mr-2" />
                  Staff Login
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="mb-8">
          <Card className="border-dict-border/30">
            <CardContent className="p-6">
              <div className="flex flex-col md:flex-row gap-4">
                <div className="flex-1">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search by job title or department..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent text-foreground placeholder:text-muted-foreground"
                    />
                  </div>
                </div>
                <div className="md:w-64">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-3 bg-dict-panel border border-dict-border/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-dict-accent focus:border-transparent text-foreground"
                  >
                    {departments.map(dept => (
                      <option key={dept} value={dept}>{dept} Department{dept !== 'All' ? '' : 's'}</option>
                    ))}
                  </select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-3xl font-display font-bold">
              Current Job Openings ({filteredJobs.length})
            </h3>
          </div>

          {filteredJobs.length === 0 ? (
            <Card className="border-dict-border/30">
              <CardContent className="p-12 text-center">
                <Briefcase className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
                <p className="text-lg font-semibold mb-2">No positions found</p>
                <p className="text-muted-foreground">Try adjusting your search filters</p>
              </CardContent>
            </Card>
          ) : (
            filteredJobs.map((job) => (
              <Card key={job.id} className="border-dict-border/30 hover:border-dict-accent/30 transition-all duration-300 group">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="text-2xl font-bold font-display group-hover:text-dict-accent transition-colors">
                          {job.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-4">{job.description}</p>
                      
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                        <div className="flex items-center space-x-2 text-sm">
                          <Users className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <MapPin className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <Clock className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm">
                          <DollarSign className="w-4 h-4 text-muted-foreground" />
                          <span className="font-medium">{job.salary}</span>
                        </div>
                      </div>

                      <div className="mb-4">
                        <p className="text-sm font-semibold mb-2">Requirements:</p>
                        <div className="flex flex-wrap gap-2">
                          {job.requirements.map((req, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-dict-panel border border-dict-border/30 rounded-full text-xs font-medium"
                            >
                              {req}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dict-border/30">
                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <span>Posted: {new Date(job.posted).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>Deadline: {new Date(job.deadline).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      <span>•</span>
                      <span>{job.applicants} applicants</span>
                    </div>
                    <Link href={`/careers/apply?job=${job.id}`}>
                      <Button className="button-glow font-semibold">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))
          )}
        </div>

        {/* Why Join Us Section */}
        <section className="mt-16 mb-8">
          <h3 className="text-3xl font-display font-bold mb-8 text-center">Why Join DICT?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="border-dict-border/30">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-dict-accent/10 rounded-2xl border border-dict-accent/20 inline-block mb-4">
                  <Users className="w-8 h-8 text-dict-accent" />
                </div>
                <h4 className="font-bold text-lg mb-2">Great Team</h4>
                <p className="text-muted-foreground">Work with talented professionals passionate about digital transformation</p>
              </CardContent>
            </Card>

            <Card className="border-dict-border/30">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-grafana-blue/10 rounded-2xl border border-grafana-blue/20 inline-block mb-4">
                  <Briefcase className="w-8 h-8 text-grafana-blue" />
                </div>
                <h4 className="font-bold text-lg mb-2">Career Growth</h4>
                <p className="text-muted-foreground">Continuous learning opportunities and professional development</p>
              </CardContent>
            </Card>

            <Card className="border-dict-border/30">
              <CardContent className="p-6 text-center">
                <div className="p-4 bg-grafana-green/10 rounded-2xl border border-grafana-green/20 inline-block mb-4">
                  <DollarSign className="w-8 h-8 text-grafana-green" />
                </div>
                <h4 className="font-bold text-lg mb-2">Competitive Benefits</h4>
                <p className="text-muted-foreground">Attractive salary packages and comprehensive benefits</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-dict-border/30 py-8 bg-dict-dark/50">
        <div className="container mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p className="font-medium">&copy; 2026 Department of Information and Communications Technology. All rights reserved.</p>
            <div className="flex items-center space-x-4">
              <Link href="/staff-login" className="hover:text-dict-accent transition-colors font-medium">Staff Login</Link>
              <span>•</span>
              <Link href="/" className="hover:text-dict-accent transition-colors font-medium">Careers</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
