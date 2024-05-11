import AlphabetNav from './alphabet-nav';
import Card from './card';
import localFont from 'next/font/local';

interface CardData {
  title: string;
  description: string;
}

interface CardDataDictionary {
  [key: string]: CardData[];
}

const cardDataA: CardData[] = [
  {
    title: 'AFK Arena',
    description: 'Аккаунты • Алмазы • Донат • Услуги • Прочее ',
  },
  {
    title: 'Albion Online',
    description:
      'Аккаунты • Серебро • Золото • Донат • Предметы • Twitch Drops • Прочее',
  },
  { title: 'Among Us', description: 'Звезды • Ключи • Аккаунты • Прочее ' },
  {
    title: 'Anomaly Zone',
    description:
      'Серебрянные рубли • Золотые рубли • Аккаунты • Предметы • Услуги ',
  },
  {
    title: 'Apex Legends',
    description:
      'Аккаунты • Монеты • Донат • Достижения •Буст • Twitch Drops • Prime Gaming ',
  },
  { title: 'Aliens: Dark Descent', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'ArcheAge (RU)',
    description: 'Золото • Аккаунты • Донат • Предметы • Услуги • Прочее',
  },
  {
    title: 'ARK: Survival Ascended',
    description: 'Аккаунты • Ключи • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Arena Breakout',
    description:
      'Коэны • Аккаунты • Донат • Облигации • Предметы • Услуги • Прочее ',
  },
  { title: 'Arma 3', description: 'Аккаунты • Ключи • Gamepass • Прочее  ' },
  {
    title: 'Armored Core VI: Fires of Rubicon',
    description: 'Аккаунты • Ключи • Оффлайн активации • Услуги ',
  },
  { title: 'Atlas Fallen', description: 'Ключи ' },
  {
    title: 'Asphalt',
    description: 'Аккаунты • Ключи • Токены • Услуги • Прочее ',
  },
  {
    title: 'Alan Wake 2',
    description: 'Аккаунты • Ключи • Оффлайн активации • Gamepass • Прочее ',
  },
  {
    title: 'Astellia',
    description: 'Аккаунты • Золото • GM-Монеты • Предметы • Прочее ',
  },
  {
    title: 'Atomic Heart',
    description: 'Аккаунты • Ключи • Оффлайн активации • Gamepass • Прочее',
  },
  {
    title: 'Avatar: Frontiers of Pandora',
    description:
      'Аккаунты • Ключи • Жетоны • Донат • Оффлайн активации • Прочее',
  },
  {
    title: 'Armored Warfare: Армата',
    description: 'Аккаунты • Услуги • Предметы • Золото',
  },
  { title: 'Age of Wonders 4', description: 'Аккаунты • Ключи • Прочее' },
  {
    title: 'Aion',
    description: 'Аккаунты • Кинары • Предметы • Услуги • Прочее ',
  },
  { title: 'Azur Lane', description: 'Аккаунты • Донат • Гемы • Услуги ' },
  {
    title: 'Arknights',
    description: 'Аккаунты • Донат • Origium • Услуги • Прочее ',
  },
  {
    title: 'ARK: Survival Evolved',
    description: 'Аккаунты • Ключи • Предметы • Gamepass • Услуги  ',
  },
  {
    title: 'Assetto Corsa',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  { title: 'Anthem', description: 'Аккаунты • Ключи • Прочее' },
  { title: 'App Store', description: 'Подарочные карты' },
  {
    title: 'Awaken: Chaos Era',
    description: 'Аккаунты • Донат • Бриллианты • Услуги ',
  },
  {
    title: 'Assassin’s Creed',
    description:
      'Аккаунты • Ключи • Helix Credits • Оффлайн активации • Gamepass • Twitch Drops • Прочее',
  },
  {
    title: 'APB: Reloaded',
    description: 'Доллары • Аккаунты • G1C • Предметы • Прочее ',
  },
];
const cardDataB: CardData[] = [
  {
    title: 'Back 4 Blood',
    description: 'Аккаунты • Ключи • Gamepass • Услуги ',
  },
  {
    title: 'Baldur’s Gate 3',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее',
  },
  {
    title: 'Battle Teams 2',
    description: 'Аккаунты • Монеты •  Услуги • Twitch Drops • Прочее ',
  },
  {
    title: 'Battle.Net',
    description:
      'Аккаунты • Ключи • Пополнение баланса • Тайм карты • Смена региона • Прочее ',
  },
  {
    title: 'BattleBit Remastered',
    description: 'Аккаунты • Монеты •  Услуги • Twitch Drops • Прочее ',
  },
  {
    title: 'BeamNG.drive',
    description: 'Аккаунты • Ключи •  Услуги • Прочее ',
  },
  {
    title: 'Biomutant',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее',
  },
  {
    title: 'Black Clover M',
    description: 'Аккаунты • Black Crystals • Подписка • Донат •  Прочее',
  },
  {
    title: 'Black Desert',
    description: 'Серебро • Аккаунты • Предметы • Прокачка • Услуги • Прочее ',
  },
  {
    title: 'Blade & Soul',
    description: 'Золото • Аккаунты • Предметы • Услуги • Прочее ',
  },
  { title: 'Bloodhunt', description: 'Аккаунты • Буст • Прочее  ' },
  { title: 'Boom Beach', description: 'Аккаунты • Донат • Алмазы • Прочее ' },
  {
    title: 'Borderlands 3',
    description: 'Аккаунты • Ключи • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Brawl Stars',
    description: 'Аккаунты • Ключи • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Brawlhalla',
    description:
      'Аккаунты • Mammoth Coins • Предметы • Буст • Prime Gaming • Прочее ',
  },
  {
    title: 'Battlefield',
    description:
      'Аккаунты • Ключи • Валюта • Оффлайн активации • Game Pass • Услуги •  Прочее ',
  },
];
const cardDataC: CardData[] = [
  {
    title: 'Call of Dragons',
    description: 'Аккаунты • Донат • Услуги • Самоцветы • Прочее ',
  },
  {
    title: 'Call of Duty',
    description:
      'Аккаунты • Ключи • Предметы • Услуги • Prime Gaming • Прочее ',
  },
  {
    title: 'Call of Duty Mobile',
    description:
      'Аккаунты • CP • Донат • Услуги • Буст • Prime Gaming • Прочее ',
  },
  {
    title: 'Call of Duty Warzone',
    description:
      'Аккаунты • CP • Скины • Буст • Обучение • Twitch Drops • Прочее ',
  },
  {
    title: 'Call of Duty Modern Warfare 3',
    description: 'Аккаунты • CP • Ключи • Скины • Услуги • Прочее ',
  },
  {
    title: 'Car Parking Multiplayer',
    description: 'Аккаунты •Деньги • Монеты • Предметы •  Услуги • Прочее ',
  },
  {
    title: 'CarX Drift Racing',
    description: 'Аккаунты • Ключи • Донат • Услуги •  Прочее ',
  },
  {
    title: 'Castle Clash',
    description: 'Аккаунты • Донат • Бриллианты •  Прочее',
  },
  {
    title: 'ChatGPT',
    description: 'Аккаунты • Прочее ',
  },
  { title: 'Chivalry 2 ', description: 'Аккаунты • Ключи • Прочее  ' },
  {
    title: 'Cities: Skylines II',
    description: 'Аккаунты • Ключи • Game Pass • Прочее ',
  },
  {
    title: 'Clash of Clans',
    description:
      'Аккаунты • Гемы • Донат • Кланы • Услуги • Золото столицы • Прочее ',
  },
  {
    title: 'Clash Royale',
    description: 'Аккаунты • Гемы • Донат • Кланы • Буст • Предметы • Прочее ',
  },
  {
    title: 'Conan Exiles',
    description: 'Аккаунты • Ключи • Донат • Услуги • Прочее  ',
  },
  {
    title: 'CookieRun: Kingdom',
    description: 'Аккаунты • Донат • Услуги • Кристаллы   ',
  },
  {
    title: 'Counter-Strike 2',
    description:
      'Аккаунты • Prime • FACEIT Premium • Скины • Буст • Обучение •  Прочее ',
  },
  {
    title: 'Counter-Strike: GO',
    description: 'Аккаунты • Prime • Скины • Буст • Обучение • Прочее',
  },
  {
    title: 'CrossFire',
    description: 'Акаунты • ZP • Промокоды •Услуги',
  },
];
const cardDataD: CardData[] = [
  {
    title: 'Dark and Darker',
    description: 'Золото • Ключи • Аккаунты • Предметы • Услуги • Прочее ',
  },
  {
    title: 'DayZ',
    description: 'Аккаунты • Ключи • Предметы • Прочее ',
  },
  {
    title: 'Dead by Daylight',
    description:
      'Аккаунты • Ключи • Золотые клетки • Буст •  Game Pass • Twitch Drops • Прочее ',
  },
  {
    title: 'Dead Island 2',
    description:
      'Аккаунты • Ключи • Prime Gaming • Оффлайн активации • Прочее ',
  },
  {
    title: 'Destiny ',
    description:
      ' Аккаунты • Ключи • Предметы • Рейды • Квесты • Прокачка • Прочее',
  },
  {
    title: 'Devil May Cry: Peak of Combat',
    description: ' Аккаунты • Гемы • Донат • Прочее ',
  },
  {
    title: 'Diablo 2: Resurrected',
    description: ' Руны • Золото • Аккаунты • Ключи • Предметы • Услуг ',
  },
  {
    title: 'Diablo 3',
    description: ' Аккаунты • Ключи • Предметы •Услуги',
  },
  {
    title: 'Diablo 4',
    description:
      'Золото • Аккаунты • Ключи •    Платина • Донат • Предметы • Услуг',
  },
  {
    title: 'Dota 2 ',
    description:
      ' Аккаунты • Привязки VHS • Предметы • Буст MMR • Калибровка • Отмыв ЛП •  Проче ',
  },
  { title: 'Dragons Dogma ', description: '  Аккаунты • Ключи • Прочее' },
  {
    title: 'Dragonheir: Silent Gods ',
    description: ' Аккаунты •  Кристаллы дракона • Донат •  Услуг',
  },
  { title: 'Drakensang Online ', description: ' Аккаунты • Донат • Услуги' },
  {
    title: 'Dying Light ',
    description:
      ' Аккаунты • Ключи • Предметы • Услуги • Оффлайн активации • Twitch Drop',
  },
  {
    title: 'Discord ',
    description: 'Серверы • Украшения • Услуги • Nitro • Буст сервера ',
  },
];
const cardDataE: CardData[] = [
  {
    title: 'Electronic Arts ',
    description:
      'Аккаунты • Ключи • Пополнение баланса • Подписка • Оффлайн активации • Прочее ',
  },
  {
    title: 'EA SPORTS FC 24 ',
    description:
      'Аккаунты • Ключи • Монеты • Points • Буст • Оффлайн активации • Прочее ',
  },
  {
    title: 'eFootball PES ',
    description: ' Аккаунты • Ключи • Монеты • Прочее',
  },
  {
    title: 'Elden Ring ',
    description: 'Аккаунты • Ключи • Руны • Предметы • Услуги ',
  },
  {
    title: 'Elder Scrolls ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Game Pass • Прочее ',
  },
  {
    title: 'Elder Scrolls Online ',
    description:
      'Золото • Кроны • Аккаунты • Ключи • Подписка • Предметы • Прочее',
  },
  {
    title: 'Elite Dangerous ',
    description:
      'Аккаунты • Кредиты • Ключи • Предметы • Прокачка • Корабли • Прочее ',
  },
  { title: 'Enlisted ', description: 'Аккаунты • Услуги  ' },
  { title: 'Enshrouded ', description: 'Аккаунты • Ключи • Услуги • Прочее ' },
  {
    title: 'Epic Games ',
    description:
      'Аккаунты • Ключи • Пополнение баланса • Оффлайн активации • Услуги • Прочее ',
  },
  {
    title: 'Era of Celestials ',
    description: 'Аккаунты • Алмазы • Донат • Предметы ',
  },
  {
    title: 'Escape from Tarkov ',
    description:
      'Аккаунты • Рубли • Донат • Ключи активации • Предметы • Twitch Drops • Прочее ',
  },
  {
    title: 'Escape from Tarkov Arena ',
    description: 'Предзаказ • Буст • Twitch Drops • Прочее ',
  },
  {
    title: 'Euro Truck Simulator 2 ',
    description: ' Аккаунты • Ключи • Услуги • Оффлайн активации',
  },
  { title: 'EVE Echoes ', description: 'Аккаунты • Предметы • Услуги • ISK ' },
  { title: 'Evil Dead: The Game ', description: 'Аккаунты • Ключи • Услуги  ' },
  { title: 'ExitLag ', description: 'Подписка • Прочее  ' },
  { title: 'Exoprimal ', description: 'Аккаунты • Ключи • Услуги ' },
];
const cardDataF: CardData[] = [
  {
    title: 'Fall Guys ',
    description:
      'Аккаунты • Ключи • Донат • Шмяксы • Буст • Prime Gaming • Прочее ',
  },
  {
    title: 'Fallout 76 ',
    description:
      'Аккаунты • Крышки • Ключи • Атомы • Предметы • Game Pass • Прочее ',
  },
  {
    title: 'Far Cry ',
    description:
      'Аккаунты • Ключи • Услуги • Оффлайн активации • Game Pass • Twitch Drops ',
  },
  {
    title: 'Farlight 84 ',
    description: 'Аккаунты • Алмазы • Донат •   Услуги ',
  },
  { title: 'Farming Simulator ', description: 'Аккаунты • Ключи • Прочее ' },
  {
    title: 'FC Mobile ',
    description: 'Аккаунты • Донат • Монеты • Points • Услуги • Прочее ',
  },
  {
    title: 'FIFA ',
    description:
      'Аккаунты • Ключи • Монеты • Points • Оффлайн активации •  Game Pass • Прочее ',
  },
  {
    title: 'Final Fantasy XIV ',
    description: 'Аккаунты • Гил • Ключи • Предметы • Услуги • Прочее ',
  },
  { title: 'Final Fantasy XVI ', description: 'Ключи ' },
  {
    title: 'For Honor ',
    description: 'Аккаунты • Ключи • Сталь • Донат • Услуги ',
  },
  {
    title: 'Forge of Empires ',
    description: 'CO • Аккаунты • Бриллианты • Донат • Предметы ',
  },
  {
    title: 'Fortnite ',
    description: 'Аккаунты • В баксы • Донат •  PvE • Услуги • Буст • Прочее ',
  },
  {
    title: 'Forza Horizon ',
    description:
      'Аккаунты • Ключи • Кредиты • Оффлайн активации • Услуги • Game Pass ',
  },
  {
    title: 'Forza Motorsport ',
    description:
      'Аккаунты • Ключи • Кредиты • Оффлайн активации • Услуги • Game Pass ',
  },
  {
    title: 'Free Fire ',
    description: 'Аккаунты • Алмазы • Донат • Буст • Прочее ',
  },
  {
    title: 'Frostborn ',
    description: 'Аккаунты • Донат • Монеты •  Предметы • Услуги ',
  },
];

const cardDataG: CardData[] = [
  {
    title: 'Garry’s Mod ',
    description: 'Аккаунты • Ключи • Услуги • Валюта • Оффлайн активации  ',
  },
  {
    title: 'Genshin Impact ',
    description:
      'Аккаунты • Кристаллы • Донат • Прокачка • Фарм • Квесты • Прочее',
  },
  { title: 'Ghostrunner 2 ', description: 'Аккаунты • Ключи • Прочее ' },
  {
    title: 'Goddess of Victory: Nikke ',
    description: 'Аккаунты • Гемы • Донат • Услуги ',
  },
  { title: 'GOG ', description: 'Аккаунты • Ключи ' },
  {
    title: 'GTA 5 Online ',
    description: 'Аккаунты • Деньги • Ключи • Услуги • Прочее ',
  },
  {
    title: 'GTA 5 RP, SAMP ',
    description: 'Вирты • Аккаунты • Донат • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Guild Wars 2 ',
    description:
      'Золото • Гемы • Аккаунты • Ключи • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Gwent ',
    description: 'Аккаунты • Донат • Метеоритная пыль • Услуги ',
  },
  {
    title: 'Geforce NOW ',
    description: 'Аккаунты • Услуги • Подписка • Прочее ',
  },
];
const cardDataH: CardData[] = [
  {
    title: 'Halo Infinite ',
    description: 'Аккаунты • Ключи • Буст • Кредиты • Прочее ',
  },
  {
    title: 'Hay Day',
    description:
      'Аккаунты • Алмазы • Донат • Предметы • Услуги • Монеты • Прочее ',
  },
  {
    title: 'Hearthstone ',
    description:
      'Аккаунты • Донат • Рунические камни • Буст • Обучение • Prime Gaming • Прочее ',
  },
  {
    title: 'Hearts of Iron IV ',
    description: 'Аккаунты • Ключи • Услуги • Оффлайн активации ',
  },
  { title: 'Helldivers ', description: 'Аккаунты • Ключи • Услуги • Прочее ' },
  { title: 'Heroes of the Storm ', description: 'Аккаунты • Услуги ' },
  {
    title: 'Hogwarts Legacy ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  {
    title: 'Honkai Impact 3rd ',
    description: 'Аккаунты • B Chips • Услуги • Кристаллы • Twitch Drops ',
  },
  {
    title: 'Honkai: Star Rail  ',
    description:
      'Аккаунты • Донат • Услуги • Исследование локаций • Prime Gaming • Twitch Drops •Прочее ',
  },
  {
    title: 'Honor of Kings ',
    description: 'Аккаунты • Жетоны • Донат • Услуги • Прочее ',
  },
  {
    title: 'Horizon Forbidden West ',
    description: 'Аккаунты • Ключи • Прочее ',
  },
  {
    title: 'Hunt: Showdown ',
    description: 'Аккаунты • Ключи • Услуги • Twitch Drops • Прочее ',
  },
  {
    title: 'Hustle Castle ',
    description: 'Аккаунты • Алмазы • Предметы • Услуг ',
  },
];

const cardDataI: CardData[] = [
  { title: 'Icarus ', description: 'Аккаунты • Золото • Предметы • Услуги ' },
  { title: 'Identity V ', description: 'Аккаунты • Echoes • Услуги ' },
  {
    title: 'IDLE Berserker ',
    description: 'Аккаунты • Алмазы • Донат • Прочее ',
  },
  { title: 'IDLE Heroes ', description: 'Аккаунты • Алмазы • Донат • Услуги ' },
  { title: 'Immortals of Aveum ', description: 'Аккаунты • Ключи • Прочее ' },
  {
    title: 'Infinite Magicraid ',
    description: 'Аккаунты • Алмазы • Донат •Ваучеры ',
  },
  { title: 'It Takes Two ', description: 'Аккаунты • Ключи • Услуг ' },
];

const cardDataK: CardData[] = [
  {
    title: 'Karos Online ',
    description: 'Аккаунты • Караты • Предметы • Услуг ',
  },
];

const cardDataL: CardData[] = [
  {
    title: 'Last Day on Earth: Survival ',
    description: 'Аккаунты • Донат • Предметы • Услуги ',
  },
  {
    title: 'Last Epoch ',
    description:
      'Аккаунты • Золото • Ключи • Предметы • Услуги • Прокачка • Прочее ',
  },
  {
    title: 'Last Island of Survival ',
    description: 'Аккаунты • Донат • Услуги ',
  },
  {
    title: 'League of Legends ',
    description:
      'Аккаунты • Riot Points • Донат• Буст • Услуги • Боевой пропуск • Прочее ',
  },
  {
    title: 'League of Legends: Wild Rift ',
    description: 'Аккаунты • Wild Cores • Донат • Буст • Обучение • Прочее ',
  },
  { title: 'Lethal Company ', description: 'Аккаунты • Ключи • Прочее ' },
  {
    title: 'Lies of P ',
    description: 'Аккаунты • Ключи • Услуги • Оффлайн активации • Game Pass ',
  },
  {
    title: 'Lineage 2 ',
    description: 'Аккаунты • Ключи • Адена • Предметы • Прокачка • Прочее ',
  },
  {
    title: 'Likee ',
    description: 'Аккаунты • Алмазы • Услуги • Бобы • Прочее ',
  },
  {
    title: 'Lineage 2 Aden ',
    description: 'Аккаунты • Адена • Предметы • Прокачка • Прочее ',
  },
  {
    title: 'Lineage 2 Essence ',
    description: 'Аккаунты • Адена • Прокачка • Предметы • Прочее ',
  },
  {
    title: 'Lineage 2 Legacy ',
    description: 'Аккаунты • Адена • Предметы • Прокачка • Прочее ',
  },
  {
    title: 'Lineage 2M ',
    description: 'Аккаунты • Алмазы • Предметы • Услуги ',
  },
  {
    title: 'Lords Mobile ',
    description:
      'Аккаунты • Донат • Алмазы • Предметы • Prime Gaming • Прочее ',
  },
  {
    title: 'Lords of the Fallen ',
    description:
      'Аккаунты • Ключи • Предметы • Услуги • Оффлайн активации •Прочее ',
  },
  {
    title: 'Lost Ark ',
    description:
      'Аккаунты • Золото • Предметы • Прокачка • Prime Gaming • Twitch Drops • Прочее ',
  },
  {
    title: 'Lost Light ',
    description:
      'Аккаунты • Новофунты • Донат • Light Points • Предметы • Услуги • Прочее ',
  },
];

const cardDataM: CardData[] = [
  { title: 'Madden NFL ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Mech Arena: Robot Showdown ',
    description: 'Аккаунты • А коины • Донат • Услуги ',
  },
  { title: 'Metin2 ', description: 'Аккаунты • Янги • Предметы • Услуги ' },
  {
    title: 'Microsoft Flight Simulator ',
    description: 'Аккаунты • Ключи • Game Pass • Прочее ',
  },
  { title: 'Midjourney ', description: 'Аккаунты • Подписка • Услуги ' },
  {
    title: 'Minecraft ',
    description:
      'Аккаунты • Ключи • Minecoins • Валюта • Game Pass • Донат • Прочее ',
  },
  {
    title: 'Minecraft Dungeons ',
    description: 'Аккаунты • Ключи • Предметы • Услуги ',
  },
  {
    title: 'Minecraft Legends ',
    description:
      'Аккаунты • Ключи • Предметы • Оффлайн активации • Услуги • Прочее ',
  },
  {
    title: 'Mobile Legends ',
    description: 'Аккаунты • Алмазы • Буст • Подарки • Прочее ',
  },
  {
    title: 'Mobile Legends: Adventure ',
    description: 'Аккаунты • Алмазы • Донат • M Cash • Услуги ',
  },
  {
    title: 'Monster Hunter: World ',
    description: 'Аккаунты • Ключи • Предметы • Услуги ',
  },
  {
    title: 'Mortal Kombat 1 ',
    description: 'Аккаунты • Ключи • Dragon Krystals • Донат Услуги ',
  },
  {
    title: 'Mortal Kombat 11 ',
    description: 'Аккаунты • Ключи • Услуги • Оффлайн активации ',
  },
  {
    title: 'Mortal Kombat Mobile ',
    description: 'Аккаунты • Души • Донат • Услуги ',
  },
  { title: 'Mortal Kombat X ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Mortal Online 2 ',
    description: 'Аккаунты • Золото • Предметы • Услуги ',
  },
  {
    title: 'My Singing Monsters ',
    description: 'Аккаунты • Бриллианты • Донат • Прочее ',
  },
];

const cardDataN: CardData[] = [
  {
    title: 'Naraka: Bladepoint ',
    description: 'Аккаунты • Ключи • Буст • Золото • Prime Gaming • Прочее',
  },
  {
    title: 'Naruto X Boruto Ultimate Ninja Storm Connections ',
    description: 'Аккаунты • Ключи • Прочее ',
  },
  { title: 'NBA 2K ', description: 'Аккаунты • Ключи • VC • Донат • Услуги ' },
  { title: 'Netflix ', description: 'Аккаунты • Подписка • Подарочные карты ' },
  {
    title: 'Nintendo ',
    description: 'Аккаунты • eShop • Switch Online • Прочее ',
  },
  { title: 'Need for Speed ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Neverwinter ',
    description: 'Аккаунты • Бриллианты • Предметы • Услуги ',
  },
  {
    title: 'New World ',
    description:
      'Аккаунты • Золото • Предметы • Сбор • Ключи • Прокачка • Прочее ',
  },
  { title: 'NHL ', description: 'Аккаунты • Монеты • Ключи • Услуги ' },
  {
    title: 'Night Crows  ',
    description:
      'Аккаунты • Брилланты • Донат • Услуги • Бриллианты(паки) • Прочее ',
  },
  {
    title: "No Man's Sky",
    description:
      'Аккаунты • Ключи • Предметы • Услуги • Game Pass • Twitch Drops ',
  },
  { title: 'Nulls Brawl ', description: 'Аккаунты • Услуги • Прочее ' },
];

const cardDataO: CardData[] = [
  {
    title: 'One Piece Bounty Rush ',
    description: 'Аккаунты • Rainbow Diamonds • Донат • Услуги ',
  },
  {
    title: 'Only Up! ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  {
    title: 'Outlast ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  { title: 'Outriders ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Overwatch 2 ',
    description:
      'Аккаунты • Буст • Донат • Монеты • Жетоны OWL • Prime Gaming • Прочее ',
  },
];

const cardDataP: CardData[] = [
  {
    title: 'Paladins ',
    description:
      'Аккаунты • Предметы • Услуги • Кристаллы • Prime Gaming • Прочее ',
  },
  {
    title: 'Palworld ',
    description: 'Аккаунты • Ключи • Услуги • Game Pass • Прочее ',
  },
  {
    title: 'Party Animals ',
    description: 'Аккаунты • Ключи • Nemo Bucks • Прочее ',
  },
  {
    title: 'Path of Exile ',
    description:
      'Божественные сферы • Зеркала Каландры • Сферы возвышения • Сферы хаоса • Сферы (прочие) • Прочее ',
  },
  {
    title: 'Payday 2 ',
    description: 'Аккаунты • Ключи • Предметы • Услуги • Оффлайн активации ',
  },
  {
    title: 'Payday 3 ',
    description: 'Аккаунты • Ключи • Услуги • Game Pass  ',
  },
  {
    title: 'Perfect World ',
    description: 'Аккаунты • Юани • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Persona ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Game Pass • Прочее ',
  },
  { title: 'Point Blank ', description: 'Аккаунты • Предметы • Услуги ' },
  {
    title: 'Pokemon GO ',
    description: 'Аккаунты • Покемонеты • Услуги • Prime Gaming • Прочее ',
  },
  {
    title: 'Prince of Persia: The Lost Crown',
    description: 'Аккаунты • Ключи • Прочее ',
  },
  {
    title: 'PUBG ',
    description:
      'Аккаунты • G-Coins • Предметы • Услуги • Prime Gaming • Twitch Drops • Прочее ',
  },
  {
    title: 'PUBG Mobile ',
    description:
      'Аккаунты • UC • Донат • Буст • Достижения • Metro Royale • Прочее ',
  },
  {
    title: 'PUBG: New State ',
    description: 'Аккаунты • NC • Донат • Буст • Достижения • Прочее ',
  },
  {
    title: 'Punishing: Gray Raven ',
    description: 'Аккаунты • Донат • Rainbow Cards • Услуги   ',
  },
  {
    title: 'Playstation ',
    description: 'Аккаунты • Ключи • Услуги • Пополнение бумажника • Plus ',
  },
];

const cardDataR: CardData[] = [
  {
    title: 'Raid: Shadow Legends ',
    description: 'Аккаунты • Рубины • Донат • Услуги • Prime Gaming ',
  },
  {
    title: 'Ratchet & Clank: Rift Apart ',
    description: 'Аккаунты • Ключи • Прочее ',
  },
  { title: 'Ready or Not ', description: 'Аккаунты • Ключи • Прочее ' },
  {
    title: 'Red Dead Redemption 2 ',
    description: 'Аккаунты • Ключи • Услуги • Прочее ',
  },
  {
    title: 'Redfall ',
    description: 'Аккаунты • Ключи • Услуги • Game Pass • Прочее ',
  },
  {
    title: 'Remnant 2 ',
    description:
      'Аккаунты • Ключи • Буст • Оффлайн активации • Game Pass • Прочее ',
  },
  {
    title: 'Resident Evil 4 ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  {
    title: 'Resident Evil Village ',
    description:
      'Аккаунты • Ключи • Услуги • Оффлайн активации • Game Pass • Прочее ',
  },
  {
    title: 'Revelation ',
    description: 'Аккаунты • Золото • Предметы • Услуги ',
  },
  {
    title: 'Revelation Mobile ',
    description: 'Аккаунты • Небесные самоцветы • Донат • Прочее ',
  },
  {
    title: 'Reverse: 1999 ',
    description: 'Аккаунты • Crystal Drops • Донат • Прочее ',
  },
  {
    title: 'Rise of Kingdoms ',
    description: 'Аккаунты • Самоцветы • Донат • Услуги ',
  },
  {
    title: 'Roblox ',
    description:
      'Робуксы • Подарочные карты • Донат • Аккаунты • Premium •Скины • Прочее ',
  },
  {
    title: 'RoboCop: Rogue City ',
    description: 'Аккаунты • Ключи • Оффлайн активации ',
  },
  {
    title: 'Rocket League ',
    description: 'Аккаунты • Донат • Услуги • Буст • Прочее ',
  },
  {
    title: 'Royal Quest ',
    description: 'Аккаунты • Золото • Предметы • Услуги • Гильдии ',
  },
  {
    title: 'RuneScape ',
    description: 'Аккаунты • Золото • Донат • Услуги • Prime Gaming • Прочее ',
  },
  {
    title: 'Rush Royale ',
    description: 'Аккаунты • Донат • Кристаллы • Предметы • Услуги ',
  },
  {
    title: 'Rust ',
    description:
      'Аккаунты • Ключи • Монеты • Предметы • Услуги • Twitch Drops • Прочее ',
  },
];

const cardDataS: CardData[] = [
  { title: 'SCUM ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Sea of Thieves ',
    description:
      'Аккаунты • Ключи • Древние монеты • Услуги • Game Pass • Twitch Drops • Прочее ',
  },
  {
    title: 'Silkroad Online ',
    description: 'Аккаунты • Золото • Предметы • Услуги ',
  },
  {
    title: 'Skull and Bones ',
    description: 'Аккаунты • Ключи • Предметы • Услуги • Twitch Drops  ',
  },
  {
    title: 'Smite ',
    description: 'Аккаунты • Услуги • Скины • Prime Gaming • Прочее ',
  },
  {
    title: 'Sons of the Forest ',
    description: 'Аккаунты • Ключи • Услуги • Оффлайн активации  ',
  },
  { title: 'Spider Man 2  ', description: 'Аккаунты • Ключи • Прочее ' },
  { title: 'Squad ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Stalcraft ',
    description:
      'Аккаунты • Рубли • Предметы • Услуги • Twitch Drops • Прочее ',
  },
  { title: 'Stalker 2: Heart of Chornobyl ', description: '• Предзаказ ' },
  {
    title: 'Spotify ',
    description:
      'Аккаунты • Premium • Услуги • Подарочные карты • Game Pass • Twitch Drops • Прочее ',
  },
  {
    title: 'Steam ',
    description:
      'Пополнение • Аккаунты • Ключи • Gifts • Услуги • Смена региона • Прочее ',
  },
  {
    title: 'Stalker Online (Stay Out) ',
    description: 'Аккаунты • Рубли • Предметы • Услуги • Прочее  ',
  },
  {
    title: 'Standoff 2 ',
    description:
      'Аккаунты • Золото • Донат • Предметы • Услуги • Кланы • Прочее ',
  },
  { title: 'Star Conflict ', description: 'Аккаунты • Предметы • Прочее ' },
  {
    title: 'Star Wars ',
    description:
      'Аккаунты • Ключи • Донат • Услуги • Game Pass • Оффлайн активации • Прочее ',
  },
  {
    title: 'Star Wars: TOR ',
    description: 'Аккаунты • Кредиты • Cartel Coins • Предметы • Услуги ',
  },
  {
    title: 'Starfield ',
    description: 'Аккаунты • Ключи • Услуги • Оффлайн активации • Game Pass ',
  },
  {
    title: 'Street Fighter 6 ',
    description: 'Аккаунты • Ключи • Услуги • Прочее ',
  },
  {
    title: 'Stumble Guys ',
    description: 'Аккаунты • Гемы • Донат • Буст • Прочее ',
  },
  {
    title: 'Suicide Squad: Kill the Justice League ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  {
    title: 'Summoners War: Chronicles ',
    description: 'Аккаунты • Кристаллы • Донат • Услуги ',
  },
  {
    title: 'Summoners War: Sky Arena ',
    description: 'Аккаунты • Предметы • Услуги ',
  },
  {
    title: 'Super Sus ',
    description: 'Аккаунты • Gold Star • Донат • Услуги ',
  },
  {
    title: 'Sword Art Online Last Recollection ',
    description: 'Аккаунты • Ключи • Прочее ',
  },
];

const cardDataT: CardData[] = [
  { title: 'Tank Company ', description: 'Аккаунты • Донат • Услуги ' },
  { title: 'Tarisland ', description: 'Аккаунты • Золото • Услуги • Прочее ' },
  {
    title: 'Team Fortress 2 ',
    description: 'Аккаунты • Предметы • Услуги • Прочее ',
  },
  {
    title: 'Teamfight Tactics ',
    description: 'Аккаунты • Буст • Монеты • Prime Gaming • Прочее ',
  },
  { title: 'Twitch ', description: 'Аккаунты • Услуги • Подписка ' },
  { title: 'Trovo ', description: 'Аккаунты • Услуги • Ace ' },
  { title: 'Telegram ', description: 'Каналы • Услуги• Premium • Прочее ' },
  { title: 'Tiktok ', description: 'Аккаунты • Монеты • Услуги' },
  { title: 'Tekken ', description: 'Аккаунты • Ключи • Донат • Услуги ' },
  { title: 'TERA ', description: 'Аккаунты • Золото • Предметы • Услуги ' },
  { title: 'Terraria ', description: 'Аккаунты • Ключи • Предметы • Услуги ' },
  { title: 'The Crew 2 ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'The Crew Motorfest ',
    description: 'Аккаунты • Ключи • Кредиты • Услуги • Прочее ',
  },
  {
    title: 'The Finals ',
    description: 'Аккаунты • Мультибаксы • Буст • Twitch Drops • Прочее ',
  },
  {
    title: 'The Last of Us ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Прочее ',
  },
  {
    title: 'The Legend of Neverland ',
    description: 'Аккаунты • Хрусталь Кабалы • Донат • Услуги ',
  },
  {
    title: 'The Lord of the Rings Online ',
    description: 'Аккаунты • Золото • Ключи • Донат • Предметы • Услуги ',
  },
  {
    title: 'The Lord of the Rings: Gollum ',
    description: 'Аккаунты • Ключи • Прочее ',
  },
  {
    title: 'The Seven Deadly Sins: Grand Cross ',
    description: 'Аккаунты • Донат • Услуги ',
  },
  { title: 'The Sims ', description: 'Аккаунты • Ключи • Донат ' },
  {
    title: 'Throne and Liberty ',
    description: 'Аккаунты • Lucent • Донат • Услуги • Прочее ',
  },
  {
    title: "Tom Clancy's Rainbow Six",
    description:
      'Аккаунты • Ключи • Кредиты • Донат • Услуги • Twitch Drops • Прочее ',
  },
  {
    title: "Tom Clancy's The Division",
    description: 'Аккаунты • Ключи • Премиальные кредиты • Предметы • Услуги ',
  },
  {
    title: "Tom Clancy's Ghost Recon",
    description: 'Аккаунты • Ключи • Предметы • Услуги • Game Pass ',
  },
  {
    title: 'Torchlight: Infinite ',
    description:
      'Аккаунты • Элементиевое пламя • Донат • Первокристаллы • Услуги • Twitch Drops ',
  },
  { title: 'Total War ', description: 'Аккаунты • Ключи • Прочее ' },
  {
    title: 'Tower of Fantasy ',
    description: 'Аккаунты • Донат • Tanium • Услуги • Прочее ',
  },
  {
    title: 'Teamfight Tactics ',
    description: 'Аккаунты • Буст • Монеты • Prime Gaming • Прочее ',
  },
];

const cardDataU: CardData[] = [
  { title: 'UFC ', description: 'Аккаунты • Ключи • Донат • Услуги ' },
  {
    title: 'Undawn ',
    description: 'Аккаунты • Золото • Донат • RC • Услуги • Прочее ',
  },
  {
    title: 'Undecember ',
    description: 'Аккаунты • Рубины • Донат • Алмазы • Прокачка • Прочее ',
  },
];

const cardDataV: CardData[] = [
  { title: 'V Rising ', description: 'Аккаунты • Ключи • Предметы • Услуги ' },
  { title: 'Valheim ', description: 'Аккаунты • Ключи • Предметы • Услуги ' },
  {
    title: 'Valorant ',
    description:
      'Аккаунты • Points • Буст • Услуги • Обучение • Prime Gaming • Прочее ',
  },
  {
    title: 'Vikings: War of Clans ',
    description: 'Аккаунты • Предметы • Донат • Услуги ',
  },
];

const cardDataW: CardData[] = [
  {
    title: 'War Thunder Mobile ',
    description: 'Аккаунты • Донат • Орлы • Услуги • Прочее ',
  },
  { title: 'Warcraft 3: Reforged ', description: 'Аккаунты • Ключи • Услуги ' },
  {
    title: 'Warcraft Rumble ',
    description: 'Аккаунты • Монеты • Донат • Услуги • Прочее ',
  },
  {
    title: 'Warface ',
    description:
      'Аккаунты • Предметы • Буст • Кредиты • Достижения • Twitch Drops • Прочее ',
  },
  {
    title: 'Warframe ',
    description:
      'Аккаунты • Платина • Донат • Услуги • Prime Gaming • Twitch Drops • Прочее ',
  },
  {
    title: 'Warspear Online ',
    description: 'Аккаунты • Золото • Чудо монеты • Предметы • Услуги ',
  },
  {
    title: 'Watch Dogs ',
    description: 'Аккаунты • Ключи • Оффлайн активации • Game Pass • Прочее ',
  },
  {
    title: 'Watcher of Realms ',
    description: 'Аккаунты • Алмазы • Донат • W-Gold • Услуги ',
  },
  {
    title: 'Wayfinder ',
    description: 'Аккаунты • Ключи • Runesilver • Услуги ',
  },
  {
    title: 'Will To Live Online ',
    description: 'Аккаунты • Жетоны • Предметы • Услуги ',
  },
  {
    title: 'World of Tanks ',
    description:
      'Аккаунты • Бонус коды • Буст• Фарм серебра • Донат • Услуги • Прочее ',
  },
  {
    title: 'World of Tanks Blitz ',
    description:
      'Аккаунты • Буст • Фарм серебра • Золото • Донат • Twitch Drops • Прочее ',
  },
  {
    title: 'World of Warcraft ',
    description:
      'Аккаунты • Золото • Рейды • Подземелья • Предметы • Донат • Прочее ',
  },
  {
    title: 'World of Warcraft Classic + Hardcore + Season of Discovery ',
    description:
      'Аккаунты • Золото • Прокачка • Подземелья • Рейды • Экипировка  ',
  },
  {
    title: 'World of Warcraft WotLK Classic ',
    description:
      'Аккаунты • Золото • Прокачка • Экипировка • Рейды • PvP • Прочее ',
  },
  {
    title: 'World of Warships ',
    description:
      ' Аккаунты • Донат • Бонус коды • Услуги • Prime Gaming • Прочее ',
  },
  { title: 'World War Z ', description: 'Аккаунты • Ключи • Услуги • Прочее ' },
];

const cardDataX: CardData[] = [
  {
    title: 'Xbox ',
    description: 'Аккаунты • Ключи • Пополнение • Услуги • Game Pass  ',
  },
];

const cardDataY: CardData[] = [
  { title: 'Youtube', description: ' Услуги • Каналы • Premium • Прочее  ' },
];
const cardDataZ: CardData[] = [
  { title: 'Zepeto ', description: 'Земы • Донат • Услуг ' },
];
const cardData4: CardData[] = [
  { title: 'Аллоды Онлайн', description: 'Золото • Кристаллы • Аккаунты•' },
  { title: 'Вконтакте ', description: 'Сообщества • Услуги' },
];
const cardDataА: CardData[] = [
  { title: 'Ведьмак 3: Дикая Охота', description: 'Аккаунты • Ключи • Прочее' },
  { title: 'Вконтакте ', description: 'Сообщества • Услуги' },
];

const cardDataК: CardData[] = [
  {
    title: 'Калибр ',
    description: 'Аккаунты • Донат • Бонус коды • Услуги • Буст • Twitch Drop',
  },
];

const cardDataТ: CardData[] = [
  { title: 'Танки Онлайн ', description: 'Аккаунты • Услуги • Бус' },
];

const cardData8: CardData[] = [
  {
    title: '8 Ball Pool ',
    description: 'Аккаунты • Монеты • Валюта • Донат • Прочее ',
  },
];

export default function Alphabet() {
  const cardData: CardDataDictionary = {
    A: cardDataA,
    B: cardDataB,
    C: cardDataC,
    D: cardDataD,
    E: cardDataE,
    F: cardDataF,
    G: cardDataG,
    H: cardDataH,
    I: cardDataI,
    K: cardDataK,
    L: cardDataL,
    M: cardDataM,
    N: cardDataN,
    O: cardDataO,
    P: cardDataP,
    R: cardDataR,
    S: cardDataS,
    T: cardDataT,
    U: cardDataU,
    V: cardDataV,
    W: cardDataW,
    X: cardDataX,
    Y: cardDataY,
    Z: cardDataZ,
    А: cardDataА,
    К: cardDataК,
    Т: cardDataТ,
    8: cardData8,
  };
  const alphabet = 'ABCDEFGHIKLMNOPRSTUVWXYZАКТ8'.split('');
  return (
    <>
      <section className="">
        <div className="flex-no-wrap flex flex-row ">
          <div className="absolute my-10 ml-20 flex w-12 flex-col justify-between bg-none sm:relative md:h-full">
            <AlphabetNav />
          </div>
          <div className="relative mx-auto h-auto w-11/12 px-6 py-10 md:w-4/5">
            {alphabet.map((letter) => (
              <div key={letter} className="h-auto w-full">
                <p
                  className={
                    'ml-10 bg-gradient-to-r from-[#64D28B] to-[#27B65A] bg-clip-text font-gunterz text-8xl font-bold text-transparent '
                  }
                  id={letter}
                >
                  {letter}
                </p>
                <div className="ml-10 grid gap-1 pt-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
                  {cardData[letter]?.map((card: CardData, index: number) => (
                    <Card
                      key={index}
                      title={card.title}
                      description={card.description}
                    />
                  ))}
                </div>
                <hr className="my-8 h-px w-full border-0 bg-[#545353] px-8 " />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
