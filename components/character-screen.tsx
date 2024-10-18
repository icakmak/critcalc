'use client';
import Image from 'next/image';
import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const itemOptions = {
  weapon: [
    { name: 'Kılıç', power: 10, type: 'Kesici', image: 'sword' },
    { name: 'Balta', power: 12, type: 'Ezici', image: 'axe' },
    { name: 'Yay', power: 8, type: 'Uzak Mesafe', image: 'bow' },
  ],
  necklace: [
    { name: 'Güç Kolyesi', magic: 5, effect: 'Güç Artışı', image: 'strength-necklace' },
    { name: 'Zeka Kolyesi', magic: 6, effect: 'Zeka Artışı', image: 'intelligence-necklace' },
    { name: 'Çeviklik Kolyesi', magic: 4, effect: 'Hız Artışı', image: 'agility-necklace' },
  ],
  armor: [
    { name: 'Hafif Zırh', defense: 15, weight: 'Hafif', image: 'light-armor' },
    { name: 'Ağır Zırh', defense: 20, weight: 'Ağır', image: 'heavy-armor' },
    { name: 'Büyülü Zırh', defense: 18, magic: 5, weight: 'Orta', image: 'magic-armor' },
  ],
  shield: [
    { name: 'Ahşap Kalkan', defense: 20, durability: 'Düşük', image: 'wooden-shield' },
    { name: 'Demir Kalkan', defense: 25, durability: 'Orta', image: 'iron-shield' },
    { name: 'Çelik Kalkan', defense: 30, durability: 'Yüksek', image: 'steel-shield' },
  ],
  belt: [
    { name: 'Deri Kemer', durability: 8, effect: 'Dayanıklılık +2', image: 'leather-belt' },
    { name: 'Zincir Kemer', durability: 10, effect: 'Güç +1', image: 'chain-belt' },
    { name: 'Büyülü Kemer', durability: 9, effect: 'Mana +5', image: 'magic-belt' },
  ],
  boots: [
    { name: 'Deri Çizme', speed: 5, terrain: 'Normal', image: 'leather-boots' },
    { name: 'Çelik Çizme', speed: 3, terrain: 'Zor', image: 'steel-boots' },
    { name: 'Elven Çizmesi', speed: 7, terrain: 'Tüm', image: 'elven-boots' },
  ],
};

const characterOptions = [
  { name: 'Panda', strength: 10, agility: 7, intelligence: 5, image: '/Master_Yang.png' },
  { name: 'Metallia', strength: 4, agility: 6, intelligence: 12, image: '/King.png' },
  { name: 'Common', strength: 6, agility: 10, intelligence: 8, image: '/Common.png' },
];

type ItemType = keyof typeof itemOptions;

export function CharacterScreenComponent() {
  const [selectedItems, setSelectedItems] = useState<Record<ItemType, number>>({
    weapon: 0,
    necklace: 0,
    armor: 0,
    shield: 0,
    belt: 0,
    boots: 0,
  });
  const [selectedCharacter, setSelectedCharacter] = useState(0);

  const handleItemChange = (itemType: ItemType, index: number) => {
    setSelectedItems((prev) => ({ ...prev, [itemType]: index }));
  };

  const renderItem = (itemType: ItemType, title: string, isDefense: boolean) => {
    const selectedIndex = selectedItems[itemType];
    const item = itemOptions[itemType][selectedIndex];
    const colorClass = isDefense ? 'bg-green-200 dark:bg-green-800' : 'bg-red-200 dark:bg-red-800';

    return (
      <Card className={`${colorClass} transition-colors duration-200`}>
        <CardContent className="flex p-4">
          <div className="w-1/3 mr-4">
            <Image
              src={'/Master_Yang.png'}
              width={200}
              height={200}
              alt={title}
              className="rounded-xl"
            />
            {/* <img src={'/Master_Yang.png'} alt={item.name} className="w-full h-auto rounded-md" /> */}
          </div>
          <div className="w-2/3">
            <h2 className="font-semibold text-lg mb-2">
              {title}: {item.name}
            </h2>
            <div className="text-sm text-slate-500 dark:text-slate-400">
              {Object.entries(item).map(([key, value]) =>
                key !== "'name'" && key !== "'image'" ? (
                  <p key={key}>{`${key}: ${value}`}</p>
                ) : null,
              )}
            </div>
            <Select
              // className="mt-2"
              onValueChange={(value) => handleItemChange(itemType, parseInt(value))}
            >
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Seç..." />
              </SelectTrigger>
              <SelectContent>
                {itemOptions[itemType].map((option, index) => (
                  <SelectItem key={index} value={index.toString()}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>
    );
  };

  const character = characterOptions[selectedCharacter];

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center">Karakter Ekranı</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Sol Kolon - Saldırı Öğeleri */}
        <div className="space-y-6">
          {renderItem('weapon', 'Silah', false)}
          {renderItem('necklace', 'Kolye', false)}
          {renderItem('armor', 'Zırh', false)}
        </div>

        {/* Orta Kolon - Karakter */}
        <div className="flex flex-col items-center justify-center space-y-4 bg-blue-100 dark:bg-blue-900 p-6 rounded-lg">
          {/* <Avatar className="w-48 h-48"> */}
          <Image
            src={character.image}
            width={200}
            height={200}
            alt={'Panda'}
            className="rounded-xl"
          />
          {/* <AvatarImage
              src={`/placeholder.svg?height=192&width=192&text=${character.image}`}
              alt={character.name}
            /> */}
          {/* <AvatarFallback>{character.name[0]}</AvatarFallback> */}
          {/* </Avatar> */}
          <h2 className="text-2xl font-semibold">{character.name}</h2>
          <div className="text-lg text-center">
            <p>Güç: {character.strength}</p>
            <p>Çeviklik: {character.agility}</p>
            <p>Zeka: {character.intelligence}</p>
          </div>
          <Select onValueChange={(value) => setSelectedCharacter(parseInt(value))}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Karakter Seç" />
            </SelectTrigger>
            <SelectContent>
              {characterOptions.map((option, index) => (
                <SelectItem key={index} value={index.toString()}>
                  {option.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Sağ Kolon - Savunma Öğeleri */}
        <div className="space-y-6">
          {renderItem('shield', 'Kalkan', true)}
          {renderItem('belt', 'Kemer', true)}
          {renderItem('boots', 'Ayakkabı', true)}
        </div>
      </div>
    </div>
  );
}
