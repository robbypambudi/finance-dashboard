import { useState } from 'react';
import PesananComponents from '../../../components/PesananComponents';
import TambahItemBarang from '../../../components/TambahItemBarang';
import DashboardShellAdmin from '../../../layouts/admin/DashboarsShellAdmin';

export default function PesananPenjualan() {
  const [ListData, SetListData] = useState([]);
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-5'>
          <h2 className='text-center text-3xl font-bold font-primary'>
            Pesanan Penjualan
          </h2>

          <div className='w-1/2'>
            <PesananComponents />
          </div>
          <div className=''>
            <TambahItemBarang data={ListData} setData={SetListData} />
          </div>
        </div>

        {/* Submited Barang */}
        <div className='mb-5 flex flex-col items-center'>
          <button className='px-4 py-2 bg-blue-500 rounded text-white'>
            Buat Pesanan
          </button>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
