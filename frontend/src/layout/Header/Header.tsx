import React from 'react';
import {
  LeftSidebar,
  Layers,
  RightSidebar,
  Undo,
  Redo,
  Divider,
  Search,
  Bell,
  Notification,
} from '../../icons/icons';
import './Header.css';

interface HeaderProps {
  documentName?: string;
  tableName?: string;
  onToggleLeftSidebar?: () => void;
  onToggleRightSidebar?: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  documentName = 'Учёт личного состава ВДВ',
  tableName = 'Штатно-должностная книга',
  onToggleLeftSidebar,
  onToggleRightSidebar,
}) => {
  return (
    <header className="app-header">
      {/* Левая часть: Управление сайдбаром и Навигация */}
      <div className="header-left">
        <button 
          className="header-icon-btn" 
          onClick={onToggleLeftSidebar}
          title="Свернуть/Развернуть левую панель"
        >
          <LeftSidebar />
        </button>

        <nav className="breadcrumbs">
          <span className="breadcrumb-home">
            <Layers />
          </span>
          <span className="breadcrumb-link">Главная</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-doc">{documentName}</span>
          <span className="breadcrumb-separator">/</span>
          <span className="breadcrumb-active">{tableName}</span>
        </nav>
      </div>

      <div className="header-right">
        <button className="header-icon-btn" title="Отменить (Ctrl+Z)">
          <Undo />
        </button>
        
        <button className="header-icon-btn" title="Повторить (Ctrl+Y)">
          <Redo />
        </button>

        <div className="header-divider-wrapper">
          <Divider />
        </div>

        <button className="header-icon-btn" title="Поиск">
          <Search />
        </button>

        <button className="header-icon-btn" title="Уведомления">
          <Bell />
        </button>

        <button className="header-icon-btn" title="Сообщения">
          <Notification />
        </button>

        <button 
          className="header-icon-btn" 
          onClick={onToggleRightSidebar}
          title="Открыть панель свойств"
        >
          <RightSidebar />
        </button>
      </div>
    </header>
  );
};

export default Header;