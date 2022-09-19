import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import Table from '../../components/Table';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import STOCK_BARANG from '../../mock/STOCK_BARANG.json';
export default function StokBarang() {
  const columnHelper = createColumnHelper();

  const STOCK_COLUMNS = [
    columnHelper.group({
      header: 'Jenis Barang',
      columns: [
        columnHelper.accessor('kode', {
          cell: (info) => info.getValue(),
          header: <span>Kode Barang</span>,
        }),

        columnHelper.accessor('name', {
          cell: (info) => info.getValue(),
          header: <span>Nama Barang</span>,
        }),

        columnHelper.accessor('satuan', {
          cell: (info) => info.getValue(),
          header: <span>Satuan</span>,
        }),
      ],
    }),
    columnHelper.accessor('stock_awal', {
      cell: (info) => info.getValue(),
      header: <span>Stock Awal</span>,
    }),

    columnHelper.group({
      header: 'Laporan Barang',
      columns: [
        columnHelper.accessor('barang_masuk', {
          cell: (info) => info.getValue(),
          header: <span>Masuk</span>,
        }),
        columnHelper.accessor('barang_keluar', {
          cell: (info) => info.getValue(),
          header: <span>Keluar</span>,
        }),
      ],
    }),
    columnHelper.accessor('stock_akhir', {
      cell: (info) => info.getValue(),
      header: <span>Stock Akhir</span>,
    }),
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-3'>
          <div className='bg-white border border-gray-400 '>
            <div className='flex items-center justify-center my-5 flex-col'>
              <h2 className='text-3xl font-bold font-primary'>Stok barang</h2>
              <h2 className='text-base  font-secondary'>18 September 2022</h2>
            </div>

            {/* <div className="flex justify-center ">
            <button className="bg-blue-500 rounded-md px-4 py-2 font-primary text-white">Tambah Barang</button>
          </div> */}
            <div className='p-5 flex justify-between'>
              <div className='flex flex-col'>
                <label className='my-2'>Per Tanggal </label>
                <input
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-52'
                  type='date'
                />
              </div>
              <div className='flex flex-col'>
                <label className='my-2'>Cari </label>
                <input
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-52'
                  type='text'
                  placeholder='Nama Barang'
                />
                <Link
                  to={`${process.env.PUBLIC_URL}/assets/excel/ExcelStock.xlsx`}
                  target='_blank'
                  download={true}
                >
                  <button className='bg-blue-500 rounded-md px-4 py-2 font-primary text-white mt-2 w-32'>
                    Export Excel
                  </button>
                </Link>
              </div>
            </div>

            <div className='p-5'>
              <Table data={STOCK_BARANG} columns={STOCK_COLUMNS} />
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
