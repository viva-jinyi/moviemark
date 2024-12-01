import type { Metadata } from "next";
import { Poppins } from 'next/font/google'
import Providers from '../providers'
import Layout from '@/components/layout/Layout'
import AlertContainer from "@/components/common/Alert/AlertContainer";
import "@/styles/global.css";

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
        <Providers>
          <Layout>
            {children}
          </Layout>
          <AlertContainer />
        </Providers>
      </body>
    </html>
  );
}
