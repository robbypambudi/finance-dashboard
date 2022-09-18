import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';

// Mock Data
import DATA_HISTORY_TRANSAKSI_BARANG from '../../mock/DATA_HISTORY_TRANSAKSI_BARANG.json';
import DATA_BARANG from '../../mock/DATA_BARANG.json';
import KONTAK_PERSON from '../../mock/KONTAK_PERSON.json';
import LIST_PEMESANAN from '../../mock/LIST_PEMESANAN.json';

import { useMemo } from 'react';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { AiOutlinePrinter } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Table from '../../components/Table';
import TableListPayment from '../../components/TableListPayment';

export default function TransaksiBarang() {
  const columnHelper = createColumnHelper();
  const data = useMemo(
    () => DATA_HISTORY_TRANSAKSI_BARANG,
    [DATA_HISTORY_TRANSAKSI_BARANG],
  );
  const columns = [
    columnHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: () => <span>Tanggal</span>,
    }),
    columnHelper.accessor('kontak', {
      cell: (info) => info.getValue(),
      header: () => <span>Nama </span>,
    }),
    columnHelper.accessor('jenis_transaksi', {
      cell: (info) => info.getValue(),
      header: () => <span>Jenis Transaksi</span>,
    }),
    columnHelper.accessor('no_telp', {
      cell: (info) => info.getValue(),
      header: () => <span>No Telp</span>,
    }),
    columnHelper.accessor('nominal', {
      cell: (info) => <p className='w-32'>{info.getValue()}</p>,
      header: () => <span>Nominal</span>,
    }),
    columnHelper.accessor('catatan', {
      cell: (info) => <p className='w-64'>{info.getValue()}</p>,
      header: () => <span>Catatan</span>,
    }),
    columnHelper.accessor('invoice', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <div className='px-2 py-1 bg-blue-500 rounded-lg font-primary text-white'>
            <Link to={`/invoice/barang/${href}`}>View</Link>
          </div>
        );
      },
      header: () => <span>Invoice</span>,
    }),
    columnHelper.accessor('id', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <div className='flex flex-col gap-y-2 w-10 items-center'>
            <Link to={`/transaksi/${href}`}>
              <FaEye size={14} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/transaksi/invoice/${href}`}>
              <AiOutlinePrinter size={14} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/transaksi/edit/${href}`}>
              <FaEdit size={14} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/transaksi/invoice/${href}`}>
              <FaTrash size={14} className='hover:text-green-500 ' />
            </Link>
          </div>
        );
      },
      header: () => <span>Aksi</span>,
    }),
  ];

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
            <Link to={`/transaksi/edit/${href}`}>
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
  const [searchValue, setSearchValue] = useState('');

  const updateSearchValue = (e) => {
    setSearchValue(e.target.value);
  };

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  const [DetailBarang, setDetailBarang] = useState(null);

  const getDetailBarang = (kode) => {
    const result = DATA_BARANG.filter((item) => item.value === kode);
    setDetailBarang(result[0]);
  };

  const onSearch = (searchTerm) => {
    setSearchValue(searchTerm);
  };
  return (
    <>
      <DashboardShellAdmin nav={'Transaksi'}>
        <div className='px-4'>
          <h1 className='font-primary text-3xl text-center my-3'>
            Transaksi Penjualan/Pembelian
          </h1>
          {/* <div className='w-full flex justify-center items-center gap-x-4'>
            <button className='px-4 py-2 bg-gray-300 rounded-lg'>
              <p>Export To Excel</p>
            </button>
            <button className='px-4 py-2 bg-gray-300 rounded-lg'>
              <p>Export To CSV</p>
            </button>
            <button className='px-4 py-2 bg-gray-300 rounded-lg'>
              <p>Export To PDF</p>
            </button>
          </div> */}
          <div className='grid grid-cols-1 p-4 gap-y-5'>
            <div className='bg-white rounded border border-gray-200 shadow-md p-3 h-max'>
              <h2 className='font-secondary border-b border-b-gray-400 text-2xl'>
                Tambah Transaksi Penjulan / Pembelian
              </h2>
              <form className='mt-5'>
                <div className='flex flex-col'>
                  {/* Jenis Transaksi */}
                  <div className='grid grid-cols-2'>
                    <div className='flex flex-col'>
                      <label className='my-2'>Jenis Transaksi</label>
                      <select className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'>
                        <option> --- Pilih Jenis Transaksi --- </option>
                        <option value='pembelian'>Pembelian</option>
                        <option value='penjualan'>Penjualan</option>
                      </select>

                      {/* Nama Barang */}
                      <label className='my-2'>Nama Barang</label>
                      <select
                        className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                        onChange={(e) => getDetailBarang(e.target.value)}
                      >
                        <option> --- Pilih Barang --- </option>
                        {DATA_BARANG.map((item, index) => (
                          <option value={item.value}>{item.name}</option>
                        ))}
                      </select>

                      {/* Kuantitas Barang */}
                      <div className='flex flex-col'>
                        <label className='my-2'>Kuantitas</label>
                        <input
                          className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                          type='number'
                          placeholder='Jumlah Barang'
                        ></input>
                      </div>

                      {/* Nominal */}
                      <div className='flex flex-col'>
                        <label className='my-2'>Nominal</label>
                        <input
                          className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                          type='number'
                          placeholder='Nominal'
                        ></input>
                      </div>

                      {/* Kontak */}
                      <div className='flex flex-col'>
                        <label className='my-2'>Kontak</label>
                        <input
                          className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                          type='text'
                          value={searchValue}
                          onChange={updateSearchValue}
                          placeholder='Kontak'
                        ></input>
                        <div className='flex bg-white flex-col border border-gray-300 w-64 mt-2 rounded px-2'>
                          {KONTAK_PERSON.filter((item) => {
                            const searchTerm = searchValue.toLowerCase();
                            const fullname = item.name.toLowerCase();

                            return (
                              searchTerm &&
                              fullname.startsWith(searchTerm) &&
                              fullname !== searchTerm
                            );
                          })
                            .slice(0, 10)
                            .map((item) => (
                              <div
                                onClick={() => onSearch(item.name)}
                                className='cursor-pointer my-2 text-start'
                              >
                                {item.name}
                              </div>
                            ))}
                        </div>
                      </div>
                    </div>
                    {/* Rincian Barang */}
                    <div className='bg-gray-100 rounded-md p-4 border border-gray-400 shadow-lg'>
                      <div className='flex flex-col'>
                        <h2 className='text-center text-xl font-bold font-primary'>
                          Rincian Barang
                        </h2>
                        <label className='my-2'> Stok Barang</label>
                        <input
                          className='px-4 py-2 rounded-md border border-blue-200 shadow w-64'
                          readOnly={true}
                          value={DetailBarang?.stock}
                          placeholder='Belum ada barang dipilih'
                        ></input>
                        <label className='my-2'> Satuan</label>
                        <input
                          className='px-4 py-2 rounded-md border border-blue-200 shadow w-40'
                          readOnly={true}
                          value={DetailBarang?.satuan}
                          placeholder='Kosong'
                        ></input>
                        <label className='my-2'> Kode Barang</label>
                        <input
                          className='px-4 py-2 rounded-md border border-blue-200 shadow w-40'
                          readOnly={true}
                          value={DetailBarang?.value}
                          placeholder='Kosong'
                        ></input>
                        <label className='my-2'> Harga Per Satuan</label>
                        <input
                          className='px-4 py-2 rounded-md border border-blue-200 shadow w-52'
                          readOnly={true}
                          value={DetailBarang?.value}
                          placeholder='Kosong'
                        ></input>
                      </div>
                    </div>
                  </div>

                  {/* SUBMIT BUTTON */}
                </div>
                <div className='flex items-center justify-center mt-6'>
                  <button className='bg-blue-500 px-6 py-2 rounded-xl text-white hover:bg-gray-500'>
                    <p>Tambah</p>
                  </button>
                </div>
              </form>
            </div>
            {/* List Pemesanan */}
            <div className='bg-white rounded-md border border-gray-300 shadow p-4'>
              <h2 className='text-2xl border-b border-b-gray-400'>
                List Pemesanan
              </h2>
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

            {/* HISTORY TRANSAKSI */}
            <div className='max-h-screen '>
              <div className='bg-white rounded border border-gray-200 shadow-md p-3'>
                <h2 className='font-secondary border-b border-b-gray-400 text-2xl mb-6'>
                  History Transaksi
                </h2>
                <table className='table-auto border-collapse border border-slate-500 w-full text-center'>
                  <thead>
                    {table.getHeaderGroups().map((headerGroup) => (
                      <tr key={headerGroup.id}>
                        {headerGroup.headers.map((header) => (
                          <th
                            key={header.id}
                            className='border border-slate-600 bg-gray-100 '
                          >
                            {header.isPlaceholder
                              ? null
                              : flexRender(
                                  header.column.columnDef.header,
                                  header.getContext(),
                                )}
                          </th>
                        ))}
                      </tr>
                    ))}
                  </thead>
                  <tbody>
                    {table.getRowModel().rows.map((row) => (
                      <tr key={row.id} className='hover:bg-gray-200 '>
                        {row.getVisibleCells().map((cell) => (
                          <td
                            key={cell.id}
                            className='border border-slate-700 p-2'
                          >
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
