import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function PengirimanPesanan() {
  const columnsHelper = createColumnHelper();
  const navigate = useNavigate();

  const DATAITEMS = [
    {
      no_so: 'SO-0110202201',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: false,
      tanggal: '9 April 2022',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];

  const ListPenerimaanBarang = [
    columnsHelper.accessor('no_so', {
      cell: (info) => info.getValue(),
      header: <span>No SO</span>,
    }),
    columnsHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pemesanan</span>,
    }),
    columnsHelper.accessor('vendor', {
      cell: (info) => info.getValue(),
      header: <span>Pembeli</span>,
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
                onClick={() => navigate(`/pengiriman/barang/${href}`)}
              >
                Buat
              </button>
            </div>
          </>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];
  const HistoryPenerimaanBarang = [
    columnsHelper.accessor('no_so', {
      cell: (info) => info.getValue(),
      header: <span>No SO</span>,
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
      header: <span>Pembeli</span>,
    }),
    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
    columnsHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: <span>Status Pengiriman</span>,
    }),
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <>
            <div className='flex flex-col gap-y-2'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pengiriman/barang/${href}`)}
              >
                Surat Jalan
              </button>
              <button
                className='bg-green-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/barang/${href}`)}
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

  const data = [
    {
      'kode-barang': '1001',
      nama: 'Biji Plastik',
      satuan: 'pax',
      jumlah: '10',
      harga: '210000',
      total: 2100000,
    },
  ];
  const dataHistory = [
    {
      no_so: 'SO-0110202202',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: 'Pandding Payment',
      tanggal_pengiriman: '22 September 2022',
      tanggal_sampai: '13 April 2022',
      catatan: 'Anak Perusahaan dari PT ',
    },
  ];
  const dataHistory2 = [
    {
      no_so: 'SO-0110202201',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: 'Selesai',
      tanggal_pengiriman: '22 September 2022',
      tanggal_sampai: '13 April 2022',
      catatan: 'Anak Perusahaan dari PT ',
    },
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10'>
          <h2 className='text-center text-3xl font-bold my-3'>
            Pengisian Surat Jalan
          </h2>

          <div className='bg-white p-5 rounded-lg'>
            <p className='text-center text-lg font-bold'>
              List Penjualan Belum Isi Surat Jalan
            </p>
            <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
          </div>

          <div className='bg-yellow-500 p-5 rounded-lg mt-8'>
            <p className='text-center text-lg font-bold'>
              List Penjualan Dalam Pengiriman
            </p>
            <Table data={dataHistory} columns={HistoryPenerimaanBarang} />
          </div>
          <div className='bg-blue-500 p-5 rounded-lg mt-8'>
            <p className='text-center text-lg font-bold'>
              List Penjualan Barang Selesai Dikirm
            </p>
            <Table data={dataHistory2} columns={HistoryPenerimaanBarang} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
