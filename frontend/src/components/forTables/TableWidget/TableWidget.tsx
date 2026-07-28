import { useState, useRef, useEffect } from 'react';
import './TableWidget.css';

interface TableWidgetProps {
  title: string;
  onClick?: () => void;
}

const TableWidget = ({ title, onClick }: TableWidgetProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="widget" onClick={onClick}>
      <div className="widget-main">{title}</div>
      <button className="widget-menu-btn" onClick={toggleMenu}>
        ⋮
      </button>
      {menuOpen && (
        <ul className="widget-menu" ref={menuRef}>
          <li>Показать необработанные данные</li>
          <li>Добавить на страницу</li>
          <li>Удалить виджет</li>
        </ul>
      )}
    </div>
  );
};

export default TableWidget;