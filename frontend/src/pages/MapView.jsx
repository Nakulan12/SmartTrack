
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Navigation from '@/components/Navigation';
import { 
  MapPin, 
  Filter, 
  Search,
  Layers,
  AlertTriangle,
  CheckCircle,
  Clock
} from 'lucide-react';

const MapView = () => {
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');

  const crackData = [
    { 
      id: 'CR001', 
      lat: 40.7128, 
      lng: -74.0060, 
      severity: 'Critical', 
      status: 'pending',
      timestamp: '2024-01-15 14:30',
      location: 'Track 2A, KM 45.2',
      inspector: 'John Smith'
    },
    { 
      id: 'CR002', 
      lat: 40.7589, 
      lng: -73.9851, 
      severity: 'Major', 
      status: 'inspected',
      timestamp: '2024-01-15 12:15',
      location: 'Track 1B, KM 23.7',
      inspector: 'Sarah Johnson'
    },
    { 
      id: 'CR003', 
      lat: 40.7505, 
      lng: -73.9934, 
      severity: 'Minor', 
      status: 'resolved',
      timestamp: '2024-01-15 10:45',
      location: 'Track 3C, KM 67.1',
      inspector: 'Mike Davis'
    },
  ];

  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'Critical': return 'bg-red-500';
      case 'Major': return 'bg-orange-500';
      case 'Minor': return 'bg-yellow-500';
      default: return 'bg-gray-500';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'resolved': return <CheckCircle className="h-4 w-4 text-green-600" />;
      case 'inspected': return <Clock className="h-4 w-4 text-blue-600" />;
      case 'pending': return <AlertTriangle className="h-4 w-4 text-orange-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navigation />
      
      <div className="flex-1 flex flex-col">
        <div className="bg-white border-b border-gray-200 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Track Map View</h1>
              <p className="text-gray-600">Interactive GPS-based crack detection map</p>
            </div>
            <div className="flex items-center space-x-3">
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" size="sm">
                <Layers className="h-4 w-4 mr-2" />
                Layers
              </Button>
              <Button variant="outline" size="sm">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
            </div>
          </div>
        </div>

        <div className="flex-1 flex">
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100">
              <div className="absolute inset-0 opacity-50" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.02'%3E%3Cpath d='M20 20c0-11.046-8.954-20-20-20s-20 8.954-20 20 8.954 20 20 20 20-8.954 20-20zM0 0h20v20H0V0zm20 20h20v20H20V20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
              }}></div>
              
              <div className="absolute inset-0">
                <div className="absolute top-1/4 left-0 right-0 h-1 bg-gray-600 opacity-30"></div>
                <div className="absolute top-2/4 left-0 right-0 h-1 bg-gray-600 opacity-30"></div>
                <div className="absolute top-3/4 left-0 right-0 h-1 bg-gray-600 opacity-30"></div>
              </div>

              {crackData.map((crack, index) => (
                <div 
                  key={crack.id}
                  className={`absolute w-6 h-6 rounded-full border-2 border-white shadow-lg cursor-pointer transform -translate-x-1/2 -translate-y-1/2 hover:scale-110 transition-transform ${getSeverityColor(crack.severity)}`}
                  style={{
                    left: `${20 + index * 25}%`,
                    top: `${30 + index * 15}%`
                  }}
                  onClick={() => setSelectedMarker(crack)}
                >
                  <div className="absolute inset-0 rounded-full animate-ping bg-white opacity-30"></div>
                </div>
              ))}

              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <Button size="sm" variant="outline" className="bg-white">+</Button>
                <Button size="sm" variant="outline" className="bg-white">-</Button>
              </div>
            </div>

            {selectedMarker && (
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <Card className="w-80 shadow-xl">
                  <CardHeader className="pb-3">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{selectedMarker.id}</CardTitle>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => setSelectedMarker(null)}
                      >
                        ×
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Severity:</span>
                      <Badge className={`${getSeverityColor(selectedMarker.severity)} text-white`}>
                        {selectedMarker.severity}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">Status:</span>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(selectedMarker.status)}
                        <span className="text-sm capitalize">{selectedMarker.status}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Location:</span>
                      <p className="text-sm font-medium">{selectedMarker.location}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Timestamp:</span>
                      <p className="text-sm">{selectedMarker.timestamp}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">Inspector:</span>
                      <p className="text-sm">{selectedMarker.inspector}</p>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <Button size="sm" className="w-full">
                        View Details
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </div>

          <div className="w-80 bg-white border-l border-gray-200 p-4 overflow-y-auto">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Detected Cracks</h3>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {['all', 'critical', 'major', 'minor'].map((filter) => (
                <Button
                  key={filter}
                  variant={activeFilter === filter ? "default" : "outline"}
                  size="sm"
                  onClick={() => setActiveFilter(filter)}
                  className="capitalize"
                >
                  {filter}
                </Button>
              ))}
            </div>

            <div className="space-y-3">
              {crackData.map((crack) => (
                <Card 
                  key={crack.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${selectedMarker?.id === crack.id ? 'ring-2 ring-blue-500' : ''}`}
                  onClick={() => setSelectedMarker(crack)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-gray-900">{crack.id}</span>
                      <Badge className={`${getSeverityColor(crack.severity)} text-white text-xs`}>
                        {crack.severity}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{crack.location}</p>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{crack.timestamp}</span>
                      <div className="flex items-center space-x-1">
                        {getStatusIcon(crack.status)}
                        <span className="capitalize">{crack.status}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
