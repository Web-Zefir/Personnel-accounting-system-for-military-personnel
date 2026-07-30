import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import LeftSidebar from '../../components/Sidebars/LeftSidebar/LeftSidebar';
import RightSidebar from '../../components/Sidebars/RightSidebar/RightSidebar';
import TableView from '../../components/TableView/TableView';
import './MainLayout.css';

interface MainLayoutProps {
  children: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);

  const handleToggleLeftSidebar = () => {
    setIsLeftSidebarOpen(prev => !prev);
  };

  const handleToggleRightSidebar = () => {
    setIsRightSidebarOpen(prev => !prev);
  };

  return (
    <div className="app-container">
      <Header
        isLeftSidebarOpen={isLeftSidebarOpen}
        isRightSidebarOpen={isRightSidebarOpen}
        onToggleLeftSidebar={handleToggleLeftSidebar}
        onToggleRightSidebar={handleToggleRightSidebar}
      />

      <main className="main-layout-body">
        <LeftSidebar isOpen={isLeftSidebarOpen} />

        <div className="main-layout-content">
          {children || <TableView />}
        </div>

        <RightSidebar isOpen={isRightSidebarOpen} />
      </main>
    </div>
  );
};

export default MainLayout;