import React from 'react';

const Hesap = ({ evrim, panda, pet, karakter, koleksiyon, eldiven }: any) => {
  const toplamKritik = evrim + panda + pet + karakter + koleksiyon + eldiven;

  const KritikSatiri = ({ baslik, deger }: { baslik: string; deger: number }) => (
    <tr className="border-b my-2">
      <td>{baslik}</td>
      <td className={`${deger !== 0 ? 'text-green-500 text-lg' : 'text-black'} text-right`}>
        {deger} %
      </td>
    </tr>
  );

  return (
    <div className="w-full p-4 font-Nunito  h-full">
      <table className="w-full">
        <thead className="font-bold">
          <tr className="border-b">
            <td className="w-3/4">Kritik Tablosu</td>
            <td className="w-1/4 text-right">Yüzde</td>
          </tr>
        </thead>
        <tbody>
          <KritikSatiri baslik="Evrim" deger={evrim} />
          <KritikSatiri baslik="Panda" deger={panda} />
          <KritikSatiri baslik="Pet" deger={pet} />
          <KritikSatiri baslik="Karakter" deger={karakter} />
          <KritikSatiri baslik="Koleksiyon" deger={koleksiyon} />
          <KritikSatiri baslik="Eldiven" deger={eldiven} />
        </tbody>
      </table>
      <div className="flex justify-between items-center border-t ">
        <h1 className="text-xl font-bold">Toplam</h1>
        <h1 className="text-3xl font-bold text-red-500">{toplamKritik}%</h1>
      </div>
    </div>
  );
};

export default Hesap;
