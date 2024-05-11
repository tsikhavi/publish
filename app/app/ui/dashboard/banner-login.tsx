import Link from 'next/link';
import SearchR from '../searchr';
import ButtonMarket from '../button-market';

export default function BannerLogin() {
  return (
    <section className="mt-0 bg-[url('/landing.png')]  ">
      <div className=" element my-0 h-auto px-0  ">
        <div className="z-10 mx-0 pb-0  pt-10 text-center">
          <h1 className="my-20 font-bold  sm:text-4xl">
            <strong className="font-bold leading-normal text-white sm:block">
              Покупайте по доступным ценам, продавайте без вложений и повторяйте
              это – на нашей торговой площадке
            </strong>
          </h1>

          <SearchR />
          <ButtonMarket />
        </div>
      </div>
    </section>
  );
}
