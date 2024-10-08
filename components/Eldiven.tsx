'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Minus, Plus } from 'lucide-react';

function Eldiven({ setEldiven, eldiven }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full rounded-xl p-2 h-full">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg font-Nunito font-bold">
          Moonscar (SS) Eldivenin var mı ?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col justify-center items-center gap-2">
        <Image src={'/moonscar.png'} width={100} height={100} alt="eldiven" />

        <Button
          variant="outline"
          className="w-full rounded-xl"
          onClick={() => {
            setEldiven(eldiven + (!btnClick ? +30 : -30));
            setBtnClick(!btnClick);
          }}
        >
          {!btnClick ? (
            <span className="text-green-500 flex justify-center items-center font-NunitoBold font-bold">
              <Plus /> Ekle (30% Kritik Oran)
            </span>
          ) : (
            <span className="text-red-500 flex justify-center items-center font-NunitoBold font-bold">
              <Minus /> Çıkar (30% Kritik Oran)
            </span>
          )}
        </Button>
      </CardContent>
    </Card>
  );
}

export default Eldiven;
