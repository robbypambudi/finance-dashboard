import { createColumnHelper } from '@tanstack/react-table';
import { FaEye } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';
import DATA_HISTORY_BARANG from '../../../mock/DATA_HISTORY_BARANG.json';
export default function DashboardBarang() {
  const navigate = useNavigate();
  const columnHelper = createColumnHelper();
  const LIST_HISTORY_BARANG = [
    columnHelper.accessor('no_po', {
      cell: (info) => <p className='w-[150px] '>{info.getValue()}</p>,
      header: <span className='w-[150px]'>Kode PO</span>,
    }),
    columnHelper.accessor('no_suratjalan', {
      cell: (info) => <p className='w-[150px]'>{info.getValue()}</p>,
      header: <span>No Surat Jalan</span>,
    }),
    columnHelper.accessor('tanggal_pengiriman', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Tanggal Pengiriman</span>,
    }),
    columnHelper.accessor('tanggal_sampai', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Tanggal Sampai</span>,
    }),
    columnHelper.accessor('tanggal_pembayaran', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Tanggal Pembayaran</span>,
    }),
    columnHelper.accessor('jenis', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Jenis</span>,
    }),

    columnHelper.accessor('nominal', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Nominal</span>,
    }),
    columnHelper.accessor('status', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Status</span>,
    }),
    columnHelper.accessor('supplier', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Kontak</span>,
    }),
    columnHelper.accessor('catatan', {
      cell: (info) => <p className='w-[300px]'>{info.getValue()}</p>,
      header: <span>Catatan</span>,
    }),
    columnHelper.accessor('id_transaksi', {
      cell: (info) => {
        const href = 1234;
        return (
          <>
            <div className='flex flex-col gap-y-2'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/surat/jalan/${href}`)}
              >
                Surat Jalan
              </button>
              <button
                className='bg-green-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/pembelian/${href}`)}
              >
                Pembayaran
              </button>
            </div>
          </>
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

          <div className='bg-white p-3 mt-4 rounded border border-gray-400 overflow-auto '>
            <h2 className='text-center text-2xl font-bold'>
              History Transaksi P.O/ S.O
            </h2>
            <Table columns={LIST_HISTORY_BARANG} data={DATA_HISTORY_BARANG} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
