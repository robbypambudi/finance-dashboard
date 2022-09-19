import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function DashboardBarang() {
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-4'>
          {/* Dashboard */}
          <div className='grid grid-cols-3 gap-5'>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Terkirim</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang On Going</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Pending</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Dibatalkan</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
            <div className='px-6 py-3 bg-white border border-gray-400 shadow-lg'>
              <div className='text-center  font-primary '>
                <h3 className='text-2xl'>Barang Tanpa Keterangan</h3>
                <div className='mt-6'>
                  <p className='text-3xl font-primary '>100</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
