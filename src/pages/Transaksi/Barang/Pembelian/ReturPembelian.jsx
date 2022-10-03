import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import Table from '../../../../components/Table';
import DashboardShellAdmin from '../../../../layouts/admin/DashboarsShellAdmin';

export default function ReturPembelian() {
  const columnsHelper = createColumnHelper();
  const navigate = useNavigate();

  const LISTSO = [
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>No Transaksi</span>,
    }),
    columnsHelper.accessor('no_suratjalan', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>No Surat Jalan</span>,
    }),
    columnsHelper.accessor('no_po', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>No PO</span>,
    }),
    columnsHelper.accessor('supplier', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Supplier</span>,
    }),
    columnsHelper.accessor('tanggal_pembayaran', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Tanggal Pembayaran</span>,
    }),
    columnsHelper.accessor('tanggal_pengiriman', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Tanggal Pengiriman</span>,
    }),
    columnsHelper.accessor('tanggal_sampai', {
      cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
      header: <span>Tanggal Sampai</span>,
    }),
    // columnsHelper.accessor('nominal', {
    //   cell: (info) => <p className='w-[100px]'>{info.getValue()}</p>,
    //   header: <span>Nominal</span>,
    // }),
    columnsHelper.accessor('catatan', {
      cell: (info) => <p className='w-[300px]'>{info.getValue()}</p>,
      header: <span>Catatan</span>,
    }),
    columnsHelper.accessor('id_transaksi', {
      cell: (info) => {
        const href = 1234;
        return (
          <>
            <div className='flex flex-col gap-y-2 w-[150px]'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/retur/pembelian/${href}`)}
              >
                Buat Retur
              </button>
            </div>
          </>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];

  const HISTORY = [
    {
      no_transaksi: '1234',
      no_suratjalan: 'SJ-1234',
      no_po: 'PO-1234',
      supplier: 'PT Briand Perkasa',
      tanggal_pembayaran: '12 Januari 2022',
      tanggal_pengiriman: '10 Januari 2022',
      tanggal_sampai: '20 Januari 2022',
      nominal: 'Rp 200000',
      catatan: 'On Going',
    },
    {
      no_transaksi: '1234',
      no_suratjalan: 'SJ-1234',
      no_po: 'PO-1234',
      supplier: 'PT Briand Perkasa',
      tanggal_pembayaran: '12 Januari 2022',
      tanggal_pengiriman: '10 Januari 2022',
      tanggal_sampai: '20 Januari 2022',
      nominal: 'Rp 200000',
      catatan: 'Selesai',
    },
    {
      no_transaksi: '1234',
      no_suratjalan: 'SJ-1234',
      no_po: 'PO-1234',
      supplier: 'PT Briand Perkasa',
      tanggal_pembayaran: '12 Januari 2022',
      tanggal_pengiriman: '10 Januari 2022',
      tanggal_sampai: '20 Januari 2022',
      nominal: 'Rp 200000',
      catatan: 'Selesai',
    },
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10'>
          <h2 className='text-center font-bold text-3xl'>List Faktur Barang</h2>

          <div className='mt-6 p-3 bg-white rounded border border-gray-200 shadow overflow-auto'>
            <Table columns={LISTSO} data={HISTORY} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
