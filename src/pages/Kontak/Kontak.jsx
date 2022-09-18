import { createColumnHelper } from '@tanstack/react-table';
import { FaEdit, FaEye } from 'react-icons/fa';
import Table from '../../components/Table';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import DATA_KONTAK from '../../mock/LIST_KONTAK.json';
export default function Kontak() {
  const columnsHelper = createColumnHelper();

  const COLUMNS_KONTAK = [
    columnsHelper.accessor('name', {
      header: <span>Name</span>,
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('email', {
      header: <span>Email</span>,
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('no_telp', {
      header: <span>No Telpon</span>,
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('alamat', {
      header: <span>Alamat</span>,
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('id', {
      header: <span>Aksi</span>,
      cell: (info) => {
        return (
          <div className='flex flex-col gap-y-3'>
            <FaEdit size={24} />
            <FaEye size={24} />
          </div>
        );
      },
    }),
  ];

  return (
    <>
      <DashboardShellAdmin>
        <div className='p-5'>
          <div>
            <h2 className='text-center font-bold text-2xl font-primary'>
              Daftar Kontak
            </h2>
          </div>

          <div className='mt-5 px-3 py-6 bg-white rounded-lg shadow border border-gray-400'>
            <div className='py-5'>
              <h1 className='text-center text-xl font-bold font-primary'>
                Tambah Kontak
              </h1>
              <div className='bg-gray-100 border border-gray-500 rounded-lg p-5'>
                <div className='grid grid-cols-2'>
                  <div>
                    <div className='flex flex-col'>
                      <label className='my-1'>Nama</label>
                      <input
                        className='bg-white px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                        type='text'
                        placeholder='Jawaban Anda'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='my-1'>Email</label>
                      <input
                        className='bg-white px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                        type='email'
                        placeholder='Jawaban Anda'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='my-1'>No Telp</label>
                      <input
                        className='bg-white px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                        type='email'
                        placeholder='Jawaban Anda'
                      />
                    </div>
                    <div className='flex flex-col'>
                      <label className='my-1'>Alamat</label>
                      <textarea
                        className='bg-white px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                        type='text'
                        placeholder='Jawaban Anda'
                      />
                    </div>
                  </div>
                  {/* Columns Ke 2 */}
                  <div>
                    <div className='flex flex-col'>
                      <label className='my-1'>Catatan</label>
                      <textarea
                        className='bg-white px-4 py-2 rounded-md border border-gray-400 shadow w-72'
                        type='text'
                      ></textarea>
                    </div>
                    <div className='mt-5'>
                      <button className='px-4 py-2 bg-blue-500 rounded border border-gray-300 font-bold text-white'>
                        Tambah
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Table columns={COLUMNS_KONTAK} data={DATA_KONTAK} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
