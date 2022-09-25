import { createColumnHelper } from '@tanstack/react-table';
import { initOnLoad } from 'apexcharts';
import { info } from 'autoprefixer';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function PengirimanBarang() {
  const columnsHelper = createColumnHelper();

  const ListPenerimaanBarang = [
    columnsHelper.accessor('kode-barang', {
      cell: (info) => info.getValue(),
      header: <span>Kode Barang</span>,
    }),
    columnsHelper.accessor('nama', {
      cell: (info) => info.getValue(),
      header: <span>Nama Barang</span>,
    }),
    columnsHelper.accessor('satuan', {
      cell: (info) => info.getValue(),
      header: <span>Satuan</span>,
    }),
    columnsHelper.accessor('jumlah', {
      cell: (info) => info.getValue(),
      header: <span>Jumlah</span>,
    }),
    columnsHelper.accessor('harga', {
      cell: (info) => info.getValue(),
      header: <span>Harga/Rp</span>,
    }),
    columnsHelper.accessor('total', {
      cell: (info) => <p>{info.getValue()}</p>,
      header: <span>Total</span>,
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
        <div>
          <h2 className='text-center text-3xl font-bold my-3'>
            Pengiriman barang
          </h2>
          <div className='p-5'>
            <div className='w-1/2'>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>No Transaksi</label>
                <input
                  className='px-4 py-2 h-10 rounded'
                  value={'122313213'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>Nama Supir/ Wa</label>
                <input
                  className='px-4 py-2 h-10 rounded'
                  value={'Pak Putro /12213321 32131'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>No PO</label>
                <input
                  className='px-4 py-2 h-10 rounded'
                  value={'122313213'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>Sales</label>
                <input
                  className='px-4 py-2 h-10 rounded'
                  value={'Pak Robby'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>Jenis Kendaraan</label>
                <input
                  className='px-4 py-2 h-10 rounded'
                  value={'Pak Robby'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>No Polisi Kendaraan</label>
                <input
                  className='px-4 py-2 h-10 rounded'
                  value={'B 12312 Sia'}
                ></input>
              </div>

              <div className='flex flex-col gap-y-1 my-2'>
                <label>Status Pengiriman</label>
                <select className='px-4 py-2 rounded'>
                  <option>--- Status ---</option>
                  <option>--- Selesai ---</option>
                  <option>--- Panding ---</option>
                  <option>--- On Going ---</option>
                  <option>--- Dibatalkan ---</option>
                </select>
              </div>
              <div className='flex flex-col gap-y-1 my-2'>
                <label>Catatan</label>
                <textarea className='px-4 py-2 rounded'></textarea>
              </div>
            </div>

            {/* Rincian Barang */}
            <div className='mt-7'>
              <h2 className='text-center text-2xl font-primary'>
                Rincian Barang
              </h2>
              <Table data={data} columns={ListPenerimaanBarang} />
            </div>

            <div className='mt-6 flex items-center justify-center rounded text-white'>
              <button className='px-4 py-2 bg-blue-500'>Buat PO</button>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
