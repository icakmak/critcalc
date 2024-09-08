'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, Minus, Plus, X } from 'lucide-react';

function Evrim({ setEvrim, evrim }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl p-2">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg p-2 font-Nunito font-bold">
          Evrimleştirde 40 level ödülünü aldın mı ?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row">
        <div className="p-2">
          <Image src={'/crit.png'} width={120} height={120} alt="critrate" />
        </div>
        <div className="flex lg:flex-row sm:flex-col items-center  p-2 gap-2 w-full ">
          <Button
            variant="outline"
            className="w-full rounded-xl"
            onClick={() => {
              setEvrim(evrim + (!btnClick ? +8 : -8));

              //setHesap(hesap + 8);
              setBtnClick(!btnClick);
            }}
            // disabled={btnClick}
          >
            {!btnClick ? (
              <span className="text-green-500 flex justify-center items-center font-NunitoBold font-bold">
                <Plus /> Ekle
              </span>
            ) : (
              <span className="text-red-500 flex justify-center items-center font-NunitoBold font-bold">
                <Minus /> Çıkar
              </span>
            )}
          </Button>

          {/* <Button
            variant="outline"
            className="lg:w-40 sm:w-full"
            onClick={() => setHesap(hesap + 0)}
            disabled={btnClick}
          >
            <X />
            Hayır
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default Evrim;
