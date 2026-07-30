import React from 'react';
import './TableView.css';

const columns = [
  { key: 'id', name: '№' },
  { key: 'department', name: 'подразделение' },
  { key: 'position', name: 'должность' },
  { key: 'rank', name: 'звание' },
  { key: 'vuc1', name: 'ВУС1' },
  { key: 'vuc2', name: 'ВУС2' },
  { key: 'fullName', name: 'ФИО' },
  { key: 'status', name: 'статус' },
  { key: 'phone', name: 'телефон' },
  { key: 'experience', name: 'стаж (лет)' },
  { key: 'category', name: 'категория' },
  { key: 'location', name: 'локация' },
  { key: 'education', name: 'образование' },
  { key: 'accessLevel', name: 'уровень доступа' },
  { key: 'shift', name: 'смена' },
  { key: 'salaryGrade', name: 'разряд' },
  { key: 'contractDate', name: 'дата договора' },
  { key: 'medicalStatus', name: 'мед. статус' },
  { key: 'lastCheck', name: 'посл. проверка' },
  { key: 'notes', name: 'примечание' },
];

const departments = ['управление', '1-й отдел', '2-й отдел', 'безопасность'];
const positions = ['командир полка', 'заместитель командира', 'начальник штаба', 'главный специалист'];
const ranks = ['полковник', 'подполковник', 'майор', 'капитан', 'ст. лейтенант',];
const lastNames = ['Иванов', 'Петров', 'Сидоров', 'Смирнов', 'Кузнецов', 'Попов', 'Васильев', 'Соколов'];
const firstNames = ['А.В.', 'С.Н.', 'Д.И.', 'М.Ю.', 'В.П.', 'Е.А.'];
const statuses = ['активен', 'в отпуске', 'командировка', 'больничный'];
const medicals = ['годен', 'годен с огр.', 'на проверке'];

const generateRows = (count: number) => {
  return Array.from({ length: count }, (_, i) => {
    const id = i + 1;
    const dept = departments[i % departments.length];
    const pos = positions[i % positions.length];
    const rank = ranks[i % ranks.length];
    const name = `${lastNames[i % lastNames.length]} ${firstNames[i % firstNames.length]}`;
    const status = statuses[i % statuses.length];

    return {
      id,
      department: dept,
      position: pos,
      rank: rank,
      vuc1: `${800000 + (i * 137) % 99999}`,
      vuc2: i % 3 === 0 ? `${100 + (i * 7) % 800}` : '',
      fullName: name,
      status: status,
      phone: `+7 (9${(i * 11) % 90 + 10}) ${(i * 123) % 899 + 100}-${i % 90 + 10}-${i % 80 + 10}`,
      experience: (i % 25) + 1,
      category: `Категория ${(i % 3) + 1}`,
      location: `Корпус ${(i % 5) + 1}`,
      education: i % 2 === 0 ? 'Высшее' : 'Спец.',
      accessLevel: `Форма ${(i % 3) + 1}`,
      shift: `Смена ${(i % 2) + 1}`,
      salaryGrade: `${(i % 8) + 10}`,
      contractDate: `202${i % 5 + 1}-0${(i % 9) + 1}-15`,
      medicalStatus: medicals[i % medicals.length],
      lastCheck: `2026-0${(i % 6) + 1}-10`,
      notes: i % 4 === 0 ? 'Требует обновления данных' : 'Штатно',
    };
  });
};

const rows = generateRows(100);

export const TableView: React.FC = () => {
  return (
    <div className="table-wrapper">
      <div className="widget-header">
        <span className="widget-title">Список (Записей: {rows.length})</span>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col.key}>
                  <div className="th-content">
                    <span className="filter-icon">▼</span>
                    <span>{col.name}</span>
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id}>
                {columns.map((col) => {
                  const value = row[col.key as keyof typeof row];
                  const isId = col.key === 'id';
                  const isHighlight = col.key === 'position';

                  return (
                    <td
                      key={col.key}
                      className={ isId ? 'row-num' : isHighlight ? 'highlight-cell' : undefined }
                    >
                      {value}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableView;