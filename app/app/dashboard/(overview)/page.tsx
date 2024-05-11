'use client';

import NavbarLogin from '../../ui/dashboard/navbar-login';
import BannerLogin from '../../ui/dashboard/banner-login';
import Footer from '../../ui/footer';
import Alphabet from '../../ui/alphabet';
import Slider from '../../ui/slider';

export default function Page() {
  return (
    <>
      <main className="h-full w-full bg-inherit">
        <NavbarLogin />
        <BannerLogin />
        <Slider />
        <Alphabet />
      </main>
      <Footer />
    </>
  );
}
