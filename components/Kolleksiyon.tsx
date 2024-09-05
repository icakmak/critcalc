import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import FelaketzedeItem from './FelaketzedeItem';

function Kolleksiyon({ setKoleksiyon, koleksiyon }: any) {
  const [btnClick, setBtnClick] = useState(false);
  return (
    <Card className="w-full mb-2 rounded-xl">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2">
        <CardTitle>Kolleksiyona Göre Kritik</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Eski Tıp Kitabı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Şans Tılsımı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Bilim İnsanının Güncesi'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Efsaneler Tableti'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Göz Kamaştırıcı Tüy'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Plazma Kılıç'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Altın Boynuz'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Kadim Bilgelik Kitabı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Yıldızlar Arası Geçiş Matirisi'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Başka Dünya Anahtarı'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Yıldız Çekirdeği Elması'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Ömürlük Kum Saati'}
          image={'/Master_Yang.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
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
