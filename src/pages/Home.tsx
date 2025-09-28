import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Leaf, Brain, Shield, Smartphone, BarChart3, Users, Zap, Eye, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';
import heroImage from '@/assets/hero-farmland.jpg';

const Home = () => {
  const features = [
    {
      icon: Eye,
      title: 'AI Disease Detection',
      description: 'Advanced computer vision identifies crop diseases instantly from smartphone photos.'
    },
    {
      icon: Brain,
      title: 'Smart Advisory System',
      description: 'Get personalized treatment recommendations based on crop type, region, and weather.'
    },
    {
      icon: Shield,
      title: 'Preventive Care',
      description: 'Early warning system helps prevent disease outbreaks before they spread.'
    }
  ];

  const benefits = [
    {
      icon: BarChart3,
      title: 'Increase Yield by 30%',
      description: 'Early disease detection and treatment significantly improve harvest quality and quantity.'
    },
    {
      icon: Zap,
      title: 'Instant Diagnosis',
      description: 'Get disease identification results in under 3 seconds using advanced AI models.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-First Design',
      description: 'Works perfectly on smartphones - no expensive equipment needed.'
    },
    {
      icon: Users,
      title: 'Expert Network',
      description: 'Connect with agricultural experts and fellow farmers in your region.'
    }
  ];

  const testimonials = [
    {
      name: 'Ramesh Kumar',
      role: 'Wheat Farmer, Punjab',
      content: 'Agribandhu saved my entire wheat crop. Early detection helped me treat rust disease before it spread.',
      crops: 'Wheat, Rice',
      experience: '15 years'
    },
    {
      name: 'Priya Sharma',
      role: 'Organic Farmer, Maharashtra',
      content: 'The AI recommendations are incredibly accurate. My tomato yield increased by 40% this season.',
      crops: 'Tomatoes, Peppers',
      experience: '8 years'
    },
    {
      name: 'Suresh Patel',
      role: 'Cotton Farmer, Gujarat',
      content: 'Mobile app is so easy to use. Just take a photo and get instant advice. Game-changing technology!',
      crops: 'Cotton, Groundnut',
      experience: '20 years'
    }
  ];

  const cropTypes = [
    'Rice', 'Wheat', 'Maize', 'Tomato', 'Potato', 'Cotton', 
    'Sugarcane', 'Soybean', 'Groundnut', 'Mustard', 'Barley', 'Millet'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative px-6 lg:px-8 pt-20 pb-32 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-ai opacity-10 animate-pulse-grow"></div>
        </div>
        
        <div className="relative mx-auto max-w-4xl text-center text-white">
          <div className="mb-6 flex justify-center">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-sm">
              <Leaf className="h-4 w-4 text-ai-glow" />
              <span>AI-Powered Crop Protection</span>
            </div>
          </div>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Your
            <span className="text-ai-gradient"> AI Companion </span>
            in Healthy Farming
          </h1>
          <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto opacity-90">
            Detect crop diseases instantly, get expert treatment advice, and protect your harvest 
            with cutting-edge artificial intelligence. Empowering farmers across India with smart technology.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="btn-ai-glow bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/register">
                Start Free Diagnosis
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
              <Link to="/features">
                See How It Works
              </Link>
            </Button>
          </div>
          
          {/* Quick Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-ai-glow">50K+</div>
              <div className="text-sm opacity-80">Farmers Helped</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-ai-glow">95%</div>
              <div className="text-sm opacity-80">Accuracy Rate</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4">
              <div className="text-2xl font-bold text-ai-glow">12+</div>
              <div className="text-sm opacity-80">Crop Types</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Advanced AI for Crop Health
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Cutting-edge technology meets traditional farming wisdom to protect your crops and maximize yields.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-hover border-border/50 bg-card relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-ai opacity-10 rounded-full -translate-y-12 translate-x-12"></div>
                <CardContent className="p-6 text-center relative">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Simple as 1-2-3
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Protecting your crops has never been easier. Get started in minutes.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-sunrise rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-white font-bold text-xl">1</span>
                <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-full animate-pulse-grow"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Take a Photo</h3>
              <p className="text-muted-foreground">
                Simply photograph the affected plant using your smartphone camera. Our AI works with any mobile device.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-primary-foreground font-bold text-xl">2</span>
                <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-full animate-pulse-grow"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">AI Analysis</h3>
              <p className="text-muted-foreground">
                Our advanced AI instantly analyzes the image and identifies diseases, pests, or nutrient deficiencies.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-earth rounded-full flex items-center justify-center mx-auto mb-4 relative">
                <span className="text-earth-foreground font-bold text-xl">3</span>
                <div className="absolute inset-0 bg-gradient-ai opacity-20 rounded-full animate-pulse-grow"></div>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Get Solutions</h3>
              <p className="text-muted-foreground">
                Receive personalized treatment recommendations, preventive measures, and expert farming advice.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Farmers Choose Agribandhu
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="card-hover text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Supported Crops */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Supports 12+ Major Crops
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI is trained on extensive datasets covering India's most important agricultural crops.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {cropTypes.map((crop, index) => (
              <div key={index} className="bg-gradient-subtle border border-border rounded-full px-6 py-3 text-foreground font-medium">
                {crop}
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your crop?</p>
            <Link to="/features" className="text-primary hover:text-primary-hover font-medium">
              Request crop support →
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by Farmers Across India
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <blockquote className="text-muted-foreground mb-4 italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div className="border-t border-border pt-4">
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-primary">{testimonial.role}</div>
                    <div className="text-xs text-muted-foreground mt-2">
                      Grows: {testimonial.crops} • {testimonial.experience} farming experience
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-ai opacity-20 animate-float-gentle"></div>
        <div className="container text-center relative">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
              Ready to Protect Your Crops?
            </h2>
            <p className="text-lg mb-10 opacity-90">
              Join thousands of farmers already using Agribandhu to detect diseases early, 
              increase yields, and secure their harvests with AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="btn-ai-glow bg-white text-primary hover:bg-white/90" asChild>
                <Link to="/register">
                  Start Free Diagnosis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10" asChild>
                <Link to="/dashboard">
                  View Demo Dashboard
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center space-x-6 text-sm opacity-80">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Free to start</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4" />
                <span>Works offline</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;