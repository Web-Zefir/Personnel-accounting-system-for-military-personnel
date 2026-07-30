import React from 'react';
import {
  LeftSidebarIcon,
  LayersIcon,
  RightSidebarIcon,
  UndoIcon,
  RedoIcon,
  SearchIcon,
  BellIcon,
  NotificationIcon,
} from '../../icons/icons';
import './Header.css';

interface HeaderProps {
  documentName?: string;
  tableName?: string;
  userInitial?: string;
  onToggleLeftSidebar?: () => void;
  onToggleRightSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  documentName = '00 spisok',
  tableName = 'список',
  onToggleLeftSidebar,
  onToggleRightSidebar,
}) => {
  return (
    <header className="app-header">
      {/* Левая секция: кнопка сайдбара и путь */}
      <div className="header-left">
        <button 
          className="header-icon-btn" 
          onClick={onToggleLeftSidebar}
          title="Свернуть/Развернуть левую панель"
        >
          <LeftSidebarIcon />
        </button>

        <nav className="breadcrumbs">
          <span className="breadcrumb-home">
            <LayersIcon />
          </span>
          <span className="breadcrumb-link">@admin</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-doc" title={documentName}>{documentName}</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active" title={tableName}>{tableName}</span>
        </nav>
      </div>

      {/* Правая секция: инструменты и аватар */}
      <div className="header-right">
        <button className="header-icon-btn" title="Отменить (Ctrl+Z)">
          <UndoIcon />
        </button>
        
        <button className="header-icon-btn" title="Повторить (Ctrl+Y)">
          <RedoIcon />
        </button>

        <div className="header-divider-wrapper" />

        <button className="header-icon-btn" title="Поиск">
          <SearchIcon />
        </button>

        <button className="header-icon-btn" title="Уведомления">
          <BellIcon />
        </button>

        <button className="header-icon-btn" title="Сообщения">
          <NotificationIcon />
        </button>

        <div className="header-divider-wrapper" />

        <button 
          className="header-icon-btn" 
          onClick={onToggleRightSidebar}
          title="Открыть панель свойств"
        >
          <RightSidebarIcon />
        </button>
      </div>
    </header>
  );
};

export default Header;