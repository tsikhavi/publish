import Link from 'next/link';
import SearchR from './searchr';
import ButtonMarket from './button-market';

export default function Banner() {
  return (
    <section className="mt-0 bg-[#272727] ">
      <div className=" my-0 h-auto px-0 py-10 ">
        <div className="mx-0 text-center">
          <h1 className="mt-24 text-3xl font-bold sm:text-3xl">
            <strong className="font-bold leading-normal text-white sm:block">
              Покупайте, играйте, повторяйте - все на <br />
              нашем маркетплейсе.
            </strong>
          </h1>
         <div className='pb-32 pt-6'><SearchR /></div>
          
          <ButtonMarket />
        </div>
      </div>
    </section>
  );
}
