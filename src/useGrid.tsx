import { useState, useRef, ChangeEvent } from 'react';
import { Cell } from './components/Cell';
import { GridCellProps } from 'react-virtualized';

export const useGrid = () => {
  const brush = useRef<boolean>(false);
  const [gridSize, setGridSize] = useState<number>(10);

  const _cellRenderer = ({ columnIndex, rowIndex, style }: GridCellProps): React.ReactNode => {
    return <Cell key={`${rowIndex}_${columnIndex}`} brush={brush} style={style} />;
  };

  const handleRangeChange = (e: ChangeEvent<HTMLInputElement>) => setGridSize(parseInt(e.target.value, 10));

  const handleActivateBrush = (state: boolean) => brush.current = state;

  return {
    brush,
    gridSize,
    _cellRenderer,
    handleRangeChange,
    handleActivateBrush
  }
};
