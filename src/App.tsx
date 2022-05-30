// Components
import { AutoSizer, Grid } from 'react-virtualized';

// Hooks
import { useGrid } from './useGrid';

export const App = () => {
  console.log('App re-render...');

  const { gridSize, _cellRenderer, handleRangeChange, handleActivateBrush } = useGrid();

  return (
    <div
      className="grid"
      onMouseDown={() => handleActivateBrush(true)}
      onMouseUp={() => handleActivateBrush(false)}
    >
      <div id="gridsize">
        <p>Grid size: </p>
        <input type="range" min={10} max={1000} onChange={handleRangeChange} />
        <p>{gridSize}</p>
      </div>
      <AutoSizer>
        {({ width, height }) => (
          <Grid
            cellRenderer={_cellRenderer}
            className="test"
            columnWidth={10}
            columnCount={gridSize}
            height={height}
            rowHeight={10}
            rowCount={gridSize}
            overscanRowCount={10}
            width={width}
          />
        )}
      </AutoSizer>
    </div>
  );
};
