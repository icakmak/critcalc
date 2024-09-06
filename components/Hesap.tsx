import React from 'react';

const Hesap = ({ evrim, panda, pet, karakter, koleksiyon }: any) => {
  return (
    <div className="w-full gap-2 p-2 m-2 font-Nunito">
      <table className="w-full">
        <thead className="font-bold">
          <tr className="border-b my-2">
            <td className="w-3/4">Kritik Tablosu</td>
            <td className="w-1/4 text-right ">Yüzde</td>
          </tr>
        </thead>
        <tbody className="">
          <tr className="border-b my-2">
            <td>Evrim</td>
            <td className={`${evrim != 0 ? 'text-green-500  text-lg' : 'text-black'}  text-right`}>
              {evrim} %
            </td>
          </tr>
          <tr className="border-b my-2">
            <td>Panda</td>
            <td className={`${panda != 0 ? 'text-green-500  text-lg' : 'text-black'}  text-right`}>
              {panda} %
            </td>
          </tr>
          <tr className="border-b my-2">
            <td>Pet</td>
            <td className={`${pet != 0 ? 'text-green-500 text-lg' : 'text-black'}  text-right`}>
              {pet} %
            </td>
          </tr>
          <tr className="border-b my-2">
            <td>Karakter</td>
            <td
              className={`${karakter != 0 ? 'text-green-500  text-lg' : 'text-black'}  text-right`}
            >
              {karakter} %
            </td>
          </tr>
          <tr className="border-b my-2">
            <td>Koleksiyon</td>
            <td
              className={`${
                koleksiyon != 0 ? 'text-green-500  text-lg' : 'text-black'
              }  text-right`}
            >
              {koleksiyon} %
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-between items-center border-t p-2">
        <h1 className="text-xl font-bold">Toplam</h1>
        <h1 className="text-5xl font-bold text-red-500">
          {evrim + panda + pet + karakter + koleksiyon}%
        </h1>
      </div>
    </div>
  );
};

export default Hesap;
