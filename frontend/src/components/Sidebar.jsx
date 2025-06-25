import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="w-64 bg-white shadow-lg min-h-screen p-6">
      <h2 className="text-2xl font-bold text-blue-700 mb-6">SmartTrack</h2>
      <nav className="flex flex-col gap-4">
        <Link to="/" className="hover:text-blue-500">Dashboard</Link>
        <Link to="/map" className="hover:text-blue-500">Map View</Link>
        <Link to="/logs" className="hover:text-blue-500">Crack Logs</Link>
        <Link to="/status" className="hover:text-blue-500">Device Health</Link>
      </nav>
    </div>
  );
}

export default Sidebar;
