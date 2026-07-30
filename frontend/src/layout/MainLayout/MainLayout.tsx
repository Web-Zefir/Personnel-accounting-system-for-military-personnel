import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './MainLayout.css';
import LeftSidebar from '../../components/Sidebars/LeftSidebar/LeftSidebar';

interface MainLayoutProps {
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  
  const handleToggleLeftSidebar = () => {
    setIsLeftSidebarOpen((prev) => !prev);
  };

  return (
    <div className="main-layout">
      <Header 
        onToggleLeftSidebar={handleToggleLeftSidebar} 
      />

      <div className="main-layout-body">
        <LeftSidebar
          isOpen={isLeftSidebarOpen}
        />

        <main className="main-layout-content">
          {children || (
            <div className="layout-placeholder">
              <p>Здесь будет отображаться таблица</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default MainLayout;