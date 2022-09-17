import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import { FaEye, FaRegTrashAlt } from 'react-icons/fa';
import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import DATA_JURNAL_UMUM from '../../mock/DATA_JURNAL_UMUM.json';
export default function JurnalUmum() {
  const columnHelper = createColumnHelper();

  const columns = [
    columnHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: () => <span>Tanggal</span>,
    }),
    columnHelper.accessor('transaksi', {
      cell: (info) => info.getValue(),
      header: () => <span>Transaksi</span>,
    }),
    columnHelper.accessor('kode', {
      cell: (info) => info.getValue(),
      header: () => <span>Kode</span>,
    }),
    columnHelper.accessor('debit', {
      cell: (info) => info.getValue(),
      header: () => <span>Debit</span>,
    }),
    columnHelper.accessor('kredit', {
      cell: (info) => info.getValue(),
      header: () => <span>Kredit</span>,
    }),
    columnHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: () => <span>Catatan</span>,
    }),
    columnHelper.accessor('id', {
      cell: (info) => {
        const href = 123456789;
        return (
          <div className='flex gap-x-5'>
            <Link to={`/transaksi/${href}`}>
              <FaEye />
            </Link>
            <FaRegTrashAlt />
          </div>
        );
      },
      header: () => <span>Aksi</span>,
    }),
  ];

  return (
    <>
      <DashboardShellAdmin>
        <div className='p-3'>
          <h1 className='text-center text-3xl font-primary font-bold'>
            Laporan Jurnal Umum
          </h1>

          <div className='flex justify-center items-center gap-x-3 mt-5'>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To Excel</p>
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To CSV</p>
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To PDF</p>
            </button>
          </div>
          <div className='h-max w-full flex items-center justify-center mt-5'>
            <div className='bg-white p-4 rounded border border-gray-300 shadow-md'>
              <Table columns={columns} data={DATA_JURNAL_UMUM} />
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
