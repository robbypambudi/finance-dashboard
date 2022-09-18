import { Link } from 'react-router-dom';
import DashboardShellAdmin from '../../layouts/admin/DashboarsShellAdmin';

export default function LabaRugi() {
  return (
    <div>
      <DashboardShellAdmin>
        <div className='p-5'>
          <div>
            <h2 className='text-center font-bold text-3xl font-primary'>
              Laporan Laba Rugi
            </h2>
          </div>
          <div className='flex justify-center items-center mt-5'>
            <Link
              to={`${process.env.PUBLIC_URL}/assets/LaporanLabaRugi.xlsx`}
              target='_blank'
              download={true}
            >
              <button className='px-4 py-2 bg-blue-500 rounded border border-blue-700 text-white'>
                Export Excel
              </button>
            </Link>
          </div>
          <div className='bg-white rounded p-5 mt-4'>
            <div className='flex flex-col'>
              <label>Tanggal</label>
              <input
                className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'
                type='date'
              ></input>
            </div>

            <div className='flex flex-col mt-6'>
              <div>
                <p className='font-bold '>Pendapatan dan Penjualan</p>
                <div className='border-b border-b-gray-500 my-2'>
                  <div className='grid grid-cols-3'>
                    <div className='px-4'>
                      <p>4-4000</p>
                    </div>
                    <div className='px-4'>
                      <p>Pendapatan</p>
                    </div>
                    <div className='px-4'>
                      <p>Rp. 20.000.000</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-3'>
                  <p className='font-bold '> Total Pendapatan dan Penjualan</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 20.000.000</p>
                  </div>
                </div>
              </div>

              <div className='mt-5'>
                <p className='font-bold '>Harga Pokok Penjualan</p>
                <div className='border-b border-b-gray-500 my-2'>
                  <div className='grid grid-cols-3'>
                    <div className='px-4'>
                      <p>5-5000</p>
                    </div>
                    <div className='px-4'>
                      <p>Beban Pokok Pendapatan</p>
                    </div>
                    <div className='px-4'>
                      <p>Rp. 100.000</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-3'>
                  <p className='font-bold '> Total Harga Pokok Penjualan</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 100.000</p>
                  </div>
                </div>
                <div className='grid grid-cols-3 bg-gray-100'>
                  <p className='font-bold '> Laba Kotor</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 1.900.000</p>
                  </div>
                </div>
              </div>
              {/* Beban Operasional */}
              <div className='mt-5'>
                <p className='font-bold '>Beban Operasional</p>
                <div className='border-b border-b-gray-500 my-2'>
                  <div className='grid grid-cols-3'>
                    <div className='px-4'>
                      <p>6-6000</p>
                    </div>
                    <div className='px-4'>
                      <p>Konsumsi & Transportasi</p>
                    </div>
                    <div className='px-4'>
                      <p>Rp. 1.000.000</p>
                    </div>
                  </div>
                </div>
                <div className='grid grid-cols-3'>
                  <p className='font-bold '> Total Beban Operasional</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 1.000.000</p>
                  </div>
                </div>
                <div className='grid grid-cols-3 bg-gray-100'>
                  <p className='font-bold '> Laba Bersih Operasional</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 900.000</p>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <p className='font-bold '>Pendapatan Lainya</p>
                <div className='border-b border-b-gray-500 my-2'>
                  {/* <div className='grid grid-cols-3'>
                    <div className='px-4'>
                      <p>6-6000</p>
                    </div>
                    <div className='px-4'>
                      <p>Konsumsi & Transportasi</p>
                    </div>
                    <div className='px-4'>
                      <p>Rp. 1.000.000</p>
                    </div>
                  </div> */}
                </div>
                <div className='grid grid-cols-3'>
                  <p className='font-bold '> Total Pendapatan Lainya</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 0</p>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <p className='font-bold '>Beban Lainya</p>
                <div className='border-b border-b-gray-500 my-2'>
                  {/* <div className='grid grid-cols-3'>
                    <div className='px-4'>
                      <p>6-6000</p>
                    </div>
                    <div className='px-4'>
                      <p>Konsumsi & Transportasi</p>
                    </div>
                    <div className='px-4'>
                      <p>Rp. 1.000.000</p>
                    </div>
                  </div> */}
                </div>
                <div className='grid grid-cols-3'>
                  <p className='font-bold '> Total Beban Lainya</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 0</p>
                  </div>
                </div>
              </div>
              <div className='mt-5'>
                <div className='grid grid-cols-3 bg-gray-200'>
                  <p className='font-bold '> Laba Bersih</p>
                  <div></div>
                  <div>
                    <p className='font-bold px-4'>Rp. 900.000</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardShellAdmin>
    </div>
  );
}
