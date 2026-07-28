import './Header.css';

interface HeaderProps {
  onToggleLeftSidebar: () => void;
  onToggleRightSidebar: () => void;
}

const Header = ({ onToggleLeftSidebar, onToggleRightSidebar }: HeaderProps) => {
  return (
    <header className="top-header">
      <div className="left-section">
        <button className="menu-trigger" onClick={onToggleLeftSidebar}>
          ☰
        </button>
        <span className="header-title">Кадровая система</span>
      </div>
      <div className="center-section">
        <span className="breadcrumbs">
          <span className="admin-link">@admin</span>
          <span className="breadcrumbs-separator">/</span>
          <span className="breadcrumbs-text">00 список кадров</span>
          <span className="breadcrumbs-text muted">(будет меняться)</span>
        </span>
      </div>
      <div className="right-section">
        <button className="menu-trigger" onClick={onToggleRightSidebar}>
          ⚙
        </button>
      </div>
    </header>
  );
};

export default Header;