import React from 'react';
import './RightSidebar.css';

interface LeftSidebarProps {
  isOpen: boolean;
}

export const RightSidebar: React.FC<LeftSidebarProps> = ({
  isOpen = true,
}) => {

  return (
    <aside className={`right-sidebar ${isOpen ? 'expanded' : 'collapsedd'}`}>
      <div className="sidebar-top-action"/>
      <div className="sidebar-divider" />
      <div className="section-header">Заглушка</div>
    
    </aside>
  );
};

export default RightSidebar;