import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Microscope, 
  Cpu, 
  Leaf, 
  Brain, 
  Users, 
  FlaskConical,
  Zap,
  Heart,
  Globe,
  Atom,
  ArrowRight,
  DollarSign,
  Calendar,
  Award
} from "lucide-react";

const researchAreas = [
  {
    id: "biomedical",
    title: "Biomedical Sciences",
    icon: <Microscope className="h-8 w-8" />,
    description: "Advancing human health through cutting-edge medical research and biotechnology innovations.",
    color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400",
    bgGradient: "from-red-500/10 to-pink-500/10",
    budget: "$12.5M",
    researchers: 125,
    projects: 47,
    publications: 234,
    keyAreas: [
      "Gene Therapy & Precision Medicine",
      "Cancer Research & Immunotherapy",
      "Neuroscience & Brain Disorders",
      "Regenerative Medicine",
      "Drug Discovery & Development"
    ],
    recentProjects: [
      {
        title: "CRISPR-Based Treatment for Genetic Disorders",
        lead: "Dr. Maria Rodriguez",
        status: "Active",
        progress: 75
      },
      {
        title: "AI-Driven Drug Discovery Platform",
        lead: "Prof. James Chen",
        status: "Active",
        progress: 60
      },
      {
        title: "Neural Interface for Paralyzed Patients",
        lead: "Dr. Lisa Wang",
        status: "Completed",
        progress: 100
      }
    ]
  },
  {
    id: "technology",
    title: "Technology & AI",
    icon: <Cpu className="h-8 w-8" />,
    description: "Developing next-generation computing, artificial intelligence, and digital transformation solutions.",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400",
    bgGradient: "from-blue-500/10 to-cyan-500/10",
    budget: "$18.2M",
    researchers: 89,
    projects: 32,
    publications: 156,
    keyAreas: [
      "Quantum Computing",
      "Machine Learning & AI",
      "Cybersecurity & Privacy",
      "Blockchain Technology",
      "Internet of Things (IoT)"
    ],
    recentProjects: [
      {
        title: "Quantum Climate Modeling System",
        lead: "Dr. Sarah Chen",
        status: "Active",
        progress: 45
      },
      {
        title: "Federated Learning for Healthcare",
        lead: "Prof. Michael Kim",
        status: "Active",
        progress: 80
      },
      {
        title: "Secure Multi-Party Computation",
        lead: "Dr. Alex Thompson",
        status: "Planning",
        progress: 15
      }
    ]
  },
  {
    id: "environmental",
    title: "Environmental Science",
    icon: <Leaf className="h-8 w-8" />,
    description: "Protecting our planet through sustainable research solutions and climate change mitigation.",
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400",
    bgGradient: "from-green-500/10 to-emerald-500/10",
    budget: "$15.7M",
    researchers: 98,
    projects: 41,
    publications: 198,
    keyAreas: [
      "Climate Change Research",
      "Renewable Energy Systems",
      "Biodiversity Conservation",
      "Water Resource Management",
      "Sustainable Agriculture"
    ],
    recentProjects: [
      {
        title: "Urban Biodiversity Mapping",
        lead: "Prof. Ahmed Hassan",
        status: "Active",
        progress: 90
      },
      {
        title: "Solar Panel Efficiency Enhancement",
        lead: "Dr. Elena Vasquez",
        status: "Active",
        progress: 55
      },
      {
        title: "Carbon Capture Technology",
        lead: "Dr. Robert Kim",
        status: "Active",
        progress: 35
      }
    ]
  },
  {
    id: "cognitive",
    title: "Cognitive Science",
    icon: <Brain className="h-8 w-8" />,
    description: "Understanding the mind and developing brain-computer interfaces for enhanced human capabilities.",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400",
    bgGradient: "from-purple-500/10 to-violet-500/10",
    budget: "$9.8M",
    researchers: 67,
    projects: 28,
    publications: 112,
    keyAreas: [
      "Brain-Computer Interfaces",
      "Cognitive Enhancement",
      "Mental Health Research",
      "Learning & Memory",
      "Human-AI Interaction"
    ],
    recentProjects: [
      {
        title: "Memory Enhancement Techniques",
        lead: "Dr. Patricia Lee",
        status: "Active",
        progress: 70
      },
      {
        title: "Brain-Controlled Prosthetics",
        lead: "Prof. David Wilson",
        status: "Active",
        progress: 85
      },
      {
        title: "Depression Treatment via Neurofeedback",
        lead: "Dr. Jennifer Brown",
        status: "Completed",
        progress: 100
      }
    ]
  }
];

