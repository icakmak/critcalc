import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FelaketzedeItem from './FelaketzedeItem';

function Felaketzede({ setHesap, hesap }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <>
      <Card className="w-full">
        <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
          <CardTitle>Felaketzede Seviye Kritik</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-row">
          <div className="flex  p-2 gap-2 w-full ">
            <div className="flex w-full flex-col gap-2 ">
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'MasterYang'}
                image={'/Master_Yang.png'}
                btnTitle={'Seviye 120 Yaptım.'}
                deger={10}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Tsukuyomi'}
                image={'/Tsukuyomi.png'}
                btnTitle={'Seviye 80 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'King'}
                image={'/King.png'}
                btnTitle={'Seviye 80 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Wesson'}
                image={'/Wesson.png'}
                btnTitle={'Seviye 80 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Common'}
                image={'/Common.png'}
                btnTitle={'Seviye 120 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Squidward'}
                image={'/Squidward.png'}
                btnTitle={'Seviye 120 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'SpongeBob'}
                image={'/spongebob.png'}
                btnTitle={'Seviye 120 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Petrik'}
                image={'/Petrik.png'}
                btnTitle={'Seviye 120 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Sandy'}
                image={'/Sandy.png'}
                btnTitle={'Seviye 120 Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'April'}
                image={'/April.png'}
                btnTitle={'5 Yıldız Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Leonardo'}
                image={'/Leonardo.png'}
                btnTitle={'5 Yıldız Yaptım.'}
                deger={5}
              />
              <FelaketzedeItem
                setHesap={setHesap}
                hesap={hesap}
                title={'Raphael'}
                image={'/Raphael.png'}
                btnTitle={'5 Yıldız Yaptım.'}
                deger={5}
              />
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default Felaketzede;
