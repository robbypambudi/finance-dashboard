import { createColumnHelper } from '@tanstack/react-table';
import { FormProvider, useForm } from 'react-hook-form';
import Table from './Table';

export default function TambahItemBarang({ data, setData }) {
  const columnsHelper = createColumnHelper();
  const { register, handleSubmit } = useForm();
  const ListItems = [
    columnsHelper.accessor('kode-barang', {
      cell: (info) => info.getValue(),
      header: <span>Kode Barang</span>,
    }),
    columnsHelper.accessor('nama', {
      cell: (info) => info.getValue(),
      header: <span>Nama Barang</span>,
    }),
    columnsHelper.accessor('satuan', {
      cell: (info) => info.getValue(),
      header: <span>Satuan</span>,
    }),
    columnsHelper.accessor('jumlah', {
      cell: (info) => info.getValue(),
      header: <span>Quantity</span>,
    }),
    columnsHelper.accessor('harga', {
      cell: (info) => info.getValue(),
      header: <span>Harga</span>,
    }),
    columnsHelper.accessor('total', {
      cell: (info) => info.getValue(),
      header: <span>Total</span>,
    }),
  ];
  const onSubmit = (e) => {
    const items = {
      'kode-barang': e['kode-barang'],
      nama: e['nama'],
      satuan: e['satuan'],
      jumlah: e['jumlah'],
      harga: e['harga'],
      total: e['harga'] * e['jumlah'],
    };

    let ItemsData = [...data, items];
    setData(ItemsData);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center my-10 w-full overflow-auto'>
        <p className='text-xl font-primary '>Item Barang</p>

        {/* Add Transaksi */}
        <div className=' bg-white p-3 border border-gray-202 '>
          <form className='w-full mt-10' onSubmit={handleSubmit(onSubmit)}>
            <table className='table-auto w-full text-center'>
              <thead className='border border-gray-200 px-2 py-2 bg-gray-200'>
                <tr>
                  <th>Items</th>
                  <th>Deskripsi</th>
                  <th>Quantity</th>
                  <th>Satuan</th>
                  <th>Discount</th>
                  <th>Harga</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <select
                      className=' px-4 py-2 mx-2 bg-gray-200'
                      id='kode-barang'
                      name='kode-barang'
                      {...register('kode-barang', {
                        required: true,
                        maxLength: 20,
                      })}
                    >
                      <option>Pilih barang</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className=' px-4 py-2 mx-2 bg-gray-200'
                      id='satuan'
                      name='satuan'
                      placeholder='Auto terisi saat user memilih barang'
                      {...register('satuan', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                  <td>
                    <input
                      className=' px-4 py-2 mx-2 bg-gray-200'
                      name='jumlah'
                      {...register('jumlah', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                  <td>
                    <input
                      className=' px-4 py-2 mx-2 bg-gray-200'
                      id='jumlah'
                      name='jumlah'
                      {...register('jumlah', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                  <td>
                    <input
                      className='py-2 bg-gray-100'
                      id='harga'
                      name='harga'
                      {...register('harga', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                </tr>
              </tbody>
            </table>

            <div className='mt-5 flex items-center justify-center'>
              <button
                className='px-4 py-2 bg-blue-500 text-white rounded'
                type='submit'
              >
                Tambah Barang
              </button>
            </div>
          </form>
        </div>

        <div className='mt-4 bg-white p-3 rounded '>
          <Table data={data} columns={ListItems} />
        </div>
      </div>
    </>
  );
}
