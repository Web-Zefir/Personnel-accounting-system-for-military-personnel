import React from 'react';
import './RightSidebar.css';
import { DotsIcon } from '../../../icons/icons';



interface LeftSidebarProps {
  isOpen: boolean;
}

export const RightSidebar: React.FC<LeftSidebarProps> = ({
  isOpen = true,
}) => {

  return (
    <aside className={`app-sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-top-action"/>
      <div className="sidebar-divider" />
      <div className="section-header">Заглушка</div>
    
    </aside>
  );
};

export default RightSidebar;