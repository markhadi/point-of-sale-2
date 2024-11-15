import { useVirtualizer } from '@tanstack/react-virtual';
import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { StockTransaction } from '../types';
import { TableCard } from './TableCard';
import { useMemo, useRef } from 'react';
import { Icon } from '@iconify/react';
import imagePlaceholder from '@/assets/images/img-placeholder-28.png';

const ROW_HEIGHT = 48;

export const TableStockReceiptOrIssue = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const columns = useMemo<ColumnDef<StockTransaction>[]>(
    () => [
      {
        id: 'timestamp',
        accessorKey: 'timestamp',
        header: () => <span className="w-[120px] flex-shrink-0">Timestamp</span>,
        cell: ({ getValue }) => <span className="w-[120px] flex-shrink-0">{getValue() as string}</span>,
      },
      {
        id: 'product',
        accessorKey: 'name',
        header: () => <span className="flex-grow min-w-[200px]">Item Name</span>,
        cell: ({ row }) => (
          <span className="flex-grow min-w-[200px] flex gap-[10px] items-center">
            <img
              src={row.original.image}
              alt={row.original.name}
              className="w-7 h-7 rounded-[4px]"
            />
            <span className="flex flex-col items-start justify-center">
              <span>{row.original.name}</span>
              <span className="text-[12px] text-[#64748B]">{row.original.id}</span>
            </span>
          </span>
        ),
      },
      {
        id: 'event',
        accessorKey: 'event',
        header: () => <span className="w-[120px] flex-grow text-right">Event</span>,
        cell: ({ row }) => (
          <span className="w-[120px] flex-grow flex gap-[10px] items-center justify-end">
            <span>{row.original.quantity}</span>
            <span className="text-[#94A3B8]">{row.original.unit}</span>
            <Icon
              width={20}
              height={20}
              icon={row.original.type === 'Receipt' ? 'solar:square-arrow-right-down-bold' : 'solar:square-arrow-left-up-bold'}
              color={row.original.type === 'Receipt' ? '#00B69B' : '#EF4444'}
            />
          </span>
        ),
      },
    ],
    []
  );

  const data = useMemo<StockTransaction[]>(
    () =>
      Array.from({ length: 20 }).map((_, index) => ({
        id: `12345${index + 1}`,
        timestamp: 'Yesterday - 12:45',
        name: `Photocopy machine x${230 + index}`,
        image: imagePlaceholder,
        type: index % 2 === 0 ? 'Receipt' : 'Issue',
        quantity: Math.floor(Math.random() * 10) + 1,
        unit: 'Pcs',
      })),
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const { rows } = table.getRowModel();

  const rowVirtualizer = useVirtualizer({
    count: rows.length,
    getScrollElement: () => parentRef.current,
    estimateSize: () => ROW_HEIGHT,
    overscan: 5,
  });

  return (
    <TableCard title="Stock Receipt / Issue">
      <div
        className="overflow-auto relative rounded-lg"
        ref={parentRef}
        style={{ height: '400px' }}
      >
        <div className="w-full min-w-max bg-white text-left text-slate-700">
          <div className="font-bold font-nunito text-[14px] leading-[19px] text-[#000000] border-b border-[#CBD5E1] z-10 sticky top-0 w-full bg-white">
            <div className="w-full min-h-12 text-left flex gap-5 items-center">
              {table.getHeaderGroups().map(headerGroup =>
                headerGroup.headers.map(header => (
                  <div
                    key={header.id}
                    className={header.column.id === 'product' ? 'flex flex-grow' : 'flex'}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                  </div>
                ))
              )}
            </div>
          </div>

          <div
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              width: '100%',
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map(virtualRow => {
              const row = rows[virtualRow.index];
              return (
                <div
                  key={row.id}
                  className="absolute w-full flex gap-5 h-max items-center font-nunito text-[14px] leading-[19px]"
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {row.getVisibleCells().map(cell => (
                    <div
                      key={cell.id}
                      className={cell.column.id === 'product' ? 'flex flex-grow' : 'flex'}
                    >
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </div>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TableCard>
  );
};
