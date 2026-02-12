import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Users, Target, Award, Building, MapPin, Mail, Phone, Linkedin, Globe, Heart, Shield, Zap, Brain, Facebook, Instagram, Twitter, Calendar } from "lucide-react";
import { Link } from "react-router-dom";

const CompanyPage = () => {
  const teamMembers = [
    {
      name: "Darren Contardo",
      role: "Chief Executive Officer",
      bio: "The trend-spotting wizard who's been turning 'what if' into 'why didn't we think of this sooner?' for 20+ years. From sports nutrition to cannabis (yes, really!), Darren has a magical ability to sniff out the next big thing and turn it into brands people actually love. Think of him as the wellness industry's crystal ball, only better and a proven track record. Warning: may cause uncontrollable urge to disrupt entire industries.",
      image: "/images/happy_users_2.jpeg"
    },
    {
      name: "Ian McNeill",
      role: "Chief Technology Officer",
      bio: "The retail health architect who's building tomorrow's pharmacy today. Ian has the rare gift of turning complex health data into simple, actionable experiences that actually work in the real world. He's the mastermind behind our Retail Health OS—think of him as the guy who makes 400+ biomarkers feel as easy as checking your email. Warning: may cause sudden clarity about your health.",
      image: "/images/happy_users_2.jpeg"
    },
    {
      name: "James Le Duc",
      role: "Chief Commercial Officer",
      bio: "The growth whisperer who turns startup chaos into commercial gold. James has the rare superpower of making early-stage companies actually function like real businesses (imagine that!). He's basically a business translator who speaks fluent 'startup dreams' and 'enterprise reality,' then builds the bridge between them. Warning: may cause sudden profitability.",
      image: "/images/happy_users_1.jpeg"
    },
    {
      name: "Dr. Nawaz Ahmed",
      role: "Head of Research & Development",
      bio: "The mad scientist who actually makes sense (rare breed!). Dr. Ahmed speaks fluent 'cell biology' and 'regulatory bureaucracy' with equal expertise. He's the guy who can explain why your metabolism is acting up AND navigate the FDA maze to fix it. Think of him as your body's personal detective, but with a PhD and an uncanny ability to turn complex science into actual solutions. Warning: may cause sudden understanding of your own biology.",
      image: "/images/happy_users_3.jpeg"
    }
  ];

  const milestones = [
    {
      year: "2018",
      title: "Company Founded",
      description: "SP Nutraceuticals Inc established with mission to revolutionize personalized wellness"
    },
    {
      year: "2020", 
      title: "First Product Launch",
      description: "Launched genetic-based nutrition supplements with personalized formulations"
    },
    {
      year: "2022",
      title: "Technology Integration",
      description: "Developed PHP Wellness OS platform for unified health device connectivity"
    },
    {
      year: "2024",
      title: "Market Leadership",
      description: "Achieved 100K+ active users and partnerships with major wellness device manufacturers"
    }
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient-Centered Care",
      description: "Every solution we develop prioritizes individual health outcomes and personalized wellness journeys."
    },
    {
      icon: Shield,
      title: "Scientific Integrity", 
      description: "All products and services and recommendations are backed by rigorous scientific research and clinical evidence."
    },
    {
      icon: Zap,
      title: "Innovation Excellence",
      description: "Continuously pushing boundaries in wellness technology and nutraceutical development."
    },
    {
      icon: Brain,
      title: "Data-Driven Insights",
      description: "Leveraging AI and genetic data to provide unprecedented personalization in wellness solutions."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 smooth-transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 wellness-gradient rounded-lg flex items-center justify-center">
                <Building className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">SP Nutraceuticals Inc</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Pioneering the Future of Personalized Wellness
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              SP Nutraceuticals Inc is a leading innovator in personalized wellness solutions, 
              combining cutting-edge nutraceutical science with advanced AI technology to deliver 
              unprecedented health optimization experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" onClick={() => document.getElementById('leadership-team')?.scrollIntoView({ behavior: 'smooth' })}>
                <Users className="w-5 h-5 mr-2" />
                Meet Our Team
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = 'mailto:info@spnutraceuticals.com'}>
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CEO Quote */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-xl lg:text-2xl font-medium text-foreground mb-6 leading-relaxed">
              "Our mission is to help 1M people live better lives through Metabolic health."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">DC</span>
              </div>
              <div className="text-left">
                <p className="font-semibold text-foreground">Darren Contardo</p>
                <p className="text-sm text-muted-foreground">CEO, SP Nutraceuticals Inc</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">About SP Nutraceuticals Inc</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Founded in 2018, SP Nutraceuticals Inc has emerged as a trailblazer in the intersection 
                  of nutraceutical science and wellness technology. Our mission is to democratize personalized 
                  health by making precision wellness accessible to everyone.
                </p>
                <p>
                  We specialize in developing science-backed nutraceutical products and the revolutionary 
                  PHP Wellness OS platform that seamlessly integrates data from multiple wellness devices 
                  including Apple Watch, Oura Ring, CGMs, Brainband, Lumen, Whoop, Garmin, and Fitbit.
                </p>
                <p>
                  Our unique approach combines genetic testing, biomarker analysis, and AI-driven insights 
                  to deliver truly personalized wellness recommendations that evolve with each individual's 
                  health journey.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/images/sp_nutraceuticals_company_overview_20251211_173447.png"
                alt="SP Nutraceuticals Technology" 
                className="w-full rounded-2xl card-shadow"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-gradient border-0 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Target className="w-6 h-6 mr-3 text-primary" />
                  Our Objective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To revolutionize personalized wellness by seamlessly integrating advanced nutraceutical 
                  science with cutting-edge technology, empowering individuals to achieve optimal health 
                  through data-driven, genetically-informed, and scientifically-backed solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="card-gradient border-0 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Award className="w-6 h-6 mr-3 text-primary" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To become the global leader in personalized wellness ecosystems, where every individual 
                  has access to precision health solutions that adapt and evolve with their unique biological 
                  profile, lifestyle, and wellness goals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              The principles that guide everything we do at SP Nutraceuticals Inc
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow hover:scale-105 smooth-transition text-center">
                <CardHeader>
                  <div className="w-12 h-12 wellness-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Key milestones in SP Nutraceuticals Inc's growth and innovation
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 wellness-gradient rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {milestone.year}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                    <p className="text-muted-foreground">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section id="leadership-team" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Meet the visionaries driving innovation at SP Nutraceuticals Inc
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow hover:scale-105 smooth-transition">
                <CardHeader className="text-center">
                  <div className={`w-24 h-24 rounded-full mx-auto mb-4 flex items-center justify-center text-white font-bold text-2xl ${
                    index === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-700' : 
                    index === 1 ? 'bg-gradient-to-br from-red-500 to-red-700' : 
                    index === 2 ? 'bg-gradient-to-br from-green-500 to-green-700' :
                    'bg-gradient-to-br from-purple-500 to-purple-700'
                  }`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-center">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section id="contact" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to learn more about our retail wellness solutions?
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="card-gradient border-0 card-shadow text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Headquarters</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Business District<br />
                  Burlington, ON<br />
                  Canada
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 card-shadow text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  info@spnutraceuticals.com
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 card-shadow text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  1-877-335-8732<br />
                  Mon-Fri 9AM-6PM EST<br />
                  24/7 Support Available
                </p>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 card-shadow text-center">
              <CardHeader>
                <Globe className="w-8 h-8 text-primary mx-auto mb-2" />
                <CardTitle className="text-lg">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center space-x-4">
                  <Facebook className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80" />
                  <Instagram className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80" />
                  <Twitter className="w-6 h-6 text-primary cursor-pointer hover:text-primary/80" />
                </div>
                <p className="text-muted-foreground mt-2">Follow our journey</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Wellness Revolution</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Partner with SP Nutraceuticals Inc to bring personalized wellness solutions to your organization
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" onClick={() => window.location.href = 'mailto:info@spnutraceuticals.com'}>
              <Mail className="w-5 h-5 mr-2" />
              Partnership Opportunities
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = 'mailto:info@spnutra.com'}>
              <Calendar className="w-5 h-5 mr-2" />
              Book Meeting with James Le Duc
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-foreground text-white">
        <div className="container mx-auto px-4 text-center">
          <Link to="/" className="inline-flex items-center space-x-2 text-white hover:text-white/80 smooth-transition">
            <ArrowLeft className="w-4 h-4" />
            <span>Back to PHP Wellness OS</span>
          </Link>
        </div>
      </footer>
    </div>
  );
};

export default CompanyPage;