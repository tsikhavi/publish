import '@/app/ui/global.css';
import localFont from 'next/font/local';
import { Metadata } from 'next';
import Footer from './ui/footer';

const evolventa = localFont({
  src: [
    {
      path: '../public/fonts/Evolventa-Bold.woff',
      weight: '700',
    },
    {
      path: '../public/fonts/Evolventa-Regular.woff',
      weight: '400',
    },
  ],
});

export const metadata: Metadata = {
  title: 'FreeSell',
  description: 'Landing page',
  metadataBase: new URL('https://freesellfe-ten.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ru"
      className={evolventa.className + ' bg-[#272727] antialiased'}
    >
      <body>{children}</body>
    </html>
  );
}
