import TableWidget from '../TableWidget/TableWidget';
import './WidgetGrid.css';

export const WIDGETS_DATA = [
  { id: 'forma4', title: 'Форма 4' },
  { id: 'mpp', title: 'МПП' },
  { id: 'extra', title: 'Еще таблица' },
];

interface WidgetGridProps {
  onWidgetClick: (title: string) => void;
}

const WidgetGrid = ({ onWidgetClick }: WidgetGridProps) => {
  return (
    <div className="widget-grid">
      {WIDGETS_DATA.map((widget) => (
        <TableWidget
          key={widget.id}
          title={widget.title}
          onClick={() => onWidgetClick(widget.title)}
        />
      ))}
    </div>
  );
};

export default WidgetGrid;