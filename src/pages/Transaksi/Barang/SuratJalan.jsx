import { createColumnHelper } from '@tanstack/react-table';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function SuratJalan() {
  const columnsHelper = createColumnHelper();
  const navigate = useNavigate();

  const DATAITEMS = [
    {
      no_transaksi: '123456',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: false,
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];

  const ListPenerimaanBarang = [
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>No_Transaksi</span>,
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
            <button
              className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
              onClick={() => navigate(`/surat/jalan/${href}`)}
            >
              Buat
            </button>
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
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10'>
          <h2 className='text-center text-3xl font-bold my-3'>
            Pembuatan Surat Jalan
          </h2>

          <div className='bg-white p-5 rounded-lg'>
            <p className='text-center text-lg font-bold'>
              List Pembelian Belum Buat Surat Jalan
            </p>
            <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
