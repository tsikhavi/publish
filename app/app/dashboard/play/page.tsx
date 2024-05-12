'use client';
import { Buttons } from '@/app/ui/buttons';
import NavbarLogin from '../../ui/dashboard/navbar-login';
import Image from 'next/image';
import TableRow from '@/app/ui/play/table';

interface CardData {
  title: string;
  description: string;
}
const cardDataA: CardData[] = [
  {
    title: 'AFK Arena',
    description: 'Аккаунты • Алмазы • Донат • Услуги • Прочее ',
  },
];

export default function Page() {
  // Extract the description and split it into an array
  const buttonLabels = cardDataA[0].description.split(' • ');
  const cardTitle = cardDataA[0].title;
  return (
    <>
      <main className="h-full w-full bg-inherit">
        <NavbarLogin />
        <section className="mt-0  bg-[url('/landing-play.png')]  ">
          <div className=" element my-0 h-auto px-0  ">
            <div className="z-10 ml-10 pb-0  pt-10 text-start">
              <h1 className="mt-8 font-bold  leading-normal text-white  sm:block sm:text-4xl">
                {cardTitle}
              </h1>
              <p className="text-wrap mr-80 pr-20 text-[14px] leading-normal text-white sm:block">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                officia corrupti quaerat enim quidem deserunt quisquam nostrum
                error, ducimus nam tenetur minus? Aliquam quaerat nemo neque
                eius beatae. Est, rem.
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi
                officia corrupti quaerat enim quidem deserunt quisquam nostrum
                error, ducimus nam tenetur minus? Aliquam quaerat nemo neque
                eius beatae. Est, rem.
              </p>
              <div className="py-4">
                {buttonLabels.map((label, index) => (
                  <Buttons
                    key={index}
                    className="mx-2 inline-flex rounded-full py-5 h-10 w-fit flex-row items-center justify-start whitespace-nowrap px-8 text-center text-[14px] hover:bg-[#64D28B]"
                  >
                    {label}
                  </Buttons>
                ))}
              </div>
              <div className="inline-flex pt-6 space-x-2">
                <Buttons className="ml-0 mr-4 inline-flex text-[14px] h-10 w-[284px] w-fixed flex-row items-center justify-start space-x-1 whitespace-nowrap rounded-md px-10 text-center text-[#F3F3F3] ring-[#827C7C] hover:bg-none hover:ring-[#827C7C]">
                  <Image
                    src="/Images/icon.png"
                    alt="Автоматическая доставка"
                    height={16}
                    width={16}
                    className="mr-2 h-4 w-4"
                  />
                  Автоматическая доставка
                  <Image
                    src="/Images/icon-1.png"
                    alt="Автоматическая доставка"
                    height={16}
                    width={16}
                    className="ml-2 h-4 w-4"
                  />
                </Buttons>
                <Buttons className="mx-2 inline-flex h-10 w-[284px] w-fixed text-[14px] flex-row items-center justify-start whitespace-nowrap rounded-md px-10 text-center text-[#F3F3F3] ring-[#827C7C] hover:bg-none hover:ring-[#827C7C]">
                  Только продавцы онлайн
                  <Image
                    src="/Images/icon-1.png"
                    alt=""
                    height={16}
                    width={16}
                    className="ml-2 h-4 w-4 "
                  />
                </Buttons>
                <label htmlFor="Search" className="sr-only">
                  Поиск по описанию
                </label>
                <div className="relative inline-flex">
                  <input
                    type="text"
                    id="Search"
                    placeholder="Поиск по описанию "
                    className="placeholder:font-regular mx-2 inline-flex h-10 w-[212px] w-fixed flex-row items-center justify-between whitespace-nowrap rounded-md bg-inherit px-10 py-2.5 pl-10 text-left text-[14px] text-[#F3F3F3] ring-1 ring-[#827C7C]  placeholder:text-xs   placeholder:text-[#F3F3F3] hover:border-[#827C7C] hover:bg-none focus:ring-1 focus:ring-inset focus:ring-[#827C7C] sm:text-sm"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute right-0 top-0 mr-4 mt-3 h-4 w-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <label htmlFor="Search" className="sr-only">
                  Поиск по префиксу
                </label>
                <div className="relative inline-flex">
                  <input
                    type="text"
                    id="Search"
                    placeholder="Поиск по префиксу "
                    className="placeholder:font-regular mx-2 inline-flex h-10 w-[212px] w-fixed flex-row items-center justify-between whitespace-nowrap rounded-md bg-inherit px-10 py-2.5 pl-10 text-left text-[14px] text-[#F3F3F3] ring-1 ring-[#827C7C]  placeholder:text-xs   placeholder:text-[#F3F3F3] hover:border-[#827C7C] hover:bg-none focus:ring-1 focus:ring-inset focus:ring-[#827C7C] sm:text-sm"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="absolute right-0 top-0 mr-4 mt-3 h-4 w-4 text-gray-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </div>
                <Buttons className="-mr-40 inline-flex h-10 w-[189px] w-fixed flex-row items-center justify-start space-x-1 whitespace-nowrap rounded-md px-10 text-center text-[14px] text-[#F3F3F3] ring-[#827C7C] hover:bg-none hover:ring-[#827C7C]">
                  Создать публикацию
                </Buttons>
              </div>
            </div>
            
           
            
          </div>
          
        </section>
         {/**table */}

         <div className="relative mt-8 mx-20 overflow-x-auto shadow-md sm:rounded-lg">
              <table className="w-full text-left text-sm text-[#C1C1C1] rtl:text-right ">
                
                <tbody>
                  <TableRow
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in fringilla metus, ac tincidunt libero. Aliquam vitae augue eget tellus вввввв"
                    seller="Worldwide"
                    price="2 452.02 ₽"
                  />
                  <TableRow
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in fringilla metus, ac tincidunt libero. Aliquam vitae augue eget tellusвввввввв"
                    seller="Worldwide"
                    price="2 452.02 ₽"
                  />
                  <TableRow
                    description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in fringilla metus, ac tincidunt libero. Aliquam vitae augue eget tellus вввввв"
                    seller="Worldwide"
                    price="2 452.02 ₽"
                  />
                </tbody>
              </table>
            </div>

            {/**table */}
            <div dir='rtl'>
            <Buttons className="ml-4 mt-8 mx-20 inline-flex h-10 w-fit flex-row items-center justify-start space-x-1 whitespace-nowrap rounded-md px-10 text-center text-[14px] text-[#F3F3F3] ring-[#459963] hover:bg-none hover:ring-[#459963]">
            Показать еще предложения
          </Buttons></div>
        <div className="ml-20 mr-60 my-20 text-xs bg-[#272727] text-[#636363]">
              <p>
                AFK Arena — мобильная игра, сочетающая жанры RPG и ККИ
                (коллекционная карточная игра). Попав в чарующий мир Эсперии,
                вам предстоит управлять героями, чтобы одолеть противников в
                поэтапных боях. Герои поделены на 6 разных фракций, каждая из
                них обладает уникальными способностями и собственной
                экипировкой, что дает богатый простор для разработки стратегии.
                Подбирайте сочетание персонажей, их способностей и фракционных
                бонусов, чтобы победить армию зла. Любой подвиг в этом
                фэнтезийном мире, раздираемым войной, не останется незамеченным
                и будет щедро вознагражден!
              </p>
              <h3 className='py-8'>Как купить</h3>
              <p>
                Выбираете приглядевшееся предложение и продавца, в выборе
                поможет система рейтинга и отзывов, которая позволяет
                предварительно оценить его добропорядочность. Чтобы купить
                аккаунт AFK Arena, нужно: </p>
                <ul className='list-decimal list-inside	'>
                  <li>Кликнуть на предложение и перейти на страницу оформления заказа. </li>
                  <li>Списаться с продавцом в чате и уточнить все детали по аккаунту.</li>
                  <li>Выбрать способ оплаты и нажать &quot;Купить&quot;. </li>
                </ul> 
                
                 
                <p>
                После подтверждения транзакции продавец увидит, что
                заказ оплачен и передаст доступ к аккаунту. Проверив данные,
                покупатель завершает сделку, нажав на соответствующую кнопку. А
                деньги, которые были заморожены в системе безопасности,
                переводятся продавцу.
              </p>
              <h3 className='py-8'>Продавцам</h3>
              <p>
              Если надоело играть или буст героев поставлен на поток, то вы можете продать аккаунт AFK Arena через нашу биржу. Для этого вам нужно зарегистрироваться в качестве продавца. Ознакомьтесь с правилами и пройдите небольшой тест на их знание. Теперь можно выставить на биржу свое предложение.
              </p>
            </div>
      </main>
    </>
  );
}
