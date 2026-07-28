import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './App.css';
import Header from './components/Header/Header';
import LeftSidebar from './components/Sidebar/LeftSidebar/LeftSidebar';
import RightSidebar from './components/Sidebar/RightSidebar/RightSidebar';
import WidgetGrid from './components/forTables/WidgetGrid/WidgetGrid';
import TableView from './components/forTables/TableView/TableView';
import UniversalTable from './components/forTables/UniversalTable/UniversalTable';

type TypeRow = Record<string, string | number | null | boolean>;

function App() {
  const [activeTable, setActiveTable] = useState<string | null>(null);
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false);
  const [columns, setColumns] = useState<string[]>([]);
  const [data, setData] = useState<TypeRow[]>([]);

  const toggleLeftSidebar = () => setIsLeftSidebarOpen(!isLeftSidebarOpen);
  const toggleRightSidebar = () => setIsRightSidebarOpen(!isRightSidebarOpen);

  // Загрузка Excel при старте
  useEffect(() => {
    fetch('/summary_podr2.xlsx')
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const jsonData: TypeRow[] = XLSX.utils.sheet_to_json(worksheet);
        if (jsonData.length > 0) {
          setColumns(Object.keys(jsonData[0]));
          setData(jsonData);
        }
      })
      .catch((err) => console.error('Ошибка загрузки Excel:', err));
  }, []);

  return (
    <div className="app-container">
      <LeftSidebar isOpen={isLeftSidebarOpen} />
      <div className="right-section">
        <Header
          onToggleLeftSidebar={toggleLeftSidebar}
          onToggleRightSidebar={toggleRightSidebar}
        />
        <div className="border-line"></div>
        <main className="main-content">
          <WidgetGrid onWidgetClick={(title) => setActiveTable(title)} />
          {activeTable && (
            <TableView title={activeTable} onClose={() => setActiveTable(null)} />
          )}
          <div className="main-table-sp">
            {data.length > 0 && <UniversalTable data={data} columns={columns} />}
          </div>
        </main>
      </div>
      <RightSidebar isOpen={isRightSidebarOpen} />
    </div>
  );
}

export default App;