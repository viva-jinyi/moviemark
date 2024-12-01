import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import Providers from '../providers'
import Layout from '@/components/layout/Layout'
import "@/styles/global.css";
import { AlertProvider } from '@/providers/AlertProvider';
import AlertContainer from '@/components/common/Alert/AlertContainer';

export const metadata: Metadata = {
  title: "Movie Mark",
  description: "Let's MovieMark!",
};

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.className}>
      <body>
        <AlertProvider>
          <Providers>
            <Layout>
              {children}
            </Layout>
          </Providers>
          <AlertContainer />
        </AlertProvider>
      </body>
    </html>
  );
}
