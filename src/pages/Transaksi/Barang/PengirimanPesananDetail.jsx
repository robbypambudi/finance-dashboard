import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import Table from '../../../components/Table';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function PengirimanPesananDetail() {
  const columnsHelper = createColumnHelper();
  const [isDownload, setIsDownload] = useState(false);
  const navigate = useNavigate();
  const onSaveSuratJalan = () => {
    setIsDownload(true);
    toast.success(
      'Berhasil Menyimpan, Silahkan Download Surat Jalan Pembelian',
      { duration: 5000 },
    );
  };
  const DATAITEMS = [
    {
      kode_barang: '123456',
      nama: 'Biji Plastik',
      satuan: 'Pax',
      harga: '10.000.000',
      discount: '1%',
      total: '100.000',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];
  const DATAITEMBARANGCHECK = [
    {
      kode_barang: '123456',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: false,
      tanggal: '9 April 2022',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];
  const ListPengirimanSebelumnuya = [
    columnsHelper.accessor('kode_barang', {
      cell: (info) => info.getValue(),
      header: <span>Kode Barang</span>,
    }),
    columnsHelper.accessor('no_suratjalan', {
      cell: (info) => info.getValue(),
      header: <span>Nomor Surat Jalan</span>,
    }),
    columnsHelper.accessor('tanggal_kirim', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Kirim</span>,
    }),
    columnsHelper.accessor('nama', {
      cell: (info) => info.getValue(),
      header: <span>Nama</span>,
    }),
    columnsHelper.accessor('satuan', {
      cell: (info) => info.getValue(),
      header: <span>Satuan</span>,
    }),

    columnsHelper.accessor('awal', {
      cell: (info) => info.getValue(),
      header: <span>Kurang</span>,
    }),
    columnsHelper.accessor('dikirim', {
      cell: (info) => info.getValue(),
      header: <span>Dikirim</span>,
    }),
    columnsHelper.accessor('sisa', {
      cell: (info) => info.getValue(),
      header: <span>Sisa </span>,
    }),
  ];
  const DATAITEMSSEBELUMNYA = [
    {
      kode_barang: '123456',
      no_suratjalan: 'SJ-12341236',
      tanggal_kirim: '12 April 2022',
      nama: 'Biji Plastik',
      satuan: 'Pax',
      harga: '10.000.000',
      awal: '80',
      dikirim: '50',
      sisa: '30',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
    {
      kode_barang: '123456',
      no_suratjalan: 'SJ-12341234',
      tanggal_kirim: '12 April 2022',
      nama: 'Biji Plastik',
      satuan: 'Pax',
      harga: '10.000.000',
      awal: '100',
      dikirim: '20',
      sisa: '80',
      catatan: 'Anak Perusahaan dari PT Waskita',
    },
  ];
  const listBarangCheck = [
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
    columnsHelper.accessor('kode_barang', {
      cell: (info) => (
        <div className='w-[400px]'>
          <input type='number' className='px-4 py-2'></input>
        </div>
      ),
      header: <span>Jumlah Barang Diterima</span>,
    }),
  ];

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
    columnsHelper.accessor('discount', {
      cell: (info) => info.getValue(),
      header: <span>Discount </span>,
    }),
    columnsHelper.accessor('total', {
      cell: (info) => info.getValue(),
      header: <span>Total</span>,
    }),
  ];
  const HistoryPenerimaanBarang = [
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => info.getValue(),
      header: <span>No_Transaksi</span>,
    }),
    columnsHelper.accessor('tanggal_pengiriman', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Pengiriman</span>,
    }),
    columnsHelper.accessor('tanggal_sampai', {
      cell: (info) => info.getValue(),
      header: <span>Tanggal Sampai</span>,
    }),
    columnsHelper.accessor('vendor', {
      cell: (info) => info.getValue(),
      header: <span>Pembeli</span>,
    }),
    columnsHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Nominal</span>,
    }),

    columnsHelper.accessor('catatan', {
      cell: (info) => info.getValue(),
      header: <span>Catatan</span>,
    }),
    columnsHelper.accessor('status', {
      cell: (info) => info.getValue(),
      header: <span>Status Pengiriman</span>,
    }),
    columnsHelper.accessor('no_transaksi', {
      cell: (info) => {
        const href = info.getValue();
        return (
          <>
            <div className='flex flex-col gap-y-2'>
              <button
                className='bg-blue-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pengiriman/barang/${href}`)}
              >
                Surat Jalan
              </button>
              <button
                className='bg-green-500 text-white font-bold px-2 py-1 rounded '
                onClick={() => navigate(`/pembayaran/penjualan/${href}`)}
              >
                Pembayaran
              </button>
            </div>
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
  const dataHistory = [
    {
      no_transaksi: '123456',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: 'Pandding Payment',
      tanggal_pengiriman: '22 September 2022',
      tanggal_sampai: '13 April 2022',
      catatan: 'Anak Perusahaan dari PT ',
    },
  ];
  const dataHistory2 = [
    {
      no_transaksi: '1234512316',
      vendor: 'PT Jaya Bakti Indonesia',
      nominal: 'Rp. 12.000.000',
      status: 'Selesai',
      tanggal_pengiriman: '22 September 2022',
      tanggal_sampai: '13 April 2022',
      catatan: 'Anak Perusahaan dari PT ',
    },
  ];
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10 flex items-center justify-center flex-col'>
          <h2 className='text-center text-3xl font-bold my-3'>
            Pengisian Surat Jalan
          </h2>

          <div>
            <h2 className='text-center text-xl font-bold '>
              No Transaksi : 1234512
            </h2>
            <p className='text-center text-xl font-bold '>
              Nominal (Termasuk Pajak) : 1234512123
            </p>
          </div>
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

          <div className='bg-white p-3 mt-10 md:w-[80%] lg:w-[80%] 2xl:w-1/2 border border-gray-200 shadow-lg'>
            <p className='text-center font-bold text-2xl'>
              Detail Informasi Surat Jalan
            </p>
            <div className='flex flex-col gap-y-2 mt-2 items-center justify-center'>
              <label>Nama Supir / WA</label>
              <input
                className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                placeholder='Jawaban Anda'
              ></input>
            </div>
            <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
              <label>No Surat Jalan</label>
              <input
                className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                placeholder='Jawaban Anda'
              ></input>
            </div>
            <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
              <label>Jenis Kendaraan</label>
              <input
                className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                placeholder='Jawaban Anda'
              ></input>
            </div>
            <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
              <label>No Polisi Kendaraan</label>
              <input
                className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                placeholder='Jawaban Anda'
              ></input>
            </div>
            <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
              <label>Nama Pembeli</label>
              <input
                className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                placeholder='Jawaban Anda'
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

            <div className='mt-5 p-2'>
              <Table data={DATAITEMS} columns={listBarangCheck} />
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
          </div>
          <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
            <p className='text-center font-bold text-2xl'>
              Detail Pengiriman Barang Sebelumnya
            </p>
            <Table
              data={DATAITEMSSEBELUMNYA}
              columns={ListPengirimanSebelumnuya}
            />
          </div>

          <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
            <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
