export default function PesananComponents() {
  return (
    <>
      <div className='bg-white p-3 rounded w-1/2'>
        <h2 className='text-start text-xl font-bold mt-5'>Informasi Pembeli</h2>
        <div className='flex flex-col px-2 py-1'>
          <label>No Pesanan</label>
          <input
            className='px-2 py-1 h-10 rounded bg-gray-100'
            placeholder='1001'
            type='text'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Tanggal Permintaan</label>
          <input
            className='px-2 py-1 h-10 rounded bg-gray-100'
            placeholder='Nama'
            type='date'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Vendor</label>
          <select
            className='px-2 py-1 h-10 rounded bg-gray-100'
            placeholder='Vendor'
          >
            <option>Pilih Supplier</option>
            <option>1001 - PT 123</option>
            <option>1002 - PT 345</option>
            <option>1003 - PT ABC</option>
          </select>
        </div>
        <div className='flex flex-col px-2 py-1 '>
          <label>Alamat</label>
          <textarea
            className='px-2 py-1 rounded bg-gray-100'
            placeholder='Akan terisi saat user memilih vendor'
          ></textarea>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Telepon</label>
          <input
            className='px-2 py-1 h-10 rounded bg-gray-100'
            placeholder='Akan terisi saat user memilih vendor'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Catatan</label>
          <textarea
            className='px-2 py-1 h-10 rounded bg-gray-100'
            placeholder='Catatan'
          ></textarea>
        </div>
      </div>
    </>
  );
}
