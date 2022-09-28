import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function PembayaranPenjualan() {
  const columnsHelper = createColumnHelper();
  const navigate = useNavigate();

  const DATAITEMS = [
    {
      no_transaksi: '123456',
      no_po: '12314567312',
      tanggal_pengiriman: '9 April 2022',
      tanggal_sampai: '20 April 2022',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: false,
      tanggal: '9 April 2022',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];
  const DATAITEMS3 = [
    {
      no_transaksi: '123456',
      no_po: '12314567312',
      tanggal_pembuatan: '9 April 2022',
      tanggal_pengiriman: '9 April 2022',
      tanggal_sampai: '20 April 2022',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: false,
      tanggal: '9 April 2022',
      catatan: 'Pembayaran Baru 50% dari nilai kontrak',
    },
  ];

  const DATAITEMS2 = [
    {
      no_po: 'PO-12456',
      no_transaksi: '12342156',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 22.000.000',
      status: 'Pandding Payment',
      tanggal_pembayaran: '12 April 2022',
      tanggal_pengiriman: '9 April 2022',
      tanggal_sampai: '20 April 2022',
      catatan: 'Barang Masi 50% Terkirim',
    },
  ];

  const ListPenerimaanBarang = [
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>No Transaksi</span>,
    }),
    columnsHelper.accessor('no_po', {
      cell: (info) => info.getValue(),
      header: <span>No PO</span>,
    }),
    columnsHelper.accessor('tanggal_pengiriman', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pengiriman</span>,
    }),
    columnsHelper.accessor('tanggal_sampai', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Sampai</span>,
    }),
    columnsHelper.accessor('vendor', {
      cell: (info) => info.getValue(),
      header: <span>Tagihan Ke </span>,
    }),
    columnsHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Nominal</span>,
    }),

    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <>
            <div className='flex flex-col gap-y-2'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/pembelian/${href}`)}
              >
                Buat Pembayaran
              </button>
              <button
                className='bg-green-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/pembelian/${href}`)}
              >
                Surat Jalan
              </button>
            </div>
          </>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];
  const ListBelumSelesaiBayar = [
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>No Transaksi</span>,
    }),
    columnsHelper.accessor('no_po', {
      cell: (info) => info.getValue(),
      header: <span>No PO</span>,
    }),
    columnsHelper.accessor('tanggal_pembuatan', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pembuatan</span>,
    }),
    columnsHelper.accessor('tanggal_pengiriman', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pengiriman</span>,
    }),
    columnsHelper.accessor('tanggal_sampai', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Sampai</span>,
    }),
    columnsHelper.accessor('vendor', {
      cell: (info) => info.getValue(),
      header: <span>Tagihan Ke </span>,
    }),
    columnsHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Nominal</span>,
    }),

    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan Pembayaran</span>,
    }),
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <>
            <div className='flex flex-col gap-y-2'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/pembelian/${href}`)}
              >
                Selesaikan Pembayaran
              </button>
              <button
                className='bg-green-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/pembelian/${href}`)}
              >
                Surat Jalan
              </button>
            </div>
          </>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];

  const HistoryPenerimaanBarang = [
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>No_Transaksi</span>,
    }),
    columnsHelper.accessor('no_po', {
      cell: (info) => info.getValue(),
      header: <span>No PO</span>,
    }),
    columnsHelper.accessor('tanggal_pembayaran', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pembuatan</span>,
    }),
    columnsHelper.accessor('tanggal_pengiriman', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pengiriman</span>,
    }),
    columnsHelper.accessor('tanggal_sampai', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Sampai</span>,
    }),
    columnsHelper.accessor('vendor', {
      cell: (info) => info.getValue(),
      header: <span>Vendor</span>,
    }),
    columnsHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Nominal</span>,
    }),
    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <>
            <div className='flex flex-col w-[200px] gap-y-2'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/surat/jalan/${href}`)}
              >
                Lihat Pembayaran
              </button>
              <button
                className='bg-green-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/surat/jalan/${href}`)}
              >
                Surat Jalan
              </button>
            </div>
          </>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];

  const dataHistory = [
    {
      no_transaksi: '123456',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: false,
      tanggal: '12 April 2022',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10'>
          <h2 className='text-center text-3xl font-bold my-3'>
            List Pembayaran
          </h2>

          <div className='bg-white p-5 rounded-lg'>
            <p className='text-center text-lg font-bold'>
              List Penjualan Belum Bayar
            </p>
            <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
          </div>

          <div className='bg-white p-5 rounded-lg mt-8'>
            <p className='text-center text-lg font-bold'>
              List Penjualan Belum Selesai Bayar
            </p>
            <Table data={DATAITEMS3} columns={ListBelumSelesaiBayar} />
          </div>

          <div className='bg-white p-5 rounded-lg mt-8'>
            <p className='text-center text-lg font-bold'>
              List Penjualan Selesai Bayar
            </p>
            <Table data={DATAITEMS2} columns={HistoryPenerimaanBarang} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
