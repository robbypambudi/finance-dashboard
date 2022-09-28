import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function FakturPenjualanDetail() {
  const [isDownload, setIsDownload] = useState(true);
  const navigate = useNavigate();
  const { id } = useParams();
  const columnsHelper = createColumnHelper();
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

    columnsHelper.accessor('harga', {
      cell: (info) => info.getValue(),
      header: <span>Harga</span>,
    }),
    // columnsHelper.accessor('discount', {
    //   cell: (info) => info.getValue(),
    //   header: <span>Discount </span>,
    // }),
    columnsHelper.accessor('total', {
      cell: (info) => info.getValue(),
      header: <span>Total</span>,
    }),
  ];
  const HistoryPembayaranSebelumnya = [
    columnsHelper.accessor('id_pembayaran', {
      cell: (info) => info.getValue(),
      header: <span>Kode Barang</span>,
    }),
    columnsHelper.accessor('bank', {
      cell: (info) => info.getValue(),
      header: <span>Nama</span>,
    }),
    columnsHelper.accessor('tanggal', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pembayaran</span>,
    }),
    columnsHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Harga</span>,
    }),
    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan </span>,
    }),
    columnsHelper.accessor('bukti_bayar', {
      cell: (info) => (
        <>
          <div className='flex flex-col gap-y-2'>
            <button className='bg-blue-500 text-white font-bold px-2 py-1 rounded '>
              Lihat
            </button>
          </div>
        </>
      ),
      header: <span>Bukti Bayar</span>,
    }),
  ];
  const DATAITEMS = [
    {
      kode_barang: '123456',
      nama: 'Biji Plastik',
      satuan: 'Pax',
      harga: '10.000.000',
      // discount: '1%',
      total: '100.000',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];
  const PEMBAYARANSEBELUMNYA = [
    {
      id_pembayaran: '123456',
      bank: 'BCA',
      nominal: 'Rp. 500.000',
      tanggal: '9 April 2010',
      // discount: '1%',
      bukti_bayar: '/asdasadafafeaf/afae/fa/feaf/aef/ae',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];

  const onBuktiBayar = () => {
    setIsDownload(true);
    toast.success('Berhasil Menyimpan, Silahkan Download Bukti Bayar', {
      duration: 5000,
    });
  };
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10'>
          <h2 className='text-center font-bold text-3xl'>
            Faktur Pembayaran Penjualan
          </h2>
          <p className='text-center font-bold text-xl mt-5'>
            No Transaksi : 1234567
          </p>
          <p className='text-center font-bold text-xl'>No PO : 1234567</p>
          <p className='text-center font-bold text-xl'>
            No Surat Jalan : 1234567
          </p>
          <p className='text-center font-bold text-xl'>
            Nominal (Termasuk Pajak): Rp. 200.000.00
          </p>
          <div className='flex flex-col items-center justify-center'>
            {/* Export Excel */}

            {isDownload && (
              <div className='flex gap-x-2 my-5 '>
                <button className='bg-blue-500 px-4 py-2 rounded text-white'>
                  Export to Excel
                </button>
                <button className='bg-red-500 px-4 py-2 rounded text-white'>
                  Export to PDF
                </button>
              </div>
            )}

            {/* Detail Informasi Surat Jalan */}

            <div className='bg-white p-3 mt-10 md:w-[80%] lg:w-[80%] 2xl:w-1/2 border border-gray-200 shadow-lg'>
              <p className='text-center font-bold text-2xl'>
                Detail Informasi Surat Jalan
              </p>

              <div className='flex flex-col gap-y-2 mt-2 items-center justify-center'>
                <label>Nama Supir / WA</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  placeholder='Jawaban Anda'
                  value={'Pak Budi'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>No Surat Jalan</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  placeholder='Jawaban Anda'
                  value={'1234521'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>Jenis Kendaraan</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  placeholder='Jawaban Anda'
                  value={'Dum Truck'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>No Polisi Kendaraan</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  placeholder='Jawaban Anda'
                  value={'Trek'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>Vendor</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  placeholder='Jawaban Anda'
                  value={'PT Tirta Agung'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>Tanggal Dikirim</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  type={'date'}
                ></input>
              </div>
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>Tanggal Diterima</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  type={'date'}
                ></input>
              </div>
            </div>

            {/* Detail Item Barang */}
            <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
              <p className='text-center font-bold text-2xl'>
                Detail Pembayaran Sebelumnya
              </p>
              <Table
                data={PEMBAYARANSEBELUMNYA}
                columns={HistoryPembayaranSebelumnya}
              />
            </div>
            <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
              <p className='text-center font-bold text-2xl'>
                Detail Informasi Barang
              </p>
              <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
