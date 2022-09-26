export default function PesananComponents() {
  return (
    <>
      <div className=''>
        <h2 className='text-start text-xl font-bold mt-5'>Informasi Pembeli</h2>
        <div className='flex flex-col px-2 py-1'>
          <label>Tanggal</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Nama'
            type='date'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Vendor</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Vendor'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Alamat</label>
          <textarea
            className='px-2 py-1 rounded'
            placeholder='Alamat'
          ></textarea>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Telepon</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Telepon'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Catatan</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Catatan'
          ></input>
        </div>
      </div>
    </>
  );
}
