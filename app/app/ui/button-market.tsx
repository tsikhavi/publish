import React from 'react';
import Image from 'next/image';
import { Buttons } from './buttons';

// Define the button data
const buttonData = [
  {
    src: '/Images/forza-horizon.png',
    alt: 'forza-horizon',
    text: 'Forza Horizon',
  },
  { src: '/Images/warface.png', alt: '', text: 'Warface' }, 
  { src: '/Images/fortnite.png', alt: 'fortnite', text: 'Fortnite' },
 { src: '/Images/nba-2k.png', alt: 'nba-2k', text: 'NBA 2K' },
  {
    src: '/Images/electronic-arts.png',
    alt: 'electronic-arts',
    text: 'Electronic Arts',
  },
  { src: '/Images/minecraft.png', alt: 'minecraft', text: 'Minecraft' },
  
  
 {
    src: '/Images/apex-legends.png',
    alt: 'apex-legends',
    text: 'Apex Legends',
  },
  
  { src: '/Images/battle-net.png', alt: 'battle-net', text: 'Battle.Net' },
  { src: '/Images/world-of-warcraft.png', alt: '', text: 'World of Warcraft' },
 {
    src: '/Images/league-of-legends.png',
    alt: 'league-of-legends',
    text: 'League of Legends',
  },
{ src: '/Images/war-thunder.png', alt: 'war-thunder', text: 'War Thunder' },
{
    src: '/Images/call-of-duty.png',
    alt: 'call-off-duty',
    text: 'Call Of Duty',
  },  
    { src: '/Images/xbox.png', alt: 'xbox', text: 'Xbox' },

 { src: '/Images/roblox.png', alt: 'roblox', text: 'Roblox' },
  { src: '/Images/pubg.png', alt: 'pubg', text: 'PUBG' },
 { src: '/Images/epic-games.png', alt: 'epic-games', text: 'Epic Games' },
  { src: '/Images/gog.png', alt: 'gog', text: 'GOG' },
  
   { src: '/Images/app-store.png', alt: 'app-store', text: 'App Store' },
  { src: '/Images/gta5online.png', alt: 'gta5online', text: 'GTA 5 Online' },
  { src: '/Images/dota2.png', alt: 'dota2', text: 'Dota 2' },
  
  
  { src: '/Images/ufc.png', alt: 'ufc', text: 'UFC' },
  { src: '/Images/spotify.png', alt: 'spotify', text: 'Spotify' },
  { src: '/Images/vkontakte.png', alt: '', text: 'Вконтакте' },
  { src: '/Images/rocket-league.png', alt: '', text: 'Rocket League' },
  { src: '/Images/overwatch2.png', alt: '', text: 'Overwatch 2' },
  {
    src: '/Images/sea-of-thieves.png',
    alt: 'sea-of-thieves',
    text: 'Sea of Thieves',
  },
  { src: '/Images/standoff2.png', alt: 'standoff2', text: 'Standoff 2' },
  {
    src: '/Images/mortal-kombat.png',
    alt: 'Mortal Kombat',
    text: 'Mortal Kombat',
  },
  {
    src: '/Images/world-of-tanks.png',
    alt: 'World Of Tanks',
    text: 'World Of Tanks',
  },
  { src: '/Images/chatgpt.png', alt: 'ChatGPT', text: 'ChatGPT' },
];

// Function to chunk the array into equal parts
function chunkArray(array: any[], size: number): any[][] {
  const chunked_arr = [];
  let index = 0;
  while (index < array.length) {
    chunked_arr.push(array.slice(index, size + index));
    index += size;
  }
  return chunked_arr;
}

// Chunk the button data into 3 parts
const chunkedButtonData = chunkArray(
  buttonData,
  Math.ceil(buttonData.length / 3),
);

export default function ButtonMarket() {
  return (
    <div className='relative'>
    <div dir='rtl' className="snap-x snap-start -scroll-ml-[20px] object-contain  mt-0 flex h-fit w-screen w-fixed flex-col flex-wrap overflow-hidden hover:overflow-x-scroll bg-gradient-to-b from-[#000000]/40 to-[#272727] py-2">
      {chunkedButtonData.map((row, rowIndex) => (
        <div className=" flex flex-row " key={rowIndex}>
          {row.map(({ src, alt, text }, index) => (
            <div className=" pb-2 pt-0 px-2 gap-[10px]" key={src}>
              <Buttons className="px-12 h-16 flex-row rounded-[30px] justify-start whitespace-nowrap text-center text-xs">
               {text} 
               <Image
                  src={src}
                  alt={alt}
                  width={32}
                  height={32}
                  className="m-1 inline-flex"
                />
                
              </Buttons>
            </div>
          ))}
        </div>
      ))}
    </div>
    </div>
  );
}
