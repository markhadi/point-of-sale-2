import { useVirtualizer } from '@tanstack/react-virtual';
import { useReactTable, getCoreRowModel, ColumnDef, flexRender } from '@tanstack/react-table';
import { Transaction } from '../types';
import { TableCard } from './TableCard';
import { StatusBadge } from './StatusBadge';
import { useMemo, useRef } from 'react';

const ROW_HEIGHT = 48;

export const TableLatestTransactions = () => {
  const parentRef = useRef<HTMLDivElement>(null);

  const columns = useMemo<ColumnDef<Transaction>[]>(
    () => [
      {
        id: 'id',
        accessorKey: 'id',
        header: () => <span className="w-[114px] flex-shrink-0">Transaction ID</span>,
        cell: ({ getValue }) => <span className="w-[114px] flex-shrink-0">{getValue() as string}</span>,
      },
      {
        id: 'timestamp',
        accessorKey: 'timestamp',
        header: () => <span className="min-w-[120px] max-w-[200px] flex-grow">Timestamp</span>,
        cell: ({ getValue }) => <span className="min-w-[120px] max-w-[200px] flex-grow">{getValue() as string}</span>,
      },
      {
        id: 'amount',
        accessorKey: 'amount',
        header: () => <span className="min-w-[110px] flex-shrink-0">Amount</span>,
        cell: ({ getValue }) => <span className="min-w-[110px] flex-shrink-0">{getValue() as string}</span>,
      },
      {
        id: 'status',
        accessorKey: 'status',
        header: () => <span className="w-[88px] flex-shrink-0 flex-grow">Status</span>,
        cell: ({ getValue }) => <StatusBadge status={getValue() as Transaction['status']} />,
      },
    ],
    []
  );

  const data = useMemo<Transaction[]>(
    () =>
      Array.from({ length: 20 }).map((_, index) => ({
        id: `T${index + 1}`,
        timestamp: 'Today - 12:45',
        amount: 'Rp50.000',
        status: index % 3 === 0 ? 'cancel' : 'complete',
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
    <TableCard title="Latest Transaction">
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
                    className="flex flex-grow"
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
                  className="absolute w-full flex gap-5 items-center font-nunito text-[14px] leading-[19px]"
                  style={{
                    height: `${virtualRow.size}px`,
                    transform: `translateY(${virtualRow.start}px)`,
                  }}
                >
                  {row.getVisibleCells().map(cell => (
                    <div
                      key={cell.id}
                      className="flex flex-grow"
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
