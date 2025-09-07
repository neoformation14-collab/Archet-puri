import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Mail, ExternalLink, Camera, Film, Award, Users, Phone, MapPin } from 'lucide-react';
import ScrollToTop from '@/components/ScrollToTop';

export default function ArchetPuriWebsite() {
  const projects = [
    {
      title: "Baahubali 2: The Conclusion",
      year: "2017",
      role: "Camera Department",
      type: "Epic Historical Drama",
      description: "Epic conclusion to the Baahubali saga, one of India's highest-grossing films.",
      image: "/images/Baahubali.jpg"
    },
    {
      title: "Baahubali: The Beginning", 
      year: "2015",
      role: "Camera Department",
      type: "Epic Historical Drama",
      description: "The beginning of the epic Baahubali franchise that redefined Indian cinema.",
      image: "https://images.unsplash.com/photo-1518929458119-e5bf444c30f4?w=600&h=400&fit=crop&crop=center"
    },
    {
      title: "Eega",
      year: "2012", 
      role: "Camera Department",
      type: "Fantasy Action",
      description: "Innovative fantasy film about a man reincarnated as a fly seeking revenge.",
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600&h=400&fit=crop&crop=center"
    }
  ];

  const skills = [
    "Cinematography",
    "Camera Operations", 
    "Visual Storytelling",
    "Film Production",
    "Epic Cinema",
    "Action Sequences",
    "Fantasy Films",
    "Large Scale Productions"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-800 to-black">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-sm border-b border-amber-500/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-amber-400">Archet Puri</h1>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" className="text-amber-100 hover:text-amber-400 hover:bg-amber-500/10">
              <a href="#about">About</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-amber-100 hover:text-amber-400 hover:bg-amber-500/10">
              <a href="#work">Work</a>
            </Button>
            <Button variant="ghost" size="sm" className="text-amber-100 hover:text-amber-400 hover:bg-amber-500/10">
              <a href="#contact">Contact</a>
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-transparent"></div>
        <div className="grid md:grid-cols-2 gap-12 items-center relative">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="secondary" className="mb-4 bg-amber-500/20 text-amber-300 border-amber-500/30">
                <Camera className="w-4 h-4 mr-2" />
                Cinematographer
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-amber-400 leading-tight">
                Archet Puri
              </h1>
              <p className="text-xl text-amber-100 leading-relaxed">
                Cinematographer & Camera Department Professional
              </p>
              <p className="text-lg text-zinc-300">
                Bringing epic stories to life through the lens. Experienced in large-scale productions, 
                fantasy films, and action sequences that captivate audiences worldwide. Available for 
                international film projects and collaborations.
              </p>
            </div>
            <div className="flex gap-4">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold">
                <a href="#work" className="flex items-center gap-2">
                  <Film className="w-5 h-5" />
                  View My Work
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
                <a 
                  href="https://www.imdb.com/name/nm8492178/?ref_=ext_shr_other" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <ExternalLink className="w-5 h-5" />
                  IMDB Profile
                </a>
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border-2 border-amber-500/20">
              <img 
                src="/assets/archet-photo-1.jpg" 
                alt="Archet Puri on set" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gradient-to-b from-black to-zinc-900 py-16 md:py-24 border-y border-amber-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">About</h2>
              <p className="text-lg text-zinc-300">
                Passionate about visual storytelling and bringing cinematic visions to reality
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-zinc-100 leading-relaxed">
                  As a dedicated cinematographer and camera department professional, I specialize in 
                  creating visually stunning narratives that enhance storytelling. My experience spans 
                  across epic dramas, fantasy films, and large-scale productions.
                </p>
                <p className="text-lg text-zinc-100 leading-relaxed">
                  Having worked on acclaimed projects like the Baahubali franchise and Eega, I bring 
                  technical expertise and creative vision to every project, ensuring each frame serves 
                  the story's emotional and visual impact.
                </p>
                
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-amber-400">Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {skills.map((skill, index) => (
                      <Badge key={index} variant="secondary" className="text-sm bg-amber-500/20 text-amber-300 border-amber-500/30 hover:bg-amber-500/30">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border-2 border-amber-500/20">
                  <img 
                    src="/assets/archet-photo-2.jpg" 
                    alt="Archet Puri working with camera equipment" 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work/Projects Section */}
      <section id="work" className="py-16 md:py-24 bg-gradient-to-b from-zinc-900 to-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Featured Work</h2>
            <p className="text-lg text-zinc-300">
              Notable projects showcasing cinematic excellence
            </p>
          </div>
          
          <div className="grid gap-8 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-2xl transition-all duration-300 bg-zinc-800/50 border-amber-500/20 hover:border-amber-500/40 backdrop-blur-sm">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="aspect-video md:aspect-square relative overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent md:bg-gradient-to-t md:from-black/60 md:to-transparent"></div>
                    <div className="absolute bottom-4 left-4 md:hidden">
                      <Badge variant="outline" className="bg-black/50 text-amber-400 border-amber-500/50">
                        {project.role}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <CardHeader className="px-0 pt-0 pb-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <CardTitle className="text-xl text-amber-400 mb-2">{project.title}</CardTitle>
                          <CardDescription className="text-zinc-400">
                            {project.year} • {project.type}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="hidden md:block bg-amber-500/20 text-amber-300 border-amber-500/30">
                          {project.role}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="px-0">
                      <p className="text-zinc-100 leading-relaxed">{project.description}</p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" className="border-amber-500/50 text-amber-400 hover:bg-amber-500/10">
              <a 
                href="https://www.imdb.com/name/nm8492178/?ref_=ext_shr_other" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                View Complete Filmography on IMDB
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gradient-to-b from-black to-zinc-900 py-16 md:py-24 border-t border-amber-500/10">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-400 mb-4">Get In Touch</h2>
            <p className="text-lg text-zinc-300 mb-8">
              Ready to collaborate on your next cinematic project? Let's create something extraordinary together.
            </p>
            
            <Card className="p-8 bg-zinc-800/50 border-amber-500/20 backdrop-blur-sm">
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-center gap-4">
                    <Mail className="w-6 h-6 text-amber-400" />
                    <span className="text-lg text-zinc-100">Available for project inquiries</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <Phone className="w-5 h-5 text-amber-400" />
                    <span className="text-zinc-100">International projects welcome</span>
                  </div>
                  <div className="flex items-center justify-center gap-4">
                    <MapPin className="w-5 h-5 text-amber-400" />
                    <span className="text-zinc-100">Available worldwide</span>
                  </div>
                </div>
                
                <Separator className="bg-amber-500/20" />
                
                <div className="grid sm:grid-cols-3 gap-4 text-center">
                  <div className="space-y-2">
                    <Award className="w-8 h-8 mx-auto text-amber-400" />
                    <p className="font-semibold text-amber-100">Professional</p>
                    <p className="text-sm text-zinc-400">Industry Experience</p>
                  </div>
                  <div className="space-y-2">
                    <Users className="w-8 h-8 mx-auto text-amber-400" />
                    <p className="font-semibold text-amber-100">Collaborative</p>
                    <p className="text-sm text-zinc-400">Team Player</p>
                  </div>
                  <div className="space-y-2">
                    <Film className="w-8 h-8 mx-auto text-amber-400" />
                    <p className="font-semibold text-amber-100">Creative</p>
                    <p className="text-sm text-zinc-400">Visual Storyteller</p>
                  </div>
                </div>
                
                <Button size="lg" className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold">
                  <a 
                    href="https://www.imdb.com/name/nm8492178/?ref_=ext_shr_other" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <ExternalLink className="w-5 h-5" />
                    Connect via IMDB
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-amber-500/20">
        <div className="container mx-auto px-4">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-amber-400">Archet Puri</h3>
            <p className="text-zinc-400">Cinematographer & Camera Department Professional</p>
            <div className="flex justify-center gap-4">
              <Button variant="ghost" size="sm" className="text-zinc-400 hover:text-amber-400">
                <a 
                  href="https://www.imdb.com/name/nm8492178/?ref_=ext_shr_other" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  IMDB
                </a>
              </Button>
            </div>
            <div className="pt-8 border-t border-zinc-800">
              <p className="text-zinc-500 text-sm">
                © 2025 Archet Puri. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
      
      <ScrollToTop />
    </div>
  );
}