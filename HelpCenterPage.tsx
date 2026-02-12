import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Search, MessageCircle, Book, Phone, Mail, HelpCircle, FileText, Settings, Users, Zap, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const HelpCenterPage = () => {
  const [openConsumerFAQ, setOpenConsumerFAQ] = useState<number | null>(null);
  const [openRetailerFAQ, setOpenRetailerFAQ] = useState<number | null>(null);

  const toggleConsumerFAQ = (index: number) => {
    setOpenConsumerFAQ(openConsumerFAQ === index ? null : index);
  };

  const toggleRetailerFAQ = (index: number) => {
    setOpenRetailerFAQ(openRetailerFAQ === index ? null : index);
  };

  const consumerFAQs = [
    {
      question: "Is it fast and low-friction to start?",
      answer: "Users can complete onboarding without creating an account upfront, then verify contact via OTP later—reducing early drop-off and making \"try it now\" easy."
    },
    {
      question: "How quickly do I get a personalized plan, not generic content?",
      answer: "The platform generates a Health Pilot report (scores across pillars + key metrics + priorities) and recommends a best-fit program using goals, age, sex, BMI, conditions, and support level—plus a clear \"why this program\" rationale."
    },
    {
      question: "What does it fix first?",
      answer: "PHP is designed so sleep, nutrition, movement, stress and gut foundations come first; Rx is optional and never the default, with clinical gating and safety education when applicable."
    },
    {
      question: "What would my daily guidance look like?",
      answer: "The system generates a personalized set of daily tasks that change based on progress and adherence, keeping the plan realistic and preventing overwhelm—rather than forcing a static program."
    },
    {
      question: "How does the tool keep me motivated?",
      answer: "New users earn momentum through milestones, streaks, points, and rewards (tenant-configurable), with incentives tied directly to program completion and healthy actions—turning \"good intentions\" into repeat behavior."
    },
    {
      question: "Do you support GLP-1 programs too?",
      answer: "Yes. If GLP-1 support is right for you, we have them covered — and we wrap it in a foundation plan so results don't depend on medication alone. Real-world data shows many people discontinue GLP-1 therapy within the first year, often due to tolerability, access, or cost barriers. Ingeni helps improve the experience by pairing your branded GLP-1 pathway with step-by-step foundation coaching (nutrition, hydration, protein/fiber, sleep, movement) and side-effect support—especially for common GI issues like nausea, constipation, vomiting, and diarrhea—plus clear guidance on when to escalate to a clinician."
    }
  ];

  const retailerFAQs = [
    {
      question: "Why PHP Wellness OS vs building it ourselves?",
      answer: "PHP lets you launch a full wellness + prevention program fast—without the cost, time, and integration risk of building a health platform internally."
    },
    {
      question: "Can this be fully private-label under our brand?",
      answer: "Yes. The experience, programs, communications, and rewards can run under your brand so you strengthen loyalty and keep the customer relationship."
    },
    {
      question: "How does this drive measurable business impact (not just content engagement)?",
      answer: "PHP is built around guided journeys, adherence, and outcomes—so you can track participation, completion, and repeat engagement that translate into retention and higher customer lifetime value."
    },
    {
      question: "How do you increase basket size and create new revenue streams?",
      answer: "You can attach program-specific bundles (OTC/supplements), premium pathways, and subscriptions—creating recurring revenue while lifting frequency and average order value."
    },
    {
      question: "What data insights do we receive as programs scale?",
      answer: "We provide aggregated insights that map program participation to your SKUs, loyalty activity, and customer interactions—so you can see what journeys drive category lift, repeat purchase, and retention (without exposing individual-level health data)."
    },
    {
      question: "How do you handle safety, security, HIPAA, and liability—especially for GLP-1/Rx?",
      answer: "PHP separates wellness coaching from clinical decisions. If a customer qualifies for Rx support (e.g., GLP-1), they are routed through a prescriber-led workflow (screening, consent, education, documentation) so prescribing stays with licensed clinicians and defined protocols. The platform supports HIPAA-aligned safeguards (role-based access, auditability, secure handling of sensitive data) to help protect data and remove retailer liability."
    }
  ];
  const helpCategories = [
    {
      icon: Settings,
      title: "Getting Started",
      description: "Learn the basics of PHP Wellness OS",
      articles: [
        "Setting up your PHP Wellness OS account",
        "Connecting your first wellness device",
        "Understanding your dashboard",
        "Creating your wellness profile"
      ]
    },
    {
      icon: Zap,
      title: "Device Integration",
      description: "Connect and sync your wellness devices",
      articles: [
        "Apple Watch integration guide",
        "Oura Ring setup and sync",
        "CGM (Continuous Glucose Monitor) connection",
        "Whoop, Garmin, and Fitbit setup",
        "Troubleshooting device connections"
      ]
    },
    {
      icon: FileText,
      title: "Data & Analytics",
      description: "Understanding your wellness data",
      articles: [
        "Reading your biomarker reports",
        "Understanding genetic insights",
        "Interpreting wellness trends",
        "Setting and tracking goals",
        "Data privacy and security"
      ]
    },
    {
      icon: Users,
      title: "Account Management",
      description: "Manage your account and preferences",
      articles: [
        "Updating profile information",
        "Managing notification settings",
        "Subscription and billing",
        "Data export and backup",
        "Account security settings"
      ]
    }
  ];

  const popularArticles = [
    {
      title: "How to connect your Apple Watch to PHP Wellness OS",
      category: "Device Integration",
      readTime: "3 min read"
    },
    {
      title: "Understanding your genetic wellness report",
      category: "Data & Analytics", 
      readTime: "5 min read"
    },
    {
      title: "Setting up personalized wellness goals",
      category: "Getting Started",
      readTime: "4 min read"
    },
    {
      title: "Troubleshooting device sync issues",
      category: "Device Integration",
      readTime: "6 min read"
    },
    {
      title: "Managing your subscription and billing",
      category: "Account Management",
      readTime: "2 min read"
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
                <HelpCircle className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Help Center</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            How can we help you?
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Find answers, get support, and learn how to make the most of your PHP Wellness OS experience
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, or FAQs..."
                className="w-full pl-12 pr-4 py-4 rounded-lg text-foreground text-lg"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Live Chat Support
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" onClick={() => window.location.href = 'mailto:info@spnutraceuticals.com'}>
              <Mail className="w-5 h-5 mr-2" />
              Email Support
            </Button>
          </div>
        </div>
      </section>

      {/* Help Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Find the help you need organized by topic
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {helpCategories.map((category, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow hover:scale-105 smooth-transition cursor-pointer">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 wellness-gradient rounded-lg flex items-center justify-center mx-auto mb-4">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {category.articles.slice(0, 3).map((article, articleIndex) => (
                      <li key={articleIndex} className="hover:text-primary cursor-pointer">
                        • {article}
                      </li>
                    ))}
                    <li className="text-primary font-medium cursor-pointer">
                      + {category.articles.length - 3} more articles
                    </li>
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Consumer FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Consumer FAQ</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Common questions for wellness program users
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {consumerFAQs.map((faq, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleConsumerFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors rounded-lg"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openConsumerFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openConsumerFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Retailer FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Retailer FAQ</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Business questions for retail partners and decision makers
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {retailerFAQs.map((faq, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow">
                <CardContent className="p-0">
                  <button
                    onClick={() => toggleRetailerFAQ(index)}
                    className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/20 transition-colors rounded-lg"
                  >
                    <h3 className="text-lg font-semibold">{faq.question}</h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-muted-foreground transition-transform ${
                        openRetailerFAQ === index ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  {openRetailerFAQ === index && (
                    <div className="px-6 pb-6">
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Still Need Help?</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Our support team is here to help you succeed with PHP Wellness OS
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto items-stretch">
            <Card className="card-gradient border-0 card-shadow text-center flex flex-col justify-between min-h-full">
              <CardHeader className="flex-shrink-0 pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Live Chat</CardTitle>
                <CardDescription className="text-base">Get instant help from our support team</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-2">
                <div className="space-y-4">
                  <Button variant="wellness" className="w-full" onClick={() => window.location.href = 'mailto:info@spnutraceuticals.com?subject=Live Chat Support Request'}>
                    Start Chat
                  </Button>
                  <p className="text-sm text-muted-foreground font-medium">
                    Available 24/7
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 card-shadow text-center flex flex-col justify-between min-h-full">
              <CardHeader className="flex-shrink-0 pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Email Support</CardTitle>
                <CardDescription className="text-base">Send us a detailed message</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-2">
                <div className="space-y-4">
                  <Button variant="wellness" className="w-full" onClick={() => window.location.href = 'mailto:info@spnutraceuticals.com'}>
                    Send Email
                  </Button>
                  <p className="text-sm text-muted-foreground font-medium">
                    Response within 24 hours
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="card-gradient border-0 card-shadow text-center flex flex-col justify-between min-h-full">
              <CardHeader className="flex-shrink-0 pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl mb-2">Phone Support</CardTitle>
                <CardDescription className="text-base">Speak directly with our team</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between pt-2">
                <div className="space-y-4">
                  <Button variant="wellness" className="w-full" onClick={() => window.location.href = 'tel:1-877-335-8732'}>
                    Call Now
                  </Button>
                  <p className="text-sm text-muted-foreground font-medium">
                    Mon-Fri 9AM-6PM EST
                  </p>
                </div>
              </CardContent>
            </Card>
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

export default HelpCenterPage;