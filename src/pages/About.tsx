import React from 'react';
import { Users, Target, Award, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import Layout from '@/components/layout/Layout';

const About = () => {
  const values = [
    {
      icon: Users,
      title: 'People First',
      description: 'We believe technology should empower people, not replace them. Every feature we build puts human experience at the center.'
    },
    {
      icon: Target,
      title: 'Purpose Driven',
      description: 'Our mission is clear: to create tools that help teams achieve their goals faster and more efficiently than ever before.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We set the highest standards for ourselves and our platform, constantly pushing the boundaries of what\'s possible.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'From startups to enterprises across 150+ countries, we\'re building solutions that scale with your ambitions.'
    }
  ];

  const team = [
    {
      name: 'Alex Thompson',
      role: 'CEO & Founder',
      bio: 'Former VP of Engineering at TechGiant. 15 years building scalable platforms.',
      image: 'AT'
    },
    {
      name: 'Maria Rodriguez',
      role: 'CTO',
      bio: 'Ex-Google engineer with expertise in distributed systems and AI.',
      image: 'MR'
    },
    {
      name: 'David Kim',
      role: 'Head of Design',
      bio: 'Award-winning designer previously at Apple and Airbnb.',
      image: 'DK'
    },
    {
      name: 'Sarah Johnson',
      role: 'VP of Product',
      bio: 'Product leader with deep understanding of user-centered design.',
      image: 'SJ'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-20 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Empowering
            <span className="text-gradient"> Farmers </span>
            with AI Technology
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Founded in 2020, Agribandhu emerged from a simple belief: that every farmer deserves access to 
            cutting-edge technology. Today, we're proud to serve over 50,000 farmers across India.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Agribandhu was born out of a deep understanding of the challenges Indian farmers face daily. 
                  Our founders, having worked closely with agricultural communities across the country, 
                  recognized the urgent need for accessible technology solutions.
                </p>
                <p>
                  We started with a simple question: What if every farmer could have an agricultural expert 
                  in their pocket? This question drove us to develop an AI system that combines traditional 
                  farming wisdom with cutting-edge computer vision technology.
                </p>
                <p>
                  Three years later, we've built a platform that doesn't just detect diseases—it empowers 
                  farmers with knowledge. Our users report 30% higher yields and 60% reduction in crop losses 
                  due to early disease detection.
                </p>
              </div>
            </div>
            <div className="relative">
              <Card className="p-8 bg-gradient-subtle border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-3xl font-bold text-gradient">50K+</div>
                      <div className="text-sm text-muted-foreground">Farmers Served</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">12+</div>
                      <div className="text-sm text-muted-foreground">Crop Types</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">95%</div>
                      <div className="text-sm text-muted-foreground">AI Accuracy</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-gradient">24/7</div>
                      <div className="text-sm text-muted-foreground">Support</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do, from product decisions to customer support.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meet Our Team
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate people behind Angribandu, dedicated to building tools that make a difference.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6">
                  <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-bold text-lg">
                      {member.image}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              To democratize access to professional-grade tools that empower every team, 
              regardless of size or industry, to achieve their full potential. We believe 
              that when great teams have great tools, they can build extraordinary things.
            </p>
            <div className="bg-gradient-subtle p-8 rounded-lg border">
              <blockquote className="text-xl font-medium text-foreground italic">
                "Technology is best when it brings people together and amplifies human capability. 
                That's the future we're building at Angribandu."
              </blockquote>
              <p className="mt-4 text-muted-foreground">— Alex Thompson, CEO & Founder</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;