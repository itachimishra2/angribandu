import React from 'react';
import { Shield, Zap, Users, BarChart3, Globe, Smartphone, Lock, Cloud } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Layout from '@/components/layout/Layout';

const Features = () => {
  const mainFeatures = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and GDPR ready.',
      features: ['256-bit AES encryption', 'SSO integration', 'Audit logs', 'Role-based access']
    },
    {
      icon: Zap,
      title: 'Lightning Performance',
      description: 'Optimized for speed with real-time collaboration and sub-second response times.',
      features: ['Real-time sync', 'CDN delivery', 'Caching layers', '99.9% uptime SLA']
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Built for modern distributed teams with advanced collaboration features.',
      features: ['Live collaboration', 'Video integration', 'Smart notifications', 'Team spaces']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics',
      description: 'Deep insights into team performance and project metrics.',
      features: ['Custom dashboards', 'Performance metrics', 'Export reports', 'AI insights']
    }
  ];

  const additionalFeatures = [
    {
      icon: Globe,
      title: 'Global Accessibility',
      description: 'Multi-language support and accessibility compliance for inclusive teams.'
    },
    {
      icon: Smartphone,
      title: 'Mobile First',
      description: 'Native mobile apps for iOS and Android with offline capability.'
    },
    {
      icon: Lock,
      title: 'Privacy Focused',
      description: 'Your data stays yours. We never sell or share user information.'
    },
    {
      icon: Cloud,
      title: 'Cloud Native',
      description: 'Built on modern cloud infrastructure for reliability and scale.'
    }
  ];

  const integrations = [
    'Slack', 'Microsoft Teams', 'Google Workspace', 'Jira', 'Trello', 
    'GitHub', 'GitLab', 'Figma', 'Adobe Creative Suite', 'Salesforce'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="px-6 lg:px-8 pt-20 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Powerful
            <span className="text-gradient"> Features </span>
            for Modern Teams
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-2xl mx-auto">
            Everything you need to build, collaborate, and scale your projects. 
            Designed for teams who demand both power and simplicity.
          </p>
        </div>
      </section>

      {/* Main Features */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {mainFeatures.map((feature, index) => (
              <Card key={index} className="card-hover border-border/50">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <feature.icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{feature.title}</CardTitle>
                    </div>
                  </div>
                  <CardDescription className="text-base mt-4">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-3">
                    {feature.features.map((item, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-sm text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              More Features You'll Love
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Additional capabilities that make Angribandu the complete solution for your team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalFeatures.map((feature, index) => (
              <Card key={index} className="card-hover text-center border-border/50">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section className="py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Seamless Integrations
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
              Connect with the tools you already use. Over 100+ integrations and counting.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {integrations.map((integration, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {integration}
              </Badge>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-muted-foreground mb-4">Don't see your favorite tool?</p>
            <a href="#" className="text-primary hover:text-primary-hover font-medium">
              Request an integration →
            </a>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Why Teams Choose Angribandu
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">3x</div>
                <div className="text-muted-foreground">Faster Setup</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Get started in minutes, not weeks
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">40%</div>
                <div className="text-muted-foreground">More Productive</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Streamlined workflows save time
                </div>
              </div>
              <div>
                <div className="text-4xl font-bold text-gradient mb-2">60%</div>
                <div className="text-muted-foreground">Higher Satisfaction</div>
                <div className="text-sm text-muted-foreground mt-2">
                  Teams love using Angribandu
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Features;