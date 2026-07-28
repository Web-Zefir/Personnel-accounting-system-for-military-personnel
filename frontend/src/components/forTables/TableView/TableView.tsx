import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';
import UniversalTable from '../UniversalTable/UniversalTable';
import './TableView.css';

interface TableViewProps {
  title: string;
  onClose: () => void;
}

type TypeRow = Record<string, string | number | null | boolean>;

const TableView = ({ title, onClose }: TableViewProps) => {
  const [columns, setColumns] = useState<string[]>([]);
  const [data, setData] = useState<TypeRow[]>([]);

  useEffect(() => {
    fetch('/123.xlsx')
      .then((res) => res.arrayBuffer())
      .then((ab) => {
        const workbook = XLSX.read(ab, { type: 'array' });
        const sheet = workbook.Sheets[workbook.SheetNames[0]];
        const json = XLSX.utils.sheet_to_json<TypeRow>(sheet);
        if (json.length) {
          setColumns(Object.keys(json[0]));
          setData(json);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="table-modal-overlay">
      <div className="table-modal-content">
        <div className="table-modal-header">
          <span>{title}</span>
          <button onClick={onClose}>✕</button>
        </div>
        <UniversalTable data={data} columns={columns} />
      </div>
    </div>
  );
};

export default TableView;