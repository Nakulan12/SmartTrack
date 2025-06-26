import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Navigation from '@/components/Navigation';
import { 
  Search, 
  Filter, 
  Download, 
  Eye,
  Calendar,
  MapPin,
  User,
  AlertTriangle
} from 'lucide-react';

const Reports = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [severityFilter, setSeverityFilter] = useState('all');

  const reportsData = [
    {
      id: 'CR001',
      date: '2024-01-15',
      time: '14:30',
      location: 'Track 2A, KM 45.2',
      coordinates: '40.7128, -74.0060',
      severity: 'Critical',
      status: 'Pending',
      inspector: 'Rajesh Kumar',
      description: 'Major crack detected across rail joint'
    },
    {
      id: 'CR002',
      date: '2024-01-15',
      time: '12:15',
      location: 'Track 1B, KM 23.7',
      coordinates: '40.7589, -73.9851',
      severity: 'Major',
      status: 'Inspected',
      inspector: 'Priya Sharma',
      description: 'Hairline fracture on rail surface'
    },
    {
      id: 'CR003',
      date: '2024-01-15',
      time: '10:45',
      location: 'Track 3C, KM 67.1',
      coordinates: '40.7505, -73.9934',
      severity: 'Minor',
      status: 'Resolved',
      inspector: 'Amit Patel',
      description: 'Small surface crack, welded and repaired'
    }
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
      case 'Resolved': return 'bg-green-100 text-green-800';
      case 'Inspected': return 'bg-blue-100 text-blue-800';
      case 'Pending': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredReports = reportsData.filter(report => {
    const matchesSearch = report.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         report.inspector.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || report.status.toLowerCase() === statusFilter;
    const matchesSeverity = severityFilter === 'all' || report.severity.toLowerCase() === severityFilter;
    
    return matchesSearch && matchesStatus && matchesSeverity;
  });

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation />
      
      <div className="flex-1 p-6">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Crack Reports</h1>
          <p className="text-gray-600">Detailed crack detection reports and status tracking</p>
        </div>

        <Card className="mb-6">
          <CardContent className="p-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Search by ID, location, or inspector..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
              </div>
              
              <div className="flex gap-3">
                <Select value={statusFilter} onValueChange={setStatusFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Status</SelectItem>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="inspected">Inspected</SelectItem>
                    <SelectItem value="resolved">Resolved</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={severityFilter} onValueChange={setSeverityFilter}>
                  <SelectTrigger className="w-40">
                    <SelectValue placeholder="Severity" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Severity</SelectItem>
                    <SelectItem value="critical">Critical</SelectItem>
                    <SelectItem value="major">Major</SelectItem>
                    <SelectItem value="minor">Minor</SelectItem>
                  </SelectContent>
                </Select>

                <Button variant="outline">
                  <Filter className="h-4 w-4 mr-2" />
                  More Filters
                </Button>

                <Button>
                  <Download className="h-4 w-4 mr-2" />
                  Export
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span>Crack Detection Reports ({filteredReports.length})</span>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <AlertTriangle className="h-4 w-4" />
                <span>{filteredReports.filter(r => r.status === 'Pending').length} pending</span>
              </div>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Crack ID</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Date & Time</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Location</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Coordinates</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Severity</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Status</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Inspector</th>
                    <th className="text-left py-3 px-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredReports.map((report) => (
                    <tr key={report.id} className="border-b border-gray-100 hover:bg-gray-50">
                      <td className="py-4 px-4">
                        <span className="font-medium text-blue-600">{report.id}</span>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4 text-gray-400" />
                          <div>
                            <div className="text-sm font-medium">{report.date}</div>
                            <div className="text-xs text-gray-500">{report.time}</div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <MapPin className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{report.location}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <span className="text-xs text-gray-500 font-mono">{report.coordinates}</span>
                      </td>
                      <td className="py-4 px-4">
                        <Badge className={getSeverityColor(report.severity)}>
                          {report.severity}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <Badge variant="outline" className={getStatusColor(report.status)}>
                          {report.status}
                        </Badge>
                      </td>
                      <td className="py-4 px-4">
                        <div className="flex items-center space-x-2">
                          <User className="h-4 w-4 text-gray-400" />
                          <span className="text-sm">{report.inspector}</span>
                        </div>
                      </td>
                      <td className="py-4 px-4">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {filteredReports.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500">No reports found matching your criteria.</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Reports;
