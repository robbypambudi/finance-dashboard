import { createColumnHelper } from '@tanstack/react-table';
import { Link, useParams } from 'react-router-dom';
import TableListPayment from '../../components/TableListPayment';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import INVOICE_BARANG from '../../mock/INVOICE_BARANG.json';
export default function InvoiceBarang() {
  let { id } = useParams();
  const columnHelper = createColumnHelper();

  const COLUMNS_BARANG = [
    columnHelper.accessor('kode_barang', {
      cell: (info) => info.getValue(),
      header: <span>Kode Barang</span>,
    }),

    columnHelper.accessor('nama_barang', {
      cell: (info) => info.getValue(),
      header: <span>Nama Barang</span>,
    }),
    columnHelper.accessor('kuantitas', {
      cell: (info) => info.getValue(),
      header: <span>Kuantitas</span>,
    }),
    columnHelper.accessor('harga_satuan', {
      cell: (info) => info.getValue(),
      header: <span>Harga Satuan</span>,
      footer: (
        <>
          <div className='flex flex-col gap-y-2 items-start justify-start'>
            <span>Sub Total :</span>
            <span>PPN 11 % :</span>
            <span>Grand Total : </span>
          </div>
        </>
      ),
    }),
    columnHelper.accessor('nominal', {
      cell: (info) => info.getValue(),
      header: <span>Harga</span>,
      footer: (
        <>
          <div className='flex flex-col gap-y-2 items-start justify-start'>
            <span>Rp. 400.000.000</span>
            <span>Rp 44.000.000</span>
            <span>Rp 444.000.000</span>
          </div>
        </>
      ),
    }),
  ];

  return (
    <>
      <DashboardShellAdmin>
        <div className='p-3'>
          <div className='flex items-center justify-center gap-x-4'>
            <Link
              to={`${process.env.PUBLIC_URL}/assets/excel/sampleInvoice.xlsx`}
              target='_blank'
              download={true}
            >
              <button className='bg-blue-500 px-4 py-2 rounded border border-blue-600 shadow text-white'>
                Export To Excel
              </button>
            </Link>
            <button className='bg-blue-500 px-4 py-2 rounded border border-blue-600 shadow text-white'>
              Export To CSV
            </button>
            <button className='bg-blue-500 px-4 py-2 rounded border border-blue-600 shadow text-white'>
              Export To PDF
            </button>
          </div>
          <div className=' bg-white border border-gray-400 rounded shadow my-4 py-4'>
            <div className='flex items-center justify-center flex-col'>
              <h2 className='text-2xl font-bold font-primary'>
                Invoice Barang
              </h2>
              <p>No Invoice : {INVOICE_BARANG.invoice_id}</p>
            </div>

            {/* Detail Pemesana */}
            <div className='px-6'>
              <div className='flex flex-col'>
                <label className='my-2'>Nama</label>
                <input
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                  type='text'
                  value={INVOICE_BARANG.nama}
                  readOnly={true}
                />
              </div>
              <div className='flex flex-col mt-2'>
                <label className='my-1'>Jenis Transaksi</label>
                <input
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                  type='text'
                  value={INVOICE_BARANG.jenis_transaksi}
                  readOnly={true}
                />
              </div>
              <div className='flex flex-col mt-2'>
                <label className='my-1'>Tanggal</label>
                <input
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                  type='text'
                  value={INVOICE_BARANG.tanggal}
                  readOnly={true}
                />
              </div>
              <div className='flex flex-col mt-2'>
                <label className='my-1'>Catatan</label>
                <textarea
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-1/2'
                  type='text'
                  value={INVOICE_BARANG.catatan}
                  readOnly={true}
                />
              </div>
            </div>
            <div>
              <div className='px-6 py-3 mt-7'>
                <h2 className='text-3xl font-bold font-primary text-center'>
                  Detail Barang
                </h2>
                <div>
                  <TableListPayment
                    data={INVOICE_BARANG.barang}
                    columns={COLUMNS_BARANG}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
