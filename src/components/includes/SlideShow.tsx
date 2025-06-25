import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { ArrowRight, BookOpen, FlaskConical, Globe, Leaf } from "lucide-react"
import { Button } from "../ui/button"

const researchSlides = [
  {
    id: 1,
    imageUrl: "/images/comLab.jpg",
    title: "Cutting-Edge Lab Research",
    description: "Next-gen facilities powering revolutionary scientific breakthroughs",
    category: "Biomedical Innovation",
    icon: <FlaskConical className="h-5 w-5" />,
    cta: "Explore Labs",
    gradient: "from-purple-900/80 to-blue-800/40"
  },
  {
    id: 2,
    imageUrl: "/images/mico.jpg",
    title: "Eco-System Research",
    description: "Pioneering studies in biodiversity and sustainable futures",
    category: "Planetary Science",
    icon: <Leaf className="h-5 w-5" />,
    cta: "Discover Studies",
    gradient: "from-emerald-900/80 to-teal-800/40"
  },
  {
    id: 3,
    imageUrl: "/images/microcheck.jpg",
    title: "Data Science Frontier",
    description: "AI-driven analytics transforming raw data into world-changing insights",
    category: "Computational Research",
    icon: <Globe className="h-5 w-5" />,
    cta: "View Tech",
    gradient: "from-amber-900/80 to-orange-800/40"
  },
  {
    id: 4,
    imageUrl: "/images/think.jpg",
    title: "Knowledge Nexus",
    description: "Digital library with 10M+ resources at your fingertips",
    category: "Academic Hub",
    icon: <BookOpen className="h-5 w-5" />,
    cta: "Browse Collection",
    gradient: "from-indigo-900/80 to-violet-800/40"
  }
]

export function ResearchSlideshow() {
 
  return (
    <div className="relative w-full overflow-hidden rounded-none shadow-2xl">
      <Carousel 
        opts={{
          loop: true,
          duration: 20
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-0">
          {researchSlides.map((slide) => (
            <CarouselItem key={slide.id} className="pl-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[16/9] w-full md:aspect-[21/9] "
              >
                {/* Background Image with Dynamic Gradient Overlay */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url(${slide.imageUrl})` }}
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${slide.gradient} via-70% to-transparent`} />

                {/* Content */}
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="relative z-10 flex h-full flex-col mx-10 mb-12 justify-end p-6 sm:p-8 md:p-12 text-white"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2 rounded-full bg-white/10 backdrop-blur-sm"
                    >
                      {slide.icon}
                    </motion.div>
                    <span className="text-sm font-medium tracking-wider text-white/80">{slide.category}</span>
                  </div>
                  
                  <motion.h3 
                    className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl max-w-2xl leading-tight"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                  >
                    {slide.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="mt-3 text-lg md:text-xl max-w-2xl text-white/90 font-light"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    {slide.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                    className="mt-8"
                  >
                    <Button 
                      variant="ghost" 
                      className="group font-medium px-6 py-5 text-base bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 hover:border-white/40 transition-all"
                    >
                      {slide.cta}
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </motion.div>
                </motion.div>
              </motion.div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        {/* Navigation Arrows */}
        <CarouselPrevious className="left-6 h-12 w-12 opacity-80 hover:opacity-100 hover:scale-110 transition-all hidden sm:flex" />
        <CarouselNext className="right-6 h-12 w-12 opacity-80 hover:opacity-100 hover:scale-110 transition-all hidden sm:flex" />
        
        {/* Dynamic Indicators */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {researchSlides.map((_, index) => (
            <motion.button
              key={index}
              className="h-2.5 w-2.5 rounded-full bg-white/50 hover:bg-white focus:outline-none"
              whileHover={{ scale: 1.3 }}
              whileFocus={{ scale: 1.3 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          ))}
        </div>
      </Carousel>
    </div>
  )
}