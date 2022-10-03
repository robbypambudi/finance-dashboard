import { createColumnHelper } from '@tanstack/react-table';
import { FormProvider, useForm } from 'react-hook-form';
import Table from './Table';

export default function TambahItemBarangFaktur({ data, setData }) {
  const columnsHelper = createColumnHelper();
  const { register, handleSubmit } = useForm();
  const ListItems = [
    columnsHelper.accessor('kode-barang', {
      cell: (info) => <p className='w-[150px]'>{info.getValue()}</p>,
      header: <span>Kode Barang</span>,
    }),
    columnsHelper.accessor('nama', {
      cell: (info) => <p className='w-[150px]'>{info.getValue()}</p>,
      header: <span>Nama Barang</span>,
    }),
    columnsHelper.accessor('satuan', {
      cell: (info) => <p className='w-[150px]'>{info.getValue()}</p>,
      header: <span>Satuan</span>,
    }),
    columnsHelper.accessor('harga', {
      cell: (info) => <p className='w-[150px]'>{info.getValue()}</p>,
      header: <span>Harga</span>,
    }),
    columnsHelper.accessor('jumlah', {
      cell: (info) => info.getValue(),
      header: <span>Quantity</span>,
    }),
    columnsHelper.accessor('diskon', {
      cell: (info) => info.getValue(),
      header: <span>Diskon</span>,
    }),
    columnsHelper.accessor('total', {
      cell: (info) => info.getValue(),
      header: <span>Total</span>,
    }),
    columnsHelper.accessor('kode_transaksi', {
      cell: (info) => (
        <>
          <div className='flex flex-col justify-center items-center gap-y-2'>
            <button>Edit</button>
            <button>Lihat</button>
            <button>Hapus</button>
          </div>
        </>
      ),
      header: <span>Aksi</span>,
    }),
  ];
  const onSubmit = (e) => {
    const items = {
      'kode-barang': e['kode-barang'],
      nama: e['nama'],
      satuan: e['satuan'],
      jumlah: e['jumlah'],
      harga: e['harga'],
      diskon: e['diskon'],
      total:
        e['harga'] * e['jumlah'] -
        e['harga'] * e['jumlah'] * (e['diskon'] / 100),
    };

    let ItemsData = [...data, items];
    setData(ItemsData);
  };

  return (
    <>
      <div className='flex flex-col items-center justify-center my-10 w-full '>
        <p className='text-xl font-primary '>Item Barang</p>

        {/* Add Transaksi */}
        <div className=' w-full overflow-auto'>
          <form className='w-full mt-10' onSubmit={handleSubmit(onSubmit)}>
            <table className='table-auto w-full text-center'>
              <thead className='border border-gray-200 px-2 py-2 bg-gray-200'>
                <tr className='text-center'>
                  <th className='px-4 py-2'>Kode Barang</th>
                  <th className='px-4 py-2'>Nama Barang</th>
                  <th className='px-4 py-2'>Satuan</th>
                  <th className='px-4 py-2'>Harga</th>
                  <th className='px-4 py-2'>Quantity</th>
                  <th className='px-4 py-2'>Diskon (%) </th>
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
                      className='px-4 py-2 bg-gray-100'
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
                      className='px-4 py-2 bg-gray-100'
                      id='harga'
                      name='harga'
                      {...register('harga', {
                        required: true,
                        maxLength: 20,
                      })}
                    ></input>
                  </td>
                  <td>
                    <input
                      className='px-4 py-2 bg-gray-100'
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
                      className='px-4 py-2 bg-gray-100'
                      id='diskon'
                      name='diskon'
                      {...register('diskon', {
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
