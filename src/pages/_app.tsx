import '../globals.css';
import type { AppProps } from 'next/app';
import { SessionProvider } from 'next-auth/react';
import { Inter } from '@next/font/google';

const font = Inter();

export default function App({ Component, pageProps, session }: AppProps & { session: any }) {
  return (
    <>
      <style jsx global>{`
        html { font-family: ${font.style.fontFamily}; }
      `}</style>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
