import { createColumnHelper } from '@tanstack/react-table';
import { FaEye, FaPrint, FaRegEdit } from 'react-icons/fa';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function FakturPembelian() {
  const DUMYDATA = [
    {
      'kode-transaksi': '10234',
      tanggal: '12',
      status: 'Selesai',
    },
    {
      'kode-transaksi': '10235',
      tanggal: '12',
      status: 'Selesai',
    },
    {
      'kode-transaksi': '10236',
      tanggal: '12',
      status: 'Selesai',
    },
  ];

  const columnsHelper = createColumnHelper();

  const ListFaktur = [
    columnsHelper.accessor('kode-transaksi', {
      cell: (info) => info.getValue(),
      header: <span>Kode Transaksi</span>,
    }),
    columnsHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal</span>,
    }),

    columnsHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: <span>Status</span>,
    }),
    columnsHelper.accessor('kode-transaksi', {
      cell: (info) => {
        return (
          <>
            <div className='flex flex-col items-center justify-center gap-y-3'>
              <FaEye />
              <FaRegEdit />
              <FaPrint />
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
        <div className='p-10'>
          <h2 className='text-center text-3xl font-primary'>
            Faktur Pembelian
          </h2>

          <div className='bg-white rounded p-4'>
            <Table data={DUMYDATA} columns={ListFaktur} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
