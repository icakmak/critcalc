import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import FelaketzedeItem from './FelaketzedeItem';

function Kolleksiyon({ setKoleksiyon, koleksiyon }: any) {
  return (
    <Card className="w-full mb-2 rounded-xl p-2">
      <CardHeader className="text-center bg-orange-400 rounded-xl mb-2 h-10 flex justify-center items-center">
        <CardTitle className="text-lg p-2 font-Nunito font-bold">
          Kolleksiyona Göre Kritik
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2 p-1">
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Eski Tıp Kitabı'}
          image={'/collectibles/eski_tip.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Şans Tılsımı'}
          image={'/collectibles/sans_tilsimi.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Bilim İnsanının Güncesi'}
          image={'/collectibles/bilim_insani.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Efsaneler Tableti'}
          image={'/collectibles/efsaneler_tableti.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Göz Kamaştırıcı Tüy'}
          image={'/collectibles/goz_kamastirici.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Plazma Kılıç'}
          image={'/collectibles/plazma_kilic.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Altın Boynuz'}
          image={'/collectibles/altin_boynuz.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={5}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Kadim Bilgelik Kitabı'}
          image={'/collectibles/kadim_bilgelik.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Yıldızlar Arası Geçiş Matirisi'}
          image={'/collectibles/yildizlar_arasi.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Başka Dünya Anahtarı'}
          image={'/collectibles/baska_dunya.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Yıldız Çekirdeği Elması'}
          image={'/collectibles/yildiz_cekirdegi.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Ömürlük Kum Saati'}
          image={'/collectibles/omurluk_kumsaati.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
          width={80}
          height={80}
        />
        <FelaketzedeItem
          setKarakter={setKoleksiyon}
          karakter={koleksiyon}
          title={'Gerçeği Gören Göz'}
          image={'/collectibles/gercegi_goren.png'}
          btnTitle={'Kırmızı 3 Yıldız'}
          deger={10}
          star={true}
          width={80}
          height={80}
        />
      </CardContent>
    </Card>
  );
}

export default Kolleksiyon;
