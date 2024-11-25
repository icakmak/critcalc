import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import FelaketzedeItem from './FelaketzedeItem';

function Kolleksiyon({ setKoleksiyon, koleksiyon }: any) {
  const kolleksiyonItems = [
    { title: 'Eski Tıp Kitabı', image: '/collectibles/eski_tip.png', deger: 5 },
    { title: 'Şans Tılsımı', image: '/collectibles/sans_tilsimi.png', deger: 5 },
    { title: 'Bilim İnsanının Güncesi', image: '/collectibles/bilim_insani.png', deger: 5 },
    { title: 'Efsaneler Tableti', image: '/collectibles/efsaneler_tableti.png', deger: 5 },
    { title: 'Göz Kamaştırıcı Tüy', image: '/collectibles/goz_kamastirici.png', deger: 5 },
    { title: 'Plazma Kılıç', image: '/collectibles/plazma_kilic.png', deger: 5 },
    { title: 'Altın Boynuz', image: '/collectibles/altin_boynuz.png', deger: 5 },
    {
      title: 'Hidrolik Palet',
      image: '/collectibles/HidrolikPalet.png',
      deger: 5,
    },
    {
      title: 'İnsan Üstü Hap',
      image: '/collectibles/Insanustuhap.png',
      deger: 5,
    },
    { title: 'Kadim Bilgelik Kitabı', image: '/collectibles/kadim_bilgelik.png', deger: 10 },
    {
      title: 'Yıldızlar Arası Geçiş Matirisi',
      image: '/collectibles/yildizlar_arasi.png',
      deger: 10,
    },

    { title: 'Başka Dünya Anahtarı', image: '/collectibles/baska_dunya.png', deger: 10 },
    { title: 'Yıldız Çekirdeği Elması', image: '/collectibles/yildiz_cekirdegi.png', deger: 10 },
    { title: 'Ömürlük Kum Saati', image: '/collectibles/omurluk_kumsaati.png', deger: 10 },
    { title: 'Gerçeği Gören Göz', image: '/collectibles/gercegi_goren.png', deger: 10 },
    { title: 'Boyut Perdesi', image: '/collectibles/Boyutperdesi.png', deger: 10 },
    { title: 'Zihinsel Senkron Kaskı', image: '/collectibles/Zihinselsenkron.png', deger: 10 },
  ];

  return (
    <Card className="w-full mb-2 rounded-xl p-2">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg p-2 font-Nunito font-bold">
          Kolleksiyona Göre Kritik
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-1">
        {kolleksiyonItems.map((item, index) => (
          <FelaketzedeItem
            key={index}
            setKarakter={setKoleksiyon}
            karakter={koleksiyon}
            title={item.title}
            image={item.image}
            btnTitle={'Kırmızı 3 Yıldız'}
            deger={item.deger}
            star={true}
            width={80}
            height={80}
          />
        ))}
      </CardContent>
    </Card>
  );
}

export default Kolleksiyon;
