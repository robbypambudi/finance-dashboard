export default function SelectInput({
  label = 'Label',
  defaultOption = 'Jawaban Anda',
  data,
}) {
  return (
    <>
      <label className='my-2'>{label}</label>
      <select className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64'>
        <option> --- Pilih Jenis Transaksi --- </option>
        <option value='pembelian'>Pembelian</option>
        <option value='penjualan'>Penjualan</option>
      </select>
    </>
  );
}
