export type TypeRow = Record<string, string | number | null | boolean>;

export interface TableData {
  data: TypeRow[];
  columns: string[];
}

export interface CellCoord {
  row: number;
  col: number;
}