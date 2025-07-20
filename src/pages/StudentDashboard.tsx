import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  Zap, 
  Bookmark, 
  Eye, 
  Clock, 
  Star, 
  MapPin, 
  ArrowRight,
  Plus,
  ExternalLink,
  ChevronRight
} from "lucide-react";

const StudentDashboard = () => {
  const [profileCompletion] = useState(85);
  
  const topMatches = [
    {
      id: 1,
      company: "TechFlow",
      logo: "TF",
      role: "Frontend Developer Intern",
      location: "San Francisco, CA",
      skills: ["React", "TypeScript", "UI/UX"],
      compatibility: 95,
      isBookmarked: false
    },
    {
      id: 2,
      company: "DataMinds",
      logo: "DM",
      role: "Data Science Intern",
      location: "Remote",
      skills: ["Python", "Machine Learning", "SQL"],
      compatibility: 88,
      isBookmarked: true
    },
    {
      id: 3,
      company: "StartupX",
      logo: "SX",
      role: "Full Stack Developer",
      location: "New York, NY",
      skills: ["Node.js", "React", "MongoDB"],
      compatibility: 82,
      isBookmarked: false
    }
  ];

  const applications = [
    {
      id: 1,
      company: "InnovateLab",
      role: "Backend Developer",
      appliedDate: "2 days ago",
      status: "Under Review",
      statusColor: "bg-yellow-500"
    },
    {
      id: 2,
      company: "CloudTech",
      role: "DevOps Intern",
      appliedDate: "1 week ago", 
      status: "Applied",
      statusColor: "bg-blue-500"
    },
    {
      id: 3,
      company: "AI Solutions",
      role: "ML Engineer",
      appliedDate: "2 weeks ago",
      status: "Accepted",
      statusColor: "bg-green-500"
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: "match",
      content: "3 new opportunities matched your profile",
      time: "2 hours ago"
    },
    {
      id: 2,
      type: "view",
      content: "TechFlow viewed your profile",
      time: "1 day ago"
    },
    {
      id: 3,
      type: "application",
      content: "Application status updated: Under Review",
      time: "2 days ago"
    }
  ];

  const userSkills = [
    { name: "JavaScript", proficiency: 90 },
    { name: "React", proficiency: 85 },
    { name: "Python", proficiency: 75 },
    { name: "Node.js", proficiency: 70 },
    { name: "Git", proficiency: 80 }
  ];

  const getCompatibilityColor = (score: number) => {
    if (score >= 90) return "bg-green-500";
    if (score >= 70) return "bg-yellow-500"; 
    return "bg-red-500";
  };

  const getCompatibilityText = (score: number) => {
    if (score >= 90) return "Excellent Match";
    if (score >= 70) return "Good Match";
    return "Fair Match";
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
              <a href="/student-dashboard" className="text-primary font-medium">Dashboard</a>
              <a href="/discover" className="text-muted-foreground hover:text-foreground transition-colors">Discover</a>
              <a href="/profile" className="text-muted-foreground hover:text-foreground transition-colors">Profile</a>
              <a href="/applications" className="text-muted-foreground hover:text-foreground transition-colors">Applications</a>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Avatar className="h-8 w-8">
              <AvatarImage src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Button variant="ghost" size="sm">Logout</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-4">Welcome back, John!</h1>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex-1 max-w-md">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Profile Completion</span>
                <span className="text-sm text-muted-foreground">{profileCompletion}%</span>
              </div>
              <Progress value={profileCompletion} className="h-2" />
            </div>
            {profileCompletion < 100 && (
              <Button variant="outline" size="sm">
                <Plus className="h-4 w-4 mr-2" />
                Complete Profile
              </Button>
            )}
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Top Matches Section */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Your Top Opportunities</CardTitle>
                  <CardDescription>Matched based on your skills and interests</CardDescription>
                </div>
                <Button variant="outline" size="sm">
                  View All
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {topMatches.map((match) => (
                    <Card key={match.id} className="hover:shadow-md transition-all duration-200 border">
                      <CardContent className="p-4">
                        <div className="flex items-start justify-between mb-3">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                              <span className="font-semibold text-primary">{match.logo}</span>
                            </div>
                            <div>
                              <h3 className="font-semibold text-sm">{match.role}</h3>
                              <p className="text-sm text-muted-foreground">{match.company}</p>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Bookmark className={`h-4 w-4 ${match.isBookmarked ? 'fill-current' : ''}`} />
                          </Button>
                        </div>
                        
                        <div className="flex items-center gap-2 mb-3 text-sm text-muted-foreground">
                          <MapPin className="h-3 w-3" />
                          {match.location}
                        </div>

                        <div className="flex flex-wrap gap-1 mb-3">
                          {match.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className={`w-2 h-2 rounded-full ${getCompatibilityColor(match.compatibility)}`}></div>
                            <span className="text-sm font-medium">{match.compatibility}% Match</span>
                          </div>
                          <Button size="sm">Apply</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Application Status Widget */}
            <Card className="shadow-card">
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl">Your Applications</CardTitle>
                  <CardDescription>Track your application progress</CardDescription>
                </div>
                <Badge variant="secondary">{applications.length}</Badge>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {applications.map((app) => (
                    <div key={app.id} className="flex items-center justify-between p-3 rounded-lg border hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center gap-3">
                          <h3 className="font-medium">{app.role}</h3>
                          <Badge className={`text-white ${app.statusColor}`}>
                            {app.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-muted-foreground">{app.company} • {app.appliedDate}</p>
                      </div>
                      <Button variant="ghost" size="sm">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
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
            {/* Profile Summary Card */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Profile Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="" />
                    <AvatarFallback>JD</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">John Doe</h3>
                    <p className="text-sm text-muted-foreground">Computer Science • MIT</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <h4 className="font-medium text-sm">Top Skills</h4>
                  {userSkills.slice(0, 5).map((skill) => (
                    <div key={skill.name} className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.proficiency}%</span>
                      </div>
                      <Progress value={skill.proficiency} className="h-1" />
                    </div>
                  ))}
                </div>

                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    Edit Profile
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    Add Skills
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions Panel */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button className="w-full justify-start" variant="default">
                  <Eye className="h-4 w-4 mr-2" />
                  Discover New Gigs
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Plus className="h-4 w-4 mr-2" />
                  Update Skills
                </Button>
                <Button className="w-full justify-start" variant="outline">
                  <Bookmark className="h-4 w-4 mr-2" />
                  View Bookmarks
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity Feed */}
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
                  <ChevronRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;