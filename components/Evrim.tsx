'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

function Evrim({ setEvrim, evrim }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full rounded-xl p-2 h-full">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg font-Nunito font-bold">
          Evrimleştirde 40 level ödülünü aldın mı ?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-2">
        <Image src={'/crit.png'} width={100} height={100} alt="critrate" />

        <Button
          variant="outline"
          className="w-full rounded-xl"
          onClick={() => {
            setEvrim(evrim + (!btnClick ? +8 : -8));
            setBtnClick(!btnClick);
          }}
        >
          {!btnClick ? (
            <span className="text-green-500 flex justify-center items-center font-NunitoBold font-bold">
              <Plus /> Ekle (8% Kritik Oran)
            </span>
          ) : (
            <span className="text-red-500 flex justify-center items-center font-NunitoBold font-bold">
              <Minus /> Çıkar (8% Kritik Oran)
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Evrim;
