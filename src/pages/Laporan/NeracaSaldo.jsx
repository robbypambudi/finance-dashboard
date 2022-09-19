import { createColumnHelper } from '@tanstack/react-table';
import { Link } from 'react-router-dom';
import TableListPayment from '../../components/TableListPayment';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';
import DATA_NERACA from '../../mock/DATA_NERACA_SALDO.json';
export default function NeracaSaldo() {
  const columnsHelper = createColumnHelper();

  const COLUMNS_NERACA = [
    columnsHelper.accessor('kode', {
      header: <span>Kode</span>,
      cell: (info) => info.getValue(),
    }),
    columnsHelper.accessor('akun', {
      header: <span>Akun</span>,
      cell: (info) => info.getValue(),
      footer: (
        <div classname='text-start'>
          <h2>Total</h2>
        </div>
      ),
    }),
    columnsHelper.accessor('saldo_debit', {
      header: <span>Saldo Kredit</span>,
      cell: (info) => info.getValue(),
      footer: (
        <div classname='text-start'>
          <h2>Rp. 27.000.000</h2>
        </div>
      ),
    }),
    columnsHelper.accessor('saldo_kredit', {
      header: <span>Saldo Debit</span>,
      cell: (info) => info.getValue(),
      footer: (
        <div classname='flex justify-start items-start text-start'>
          <h2>Rp. 0</h2>
        </div>
      ),
    }),
  ];

  return (
    <div>
      <DashboardShellAdmin>
        <div className='p-3'>
          <h1 className='text-center text-3xl font-primary font-bold'>
            Laporan Neraca Saldo
          </h1>
          <div className='flex justify-center items-center gap-x-3 mt-5'>
            <Link
              to={`${process.env.PUBLIC_URL}/assets/excel/LaporanNeracaSaldo.xlsx`}
              target='_blank'
              download={true}
            >
              <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
                <p>Export To Excel</p>
              </button>
            </Link>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To CSV</p>
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To PDF</p>
            </button>
          </div>
          <div className='h-max w-full flex items-center justify-center mt-5'>
            <div className='bg-white p-4 rounded border border-gray-300 shadow-md w-full'>
              <div className='flex flex-col'>
                <label>Tanggal</label>
                <input
                  className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                  type='date'
                ></input>
              </div>
              <div className='mt-8'>
                <TableListPayment columns={COLUMNS_NERACA} data={DATA_NERACA} />
              </div>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </div>
  );
}
