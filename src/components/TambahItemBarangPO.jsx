import { createColumnHelper } from '@tanstack/react-table';
import { FormProvider, useForm } from 'react-hook-form';
import Table from './Table';

export default function TambahItemBarangPO({ data, setData }) {
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
      <div className='flex flex-col items-center justify-center my-10 w-full'>
        <p className='text-xl font-primary '>Item Barang</p>

        {/* Add Transaksi */}
        <div className=''>
          <form className='w-full mt-10' onSubmit={handleSubmit(onSubmit)}>
            <table className='table-auto w-full text-center'>
              <thead className='border border-gray-200 px-2 py-2 bg-gray-200'>
                <tr>
                  <th>Kode Barang</th>
                  <th>Nama Barang</th>
                  <th>Satuan</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody className='text-center'>
                <tr>
                  <td>
                    <input
                      className=''
                      id='kode-barang'
                      name='kode-barang'
                      // disabled={true}
                      {...register('kode-barang', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                  <td>
                    <select
                      className=''
                      id='nama'
                      name='nama'
                      {...register('nama', {
                        required: true,
                        maxLength: 20,
                      })}
                    >
                      <option>--- Pilih Barang ---</option>
                      <option>Polymer</option>
                      <option>Biji Plastik</option>
                    </select>
                  </td>
                  <td>
                    <input
                      className=''
                      id='satuan'
                      name='satuan'
                      {...register('satuan', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                  <td>
                    <input
                      className=''
                      id='jumlah'
                      name='jumlah'
                      {...register('jumlah', {
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

        <div className='mt-4'>
          <Table data={data} columns={ListItems} />
        </div>
      </div>
    </>
  );
}
