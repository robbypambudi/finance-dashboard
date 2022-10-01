import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import TambahItemBarang from '../../../components/TambahItemBarang';
import TambahItemBarangPO from '../../../components/TambahItemBarangPO';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';
const DATAITEMS = [
  {
    kode_barang: '123456',
    nama: 'Biji Plastik',
    satuan: 'Pax',
    harga: '10.000.000',
    discount: '1%',
    quantity: '5',
    total: '100.000',
    catatan: 'Anak Perusahaan dari PT Waskita',
  },
];
export default function PurcheseOrder() {
  const columnsHelper = createColumnHelper();
  const navigate = useNavigate();
  const ListPenerimaanBarang = [
    columnsHelper.accessor('kode_barang', {
      cell: (info) => info.getValue(),
      header: <span>Kode Barang</span>,
    }),
    columnsHelper.accessor('nama', {
      cell: (info) => info.getValue(),
      header: <span>Nama</span>,
    }),
    columnsHelper.accessor('satuan', {
      cell: (info) => info.getValue(),
      header: <span>Satuan</span>,
    }),
    columnsHelper.accessor('quantity', {
      cell: (info) => info.getValue(),
      header: <span>Quantity</span>,
    }),
  ];
  const [ListData, SetListData] = useState([]);
  const onSaveSuratJalan = () => {
    toast.success(
      'Berhasil Menyimpan, Silahkan Download Surat Jalan Pembelian',
      { duration: 5000 },
    );
  };

  return (
    <>
      <DashboardShellAdmin>
        <div className='p-5'>
          <div>
            <h1 className='text-center text-3xl font-primary font-bold'>
              Pembuatan PO
            </h1>
          </div>

          <div className='mt-5 bg-white border border-gray-200 shadow-md p-4 flex flex-col items-center justify-center text-center'>
            <div className='my-2 flex flex-col gap-y-1'>
              <div className='my-2 flex flex-col gap-y-1'>
                <label>No Pesanan</label>
                <select className='p-3 w-64 bg-gray-200 rounded'>
                  <option> --- Pilih Pesanan --- </option>
                  <option> --- TR-123456 (PT-Briand Perkasa) --- </option>
                  <option> --- TR-123456 (PT-ABC1234) --- </option>
                </select>
              </div>
              <label>No PO</label>
              <input className='p-3 w-64 bg-gray-200 rounded'></input>
            </div>
            <div className='my-2 flex flex-col gap-y-1'>
              <label>Alamat Pengirim</label>
              <textarea className='p-3 w-[300px] bg-gray-200 rounded'></textarea>
            </div>
            <div className=''>
              <TambahItemBarangPO data={ListData} setData={SetListData} />
            </div>
            <div className='flex items-center justify-center gap-x-5 mt-4'>
              <button
                className='px-4 py-2 bg-green-500 text-white rounded-lg'
                onClick={() => navigate('/pesanan/pembelian')}
              >
                Kembali
              </button>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded-lg'
                onClick={() => onSaveSuratJalan()}
              >
                Simpan
              </button>
              <button
                className='px-4 py-2 bg-red-500 text-white rounded-lg'
                onClick={() => navigate('/pembayaran/pembelian')}
              >
                Selanjutnya
              </button>
            </div>

            {/* <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
              <p className='text-center font-bold text-2xl'>Detail Barang</p>
              <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
            </div> */}
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
