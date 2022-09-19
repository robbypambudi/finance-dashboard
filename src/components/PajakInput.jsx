import { useState } from 'react';

export default function PajakInput() {
  const [value, setValue] = useState(1);

  const increaseValue = () => {
    setValue(value + 1);
  };
  const decreaseValue = () => {
    if (value !== 1) {
      setValue(value - 1);
    }
  };
  let MySelectOption = [];

  for (let i = 0; i < value; i++) {
    MySelectOption.push(
      <div className='flex gap-x-2 my-2'>
        <select className='px-3 py-2'>
          <option> PPN</option>
          <option> PPH</option>
          <option> PPnBM</option>
        </select>
        <input className='bg-gray-100 px-4 py-2 rounded-md border border-gray-400 shadow w-64' />
      </div>,
    );
  }
  return (
    <>
      <div className='flex flex-col'>
        <label className='my-2'>Pajak</label>

        {MySelectOption.map((items, index) => items)}

        <div className='flex gap-x-5 mt-3'>
          <div
            className='flex items-center justify-start cursor-pointer rounded-xl'
            onClick={() => increaseValue()}
          >
            <p className='px-4 py-2 text-2xl font-bold bg-gray-300 w-12'>+</p>
          </div>
          <div
            className='flex items-center justify-start cursor-pointer rounded-xl'
            onClick={() => decreaseValue()}
          >
            <p className='px-4 py-2 text-2xl font-bold bg-gray-300 w-12'>-</p>
          </div>
        </div>
      </div>
    </>
  );
}
