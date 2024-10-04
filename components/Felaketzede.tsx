import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FelaketzedeItem from './FelaketzedeItem';

function Felaketzede({ setKarakter, karakter }: any) {
  const felaketzedeler = [
    { title: 'MasterYang', image: '/Master_Yang.png', btnTitle: 'Seviye 120 Yaptım.', deger: 10 },
    { title: 'Tsukuyomi', image: '/Tsukuyomi.png', btnTitle: 'Seviye 80 Yaptım.', deger: 5 },
    { title: 'King', image: '/King.png', btnTitle: 'Seviye 80 Yaptım.', deger: 5 },
    { title: 'Wesson', image: '/Wesson.png', btnTitle: 'Seviye 80 Yaptım.', deger: 5 },
    { title: 'Common', image: '/Common.png', btnTitle: 'Seviye 120 Yaptım.', deger: 5 },
    { title: 'Squidward', image: '/Squidward.png', btnTitle: 'Seviye 120 Yaptım.', deger: 5 },
    { title: 'SpongeBob', image: '/spongebob.png', btnTitle: 'Seviye 120 Yaptım.', deger: 5 },
    { title: 'Petrik', image: '/Petrik.png', btnTitle: 'Seviye 120 Yaptım.', deger: 5 },
    { title: 'Sandy', image: '/Sandy.png', btnTitle: 'Seviye 120 Yaptım.', deger: 5 },
    { title: 'April', image: '/April.png', btnTitle: '5 Yıldız Yaptım.', deger: 8 },
    { title: 'Leonardo', image: '/Leonardo.png', btnTitle: '5 Yıldız Yaptım.', deger: 8 },
    { title: 'Raphael', image: '/Raphael.png', btnTitle: '5 Yıldız Yaptım.', deger: 8 },
  ];

  return (
    <Card className="w-full mb-2 rounded-xl p-2">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg p-2 font-Nunito font-bold">
          Felaketzede Seviye Kritik
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-1">
        {felaketzedeler.map((felaketzede, index) => (
          <FelaketzedeItem
            key={index}
            setKarakter={setKarakter}
            karakter={karakter}
            title={felaketzede.title}
            image={felaketzede.image}
            btnTitle={felaketzede.btnTitle}
            deger={felaketzede.deger}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default Felaketzede;
