import Link from 'next/link';
import FAQ from '../components/FAQ';
import InfoBox from '../components/InfoBox';
import Layout from '../components/Layout';
import Support from '@/components/Support';
import Inspirasi from '@/components/Inspirasi';

import { isiFAQ } from '../data/Beranda';
import { SayaPeduliTentang } from '../data/Beranda';
import { CaraSayaMenyampaikanInformasi } from '../data/Beranda';
import TextSlider from '@/components/delba/TextSlider';

export default function Beranda() {
  const tr: string = 'divide-y divide-x divide-cyan-500';
  const td: string = ' text-left text-sm p-2';
  const th: string = 'p-2 text-left text-base font-medium text-cyan-500 bg-cyan-50';

  return (
    <Layout browserTitle='Beranda' description='Laboratorium untuk Pelajar.'>
      {/* Hero */}
      <section className='relative z-40 flex flex-col w-full mt-20 mb-20 sm:mb-60 font-inter'>
        <TextSlider slides={['Referensi.', 'Kalkulasi.', 'Animasi.']} />

        <div className='grid w-4/5 grid-cols-1 gap-4 mx-auto sm:grid-cols-2 my-7 sm:w-1/2'>
          <Link href='/signup'>
            <a className='inline-block px-6 py-2 text-xl text-center text-white duration-200 rounded-md sm:text-xl hover:bg-opacity-80 bg-harislab '>
              Lihat aplikasi
            </a>
          </Link>
          <Link href='/#support'>
            <a className='inline-block px-6 py-2 text-xl text-center text-gray-600 duration-200 bg-white rounded-md shadow-md sm:text-xl hover:shadow-none hover:bg-gray-200 '>
              Dukung kami
            </a>
          </Link>
        </div>
        <div className='mb-12 text-lg leading-tight text-center sm:text-xl '>
          Tempat terbaik untuk referensi, kalkulasi, animasi Matematika dan Fisika.
        </div>
      </section>

      {/* Cara kami menyajikan informasi */}
      <div className='mb-32 sm:mb-60 '>
        <div className='text-2xl font-bold text-center sm:text-4xl bg-gradient-to-r from-pink-600 via-fuschsia-600 to-purple-600 trns'>
          Cara kami menyajikan informasi
        </div>
        <div className='mt-2 mb-10 text-center text-gray-600 '>
          Arsitektur informasi yang didesain untuk pengalaman belajar terbaik.
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 '>
          {CaraSayaMenyampaikanInformasi.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-pink-600'
              borderColor='border-pink-600'
              to='/haris'
            />
          ))}
        </section>
      </div>

      {/* Kami peduli tentang */}
      <div className='mb-32 sm:mb-60 '>
        <header className='text-2xl font-bold text-center bg-gradient-to-r from-lime-600 via-green-600 to-emerald-600 trns sm:text-4xl'>
          Kami Peduli Tentang
        </header>
        <div className='mt-2 mb-10 text-center text-gray-600'>
          Bagaimana arsitektur informasi menunjang kemampuan pelajar dalam belajar.
        </div>

        <section className='grid grid-cols-1 gap-10 mx-auto sm:grid-cols-3 md:grid-cols-4 '>
          {SayaPeduliTentang.map(a => (
            <InfoBox
              key={a.id}
              svg={a.svg}
              name={a.title}
              description={a.description}
              color='text-green-600'
              borderColor='border-green-600'
              to='/haris'
            />
          ))}
        </section>
      </div>

      {/* HarisLab vs Zenius vs Ruangguru vs Buku Paket*/}
      <div className='mb-32 sm:mb-60 '>
        <header className='mb-10 text-2xl font-bold text-center bg-gradient-to-r from-cyan-600 via-sky-600 to-blue-600 sm:text-4xl trns'>
          HarisLab vs Zenius vs Ruangguru
        </header>
        <section className='mx-auto overflow-x-auto sm:gap-5 lg:px-0'>
          <table className='w-full overflow-hidden border border-cyan-500'>
            <thead>
              <tr className={tr}>
                <th className={th}>vs</th>
                <th className={th}>HarisLab</th>
                <th className={th}>Zenius</th>
                <th className={th}>Ruangguru</th>
                <th className={th}>Pahamify</th>
                <th className={th}>Wikipedia</th>
                <th className={th}>Buku Paket</th>
              </tr>
            </thead>
            <tbody className='divide-y divide-cyan-500'>
              <tr className={tr}>
                <td className={td}>Harga</td>
                <td className={td}>25rb/bln</td>
                <td className={td}>50rb/bln</td>
                <td className={td}>80rb/bln</td>
                <td className={td}>200rb/bln</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Update Informasi</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Selalu Update</td>
                <td className={td}>Tidak Update</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Durabilitas</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
                <td className={td}>Mudah rusak</td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
              <tr className={tr}>
                <td className={td}>Mobilitas</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Mudah dibawa</td>
                <td className={td}>Sulit dibawa </td>
                <td className={td}>Aman</td>
                <td className={td}>Aman</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>

      <Inspirasi />

      {/* FAQ */}
      <div className='mb-32 sm:mb-60'>
        <header className='mb-10 text-2xl font-bold text-center text-gray-800 sm:text-4xl'>
          Frequently Asked Questions
        </header>
        <section className='grid max-w-xl grid-cols-1 gap-5 mx-auto '>
          {isiFAQ.map(a => (
            <div key={a.id}>
              <FAQ button={a.button} panel={a.panel} />
            </div>
          ))}
        </section>
      </div>

      <div id='support'>
        <Support />
      </div>
    </Layout>
  );
}
