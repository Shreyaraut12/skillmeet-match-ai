import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { 
  Zap,
  Plus,
  Eye,
  Edit,
  MoreVertical,
  TrendingUp,
  TrendingDown,
  Users,
  FileText,
  Calendar,
  Search,
  Filter,
  Star,
  MapPin,
  GraduationCap,
  ArrowRight,
  MessageSquare,
  Heart,
  Download
} from "lucide-react";

const StartupDashboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const activeOpportunities = [
    {
      id: 1,
      title: "Frontend Developer Intern",
      postDate: "2 days ago",
      applicants: 23,
      topMatchScore: 95,
      status: "Active",
      trend: "up"
    },
    {
      id: 2, 
      title: "Data Science Intern",
      postDate: "1 week ago",
      applicants: 18,
      topMatchScore: 88,
      status: "Active", 
      trend: "up"
    },
    {
      id: 3,
      title: "Backend Developer",
      postDate: "2 weeks ago",
      applicants: 12,
      topMatchScore: 82,
      status: "Paused",
      trend: "down"
    }
  ];

  const topTalent = [
    {
      id: 1,
      name: "Sarah Chen",
      university: "MIT",
      graduationYear: "2025",
      avatar: "",
      skills: ["React", "TypeScript", "Node.js", "Python", "Git"],
      compatibility: 95,
      matchReason: "Strong React skills, 2 years experience",
      gig: "Frontend Developer Intern"
    },
    {
      id: 2,
      name: "Marcus Johnson", 
      university: "Stanford",
      graduationYear: "2024",
      avatar: "",
      skills: ["Python", "Machine Learning", "SQL", "TensorFlow", "R"],
      compatibility: 92,
      matchReason: "Excellent ML background, relevant projects",
      gig: "Data Science Intern"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      university: "UC Berkeley", 
      graduationYear: "2025",
      avatar: "",
      skills: ["Java", "Spring Boot", "PostgreSQL", "Docker", "AWS"],
      compatibility: 89,
      matchReason: "Strong backend skills, cloud experience",
      gig: "Backend Developer"
    }
  ];

  const recentApplications = [
    {
      id: 1,
      studentName: "Alex Kim",
      role: "Frontend Developer Intern",
      appliedDate: "2 hours ago",
      status: "New",
      skills: ["React", "JavaScript", "CSS"],
      university: "Harvard"
    },
    {
      id: 2,
      studentName: "Maria Garcia",
      role: "Data Science Intern", 
      appliedDate: "1 day ago",
      status: "Under Review",
      skills: ["Python", "Pandas", "Scikit-learn"],
      university: "MIT"
    },
    {
      id: 3,
      studentName: "David Park",
      role: "Backend Developer",
      appliedDate: "2 days ago", 
      status: "Interview Scheduled",
      skills: ["Node.js", "MongoDB", "Express"],
      university: "Stanford"
    }
  ];

  const analyticsData = {
    totalViews: 1234,
    viewsTrend: "up",
    conversionRate: 12.5,
    conversionTrend: "up", 
    avgTimeToHire: 18,
    hireTrend: "down",
    topSkills: ["JavaScript", "Python", "React"]
  };

  const recentActivity = [
    {
      id: 1,
      type: "application",
      content: "New application from Sarah Chen for Frontend Developer Intern",
      time: "30 minutes ago"
    },
    {
      id: 2,
      type: "view",
      content: "Marcus Johnson viewed your Data Science Intern posting",
      time: "2 hours ago"
    },
    {
      id: 3,
      type: "interview",
      content: "Interview scheduled with Emily Rodriguez for Backend Developer",
      time: "1 day ago"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active": return "bg-green-500";
      case "Paused": return "bg-yellow-500";
      case "Closed": return "bg-red-500";
      case "New": return "bg-blue-500";
      case "Under Review": return "bg-yellow-500";
      case "Interview Scheduled": return "bg-purple-500";
      default: return "bg-gray-500";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Navigation */}
      <nav className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Zap className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">SkillMeet</span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="/startup-dashboard" className="text-primary font-medium">Dashboard</a>
              <a href="/post-gig" className="text-muted-foreground hover:text-foreground transition-colors">Post Gig</a>
              <a href="/find-talent" className="text-muted-foreground hover:text-foreground transition-colors">Find Talent</a>
              <a href="/applications" className="text-muted-foreground hover:text-foreground transition-colors">Applications</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>TF</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm">Settings</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome back, TechFlow!</h1>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">{activeOpportunities.length}</div>
                <div className="text-sm text-muted-foreground">Active Gigs</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">53</div>
                <div className="text-sm text-muted-foreground">Total Applications</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">1.2k</div>
                <div className="text-sm text-muted-foreground">Profile Views</div>
              </CardContent>
            </Card>
            <Card className="shadow-sm">
              <CardContent className="p-4 text-center">
                <div className="text-2xl font-bold text-primary">12.5%</div>
                <div className="text-sm text-muted-foreground">Conversion Rate</div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Active Opportunities Overview */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Your Posted Opportunities</CardTitle>
                  <CardDescription>Manage and track your active job postings</CardDescription>
                </div>
                <Button variant="gradient">
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Gig
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activeOpportunities.map((opp) => (
                    <div key={opp.id} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="font-semibold">{opp.title}</h3>
                          <p className="text-sm text-muted-foreground">Posted {opp.postDate}</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <Badge className={`text-white ${getStatusColor(opp.status)}`}>
                            {opp.status}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-3 gap-4 text-center mb-3">
                        <div>
                          <div className="flex items-center justify-center gap-1">
                            <Users className="h-4 w-4 text-muted-foreground" />
                            <span className="font-semibold">{opp.applicants}</span>
                            {opp.trend === "up" ? (
                              <TrendingUp className="h-3 w-3 text-green-500" />
                            ) : (
                              <TrendingDown className="h-3 w-3 text-red-500" />
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground">Applicants</div>
                        </div>
                        <div>
                          <div className="font-semibold">{opp.topMatchScore}%</div>
                          <div className="text-xs text-muted-foreground">Top Match</div>
                        </div>
                        <div className="flex gap-1">
                          <Button size="sm" variant="outline">
                            <Eye className="h-3 w-3 mr-1" />
                            View
                          </Button>
                          <Button size="sm" variant="outline">
                            <Edit className="h-3 w-3 mr-1" />
                            Edit
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Top Talent Recommendations */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recommended Students</CardTitle>
                  <CardDescription>Top talent matched to your opportunities</CardDescription>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Filter className="h-4 w-4 mr-2" />
                    Filter
                  </Button>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {topTalent.map((student) => (
                    <Card key={student.id} className="border hover:shadow-md transition-all duration-200">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <Avatar className="h-10 w-10">
                              <AvatarImage src={student.avatar} />
                              <AvatarFallback>{student.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                            </Avatar>
                            <div>
                              <h3 className="font-semibold text-sm">{student.name}</h3>
                              <div className="flex items-center gap-1 text-xs text-muted-foreground">
                                <GraduationCap className="h-3 w-3" />
                                {student.university} • {student.graduationYear}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 text-yellow-500 fill-current" />
                            <span className="text-xs font-medium">{student.compatibility}%</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {student.skills.slice(0, 3).map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                          {student.skills.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{student.skills.length - 3}
                            </Badge>
                          )}
                        </div>

                        <p className="text-xs text-muted-foreground mb-3">{student.matchReason}</p>
                        
                        <div className="flex gap-2">
                          <Button size="sm" className="flex-1">
                            <Eye className="h-3 w-3 mr-1" />
                            View Profile
                          </Button>
                          <Button size="sm" variant="outline">
                            <MessageSquare className="h-3 w-3 mr-1" />
                            Message
                          </Button>
                          <Button size="sm" variant="outline">
                            <Heart className="h-3 w-3" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Pipeline */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Recent Applications</CardTitle>
                  <CardDescription>Review and manage incoming applications</CardDescription>
                </div>
                <div className="flex gap-2">
                  <div className="relative">
                    <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                    <Input 
                      placeholder="Search applications..." 
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-9 w-64"
                    />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentApplications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center gap-4 flex-1">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>{app.studentName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="flex items-center gap-2">
                            <h3 className="font-medium text-sm">{app.studentName}</h3>
                            <Badge className={`text-white text-xs ${getStatusColor(app.status)}`}>
                              {app.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-xs text-muted-foreground">
                            <span>{app.role}</span>
                            <span>•</span>
                            <span>{app.university}</span>
                            <span>•</span>
                            <span>{app.appliedDate}</span>
                          </div>
                          <div className="flex gap-1 mt-1">
                            {app.skills.slice(0, 3).map((skill) => (
                              <Badge key={skill} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button size="sm" variant="outline">Accept</Button>
                        <Button size="sm" variant="outline">Interview</Button>
                        <Button size="sm" variant="outline">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-4">
                  View All Applications
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Analytics Widget */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Performance Insights</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{analyticsData.totalViews}</div>
                    <div className="text-sm text-muted-foreground">Gig Views This Week</div>
                  </div>
                  {analyticsData.viewsTrend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{analyticsData.conversionRate}%</div>
                    <div className="text-sm text-muted-foreground">Application Rate</div>
                  </div>
                  {analyticsData.conversionTrend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-green-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-red-500" />
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-2xl font-bold">{analyticsData.avgTimeToHire}</div>
                    <div className="text-sm text-muted-foreground">Avg. Days to Hire</div>
                  </div>
                  {analyticsData.hireTrend === "up" ? (
                    <TrendingUp className="h-5 w-5 text-red-500" />
                  ) : (
                    <TrendingDown className="h-5 w-5 text-green-500" />
                  )}
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-2">Top Requested Skills</h4>
                  <div className="flex flex-wrap gap-1">
                    {analyticsData.topSkills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Hiring Activity Feed */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentActivity.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      <div className="flex-1">
                        <p>{activity.content}</p>
                        <p className="text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <Button variant="ghost" size="sm" className="w-full mt-3">
                  View All Activity
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start">
                  <Plus className="h-4 w-4 mr-2" />
                  Post New Opportunity
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Download className="h-4 w-4 mr-2" />
                  Export Applications
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Interviews
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupDashboard;