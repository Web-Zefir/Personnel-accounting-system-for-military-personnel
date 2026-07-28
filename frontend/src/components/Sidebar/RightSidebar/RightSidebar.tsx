import './RightSidebar.css';

interface RightSidebarProps {
  isOpen: boolean;
}

const RightSidebar = ({ isOpen }: RightSidebarProps) => {
  return (
    <aside className={`right-sidebar ${isOpen ? 'open' : ''}`}>
      {isOpen && (
        <div className="right-sidebar-content">
          <h3>Правая панель</h3>
          <p>Здесь будет информация</p>
        </div>
      )}
    </aside>
  );
};

export default RightSidebar;