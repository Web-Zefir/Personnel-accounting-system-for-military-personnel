import './LeftSidebar.css';

interface NavItem {
  id: string;
  title: string;
  type?: 'table' | 'card' | 'custom';
}

interface LeftSidebarProps {
  isOpen: boolean;
  activeId?: string;
  onSelect?: (id: string) => void;
  onAddNew?: () => void;
}

export const LeftSidebar: React.FC<LeftSidebarProps> = ({
  isOpen = true,
  activeId = 'dogs-dashboard',
  onSelect,
  onAddNew,
}) => {
  const pages: NavItem[] = [
    { id: 'dogs-dashboard', title: 'Dogs Dashboard', type: 'table' },
    { id: 'dogs', title: 'Dogs', type: 'table' },
    { id: 'owners', title: 'Owners', type: 'card' },
  ];

  const tools = [
    { id: 'access-rules', label: 'Access Rules', icon: '👁' },
    { id: 'raw-data', label: 'Raw Data', icon: '💾' },
    { id: 'document-history', label: 'Document History', icon: '🕒' },
    { id: 'code-view', label: 'Code View', icon: '</>' },
  ];

  return (
    <aside className={`grist-sidebar ${isOpen ? 'expanded' : 'collapsed'}`}>
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
                {isActive && <span className="item-menu-dots">•••</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-section tools-section">
        <div className="section-header">TOOLS</div>
        <div className="section-list">
          {tools.map((tool) => (
            <div key={tool.id} className="sidebar-tool-item">
              <span className="tool-icon">{tool.icon}</span>
              <span className="tool-label">{tool.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="sidebar-divider" />

      <div className="sidebar-footer">
        <div className="sidebar-tool-item">
          <span className="tool-label">Tour of this Doc...</span>
        </div>
        <div className="sidebar-tool-item">
          <span className="tool-label">Help Center</span>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;