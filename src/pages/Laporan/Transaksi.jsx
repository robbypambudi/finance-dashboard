import { createColumnHelper } from '@tanstack/react-table';
import Table from '../../components/Table';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import DATA_LAPORAN_TRANSAKSI from '../../mock/LIST_LAPORAN_TRANSAKSI.json';
export default function LaporanTransaksi() {
  const columnsHelper = createColumnHelper();

  const LIST_LAPORAN_TRANSAKSI = [
    columnsHelper.accessor('kode', {
      cell: (info) => info.getValue(),
      header: <span>Kode</span>,
    }),
    columnsHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal</span>,
    }),
    columnsHelper.accessor('jenis_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>Jenis Transaksi</span>,
    }),
    columnsHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Nominal</span>,
    }),
    columnsHelper.accessor('sales', {
      cell: (info) => info.getValue(),
      header: <span>Sales</span>,
    }),
    columnsHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: <span>Status</span>,
    }),
    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-5'>
          <div className='items-center justify-center flex text-3xl font-primary font-bold'>
            <h1>Laporan Transaksi</h1>
          </div>
          <div className='my-5 flex items-center justify-center'>
            <button className='px-4 py-2 bg-blue-500 rounded text-white'>
              Export Excel{' '}
            </button>
          </div>
          <div className='bg-white p-5 rounded border border-gray-400 shadow'>
            <Table
              data={DATA_LAPORAN_TRANSAKSI}
              columns={LIST_LAPORAN_TRANSAKSI}
            />
            <div></div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
