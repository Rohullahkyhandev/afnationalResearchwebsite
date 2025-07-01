import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Search, 
  Filter, 
  Download, 
  ExternalLink, 
  Calendar,
  Users,
  BookOpen,
  FileText,
  Database,
  Award,
  TrendingUp
} from "lucide-react";

const publications = [
  {
    id: 1,
    title: "Quantum Computing Applications in Climate Modeling",
    authors: ["Dr. Sarah Chen", "Prof. Michael Kim", "Dr. Jennifer Liu"],
    journal: "Nature Quantum Information",
    year: 2024,
    category: "Technology",
    type: "journal",
    abstract: "This paper explores the potential of quantum computing algorithms for enhanced climate prediction models...",
    citations: 127,
    impact: 9.2,
    downloadUrl: "#",
    status: "peer-reviewed"
  },
  {
    id: 2,
    title: "Biodiversity Conservation in Urban Environments",
    authors: ["Prof. Ahmed Hassan", "Dr. Maria Santos"],
    journal: "Environmental Science & Policy",
    year: 2024,
    category: "Environmental",
    type: "journal",
    abstract: "A comprehensive study on maintaining biodiversity within rapidly expanding urban areas...",
    citations: 89,
    impact: 7.8,
    downloadUrl: "#",
    status: "peer-reviewed"
  },
  {
    id: 3,
    title: "AI-Driven Drug Discovery: A Technical Report",
    authors: ["Dr. Maria Rodriguez", "Dr. James Wilson"],
    journal: "Internal Research Report",
    year: 2024,
    category: "Biomedical",
    type: "report",
    abstract: "Technical analysis of machine learning applications in pharmaceutical research...",
    citations: 45,
    impact: 6.5,
    downloadUrl: "#",
    status: "internal"
  },
  {
    id: 4,
    title: "Global Climate Data 2020-2024",
    authors: ["Climate Research Team"],
    journal: "Open Data Repository",
    year: 2024,
    category: "Environmental",
    type: "dataset",
    abstract: "Comprehensive climate dataset covering temperature, precipitation, and atmospheric conditions...",
    citations: 234,
    impact: 8.9,
    downloadUrl: "#",
    status: "open-access"
  },
  {
    id: 5,
    title: "Neural Interface Technologies: Current State and Future Prospects",
    authors: ["Dr. Lisa Wang", "Prof. Robert Brown"],
    journal: "Science Robotics",
    year: 2024,
    category: "Technology",
    type: "journal",
    abstract: "Review of brain-computer interface technologies and their medical applications...",
    citations: 156,
    impact: 8.4,
    downloadUrl: "#",
    status: "peer-reviewed"
  },
  {
    id: 6,
    title: "Sustainable Energy Solutions for Developing Nations",
    authors: ["Dr. Carlos Rodriguez", "Prof. Amira El-Sayed"],
    journal: "Energy Policy",
    year: 2023,
    category: "Environmental",
    type: "journal",
    abstract: "Analysis of renewable energy implementation strategies in emerging economies...",
    citations: 198,
    impact: 7.2,
    downloadUrl: "#",
    status: "peer-reviewed"
  }
];

const researchMetrics = [
  { label: "Total Publications", value: "1,247", icon: <BookOpen className="h-5 w-5" /> },
  { label: "Citations", value: "15,432", icon: <Award className="h-5 w-5" /> },
  { label: "H-Index", value: "67", icon: <TrendingUp className="h-5 w-5" /> },
  { label: "Collaborators", value: "89", icon: <Users className="h-5 w-5" /> }
];

