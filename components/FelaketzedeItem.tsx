import Image from 'next/image';
import React, { useState } from 'react';
import { Button } from './ui/button';
import { Check, Minus, Plus, Star, X } from 'lucide-react';

const FelaketzedeItem = ({
  setKarakter,
  karakter,
  title,
  deger,
  btnTitle,
  image,
  star,
  width = 60,
  height = 60,
}: any) => {
  const [btnClick, setBtnClick] = useState(false);

  const handleClick = () => {
    setKarakter(karakter + (!btnClick ? +deger : -deger));
    setBtnClick(!btnClick);
  };

  return (
    <div className="w-full flex justify-around gap-2 items-center border border-orange-400 p-2 rounded-xl font-Nunito">
      <div className="rounded-xl h-20 w-20 flex justify-center items-center p-0">
        <Image src={image} width={width} height={height} alt={title} className="rounded-xl" />
      </div>
      <div className="flex flex-col w-full">
        <div className="flex items-center gap-2 lg:flex-row xs:flex-col lg:justify-between xs:justify-center">
          <span className="text-xl font-bold my-1 lg:border-0 xs:border-b text-center lg:w-1/2 xs:w-full">
            {title}
          </span>
          <span className="text-muted text-sm mb-1">{btnTitle}</span>
        </div>
        <Button
          variant="outline"
          className="w-full font-bold flex justify-between rounded-xl font-Nunito"
          onClick={handleClick}
        >
          {star && (
            <div className="flex">
              {[...Array(3)].map((_, index) => (
                <Star key={index} className="text-red-500" />
              ))}
            </div>
          )}
          <span className={btnClick ? 'text-red-500' : 'text-green-500'}>
            {btnClick ? '-' : '+'}
            {deger}%
          </span>
          <span
            className={`flex justify-center items-center font-bold ${
              btnClick ? 'text-red-500' : 'text-green-500'
            }`}
          >
            {btnClick ? <Minus /> : <Plus />}
            {btnClick ? 'Çıkar' : 'Ekle'}
          </span>
        </Button>
      </div>
    </div>
  );
};

export default FelaketzedeItem;
