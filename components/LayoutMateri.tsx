import Head from 'next/head';
import Footer from './Footer';
import NavDesktop from './NavDesktop';
import NavMobile from './NavMobile';

export default function Layout({ children, browserTitle, description }) {
  const image = 'https://harislab.com/public/HarisLab.png';
  const type = 'website';
  return (
    <div className='bg-[#F5F5F7]'>
      <Head>
        <title>{browserTitle} – Haris Lab</title>
        <link rel='icon' href='/harislab_ico.ico' />
        <meta name='robots' content='follow, index' />
        <meta content={description} name='description' />
        <meta property='og:type' content={type} />
        <meta property='og:site_name' content='HarisLab' />
        <meta property='og:description' content={description} />
        <meta property='og:title' content={browserTitle} />
        <meta property='og:image' content={image} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:site' content='@haritssr' />
        <meta name='twitter:title' content={browserTitle} />
        <meta name='twitter:description' content={description} />
        <meta name='twitter:image' content={image} />
      </Head>

      <section className='z-50 bg-gray-800 sm:bg-opacity-90'>
        <NavDesktop />
        <NavMobile />
      </section>

      <main className='w-full max-w-5xl min-h-screen px-5 pb-5 mx-auto sm:pb-0 xl:px-0 font-inter '>
        {children}
      </main>

      <Footer />
    </div>
  );
}
