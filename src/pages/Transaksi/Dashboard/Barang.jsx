import { createColumnHelper } from '@tanstack/react-table';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';
import DATA_HISTORY_BARANG from '../../../mock/DATA_HISTORY_BARANG.json';
export default function DashboardBarang() {
  const columnHelper = createColumnHelper();
  const LIST_HISTORY_BARANG = [
    columnHelper.accessor('id_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>Kode</span>,
    }),
    columnHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal</span>,
    }),
    columnHelper.accessor('jenis', {
      cell: (info) => info.getValue(),
      header: <span>Jenis</span>,
    }),
    columnHelper.accessor('nama', {
      cell: (info) => info.getValue(),
      header: <span>Nama</span>,
    }),
    columnHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Nominal</span>,
    }),
    columnHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: <span>Status</span>,
    }),
    columnHelper.accessor('sales', {
      cell: (info) => info.getValue(),
      header: <span>Sales</span>,
    }),
    columnHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
    columnHelper.accessor('id_transaksi', {
      cell: (info) => {
        return (
          <div className='flex flex-col gap-y-2 w-10 justify-center items-center'>
            <Link>
              <FaEye />
            </Link>
          </div>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-4'>
          {/* Dashboard */}
          <div className='grid grid-cols-3 gap-5'>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Terkirim</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang On Going</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Pending</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Dibatalkan</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Tanpa Keterangan</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white p-3 mt-4 rounded border border-gray-400'>
            <h2 className='text-center text-2xl font-bold'>
              List Transaksi Barang
            </h2>
            <Table columns={LIST_HISTORY_BARANG} data={DATA_HISTORY_BARANG} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
