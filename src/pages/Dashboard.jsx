
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import Navigation from '@/components/Navigation';
import { 
  AlertTriangle, 
  CheckCircle, 
  Clock, 
  MapPin,
  TrendingUp,
  Activity
} from 'lucide-react';

const Dashboard = () => {
  const alerts = [
    { id: 'CR001', location: 'Track 2A, KM 45.2', severity: 'Critical', time: '2 hours ago', status: 'pending' },
    { id: 'CR002', location: 'Track 1B, KM 23.7', severity: 'Major', time: '4 hours ago', status: 'inspected' },
    { id: 'CR003', location: 'Track 3C, KM 67.1', severity: 'Minor', time: '6 hours ago', status: 'resolved' },
    { id: 'CR004', location: 'Track 2B, KM 12.9', severity: 'Major', time: '8 hours ago', status: 'pending' },
  ];

  const stats = [
    { title: 'Total Scanned Today', value: '142 KM', icon: Activity, trend: '+12%' },
    { title: 'Active Alerts', value: '8', icon: AlertTriangle, trend: '-5%' },
    { title: 'Resolved Issues', value: '24', icon: CheckCircle, trend: '+18%' },
    { title: 'Track Coverage', value: '87%', icon: TrendingUp, trend: '+3%' },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-100 text-red-800 border-red-200';
      case 'Major': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'Minor': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'resolved': return 'bg-green-100 text-green-800';
      case 'inspected': return 'bg-blue-100 text-blue-800';
      case 'pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Real-time track monitoring and crack detection</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                      <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-green-600 flex items-center mt-1">
                        <TrendingUp className="h-3 w-3 mr-1" />
                        {stat.trend} from yesterday
                      </p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-full">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-orange-600" />
                <span>Live Crack Alerts</span>
              </CardTitle>
              <CardDescription>Recent crack detections requiring attention</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {alerts.map((alert) => (
                  <div key={alert.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                    <div className="flex items-center space-x-4">
                      <div className="p-2 bg-white rounded-full">
                        <MapPin className="h-4 w-4 text-gray-600" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{alert.id}</p>
                        <p className="text-sm text-gray-600">{alert.location}</p>
                        <p className="text-xs text-gray-500 flex items-center mt-1">
                          <Clock className="h-3 w-3 mr-1" />
                          {alert.time}
                        </p>
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <Badge className={getSeverityColor(alert.severity)}>
                        {alert.severity}
                      </Badge>
                      <Badge variant="outline" className={getStatusColor(alert.status)}>
                        {alert.status}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Track Coverage</CardTitle>
              <CardDescription>Today's scanning progress</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Track 1</span>
                  <span className="text-sm text-gray-900">92%</span>
                </div>
                <Progress value={92} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Track 2</span>
                  <span className="text-sm text-gray-900">87%</span>
                </div>
                <Progress value={87} className="h-2" />
              </div>
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-600">Track 3</span>
                  <span className="text-sm text-gray-900">78%</span>
                </div>
                <Progress value={78} className="h-2" />
              </div>
              <div className="pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-900">Overall Progress</span>
                  <span className="text-lg font-bold text-blue-600">87%</span>
                </div>
                <Progress value={87} className="h-3 mt-2" />
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
