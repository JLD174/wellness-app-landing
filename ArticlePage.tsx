import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, User, Clock, Share2, Bookmark, ThumbsUp } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const ArticlePage = () => {
  const { id } = useParams();

  // Sample article data - in a real app, this would come from an API
  const article = {
    id: 1,
    title: "The Future of Personalized Wellness: How AI is Revolutionizing Health Tracking",
    content: `
      <p>The landscape of personal wellness is undergoing a revolutionary transformation, driven by the convergence of artificial intelligence, genetic science, and advanced wearable technology. As we stand at the threshold of a new era in health optimization, the traditional one-size-fits-all approach to wellness is giving way to highly personalized, data-driven solutions that adapt to each individual's unique biological profile.</p>

      <h2>The Evolution of Wellness Technology</h2>
      <p>Over the past decade, we've witnessed an explosion in wellness technology adoption. From simple step counters to sophisticated biomarker tracking devices, consumers now have access to an unprecedented amount of personal health data. However, the real breakthrough isn't just in data collection—it's in the intelligent interpretation and actionable insights that AI can provide.</p>

      <p>Modern wellness platforms like PHP Wellness OS are pioneering this integration by connecting disparate data sources from devices like Apple Watch, Oura Ring, Continuous Glucose Monitors (CGMs), Brainband, Lumen, Whoop, Garmin, and Fitbit into a unified ecosystem. This comprehensive approach allows for a holistic view of an individual's health status that was previously impossible to achieve.</p>

      <h2>The Power of Genetic Integration</h2>
      <p>Perhaps the most exciting development in personalized wellness is the integration of genetic data with real-time biometric monitoring. By understanding an individual's genetic predispositions—from nutrient metabolism to exercise response—AI algorithms can provide recommendations that are truly tailored to each person's biological makeup.</p>

      <p>For example, someone with genetic variants affecting caffeine metabolism might receive different recommendations about coffee consumption timing compared to someone who metabolizes caffeine quickly. Similarly, individuals with genetic predispositions to certain nutrient deficiencies can receive proactive supplementation recommendations before deficiencies manifest.</p>

      <h2>Real-Time Adaptation and Learning</h2>
      <p>What sets modern AI-powered wellness platforms apart is their ability to learn and adapt continuously. Unlike static health recommendations, these systems observe how individuals respond to various interventions and adjust their suggestions accordingly. This creates a feedback loop that becomes more accurate and personalized over time.</p>

      <p>The integration of multiple data streams—sleep patterns from Oura Ring, metabolic data from Lumen, heart rate variability from Whoop, and glucose responses from CGMs—provides a comprehensive picture that enables sophisticated pattern recognition and predictive analytics.</p>

      <h2>The Role of Biomarker Tracking</h2>
      <p>Advanced biomarker tracking represents another frontier in personalized wellness. By monitoring key health indicators at the molecular level, individuals can gain insights into their health status that go far beyond what traditional wellness metrics can provide. This includes everything from inflammatory markers to hormone levels, providing a deeper understanding of overall health and wellness optimization opportunities.</p>

      <h2>Challenges and Opportunities</h2>
      <p>While the potential of AI-powered personalized wellness is immense, several challenges remain. Data privacy and security are paramount concerns, as is ensuring that AI recommendations are based on solid scientific evidence. Additionally, the integration of multiple data sources requires sophisticated algorithms that can handle the complexity and variability of human biology.</p>

      <p>However, the opportunities far outweigh the challenges. As AI algorithms become more sophisticated and our understanding of human biology deepens, we're moving toward a future where preventive health measures can be precisely tailored to each individual's needs, potentially preventing diseases before they occur and optimizing human performance in ways we've never imagined.</p>

      <h2>Looking Ahead</h2>
      <p>The future of personalized wellness lies in the seamless integration of technology, science, and human-centered design. As platforms like PHP Wellness OS continue to evolve, we can expect to see even more sophisticated AI capabilities, broader device integration, and deeper insights into the complex relationships between genetics, lifestyle, and health outcomes.</p>

      <p>This revolution in personalized wellness isn't just about technology—it's about empowering individuals to take control of their health journey with unprecedented precision and insight. As we continue to unlock the secrets of human biology and harness the power of AI, the dream of truly personalized healthcare is becoming a reality.</p>
    `,
    author: "Dr. Sarah Chen",
    date: "December 10, 2024",
    readTime: "5 min read",
    category: "AI & Technology",
    image: "/images/ai_wellness_future_dashboard_20251211_165437.png"
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <Link to="/blog" className="flex items-center space-x-2 text-primary hover:text-primary/80 smooth-transition">
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Blog</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Button variant="outline" size="sm">
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Bookmark className="w-4 h-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Article Content */}
      <article className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Article Header */}
            <div className="mb-8">
              <Badge className="mb-4">{article.category}</Badge>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {article.title}
              </h1>
              
              {/* Author Info */}
              <div className="flex items-center space-x-6 text-muted-foreground mb-8">
                <div className="flex items-center space-x-2">
                  <User className="w-5 h-5" />
                  <span className="font-medium">{article.author}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>{article.date}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span>{article.readTime}</span>
                </div>
              </div>

              {/* Featured Image */}
              <div className="mb-8">
                <img 
                  src={article.image} 
                  alt={article.title}
                  className="w-full rounded-2xl card-shadow"
                />
              </div>
            </div>

            {/* Article Body */}
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ __html: article.content }}
                className="text-muted-foreground leading-relaxed space-y-6"
              />
            </div>

            {/* Article Footer */}
            <div className="mt-12 pt-8 border-t border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <ThumbsUp className="w-4 h-4 mr-2" />
                    Like Article
                  </Button>
                  <Button variant="outline" size="sm">
                    <Share2 className="w-4 h-4 mr-2" />
                    Share
                  </Button>
                </div>
                <Badge variant="outline">{article.category}</Badge>
              </div>
            </div>

            {/* Back to Blog */}
            <div className="mt-12 text-center">
              <Link to="/blog">
                <Button variant="wellness" size="lg">
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to All Articles
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Related Articles CTA */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Explore More Wellness Insights</h2>
          <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
            Discover more articles about personalized wellness, AI technology, and health optimization
          </p>
          <Link to="/blog">
            <Button variant="wellness" size="lg">
              View All Articles
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ArticlePage;