export default function Publications() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedYear, setSelectedYear] = useState("all");
  const [activeTab, setActiveTab] = useState("all");

  const filteredPublications = publications.filter(pub => {
    const matchesSearch = pub.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         pub.authors.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === "all" || pub.category === selectedCategory;
    const matchesYear = selectedYear === "all" || pub.year.toString() === selectedYear;
    const matchesType = activeTab === "all" || pub.type === activeTab;
    
    return matchesSearch && matchesCategory && matchesYear && matchesType;
  });

  const categories = ["Technology", "Environmental", "Biomedical", "Social"];
  const years = ["2024", "2023", "2022", "2021"];

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
              Research Publications
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Discover our latest research findings, technical reports, and open datasets 
              contributing to scientific advancement and knowledge sharing.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Research Metrics */}
      <motion.section 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        className="py-16 bg-background"
      >
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {researchMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    {metric.icon}
                  </div>
                </div>
                <h3 className="text-3xl font-bold mb-2">{metric.value}</h3>
                <p className="text-muted-foreground">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Search and Filters */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
              <Input
                placeholder="Search publications, authors, or keywords..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 text-lg rounded-xl border-2 focus:border-primary"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 justify-center">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-48">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Categories</SelectItem>
                  {categories.map(category => (
                    <SelectItem key={category} value={category}>{category}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedYear} onValueChange={setSelectedYear}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map(year => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button variant="outline" onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
                setSelectedYear("all");
                setActiveTab("all");
              }}>
                <Filter className="h-4 w-4 mr-2" />
                Clear Filters
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Publications List */}
      <section className="py-16">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="all" className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  All Publications
                </TabsTrigger>
                <TabsTrigger value="journal" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Journals
                </TabsTrigger>
                <TabsTrigger value="report" className="flex items-center gap-2">
                  <FileText className="h-4 w-4" />
                  Reports
                </TabsTrigger>
                <TabsTrigger value="dataset" className="flex items-center gap-2">
                  <Database className="h-4 w-4" />
                  Datasets
                </TabsTrigger>
              </TabsList>

              <TabsContent value={activeTab} className="space-y-6">
                {filteredPublications.length === 0 ? (
                  <div className="text-center py-12">
                    <p className="text-muted-foreground text-lg">No publications found matching your criteria.</p>
                  </div>
                ) : (
                  <div className="grid gap-6">
                    {filteredPublications.map((publication, index) => (
                      <motion.div
                        key={publication.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
                      >
                        <Card className="hover:shadow-lg transition-shadow duration-300">
                          <CardHeader>
                            <div className="flex justify-between items-start gap-4">
                              <div className="flex-1">
                                <CardTitle className="text-xl mb-2">{publication.title}</CardTitle>
                                <div className="flex flex-wrap gap-2 mb-3">
                                  <Badge variant={
                                    publication.category === "Technology" ? "default" :
                                    publication.category === "Environmental" ? "secondary" :
                                    publication.category === "Biomedical" ? "destructive" : "outline"
                                  }>
                                    {publication.category}
                                  </Badge>
                                  <Badge variant="outline" className="capitalize">
                                    {publication.type}
                                  </Badge>
                                  <Badge variant="outline">
                                    {publication.status}
                                  </Badge>
                                </div>
                                <p className="text-muted-foreground mb-2">
                                  {publication.authors.join(", ")}
                                </p>
                                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                  <span className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4" />
                                    {publication.year}
                                  </span>
                                  <span>Journal: {publication.journal}</span>
                                  <span>Citations: {publication.citations}</span>
                                  <span>Impact: {publication.impact}</span>
                                </div>
                              </div>
                              <div className="flex gap-2">
                                <Button size="sm" variant="outline">
                                  <Download className="h-4 w-4 mr-1" />
                                  Download
                                </Button>
                                <Button size="sm" variant="outline">
                                  <ExternalLink className="h-4 w-4 mr-1" />
                                  View
                                </Button>
                              </div>
                            </div>
                          </CardHeader>
                          <CardContent>
                            <p className="text-muted-foreground leading-relaxed">
                              {publication.abstract}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                )}
              </TabsContent>
            </Tabs>
          </motion.div>
        </div>
      </section>
    </div>
  );
}