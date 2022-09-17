import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';

export default function NeracaSaldo() {
  return (
    <div>
      <DashboardShellAdmin>
        <div className='p-3'>
          <h1 className='text-center text-3xl font-primary font-bold'>
            Laporan Jurnal Umum
          </h1>

          <div className='flex justify-center items-center gap-x-3 mt-5'>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To Excel</p>
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To CSV</p>
            </button>
            <button className='px-4 py-2 bg-gray-400 text-white font-bold rounded'>
              <p>Export To PDF</p>
            </button>
          </div>
          <div className='h-max w-full flex items-center justify-center mt-5'>
            <div className='bg-white p-4 rounded border border-gray-300 shadow-md'></div>
          </div>
        </div>{' '}
      </DashboardShellAdmin>
    </div>
  );
}
