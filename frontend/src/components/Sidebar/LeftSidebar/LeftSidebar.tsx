import { useState, useRef, useEffect } from 'react';
import './LeftSidebar.css';

interface LeftSidebarProps {
  isOpen: boolean;
}

const LeftSidebar = ({ isOpen }: LeftSidebarProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  const toggleModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <aside className={`left-sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-profile">
        <span className="profile-word">М</span>
        {isOpen && <span className="profile-name">@mail.com</span>}
        {isOpen && <span className="profile-arrow">▾</span>}
      </div>

      <div className="add-button-container">
        <button className="add-button" onClick={toggleModal}>
          {isOpen && <span className="button-text">Добавить</span>}
          <span className="plus-icon">+</span>
        </button>
        {isModalOpen && (
          <ul className="add-menu" ref={menuRef}>
            <li>Добавить страницу</li>
            <li>Добавить виджет на страницу</li>
            <li>Добавить пустую таблицу</li>
            <li>Импорт из файла</li>
          </ul>
        )}
      </div>

      <div className="sidebar-menu">
        <span className="menu-text">Список таблиц</span>
        <ul>
          <li className="menu-item active">Форма 4</li>
          <li className="menu-item">МПП</li>
          <li className="menu-item">Еще таблица</li>
        </ul>
      </div>
    </aside>
  );
};

export default LeftSidebar;