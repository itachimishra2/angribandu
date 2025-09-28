import React, { useState } from 'react';
import { Camera, Upload, Leaf, AlertTriangle, TrendingUp, Activity, Plus, Calendar, FileText, Settings, Eye, CheckCircle } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/Layout';

const Dashboard = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onload = (e) => {
        setPreviewUrl(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAnalyze = () => {
    // Note: This would connect to AI backend for actual disease detection
    alert("Backend integration required for AI disease detection. Please connect Supabase for full functionality.");
  };

  const stats = [
    {
      title: 'Crops Analyzed',
      value: '187',
      change: '+23%',
      icon: Leaf,
      positive: true
    },
    {
      title: 'Diseases Detected',
      value: '12',
      change: '+2',
      icon: AlertTriangle,
      positive: true
    },
    {
      title: 'Healthy Crops',
      value: '175',
      change: '+21',
      icon: CheckCircle,
      positive: true
    },
    {
      title: 'Success Rate',
      value: '96%',
      change: '+3%',
      icon: TrendingUp,
      positive: true
    }
  ];

  const recentAnalyses = [
    {
      crop: 'Tomato Plants',
      status: 'Healthy',
      confidence: 96,
      date: '2024-01-15',
      location: 'Field A-2'
    },
    {
      crop: 'Wheat Crop',
      status: 'Disease Detected',
      confidence: 89,
      date: '2024-01-14',
      location: 'Field B-1'
    },
    {
      crop: 'Rice Paddy',
      status: 'Healthy',
      confidence: 94,
      date: '2024-01-13',
      location: 'Field C-3'
    },
    {
      crop: 'Corn Field',
      status: 'Under Review',
      confidence: 72,
      date: '2024-01-12',
      location: 'Field D-1'
    }
  ];

  const recentActivity = [
    {
      user: 'Farmer Kumar',
      action: 'analyzed crop images for',
      project: 'Tomato Field A-2',
      time: '2 hours ago'
    },
    {
      user: 'Agricultural Expert',
      action: 'provided recommendations for',
      project: 'Wheat Disease Treatment',
      time: '4 hours ago'
    },
    {
      user: 'Field Manager',
      action: 'updated field status for',
      project: 'Rice Paddy C-3',
      time: '6 hours ago'
    },
    {
      user: 'Crop Specialist',
      action: 'uploaded treatment plan for',
      project: 'Corn Field Treatment',
      time: '1 day ago'
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Healthy':
        return 'bg-success text-success-foreground';
      case 'Disease Detected':
        return 'bg-destructive text-destructive-foreground';
      case 'Under Review':
        return 'bg-warning text-warning-foreground';
      default:
        return 'bg-secondary text-secondary-foreground';
    }
  };

  return (
    <Layout showFooter={false}>
      <div className="container py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Crop Analysis Dashboard</h1>
            <p className="text-muted-foreground mt-2">Monitor your crop health and get AI-powered disease detection insights.</p>
          </div>
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            <Button variant="outline" size="sm">
              <Calendar className="mr-2 h-4 w-4" />
              This Week
            </Button>
            <Button size="sm" className="btn-glow">
              <Camera className="mr-2 h-4 w-4" />
              Analyze Crop
            </Button>
          </div>
        </div>

        {/* Image Upload Section */}
        <Card className="mb-8 bg-gradient-to-r from-primary/5 to-accent/5 border-primary/20">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Camera className="mr-2 h-5 w-5 text-primary" />
              AI Crop Disease Detection
            </CardTitle>
            <CardDescription>Upload an image of your crop to detect diseases and get expert recommendations</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Upload Area */}
              <div className="space-y-4">
                <div className="border-2 border-dashed border-primary/30 rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                  <Input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                    id="crop-image-upload"
                  />
                  <label htmlFor="crop-image-upload" className="cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-primary/60 mb-4" />
                    <p className="text-sm font-medium text-foreground mb-2">Click to upload crop image</p>
                    <p className="text-xs text-muted-foreground">PNG, JPG up to 10MB</p>
                  </label>
                </div>
                
                {selectedImage && (
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-foreground">{selectedImage.name}</span>
                    <Button onClick={handleAnalyze} className="btn-glow">
                      <Eye className="mr-2 h-4 w-4" />
                      Analyze Disease
                    </Button>
                  </div>
                )}
              </div>

              {/* Preview Area */}
              <div className="flex items-center justify-center">
                {previewUrl ? (
                  <div className="relative">
                    <img 
                      src={previewUrl} 
                      alt="Crop preview" 
                      className="max-w-full max-h-64 rounded-lg shadow-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-primary">
                      Ready for Analysis
                    </Badge>
                  </div>
                ) : (
                  <div className="w-full h-64 bg-muted/30 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Leaf className="mx-auto h-16 w-16 text-muted-foreground/50 mb-4" />
                      <p className="text-muted-foreground">Image preview will appear here</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="card-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className={`text-sm flex items-center ${
                      stat.positive ? 'text-success' : 'text-destructive'
                    }`}>
                      <TrendingUp className={`mr-1 h-3 w-3 ${stat.positive ? '' : 'rotate-180'}`} />
                      {stat.change}
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-primary-foreground" />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Analyses */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between">
                <div>
                  <CardTitle>Recent Crop Analyses</CardTitle>
                  <CardDescription>Your latest crop health assessments</CardDescription>
                </div>
                <Button variant="ghost" size="sm">
                  View All
                </Button>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentAnalyses.map((analysis, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border border-border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-medium text-foreground">{analysis.crop}</h4>
                          <Badge className={getStatusColor(analysis.status)}>
                            {analysis.status}
                          </Badge>
                        </div>
                        <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                          <span>{analysis.location}</span>
                          <span>Analyzed: {analysis.date}</span>
                        </div>
                        <div className="mt-3">
                          <div className="flex items-center justify-between text-sm mb-1">
                            <span className="text-muted-foreground">AI Confidence</span>
                            <span className="text-foreground font-medium">{analysis.confidence}%</span>
                          </div>
                          <div className="w-full bg-muted rounded-full h-2">
                            <div
                              className="bg-gradient-primary h-2 rounded-full transition-all"
                              style={{ width: `${analysis.confidence}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Recent Activity & Quick Actions */}
          <div className="space-y-6">
            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Camera className="mr-2 h-4 w-4" />
                  Analyze New Crop
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Leaf className="mr-2 h-4 w-4" />
                  Crop Health Report
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <AlertTriangle className="mr-2 h-4 w-4" />
                  Disease Alerts
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Settings className="mr-2 h-4 w-4" />
                  Account Settings
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest farming and analysis updates</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground text-xs font-medium">
                          {activity.user.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm text-foreground">
                          <span className="font-medium">{activity.user}</span>{' '}
                          {activity.action}{' '}
                          <span className="font-medium">{activity.project}</span>
                        </p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;