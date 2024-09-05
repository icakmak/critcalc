import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

function Pet({ setPet, pet, setEPet }: any) {
  const [btnClick, setBtnClick] = useState(false);
  const [value, setValue] = useState('0');

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
          <RadioGroup defaultValue="option-zero">
            <div className="flex items-center space-x-2 border-b-2">
              <RadioGroupItem
                value="0"
                id="A"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPet(parseInt(e.target.value));
                }}
                checked={value === '0'}
                className="w-6 h-6"
              />
              <Label htmlFor="A" className="text-lg font-bold ">
                Kullanmıyorum
              </Label>
            </div>
            <div className="flex items-center space-x-2 border-b-2 p-1">
              <RadioGroupItem
                value="3"
                id="B"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPet(parseInt(e.target.value));
                }}
                checked={value === '3'}
                className="w-6 h-6"
              />
              <Label
                htmlFor="B"
                className="text-lg font-bold text-purple-500 flex gap-2 justify-center items-center"
              >
                <div className="bg-purple-500 rounded-xl w-8 h-8"></div>
                Mor +3%
              </Label>
            </div>
            <div className="flex items-center space-x-2 border-b-2 p-1">
              <RadioGroupItem
                value="4"
                id="C"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPet(parseInt(e.target.value));
                }}
                checked={value === '4'}
                className="w-6 h-6"
              />
              <Label
                htmlFor="C"
                className="text-lg font-bold text-yellow-500 flex gap-2 justify-center items-center"
              >
                <div className="bg-yellow-500 rounded-xl w-8 h-8"></div>
                Sarı +4%
              </Label>
            </div>
            <div className="flex items-center space-x-2 border-b-2 p-1">
              <RadioGroupItem
                value="5"
                id="D"
                onClick={(e: any) => {
                  setValue(e.target.value);
                  setPet(parseInt(e.target.value));
                }}
                checked={value === '5'}
                className="w-6 h-6"
              />
              <Label
                htmlFor="D"
                className="text-lg font-bold text-red-500 flex gap-2 justify-center items-center"
              >
                <div className="bg-red-500 rounded-xl w-8 h-8"></div>
                Kırmızı +5%
              </Label>
            </div>
          </RadioGroup>

          {/* <Button
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
            {!btnClick ? (
              <span className="text-green-500">+{3}%</span>
            ) : (
              <span className="text-red-500">-{3}%</span>
            )}
          </Button> */}
          {/* <Button
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
            {!btnClick ? (
              <span className="text-green-500">+{4}%</span>
            ) : (
              <span className="text-red-500">-{4}%</span>
            )}
          </Button> */}
          {/* <Button
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
            {!btnClick ? (
              <span className="text-green-500">+{5}%</span>
            ) : (
              <span className="text-red-500">-{5}%</span>
            )}
          </Button> */}
        </div>
      </CardContent>
    </Card>
  );
}

export default Pet;
