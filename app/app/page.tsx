'use client';

import Navbar from './ui/navbar';
import Banner from './ui/banner';
import Footer from './ui/footer';
import Alphabet from './ui/alphabet';
import Slider from './ui/slider';

export default function Page() {
  return (
    <>
      <main className="h-full w-full bg-inherit">
        <Navbar />
        <Banner />
        <Slider />
        <Alphabet />
        <Footer />
      </main>
    </>
  );
}
