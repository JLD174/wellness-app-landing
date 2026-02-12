import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const BlogPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const blogPosts = [
    {
      id: 1,
      title: "Machine Learning in Metabolic Health: From Data to Actionable Insights",
      excerpt: "Deep dive into how advanced AI algorithms process complex biomarker data to deliver personalized health recommendations at retail scale.",
      author: "Dr. Nawaz Ahmed",
      date: "February 1, 2026",
      readTime: "9 min read",
      category: "AI & Technology",
      image: "/images/ai_wellness_future_dashboard_20251211_165437.png",
      featured: true
    },
    {
      id: 2,
      title: "Wearable Device Integration: The Complete Technical Guide for Retailers",
      excerpt: "Technical implementation guide for integrating Apple Watch, Oura, CGMs, and other devices into retail wellness programs.",
      author: "Marcus Thompson",
      date: "January 28, 2026",
      readTime: "12 min read",
      category: "Device Integration",
      image: "/images/php_wellness_dashboard_20251211_134457.png"
    },
    {
      id: 3,
      title: "Pharmacogenomics in Retail: Personalizing Supplements Based on Genetics",
      excerpt: "How genetic testing is revolutionizing supplement recommendations in retail environments, driving category growth and customer satisfaction.",
      author: "Dr. Lisa Park",
      date: "January 25, 2026",
      readTime: "8 min read",
      category: "Genetics & Nutrition",
      image: "/images/happy_users_2.jpeg"
    },
    {
      id: 4,
      title: "Advanced Biomarker Analysis: HbA1c, Lipid Panels, and Metabolic Markers",
      excerpt: "Comprehensive guide to interpreting key biomarkers for metabolic health optimization and chronic disease prevention.",
      author: "Dr. Kevin Martinez",
      date: "January 22, 2026",
      readTime: "10 min read",
      category: "Biomarkers",
      image: "/images/happy_users_1.jpeg"
    },
    {
      id: 5,
      title: "GLP-1 Era: Technology-Enhanced Weight Management Programs",
      excerpt: "How retailers are leveraging technology to support customers on GLP-1 medications with comprehensive lifestyle programs.",
      author: "Rachel Green",
      date: "January 20, 2026",
      readTime: "7 min read",
      category: "Weight Loss",
      image: "/images/happy_users_3.jpeg"
    },
    {
      id: 6,
      title: "Behavioral Psychology Meets Technology: Habit Formation at Scale",
      excerpt: "Research-backed strategies for using technology to drive sustainable behavior change in retail wellness programs.",
      author: "James Wilson",
      date: "January 18, 2026",
      readTime: "6 min read",
      category: "Habit Formation",
      image: "/images/php_wellness_hero_dashboard_20251211_135712.png"
    },
    {
      id: 7,
      title: "Revenue-Share Models: Aligning Retailer and Technology Partner Incentives",
      excerpt: "Analysis of successful revenue-share partnerships in retail wellness, with case studies and implementation best practices.",
      author: "Darren Contardo",
      date: "February 3, 2026",
      readTime: "8 min read",
      category: "Retail Innovation",
      image: "/images/wellness_dashboard_biomarkers_20260108_181500.png",
      featured: true
    },
    {
      id: 8,
      title: "Digital Health Transformation: The Future of Retail Pharmacy",
      excerpt: "How digital health technologies are reshaping the retail pharmacy landscape, creating new revenue opportunities and customer experiences.",
      author: "Dr. Sarah Chen",
      date: "January 30, 2026",
      readTime: "7 min read",
      category: "Digital Health",
      image: "/images/retail_analytics_dashboard_20260209_154026.png"
    },
    {
      id: 9,
      title: "Metabolic Syndrome Prevention: A Retail-First Approach",
      excerpt: "Comprehensive strategies for retailers to address metabolic syndrome through personalized interventions and community health programs.",
      author: "Dr. Michael Torres",
      date: "January 27, 2026",
      readTime: "11 min read",
      category: "Preventive Care",
      image: "/images/happy_users_2.jpeg"
    },
    {
      id: 10,
      title: "The Economics of Personalized Nutrition in Retail",
      excerpt: "Market analysis of personalized nutrition trends, consumer demand, and revenue opportunities for forward-thinking retailers.",
      author: "Business Intelligence Team",
      date: "January 24, 2026",
      readTime: "9 min read",
      category: "Market Analysis",
      image: "/images/wellness_dashboard_biomarkers_20260108_181500.png"
    },
    {
      id: 11,
      title: "Telehealth Integration: Bridging Retail and Clinical Care",
      excerpt: "Best practices for integrating telehealth services into retail wellness programs, improving access and continuity of care.",
      author: "Dr. Jennifer Walsh",
      date: "January 21, 2026",
      readTime: "8 min read",
      category: "Telehealth",
      image: "/images/php_wellness_dashboard_20251211_134457.png"
    },
    {
      id: 12,
      title: "Wellness Program ROI: Measuring Success in Retail Health",
      excerpt: "Key performance indicators and measurement frameworks for evaluating the success of retail wellness programs and initiatives.",
      author: "Analytics Team",
      date: "January 19, 2026",
      readTime: "10 min read",
      category: "Performance Analytics",
      image: "/images/retail_analytics_dashboard_20260209_154026.png"
    },
    {
      id: 15,
      title: "HIPAA Compliance in Retail Health Technology: A Complete Guide",
      excerpt: "Essential compliance requirements for retailers implementing health technology solutions, with practical implementation tips.",
      author: "Legal Team",
      date: "January 12, 2026",
      readTime: "11 min read",
      category: "Compliance & Security",
      image: "/images/php_wellness_dashboard_20251211_134457.png"
    },
    {
      id: 16,
      title: "Customer Journey Mapping: From Biomarker Test to Lifestyle Change",
      excerpt: "Detailed analysis of successful customer journeys in retail wellness programs, with optimization strategies for each touchpoint.",
      author: "Customer Success Team",
      date: "January 10, 2026",
      readTime: "9 min read",
      category: "Customer Experience",
      image: "/images/happy_users_1.jpeg"
    }
  ];

  const categories = ["All", "AI & Technology", "Device Integration", "Genetics & Nutrition", "Biomarkers", "Weight Loss", "Habit Formation", "Retail Innovation", "Compliance & Security", "Customer Experience", "Digital Health", "Preventive Care", "Market Analysis", "Telehealth", "Performance Analytics"];

  // Filter blog posts based on selected category
  const filteredPosts = selectedCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

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
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <span className="text-xl font-bold text-foreground">PHP Wellness OS</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Wellness Insights & Updates
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Stay informed with the latest in wellness technology, health insights, and personalized care strategies
          </p>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge 
                key={category} 
                variant={selectedCategory === category ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-white smooth-transition"
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {filteredPosts.filter(post => post.featured).map((post) => (
        <section key={post.id} className="py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4">{post.category}</Badge>
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">{post.title}</h2>
                  <p className="text-muted-foreground text-lg mb-6">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <Button asChild className="wellness-gradient text-white">
                    <Link to={`/blog/article/${post.id}`}>
                      Read Full Article
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div>
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full rounded-2xl card-shadow"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Blog Grid */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.filter(post => !post.featured).map((post) => (
              <Link key={post.id} to={`/blog/article/${post.id}`}>
                <Card className="card-gradient border-0 card-shadow hover:scale-105 smooth-transition cursor-pointer">
                <div className="relative">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                  <Badge className="absolute top-4 left-4">{post.category}</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-3">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 mt-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                  </div>
                </CardContent>
              </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Get the latest wellness insights and PHP Wellness OS updates delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg text-foreground"
            />
            <Button variant="hero" className="bg-white text-primary hover:bg-white/90">
              Subscribe
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

export default BlogPage;