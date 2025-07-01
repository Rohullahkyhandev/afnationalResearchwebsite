import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Users, 
  Calendar, 
  MapPin,
  ExternalLink,
  Award,
  Building,
  Handshake
} from "lucide-react";

const collaborations = [
  {
    id: 1,
    title: "EU Horizon Research Program",
    partner: "European Union",
    country: "Multiple EU Countries",
    type: "Funding Program",
    duration: "2021-2027",
    budget: "€95.5B",
    focus: "Climate & Digital Transformation",
    status: "Active",
    description: "Multi-billion euro funding program supporting breakthrough research in climate action and digital innovation across European institutions."
  },
  {
    id: 2,
    title: "ASEAN Climate Research Initiative",
    partner: "ASEAN Scientific Committee",
    country: "Southeast Asia",
    type: "Research Partnership",
    duration: "2023-2028",
    budget: "$12.3M",
    focus: "Environmental Science",
    status: "Active",
    description: "Regional collaboration studying climate change impacts on tropical ecosystems and developing adaptation strategies."
  },
  {
    id: 3,
    title: "Africa-Tech Innovation Hub",
    partner: "African Union Development Agency",
    country: "Kenya, Nigeria, South Africa",
    type: "Innovation Center",
    duration: "2022-2027",
    budget: "$8.7M",
    focus: "Technology Transfer",
    status: "Active",
    description: "Establishing technology transfer centers to bring advanced research solutions to African communities."
  },
  {
    id: 4,
    title: "Pacific Ocean Research Alliance",
    partner: "Pacific Island Nations",
    country: "Fiji, Tonga, Samoa",
    type: "Environmental Study",
    duration: "2024-2029",
    budget: "$15.2M",
    focus: "Marine Science",
    status: "Planning",
    description: "Comprehensive study of ocean acidification and coral reef preservation in Pacific Island waters."
  }
];

const conferences = [
  {
    title: "International AI in Healthcare Summit 2024",
    date: "October 15-17, 2024",
    location: "Singapore",
    attendees: "500+",
    type: "Virtual & In-Person"
  },
  {
    title: "Global Climate Research Conference",
    date: "November 8-12, 2024",
    location: "Copenhagen, Denmark",
    attendees: "1200+",
    type: "In-Person"
  },
  {
    title: "Quantum Computing Symposium",
    date: "December 3-5, 2024",
    location: "Tokyo, Japan",
    attendees: "800+",
    type: "Hybrid"
  },
  {
    title: "Biomedical Innovation Forum",
    date: "January 20-22, 2025",
    location: "Boston, USA",
    attendees: "600+",
    type: "In-Person"
  }
];

const partnerships = [
  {
    name: "MIT Technology Institute",
    country: "United States",
    field: "Artificial Intelligence",
    since: "2019",
    projects: 12
  },
  {
    name: "Max Planck Institute",
    country: "Germany",
    field: "Quantum Physics",
    since: "2020",
    projects: 8
  },
  {
    name: "University of Tokyo",
    country: "Japan",
    field: "Robotics",
    since: "2018",
    projects: 15
  },
  {
    name: "ETH Zurich",
    country: "Switzerland",
    field: "Environmental Science",
    since: "2021",
    projects: 6
  },
  {
    name: "University of Cambridge",
    country: "United Kingdom",
    field: "Biomedical Research",
    since: "2017",
    projects: 20
  },
  {
    name: "Tsinghua University",
    country: "China",
    field: "Materials Science",
    since: "2022",
    projects: 4
  }
];

export default function International() {
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
              International Collaborations
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            >
              Building global partnerships to address humanity's greatest challenges through 
              collaborative research, knowledge sharing, and innovative solutions.
            </motion.p>
          </div>
        </div>
      </motion.section>

      {/* Global Partnerships Overview */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Global Research Network</h2>
            <p className="text-xl text-muted-foreground">
              Partnering with leading institutions worldwide
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex items-center gap-3 mb-2">
                      <Building className="h-5 w-5 text-primary" />
                      <CardTitle className="text-lg">{partnership.name}</CardTitle>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{partnership.country}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <Badge variant="secondary">{partnership.field}</Badge>
                      <div className="flex justify-between text-sm">
                        <span>Since: {partnership.since}</span>
                        <span>{partnership.projects} active projects</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Major Collaborations */}
      <section className="py-20 bg-muted/30">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Major International Programs</h2>
            <p className="text-xl text-muted-foreground">
              Large-scale collaborative initiatives driving global impact
            </p>
          </motion.div>

          <div className="space-y-8">
            {collaborations.map((collab, index) => (
              <motion.div
                key={collab.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.4 + index * 0.1, duration: 0.6 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300">
                  <CardHeader>
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <Handshake className="h-6 w-6 text-primary" />
                          <CardTitle className="text-2xl">{collab.title}</CardTitle>
                        </div>
                        <p className="text-muted-foreground mb-4">{collab.partner}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          <Badge variant={collab.status === "Active" ? "default" : "secondary"}>
                            {collab.status}
                          </Badge>
                          <Badge variant="outline">{collab.type}</Badge>
                          <Badge variant="outline">{collab.focus}</Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-primary">{collab.budget}</div>
                        <div className="text-sm text-muted-foreground">Total Budget</div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          {collab.description}
                        </p>
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar className="h-4 w-4 text-primary" />
                            <span>{collab.duration}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span>{collab.country}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-end justify-end">
                        <Button variant="outline" className="group">
                          Learn More
                          <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Conferences */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">International Conferences</h2>
            <p className="text-xl text-muted-foreground">
              Join our global research community at upcoming events
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {conferences.map((conference, index) => (
              <motion.div
                key={index}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 2.2 + index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl mb-3">{conference.title}</CardTitle>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span className="text-sm">{conference.date}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span className="text-sm">{conference.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Users className="h-4 w-4" />
                        <span className="text-sm">{conference.attendees} expected attendees</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <Badge variant="secondary">{conference.type}</Badge>
                      <Button size="sm">
                        Register
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
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