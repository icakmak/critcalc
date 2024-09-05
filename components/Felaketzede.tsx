import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FelaketzedeItem from './FelaketzedeItem';

function Felaketzede({ setKarakter, karakter }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
        <CardTitle>Felaketzede Seviye Kritik</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'MasterYang'}
          image={'/Master_Yang.png'}
          btnTitle={'Seviye 120 Yaptım.'}
          deger={10}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Tsukuyomi'}
          image={'/Tsukuyomi.png'}
          btnTitle={'Seviye 80 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'King'}
          image={'/King.png'}
          btnTitle={'Seviye 80 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Wesson'}
          image={'/Wesson.png'}
          btnTitle={'Seviye 80 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Common'}
          image={'/Common.png'}
          btnTitle={'Seviye 120 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Squidward'}
          image={'/Squidward.png'}
          btnTitle={'Seviye 120 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'SpongeBob'}
          image={'/spongebob.png'}
          btnTitle={'Seviye 120 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Petrik'}
          image={'/Petrik.png'}
          btnTitle={'Seviye 120 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Sandy'}
          image={'/Sandy.png'}
          btnTitle={'Seviye 120 Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'April'}
          image={'/April.png'}
          btnTitle={'5 Yıldız Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Leonardo'}
          image={'/Leonardo.png'}
          btnTitle={'5 Yıldız Yaptım.'}
          deger={5}
        />
        <FelaketzedeItem
          setKarakter={setKarakter}
          karakter={karakter}
          title={'Raphael'}
          image={'/Raphael.png'}
          btnTitle={'5 Yıldız Yaptım.'}
          deger={5}
        />
      </CardContent>
    </Card>
  );
}

export default Felaketzede;
