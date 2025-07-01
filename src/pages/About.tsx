import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  FlaskConical, 
  Users, 
  Globe, 
  Award, 
  BookOpen, 
  Target,
  Microscope,
  Cpu,
  Leaf,
  Brain
} from "lucide-react";

const stats = [
  { icon: <FlaskConical className="h-6 w-6" />, value: "500+", label: "Active Researchers" },
  { icon: <BookOpen className="h-6 w-6" />, value: "1,200+", label: "Published Papers" },
  { icon: <Globe className="h-6 w-6" />, value: "50+", label: "International Partners" },
  { icon: <Award className="h-6 w-6" />, value: "$50M+", label: "Research Funding" },
];

const leadership = [
  {
    name: "Dr. Sarah Chen",
    role: "Director General",
    image: "/api/placeholder/150/150",
    bio: "Leading researcher in quantum computing with 20+ years of experience."
  },
  {
    name: "Prof. Ahmed Hassan",
    role: "Chief Research Officer",
    image: "/api/placeholder/150/150",
    bio: "Environmental science expert focusing on climate change mitigation."
  },
  {
    name: "Dr. Maria Rodriguez",
    role: "Head of Biomedical Division",
    image: "/api/placeholder/150/150",
    bio: "Pioneering work in gene therapy and personalized medicine."
  },
  {
    name: "Dr. James Wilson",
    role: "Director of Innovation",
    image: "/api/placeholder/150/150",
    bio: "Technology transfer specialist bridging research and industry."
  }
];

const researchAreas = [
  {
    icon: <Microscope className="h-8 w-8" />,
    title: "Biomedical Sciences",
    description: "Advancing human health through cutting-edge medical research",
    color: "bg-red-50 text-red-600 dark:bg-red-900/20 dark:text-red-400"
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "Technology & AI",
    description: "Developing next-generation computing and artificial intelligence",
    color: "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
  },
  {
    icon: <Leaf className="h-8 w-8" />,
    title: "Environmental Science",
    description: "Protecting our planet through sustainable research solutions",
    color: "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-400"
  },
  {
    icon: <Brain className="h-8 w-8" />,
    title: "Cognitive Science",
    description: "Understanding the mind and developing brain-computer interfaces",
    color: "bg-purple-50 text-purple-600 dark:bg-purple-900/20 dark:text-purple-400"
  }
];

export default function About() {
  return (
    <div className="min-h-screen">
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
              About Our Research Center
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Established in 1995, the National Research & Enhancement Center stands at the forefront of scientific discovery, 
              driving innovation that shapes our future and addresses the world's most pressing challenges.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="py-16 bg-background"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {stat.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Target className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To advance scientific knowledge through innovative research, foster collaboration between 
                academia and industry, and translate discoveries into practical solutions that benefit society. 
                We are committed to excellence, integrity, and the pursuit of knowledge that makes a difference.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-8 w-8 text-primary" />
                <h2 className="text-3xl font-bold">Our Vision</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                To be the leading national research institution, recognized globally for breakthrough discoveries 
                and innovations that address humanity's greatest challenges, from climate change and sustainable 
                energy to health and technology advancement.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Research Excellence</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our multidisciplinary approach spans across four core research areas, 
              each contributing to our mission of advancing human knowledge and wellbeing.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.6 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-8">
                    <div className={`inline-flex p-3 rounded-lg ${area.color} mb-6`}>
                      {area.icon}
                    </div>
                    <h3 className="text-2xl font-bold mb-4">{area.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">
                      {area.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-muted-foreground">
              Meet the visionary leaders driving our research excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadership.map((leader, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
                  <CardContent className="p-6">
                    <Avatar className="h-24 w-24 mx-auto mb-4">
                      <AvatarImage src={leader.image} alt={leader.name} />
                      <AvatarFallback className="text-lg font-semibold">
                        {leader.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <h3 className="text-xl font-bold mb-2">{leader.name}</h3>
                    <Badge variant="secondary" className="mb-4">{leader.role}</Badge>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.6, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <Separator className="w-24 mx-auto bg-primary h-1 rounded" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Excellence</h3>
              <p className="text-muted-foreground leading-relaxed">
                We strive for the highest standards in all our research endeavors, 
                pushing the boundaries of what's possible.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Collaboration</h3>
              <p className="text-muted-foreground leading-relaxed">
                We believe in the power of teamwork and partnerships to achieve 
                breakthroughs that benefit humanity.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary">Innovation</h3>
              <p className="text-muted-foreground leading-relaxed">
                We embrace creative thinking and cutting-edge approaches to 
                solve complex challenges.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}