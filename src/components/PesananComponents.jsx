export default function PesananComponents() {
  return (
    <>
      <div className=''>
        <div className='flex flex-col px-2 py-1'>
          <label>Tanggal</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Nama'
            type='date'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Kontak</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Kontak'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Alamat</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Alamat'
          ></input>
        </div>
        <div className='flex flex-col px-2 py-1'>
          <label>Telepon</label>
          <input
            className='px-2 py-1 h-10 rounded'
            placeholder='Telephon'
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
