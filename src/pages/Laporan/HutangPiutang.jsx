import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';

import DATA_HUTANG_PIUTANG from '../../mock/DATA_HUTANG_PIUTANG.json';

export default function HutangPiutang() {
  const columnHelper = createColumnHelper();
  const COLUMNS_HUTANG_PIUTANG = [
    columnHelper.accessor('invoice', {
      cell: (info) => info.getValue(),
      header: <span>Invoice</span>,
    }),
    columnHelper.accessor('tipe', {
      cell: (info) => info.getValue(),
      header: <span>Tipe</span>,
    }),
    columnHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal</span>,
    }),
    columnHelper.accessor('jatuh_tempo', {
      cell: (info) => info.getValue(),
      header: <span>Jatuh Tempo</span>,
    }),
    columnHelper.accessor('umur', {
      cell: (info) => info.getValue(),
      header: <span>Umur</span>,
    }),
    columnHelper.accessor('jumlah', {
      cell: (info) => info.getValue(),
      header: <span>Invoice</span>,
    }),
    columnHelper.accessor('dibayar', {
      cell: (info) => info.getValue(),
      header: <span>Invoice</span>,
    }),
    columnHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: <span>Status</span>,
    }),
    columnHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
  ];
  return (
    <div>
      <DashboardShellAdmin>
        <div className='p-3'>
          <h1 className='text-center text-3xl font-primary font-bold'>
            Laporan Hutang Piutang
          </h1>

          <div className='flex justify-center items-center gap-x-3 mt-5'>
            <Link
              to={`${process.env.PUBLIC_URL}/assets/excel/LaporanHutangPiutang.xlsx`}
              download={true}
              target='_blank'
            >
              <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
                <p>Export To Excel</p>
              </button>
            </Link>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To CSV</p>
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To PDF</p>
            </button>
          </div>
          <div className='h-max w-full flex items-center justify-center mt-5'>
            <div className='bg-white p-4 rounded border border-gray-300 shadow-md'>
              <Table
                columns={COLUMNS_HUTANG_PIUTANG}
                data={DATA_HUTANG_PIUTANG}
              />
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </div>
  );
}
