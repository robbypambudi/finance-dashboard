import {
  ColumnResizeMode,
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useEffect, useState } from 'react';

import { rankItem } from '@tanstack/match-sorter-utils';

const fuzzyFilter = (row, columnId, value, addMeta) => {
  const itemRank = rankItem(row.getValue(columnId), value);

  addMeta({
    itemRank,
  });
  return itemRank.passed;
};

function DebouncedInput({
  value: initialValue,
  onChange,
  debounce = 500,
  ...props
}) {
  const [value, setValue] = useState(initialValue);

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      onChange(value);
    }, debounce);

    return () => clearTimeout(timeout);
  }, [value]);

  return (
    <input
      {...props}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

export default function TableListHutangPiutang({ data, columns }) {
  const [globalFilter, setGlobalFilter] = useState('');
  const [columnResizeMode, setColumnResizeMode] = useState('onChange');

  const table = useReactTable({
    data,
    columns,
    state: {
      globalFilter,
    },
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    columnResizeMode,
    debugTable: true,
    debugHeaders: true,
    debugColumns: true,
    onGlobalFilterChange: setGlobalFilter,
    globalFilterFn: fuzzyFilter,
    getFilteredRowModel: getFilteredRowModel(),

    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div>
      <DebouncedInput
        value={globalFilter ?? ''}
        onChange={(value) => setGlobalFilter(String(value))}
        className='p-2 font-lg shadow border border-block'
        placeholder='Search all columns...'
      />
      <h2 className='text-2xl text-center font-bold'>List Transaksi Barang</h2>
      <div className='my-4 flex items-center'>
        <div>
          <input className='mx-4' type='checkbox'></input>
          <label>Hutang</label>
        </div>
        <div>
          <input className='mx-4' type='checkbox'></input>
          <label>Piutang</label>
        </div>
        <div>
          <input className='mx-4' type='checkbox'></input>
          <label>Lunas</label>
        </div>
        <div>
          <input className='mx-4' type='checkbox'></input>
          <label>Panding</label>
        </div>
      </div>

      <table className='table-auto border-collapse border border-slate-500 w-full text-center mt-4'>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th
                  {...{
                    key: header.id,
                    colSpan: header.colSpan,
                    style: {
                      width: header.getSize(),
                    },
                  }}
                  className='border border-slate-600 bg-gray-100 '
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  <div
                    {...{
                      onMouseDown: header.getResizeHandler(),
                      onTouchStart: header.getResizeHandler(),
                      className: `resizer ${
                        header.column.getIsResizing() ? 'isResizing' : ''
                      }`,
                      style: {
                        transform:
                          columnResizeMode === 'onEnd' &&
                          header.column.getIsResizing()
                            ? `translateX(${
                                table.getState().columnSizingInfo.deltaOffset
                              }px)`
                            : '',
                      },
                    }}
                  />
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id} className='hover:bg-gray-200 '>
              {row.getVisibleCells().map((cell) => (
                <td
                  className='border border-slate-700 p-2'
                  {...{
                    key: cell.id,
                    style: {
                      width: cell.column.getSize(),
                    },
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
