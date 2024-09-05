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
import { Check, X } from 'lucide-react';

function Evrim({ setHesap, hesap }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
        <CardTitle>Evrimleştirde 40 level ödülünü aldın mı ?</CardTitle>
        {/* <CardDescription>Card Description</CardDescription> */}
      </CardHeader>
      <CardContent className="flex flex-row">
        <div className="p-2">
          <Image src={'/crit.png'} width={120} height={120} alt="critrate" />
        </div>
        <div className="flex lg:flex-row sm:flex-col items-center  p-2 gap-2 w-full ">
          <Button
            variant="outline"
            className="lg:w-40 sm:w-full"
            onClick={() => {
              setHesap(hesap + 8);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <Check />
            Evet
          </Button>

          <Button
            variant="outline"
            className="lg:w-40 sm:w-full"
            onClick={() => setHesap(hesap + 0)}
            disabled={btnClick}
          >
            <X />
            Hayır
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Evrim;
