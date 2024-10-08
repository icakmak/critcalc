import Image from 'next/image';
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Ratio } from 'lucide-react';

function Pet({ setPet }: any) {
  const [value, setValue] = useState('0');
  const liste = [
    { id: 'A', deger: '0', label: 'Kullanmıyorum', color: 'gray-500', ratio: 'bg-gray-500' },
    { id: 'B', deger: '3', label: 'Mor +3%', color: 'purple-500', ratio: 'bg-purple-500' },
    { id: 'C', deger: '4', label: 'Sarı +4%', color: 'yellow-500', ratio: 'bg-yellow-500' },
    { id: 'D', deger: '5', label: 'Kırmızı +5%', color: 'red-500', ratio: 'bg-red-500' },
  ];

  const PetSelect = ({ option }: any) => {
    const { id, deger, label, color, ratio } = option;

    return (
      <div key={id} className="flex items-center space-x-2 border-b-2 p-1">
        <RadioGroupItem
          value={deger}
          id={id}
          onClick={(e: any) => {
            setValue(e.target.value);
            setPet(parseInt(e.target.value));
          }}
          checked={value === deger}
          className="w-6 h-6"
        />
        <Label
          htmlFor={id}
          className={`text-lg font-bold text-${color} flex gap-2 justify-center items-center`}
        >
          <Ratio className={`${ratio} rounded-xl w-8 h-8`} />

          {label}
        </Label>
      </div>
    );
  };

  return (
    <Card className="w-full mb-2 rounded-xl p-2">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg p-2 font-Nunito font-bold">
          Pet Motivasyon Becerisi?
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-row justify-center items-center p-1">
        <div className="p-1 rounded-xl lg:w-40 sm:w-1/4 xs:w-2/6 bg-red-100">
          <Image
            src="/petcrit.png"
            width={120}
            height={120}
            alt="critrate"
            className="rounded-xl"
          />
        </div>

        <div className="flex lg:w-full sm:w-3/4 xs:w-4/6 flex-col gap-2">
          <RadioGroup defaultValue="option-zero" className="w-full">
            {liste.map((option) => (
              <PetSelect key={option.id} option={option} />
            ))}
          </RadioGroup>
        </div>
      </CardContent>
    </Card>
  );
}

export default Pet;