const facilities = [
  {
    name: "Advanced Computing Center",
    description: "High-performance computing cluster with quantum simulation capabilities",
    capacity: "1000+ researchers",
    equipment: ["Quantum Computer", "Supercomputer Cluster", "AI Training Servers"]
  },
  {
    name: "Biomedical Research Labs",
    description: "State-of-the-art laboratory facilities for medical research",
    capacity: "300+ researchers",
    equipment: ["Gene Sequencers", "Cell Culture Facilities", "Advanced Microscopy"]
  },
  {
    name: "Environmental Testing Center",
    description: "Comprehensive environmental analysis and monitoring station",
    capacity: "150+ researchers", 
    equipment: ["Climate Chambers", "Water Quality Labs", "Atmospheric Monitors"]
  },
  {
    name: "Cognitive Science Institute",
    description: "Specialized facilities for brain research and cognitive studies",
    capacity: "100+ researchers",
    equipment: ["fMRI Scanners", "EEG Labs", "Virtual Reality Suites"]
  }
];

export default function ResearchAreas() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="bg-gradient-to-br from-primary/10 via-background to-secondary/10 py-20"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent"
            >
              Research Areas
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Explore our diverse research portfolio spanning cutting-edge science and technology, 
              driving innovation across multiple disciplines for a better future.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Research Areas Overview */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8"
          >
            {researchAreas.map((area, index) => (
              <motion.div
                key={area.id}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br ${area.bgGradient}`}>
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-3 rounded-lg ${area.color}`}>
                        {area.icon}
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">{area.title}</CardTitle>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-4 gap-4 mt-6">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <DollarSign className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-bold">{area.budget}</p>
                        <p className="text-xs text-muted-foreground">Budget</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Users className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-bold">{area.researchers}</p>
                        <p className="text-xs text-muted-foreground">Researchers</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <FlaskConical className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-bold">{area.projects}</p>
                        <p className="text-xs text-muted-foreground">Projects</p>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <Award className="h-4 w-4 text-primary" />
                        </div>
                        <p className="font-bold">{area.publications}</p>
                        <p className="text-xs text-muted-foreground">Publications</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-3">Key Research Areas:</h4>
                        <div className="flex flex-wrap gap-2">
                          {area.keyAreas.map((keyArea, i) => (
                            <Badge key={i} variant="secondary" className="text-xs">
                              {keyArea}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <Button className="w-full mt-4 group">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Research Areas */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Current Research Projects</h2>
            <p className="text-xl text-muted-foreground">
              Ongoing initiatives driving scientific discovery and innovation
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
          >
            <Tabs defaultValue="biomedical" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                {researchAreas.map((area) => (
                  <TabsTrigger key={area.id} value={area.id} className="flex items-center gap-2">
                    {area.icon}
                    <span className="hidden sm:inline">{area.title.split(' ')[0]}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              {researchAreas.map((area) => (
                <TabsContent key={area.id} value={area.id} className="space-y-6">
                  <div className="grid gap-6">
                    {area.recentProjects.map((project, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
                      >
                        <Card>
                          <CardHeader>
                            <div className="flex justify-between items-start">
                              <div>
                                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                                <p className="text-muted-foreground">Lead Researcher: {project.lead}</p>
                              </div>
                              <Badge variant={
                                project.status === "Active" ? "default" :
                                project.status === "Completed" ? "secondary" : "outline"
                              }>
                                {project.status}
                              </Badge>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <div className="space-y-3">
                              <div className="flex justify-between items-center">
                                <span className="text-sm font-medium">Progress</span>
                                <span className="text-sm text-muted-foreground">{project.progress}%</span>
                              </div>
                              <Progress value={project.progress} className="h-2" />
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Research Facilities */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">World-Class Facilities</h2>
            <p className="text-xl text-muted-foreground">
              State-of-the-art infrastructure supporting cutting-edge research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-2">{facility.name}</CardTitle>
                    <p className="text-muted-foreground">{facility.description}</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium">Capacity: {facility.capacity}</span>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">Key Equipment:</h4>
                        <div className="flex flex-wrap gap-2">
                          {facility.equipment.map((equipment, i) => (
                            <Badge key={i} variant="outline" className="text-xs">
                              {equipment}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}