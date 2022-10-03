import { useState } from 'react';
import toast from 'react-hot-toast';
import { redirect, useNavigate } from 'react-router-dom';
import PesananComponents from '../../../../components/PesananComponents';
import TambahItemBarang from '../../../../components/TambahItemBarang';
import DashboardShellAdmin from '../../../../layouts/admin/DashboarsShellAdmin';
export default function PesananPembelian() {
  const [ListData, SetListData] = useState([]);
  const navigate = useNavigate();
  const BuatPesanan = () => {
    toast.success(
      'Pesanan Berhasil Dibuat, Silahkan Lengkapi Data Surat Jalan Berikut',
      { duration: 10000 },
    );
    navigate('/surat/jalan/1234');
  };
  return (
    <>
      <DashboardShellAdmin>
        <div className='p-5'>
          <h2 className='text-center text-3xl font-bold font-primary my-2'>
            Purchase Requistion
          </h2>

          <div className='flex items-center justify-center'>
            <PesananComponents />
          </div>
          <div className=''>
            <TambahItemBarang data={ListData} setData={SetListData} />
          </div>
        </div>

        {/* Submited Barang */}
        <div className='mb-5 flex flex-col items-center'>
          <button
            className='px-4 py-2 bg-blue-500 rounded text-white'
            onClick={() => BuatPesanan()}
          >
            Buat Pesanan
          </button>
        </div>
      </DashboardShellAdmin>
    </>
  );
}
