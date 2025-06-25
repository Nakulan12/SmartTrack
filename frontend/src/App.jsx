import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import MapView from './pages/MapView';
import Logs from './pages/Logs';
import DeviceStatus from './pages/DeviceStatus';

function App() {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/map" element={<MapView />} />
          <Route path="/logs" element={<Logs />} />
          <Route path="/status" element={<DeviceStatus />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
