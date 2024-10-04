'use client';
import Evrim from '@/components/Evrim';
import Panda from '@/components/Panda';
import Pet from '@/components/Pet';
import Felaketzede from '@/components/Felaketzede';
import { useEffect, useState } from 'react';
import Kolleksiyon from '@/components/Kolleksiyon';
import Hesap from '@/components/Hesap';

export default function Home() {
  const [hesap, setHesap] = useState(0);
  const [evrim, setEvrim] = useState(0);
  const [panda, setPanda] = useState(0);
  const [pet, setPet] = useState(0);
  const [karakter, setKarakter] = useState(0);
  const [koleksiyon, setKoleksiyon] = useState(0);

  return (
    <main className="py-2 gap-2">
      <h1 className="text-center text-3xl p-2 my-4 font-bold font-Nunito border-b-2 w-full">
        Karakter Kritik Oranı Hesaplama
      </h1>
      {/* Hesap ve Evrim */}
      <div className="flex lg:flex-row sm:flex-col xs:flex-col mb-2 gap-2">
        <div className="lg:w-1/2 sm:w-full xs:w-full flex justify-center items-center border rounded-xl">
          <Hesap
            evrim={evrim}
            panda={panda}
            pet={pet}
            karakter={karakter}
            koleksiyon={koleksiyon}
          />
        </div>
        <div className="lg:w-1/2 sm:w-full xs:w-full">
          <Evrim setEvrim={setEvrim} evrim={evrim} />
        </div>
      </div>

      {/* Panda ve Pet */}
      <div className="flex gap-2 lg:flex-row sm:flex-col xs:flex-col w-full">
        <Panda setPanda={setPanda} panda={panda} />
        <Pet setPet={setPet} pet={pet} />
      </div>
      {/* Felaketzede ve Koleksiyon */}
      <div className="flex gap-2 lg:flex-row sm:flex-col xs:flex-col">
        <div className="w-full lg:w-1/2 sm:w-full xs:w-full">
          <Felaketzede setKarakter={setKarakter} karakter={karakter} />
        </div>
        <div className="w-full lg:w-1/2 sm:w-full xs:w-full">
          <Kolleksiyon setKoleksiyon={setKoleksiyon} koleksiyon={koleksiyon} />
        </div>
      </div>
      <div className="flex justify-center items-center my-5 border-t-2 p-2">
        <h1 className="text-2xl w-full text-center font-Nunito font-bold">
          Yardımları için <span className="text-red-500">KARACA</span> 'ya teşekkür ederiz.
        </h1>
      </div>
    </main>
  );
}
