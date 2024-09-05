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

function Panda({ setHesap, hesap }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
        <CardTitle>Panda Uyandırdın mı ?</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row">
        <div className="p-2 rounded-xl lg:w-40 sm:w-1/4">
          <Image
            src={'/Master_Yang.png'}
            width={120}
            height={120}
            alt="critrate"
            className="rounded-xl"
          />
        </div>

        <div className="flex lg:w-full sm:w-3/4 xs:w-3/4 flex-col gap-2 ">
          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex lg:flex-row sm:flex-col xs:flex-col justify-start lg:h-10 sm:h-18 xs:h-[64px]"
            onClick={() => {
              setHesap(hesap + 0);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            Hayır
          </Button>

          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex lg:flex-row sm:flex-col xs:flex-col gap-2 lg:h-10 sm:h-18 xs:h-[64px] justify-start"
            onClick={() => {
              setHesap(hesap + 5);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <div className="flex">
              <Star className="text-red-500" />
            </div>
            - Kırmızı 1 Yıldız
          </Button>
          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex lg:flex-row sm:flex-col xs:flex-col gap-2 lg:h-10 sm:h-18 xs:h-[64px] justify-start"
            onClick={() => {
              setHesap(hesap + 15);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <div className="flex">
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
            </div>
            - Kırmızı 4 Yıldız
          </Button>
          <Button
            variant="outline"
            className="lg:w-80 sm:w-full font-bold flex lg:flex-row sm:flex-col xs:flex-col gap-2 lg:h-10 sm:h-18 xs:h-[64px] justify-start"
            onClick={() => {
              setHesap(hesap + 30);
              setBtnClick(!btnClick);
            }}
            disabled={btnClick}
          >
            <div className="flex">
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
              <Star className="text-red-500" width={20} height={20} />
            </div>
            - Kırmızı 6 Yıldız
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export default Panda;
