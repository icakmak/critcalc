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
    <main className="py-2 flex flex-col justify-center items-center gap-2  ">
      <h1 className="text-center text-3xl p-2 my-4 font-bold border-b-2 w-full">
        Character Critic Calculate
      </h1>
      <div className="flex lg:flex-row md:flex-row sm:flex-col w-full gap-4 ">
        <h1 className="flex justify-center items-center text-7xl text-red-500 font-bold border p-5 rounded-xl w-full">
          {hesap}%
        </h1>
        <div className="w-full">
          <Evrim setHesap={setHesap} hesap={hesap} />
        </div>
      </div>
      <div className="flex gap-2 lg:flex-row sm:flex-col w-full">
        <Panda setHesap={setHesap} hesap={hesap} />
        <Pet setHesap={setHesap} hesap={hesap} />
      </div>
      <div className="flex gap-2 lg:flex-row sm:flex-col w-full">
        <Felaketzede setHesap={setHesap} hesap={hesap} />
        <Kolleksiyon setHesap={setHesap} hesap={hesap} />
      </div>
    </main>
  );
}
