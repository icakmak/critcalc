import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Star } from 'lucide-react';

const FelaketzedeItem = ({ setHesap, hesap, title, deger, btnTitle, image, star }: any) => {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <div className="w-full flex justify-around gap-2 items-center border border-orange-400 p-2 rounded-xl">
      <div className=" rounded-xl h-20 w-20 flex justify-center items-center p-0">
        <Image src={image} width={60} height={60} alt="" className=" rounded-xl " />
      </div>
      <div className="flex flex-col">
        <p className="text-xl font-bold my-2">{title}</p>
        <Button
          variant="outline"
          className="lg:w-80 sm:w-full font-bold flex lg:flex-row sm:flex-col justify-between lg:h-10 sm:h-16"
          onClick={() => {
            setHesap(hesap + deger);
            setBtnClick(!btnClick);
          }}
          disabled={btnClick}
        >
          {btnTitle}
          {star && (
            <div className="flex">
              <Star className="text-red-500" />
              <Star className="text-red-500" />
              <Star className="text-red-500" />
            </div>
          )}
          <span className="text-green-500">+{deger}%</span>
        </Button>
      </div>
    </div>
  );
};

export default FelaketzedeItem;
