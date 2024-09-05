import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import FelaketzedeItem from './FelaketzedeItem';

function Kolleksiyon({ setHesap, hesap }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
        <CardTitle>Kolleksiyona Göre Kritik</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Eski Tıp Kitabı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Şans Tılsımı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Bilim İnsanının Güncesi'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Efsaneler Tableti'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Göz Kamaştırıcı Tüy'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Plazma Kılıç'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Altın Boynuz'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Kadim Bilgelik Kitabı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Yıldızlar Arası Geçiş Matirisi'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Başka Dünya Anahtarı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Yıldız Çekirdeği Elması'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Ömürlük Kum Saati'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setHesap={setHesap}
          hesap={hesap}
          title={'Gerçeği Gören Göz'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
      </CardContent>
    </Card>
  );
}

export default Kolleksiyon;
