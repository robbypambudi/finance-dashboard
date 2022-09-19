import { createColumnHelper } from '@tanstack/react-table';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LIST_PEMESANAN from '../mock/LIST_PEMESANAN.json';

import TableListPayment from './TableListPayment';

export default function ListPesanan() {
  const columnHelper = createColumnHelper();
  const ListPemesananColumns = [
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
    columnHelper.accessor('jumlah', {
      cell: (info) => info.getValue(),
      header: <span>Kuantitas</span>,
    }),
    columnHelper.accessor('harga_satuan', {
      cell: (info) => info.getValue(),
      header: <span>Harga Satuan</span>,
      footer: <span>Total Harga : </span>,
    }),
    columnHelper.accessor('total', {
      cell: (info) => info.getValue(),
      header: <span>Total</span>,
      footer: <span>Rp. 10.100.000</span>,
    }),
    columnHelper.accessor('transaksi_id', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <div className='flex flex-col gap-y-2 w-10 items-center'>
            <Link to={`/transaksi/barang/edit/${href}`}>
              <FaEdit size={14} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/transaksi/invoice/${href}`}>
              <FaTrash size={14} className='hover:text-green-500 ' />
            </Link>
          </div>
        );
      },
      header: <span>Aksi</span>,
    }),
  ];
  return (
    <div className='bg-white rounded-md border border-gray-300 shadow p-4'>
      <h2 className='text-2xl border-b border-b-gray-400'>List Pesanan</h2>
      <div className='flex flex-col'>
        <label className='my-2'>Nama PJ : </label>
        <input
          className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
          placeholder='Transaksi'
          value='Pembelian'
          readonly={true}
        ></input>
      </div>
      <div className='mt-8'>
        <TableListPayment
          columns={ListPemesananColumns}
          data={LIST_PEMESANAN}
        />

        <div className='mt-4 w-full flex items-center justify-center'>
          <button className='bg-blue-500 px-6 py-2 font-primary text-white rounded'>
            <h1>Proses</h1>
          </button>
        </div>
      </div>
    </div>
  );
}
