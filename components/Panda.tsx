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
import { Minus, Plus, Star } from 'lucide-react';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function Panda({ setPanda, panda }: any) {
  const [value, setValue] = useState('0');
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
          <RadioGroup defaultValue="option-zero">
            <div className="flex items-center space-x-2 border-b-2">
              <RadioGroupItem
                value="0"
                id="option-zero"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPanda(parseInt(e.target.value));
                }}
                checked={value === '0'}
                className="w-6 h-6"
              />
              <Label htmlFor="option-zero" className="text-lg font-bold ">
                Uyandırmadım.
              </Label>
            </div>
            <div className="flex items-center space-x-2 border-b-2">
              <RadioGroupItem
                value="5"
                id="option-one"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPanda(parseInt(e.target.value));
                }}
                checked={value === '5'}
                className="w-6 h-6"
              />
              <Label htmlFor="option-one" className="text-lg font-bold flex">
                <div className="flex">
                  <Star className="text-red-500" />
                </div>
                <span>- Kırmızı 1 Yıldız</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 border-b-2 ">
              <RadioGroupItem
                value="15"
                id="option-two"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPanda(parseInt(e.target.value));
                }}
                checked={value === '15'}
                className="w-6 h-6"
              />
              <Label htmlFor="option-two" className="text-lg font-bold flex">
                <div className="flex">
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                </div>
                <span>- Kırmızı 4 Yıldız</span>
              </Label>
            </div>
            <div className="flex items-center space-x-2 border-b-2">
              <RadioGroupItem
                value="30"
                id="option-three"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPanda(parseInt(e.target.value));
                }}
                checked={value === '30'}
                className="w-6 h-6"
              />
              <Label htmlFor="option-three" className="text-lg font-bold flex">
                <div className="flex">
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                  <Star className="text-red-500" width={20} height={20} />
                </div>
                <span>- Kırmızı 6 Yıldız</span>
              </Label>
            </div>
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

export default Panda;
