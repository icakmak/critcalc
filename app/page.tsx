'use client';
import Evrim from '@/components/Evrim';
import Panda from '@/components/Panda';
import Pet from '@/components/Pet';
import Felaketzede from '@/components/Felaketzede';
import { useState } from 'react';
import Kolleksiyon from '@/components/Kolleksiyon';

export default function Home() {
  const [hesap, setHesap] = useState(0);
  return (
    <main className="py-2 gap-2  ">
      <h1 className="text-center text-3xl p-2 my-4 font-bold font-NunitoBold border-b-2 w-full">
        Character Critic Calculate
      </h1>
      {/* Hesap ve Evrim */}
      <div className="flex lg:flex-row sm:flex-col xs:flex-col mb-2 gap-2">
        <div className="lg:w-1/2 sm:w-full xs:w-full flex justify-center items-center border rounded-xl ">
          <h1 className="text-7xl flex justify-center items-center lg:h-28 sm:h-40 xs:h-40 text-red-500 font-NunitoBold font-bold">
            {hesap}%
          </h1>
        </div>
        <div className="lg:w-1/2 sm:w-full xs:w-full">
          <Evrim setHesap={setHesap} hesap={hesap} />
        </div>
      </div>

      {/* Panda ve Pet */}
      <div className="flex gap-2 lg:flex-row sm:flex-col xs:flex-col w-full">
        <Panda setHesap={setHesap} hesap={hesap} />
        <Pet setHesap={setHesap} hesap={hesap} />
      </div>
      {/* Felaketzede ve Koleksiyon */}
      <div className="flex gap-2 lg:flex-row sm:flex-col xs:flex-col">
        <div className="w-full lg:w-1/2 sm:w-full xs:w-full">
          <Felaketzede setHesap={setHesap} hesap={hesap} />
        </div>
        <div className="w-full lg:w-1/2 sm:w-full xs:w-full">
          <Kolleksiyon setHesap={setHesap} hesap={hesap} />
        </div>
      </div>
    </main>
  );
}
