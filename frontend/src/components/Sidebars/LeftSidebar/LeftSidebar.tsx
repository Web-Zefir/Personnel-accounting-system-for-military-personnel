import React from 'react';
import './LeftSidebar.css';
import { DotsIcon } from '../../../icons/icons';

interface NavItem {
  id: string;
  title: string;
  type?: 'table' | 'card';
}

interface LeftSidebarProps {
  isOpen: boolean;
  activeId?: string;
  onSelect?: (id: string) => void;
  onAddNew?: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isOpen = true,
  activeId = 'spisok',
  onSelect,
  onAddNew,
}) => {
  const pages: NavItem[] = [
    { id: 'spisok', title: 'список', type: 'table' },
  ];

  const tools = [
    { id: 'access-rules', label: 'Правила доступа' },
    { id: 'raw-data', label: 'Исходные данные' },
    { id: 'document-history', label: 'История документа', },
    { id: 'code-view', label: 'Просмотр кода' },
  ];

  return (
    <aside className={`app-sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
      <div className="sidebar-top-action">
        <button className="add-new-btn" onClick={onAddNew}>
          <span className="add-btn-text">Добавить</span>
          <span className="add-btn-icon">+</span>
        </button>
      </div>

      <div className="sidebar-section pages-section">
        <div className="section-list">
          {pages.map((page) => {
            const isActive = activeId === page.id;
            return (
              <div
                key={page.id}
                className={`sidebar-nav-item ${isActive ? 'active' : ''}`}
                onClick={() => onSelect && onSelect(page.id)}
              >
                <span className="item-badge">
                  {page.type === 'card' ? 'O' : 'D'}
                </span>
                <span className="item-title">{page.title}</span>
                {isActive && (
                  <button className="item-menu-dots" aria-label="Параметры">
                    <DotsIcon />
                  </button>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-section tools-section">
        <div className="section-header">ИНСТРУМЕНТЫ</div>
        <div className="section-list">
          {tools.map((tool) => (
            <div key={tool.id} className="sidebar-tool-item">
              <span className="tool-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-footer">
        <div className="sidebar-tool-item">
          <span className="tool-label">Справочный центр</span>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;