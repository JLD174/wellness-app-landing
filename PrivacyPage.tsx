import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, Shield, Lock, Eye, Database, UserCheck, FileText, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPage = () => {
  const privacySections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal information you provide when creating an account (name, email, date of birth)",
        "Health and wellness data from connected devices (Apple Watch, Oura Ring, CGM, etc.)",
        "Genetic information when you choose to provide genetic testing results",
        "Usage data about how you interact with our platform",
        "Device information and technical data for app functionality"
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide personalized wellness recommendations based on your data",
        "Generate insights and analytics about your health trends",
        "Improve our AI algorithms and platform functionality",
        "Send you relevant notifications and updates about your wellness journey",
        "Provide customer support and respond to your inquiries",
        "Conduct research to advance personalized wellness science (anonymized data only)"
      ]
    },
    {
      icon: Lock,
      title: "Data Security & Protection",
      content: [
        "All data is encrypted in transit and at rest using industry-standard encryption",
        "We use secure cloud infrastructure with regular security audits",
        "Access to your data is strictly limited to authorized personnel only",
        "We implement multi-factor authentication and access controls",
        "Regular security assessments and penetration testing",
        "Compliance with healthcare data protection standards (HIPAA, PIPEDA)"
      ]
    },
    {
      icon: UserCheck,
      title: "Your Privacy Rights",
      content: [
        "Access: Request a copy of all personal data we have about you",
        "Correction: Update or correct any inaccurate personal information",
        "Deletion: Request deletion of your personal data (subject to legal requirements)",
        "Portability: Export your data in a machine-readable format",
        "Opt-out: Unsubscribe from marketing communications at any time",
        "Consent withdrawal: Revoke consent for data processing where applicable"
      ]
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
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Privacy Policy</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 hero-gradient text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Your Privacy Matters
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            At SP Nutraceuticals Inc, we're committed to protecting your personal health data and 
            maintaining the highest standards of privacy and security for PHP Wellness OS users.
          </p>
          <div className="flex items-center justify-center space-x-4 text-white/80">
            <span>Last updated: December 11, 2025</span>
            <span>•</span>
            <span>Effective: December 11, 2026</span>
          </div>
        </div>
      </section>

      {/* Privacy Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Privacy at a Glance</h2>
              <p className="text-muted-foreground text-lg">
                Here's how we protect and handle your personal wellness data
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <Card className="card-gradient border-0 card-shadow text-center">
                <CardHeader>
                  <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Secure by Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Your health data is encrypted and protected with enterprise-grade security measures.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 card-shadow text-center">
                <CardHeader>
                  <UserCheck className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>You're in Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Access, update, or delete your data anytime. Your privacy choices are respected.
                  </p>
                </CardContent>
              </Card>

              <Card className="card-gradient border-0 card-shadow text-center">
                <CardHeader>
                  <FileText className="w-12 h-12 text-primary mx-auto mb-4" />
                  <CardTitle>Transparent Practices</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Clear, honest communication about how we collect, use, and protect your information.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Privacy Sections */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            {privacySections.map((section, index) => (
              <Card key={index} className="card-gradient border-0 card-shadow">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 wellness-gradient rounded-lg flex items-center justify-center">
                      <section.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-2xl">{section.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Data Sharing */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="card-gradient border-0 card-shadow">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Database className="w-8 h-8 mr-3 text-primary" />
                  Data Sharing & Third Parties
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">We DO NOT sell your personal health data</h4>
                  <p className="text-muted-foreground">
                    Your wellness data is never sold to third parties for marketing or commercial purposes.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Limited sharing for service delivery</h4>
                  <p className="text-muted-foreground">
                    We may share data with trusted service providers (cloud hosting, analytics) under strict 
                    data processing agreements that require the same level of protection we provide.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Research participation (optional)</h4>
                  <p className="text-muted-foreground">
                    You may choose to participate in anonymized research studies to advance wellness science. 
                    This is always optional and requires explicit consent.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact & Rights */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Exercise Your Privacy Rights</h2>
              <p className="text-muted-foreground text-lg">
                Have questions about your data or want to exercise your privacy rights?
              </p>
            </div>

            {/* Remodeled Single-Column Layout */}
            <div className="max-w-2xl mx-auto">
              <Card className="card-gradient border-0 card-shadow">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Privacy Contact Center</CardTitle>
                  <CardDescription className="text-lg">
                    Questions about your data or need to exercise your privacy rights?
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Button 
                      variant="wellness" 
                      className="w-full"
                      onClick={() => window.location.href = 'mailto:info@spnutra.com'}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Email: info@spnutra.com
                    </Button>
                    <Button 
                      variant="outline" 
                      className="w-full"
                      onClick={() => window.location.href = 'tel:1-877-335-8732'}
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Phone: 1-877-335-8732
                    </Button>
                  </div>
                  
                  <div className="border-t pt-6">
                    <div className="text-center mb-4">
                      <h4 className="font-semibold text-lg mb-2">Data Protection Officer</h4>
                      <p className="text-sm text-muted-foreground mb-4">
                        For formal privacy complaints or detailed inquiries
                      </p>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground space-y-1">
                        <p><strong>SP Nutraceuticals Inc</strong></p>
                        <p>Data Protection Officer</p>
                        <p>Business District, Burlington, ON, Canada</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
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

export default PrivacyPage;