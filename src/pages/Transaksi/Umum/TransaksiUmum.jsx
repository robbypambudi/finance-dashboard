import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';
import {
  useReactTable,
  getCoreRowModel,
  createColumnHelper,
  flexRender,
} from '@tanstack/react-table';
import Data_Transaksi from '../../../mock/DATA_HISTORY_TRANSAKSI.json';
import {
  Jenis_Debit,
  Jenis_Kredit,
  Jenis_Transaksi,
} from '../../../lib/constant';
import PajakInput from '../../../components/PajakInput';
import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa';
import { AiOutlinePrinter } from 'react-icons/ai';
import SelectInput from '../../../components/SelectInput';
import Table from '../../../components/Table';
export default function TransaksiUmum() {
  const columnHelper = createColumnHelper();
  const data = useMemo(() => Data_Transaksi, [Data_Transaksi]);
  const columns = [
    columnHelper.accessor('id', {
      cell: (info) => info.getValue(),
      header: () => <span>Kode</span>,
    }),
    columnHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: () => <span>Tanggal</span>,
    }),
    columnHelper.accessor('nama_transaksi', {
      cell: (info) => info.getValue(),
      header: () => <span>Jenis Transaksi</span>,
    }),
    columnHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: () => <span>Nominal</span>,
    }),
    columnHelper.accessor('sales', {
      cell: (info) => info.getValue(),
      header: () => <span>Sales</span>,
    }),
    columnHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: () => <span>Catatan</span>,
    }),
    columnHelper.accessor('id', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <div className='flex flex-col gap-y-2 items-center justify-center'>
            <Link to={`/transaksi/${href}`}>
              <FaEye size={24} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/invoice/penjual/${href}`}>
              <AiOutlinePrinter size={24} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/transaksi/edit/${href}`}>
              <FaEdit size={24} className='hover:text-green-500 ' />
            </Link>
            <Link to={`/transaksi/invoice/${href}`}>
              <FaTrash size={24} className='hover:text-green-500 ' />
            </Link>
          </div>
        );
      },
      header: () => <span>Aksi</span>,
    }),
  ];
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DashboardShellAdmin nav={'Transaksi'}>
        <div className='px-4'>
          <h1 className='font-primary text-3xl text-center my-3'>Transaksi</h1>

          <div className='grid grid-cols-1 p-4 gap-x-2'>
            <div className='bg-white rounded border border-gray-200 shadow-md p-3 h-max '>
              <h2 className='font-secondary border-b border-b-gray-400 text-2xl'>
                Tambah Transaksi
              </h2>
              <form className='mt-5'>
                <div className='flex flex-col'>
                  <label className='my-2'>Tanggal</label>
                  <input
                    className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow'
                    type='date'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='my-2'>Jenis Transaksi</label>
                  <select
                    className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow'
                    type='select'
                  >
                    <option>Jenis Transaksi</option>
                    {Jenis_Transaksi.map((jenis, index) => {
                      return (
                        <option value={jenis.value} key={index}>
                          {jenis.name}{' '}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='my-2'>Diambil Dari (Kredit) </label>
                  <select
                    className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow'
                    type='select'
                  >
                    {Jenis_Kredit.map((jenis, index) => {
                      return <option key={index}>{jenis.name}</option>;
                    })}
                  </select>
                </div>
                <div className='flex flex-col'>
                  <label className='my-2'>Nominal</label>
                  <input
                    className='bg-gray-100 px-4 py-2 h-20 text-3xl rounded-md border border-gray-400 shadow'
                    placeholder='RP 0'
                    type='text'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='my-2'>Catatan</label>
                  <textarea
                    className='bg-gray-100 px-4 py-2 h-20  rounded-md border border-gray-400 shadow'
                    placeholder='catatan'
                    type='text'
                  />
                </div>
                {/* <PajakInput /> */}

                <div className='flex flex-col'>
                  <label className='my-2'>Kontak Staff</label>
                  <input
                    className='bg-gray-100 px-4 py-2  rounded-md border border-gray-400 shadow'
                    placeholder='Kontak'
                    type='text'
                  />
                </div>
                <div className='flex items-center justify-center mt-6'>
                  <button className='bg-blue-500 px-6 py-2 rounded-xl text-white hover:bg-gray-500'>
                    <p>Tambah</p>
                  </button>
                </div>
              </form>
            </div>
            <div className='max-h-screen '>
              <div className='bg-white rounded border border-gray-200 shadow-md p-3'>
                <div className='w-full flex justify-center items-center gap-x-4'>
                  <button className='px-4 py-2 bg-gray-300 rounded-lg'>
                    <p>Export To Excel</p>
                  </button>
                  <button className='px-4 py-2 bg-gray-300 rounded-lg'>
                    <p>Export To CSV</p>
                  </button>
                  <button className='px-4 py-2 bg-gray-300 rounded-lg'>
                    <p>Export To PDF</p>
                  </button>
                </div>
                <h2 className='font-secondary border-b border-b-gray-400 text-2xl mb-6'>
                  History Transaksi
                </h2>
              </div>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
