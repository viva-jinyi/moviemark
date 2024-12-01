'use client';

import { useSidebar } from '@/contexts/SidebarContext';
import Sidebar from './Sidebar';

const ClientSidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();
  
  return <Sidebar isOpen={isOpen} onClose={closeSidebar} />;
};

export default ClientSidebar; 