import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Check, Minus, Plus, Star, X } from 'lucide-react';

const FelaketzedeItem = ({ setKarakter, karakter, title, deger, btnTitle, image, star }: any) => {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <div className="w-full flex justify-around gap-2 items-center border border-orange-400 p-2 rounded-xl">
      <div className=" rounded-xl h-20 w-20 flex justify-center items-center p-0">
        <Image src={image} width={60} height={60} alt="" className=" rounded-xl " />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2">
          <span className="text-xl font-bold my-2">{title}</span>
          <span className="text-muted text-sm"> {btnTitle}</span>
        </div>
        <Button
          variant="outline"
          className="w-full font-bold flex  justify-between rounded-xl "
          onClick={() => {
            setKarakter(karakter + (!btnClick ? +deger : -deger));
            setBtnClick(!btnClick);
          }}
          //disabled={btnClick}
        >
          {star && (
            <div className="flex">
              <Star className="text-red-500" />
              <Star className="text-red-500" />
              <Star className="text-red-500" />
            </div>
          )}

          {!btnClick ? (
            <span className="text-green-500">+{deger}%</span>
          ) : (
            <span className="text-red-500">-{deger}%</span>
          )}
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
      </div>
    </div>
  );
};

export default FelaketzedeItem;
