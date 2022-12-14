import { createColumnHelper } from '@tanstack/react-table';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Table from '../../../../components/Table';
import TambahItemBarangPO from '../../../../components/TambahItemBarangPO';
import DashboardShellAdmin from '../../../../layouts/admin/DashboarsShellAdmin';

export default function DetailSuratJalan() {
  const [isDownload, setIsDownload] = useState(false);
  const navigate = useNavigate();
  const [ListData, SetListData] = useState([]);

  const { id } = useParams();
  const columnsHelper = createColumnHelper();
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
    columnsHelper.accessor('quantity', {
      cell: (info) => info.getValue(),
      header: <span>Quantity</span>,
    }),
  ];

  const DATAITEMS = [
    {
      kode_barang: '123456',
      nama: 'Biji Plastik',
      satuan: 'Pax',
      harga: '10.000.000',
      discount: '1%',
      quantity: '10',
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

  const onSaveSuratJalan = () => {
    setIsDownload(true);
    toast.success(
      'Berhasil Menyimpan, Silahkan Download Surat Jalan Pembelian',
      { duration: 5000 },
    );
  };
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-10 relative'>
          <div className='absolute top-10 right-10'>
            <button className='px-4 py-2 border border-green-500 rounded '>
              Diterima
            </button>
          </div>
          <h2 className='text-center font-bold text-3xl'>
            Pengisian Surat Jalan
          </h2>
          <p className='text-center  text-base'>No PO : PO-0110202201</p>
          {/* <p className='text-center  text-base'>No PO : PO-1234567</p> */}
          <div className='flex flex-center justify-center my-4 gap-x-4'>
            <button className='px-4 py-2 bg-green-500 rounded '>
              Diterima
            </button>
            <button className='px-4 py-2 bg-yellow-500 rounded '>
              Dikirim
            </button>
            <button className='px-4 py-2 bg-red-500 rounded '>
              Dibatalkan
            </button>
          </div>
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
              <div className='flex flex-col gap-y-2 mt-1 items-center justify-center'>
                <label>Bukti Surat Jalan</label>
                <input
                  className='px-4 py-2 h-10 rounded w-1/2 bg-gray-200'
                  type={'file'}
                ></input>
              </div>
              {/* <div className='mt-5 p-2'>
                <Table data={DATAITEMS
                } columns={listBarangCheck} />
              </div> */}
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
            </div>

            {/* Detail Pengiriman Barang */}
            <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
              <p className='text-center font-bold text-2xl'>
                Detail Pengiriman Barang
              </p>
              <Table
                data={DATAITEMSSEBELUMNYA}
                columns={ListPengirimanSebelumnuya}
              />
            </div>
            {/* Detail Item Barang */}
            <div className='bg-white mt-5 p-5 border border-gray-200 shadow'>
              <p className='text-center font-bold text-2xl'>
                Detail Barang pada PO
              </p>
              <Table data={DATAITEMS} columns={ListPenerimaanBarang} />
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
