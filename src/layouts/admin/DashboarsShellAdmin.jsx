import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
export default function DashboardShellAdmin({ children, nav }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <div className='flex h-screen overflow-hidden bg-gray-100'>
        <Sidebar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          nav={nav}
        />
        <div className='flex-1 overflow-auto focus:outline-none '>
          <Navbar setSidebarOpen={setSidebarOpen} />
          {children}
        </div>
      </div>
    </>
  );
}
