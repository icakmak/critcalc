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
import { Star } from 'lucide-react';

function Pet({ setHesap, hesap }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
        <CardTitle>Pet Motivasyon Becerisi ?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-center items-center">
        <div className="p-2 rounded-xl lg:w-40 sm:w-1/4">
          <Image
            src={'/petcrit.png'}
            width={120}
            height={120}
            alt="critrate"
            className=" rounded-xl"
          />
        </div>

        <div className="flex lg:w-full sm:w-3/4 flex-col gap-2 ">
          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex gap-2 justify-start"
            onClick={() => {
              setHesap(hesap + 0);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            Hayır,Kullanmıyorum
          </Button>

          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex gap-2 justify-start"
            onClick={() => {
              setHesap(hesap + 3);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <div className="w-8 h-8 bg-purple-500 rounded-xl"> </div>
            Mor Renk
          </Button>
          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex gap-2 justify-start"
            onClick={() => {
              setHesap(hesap + 4);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-xl"> </div>
            Sarı Renk
          </Button>
          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex gap-2 justify-start"
            onClick={() => {
              setHesap(hesap + 5);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <div className="w-8 h-8 bg-red-500 rounded-xl"> </div>
            Kırmızı Renk
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Pet;
