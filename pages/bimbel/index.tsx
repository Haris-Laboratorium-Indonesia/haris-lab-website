import Layout from '@/components/Layout';
import Title from '@/components/Title';
import Rafi from '../../public/Trainer/Rafi.jpg';
import Harits from '../../public/Trainer/Harits.jpg';
import Image from 'next/image';
import { Disclosure } from '@headlessui/react';
import { HiOutlineChevronDown, HiChevronRight } from 'react-icons/hi';

const bimbel = () => {
  return (
    <Layout browserTitle='Bimbel' description='Booking Les tidak pernah semudah ini'>
      <Title name='Bimbel' />
      <div className='mb-5 -mt-5 text-center'>Pesan les privat ke rumah.</div>

      {/* Calender */}
      {/* <div className='grid grid-cols-7 gap-2 p-2 bg-gray-200 border border-gray-300 rounded sm:hidden'>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
        <div className='px-2 py-2 text-center border border-gray-400 rounded '>senin</div>
      </div> */}

      {/* Memesan pelajaran */}
      <div className='w-full p-4 mx-auto mt-5 mb-10 bg-white rounded-md shadow hover:shadow-md sm:w-1/3'>
        <div className='text-lg font-medium text-center text-gray-800 mb-7'>Booking Les</div>
        <label htmlFor=''>Untuk tanggal :</label>
        {/* <div className='mb-5 font-semibold'>Selasa, 2 Agustus 2021</div> */}
        <input type='date' className='block w-full mb-5' />
        <label htmlFor=''>Pukul :</label>
        {/* <div className='mb-5 font-semibold'>14:00 - 16:00 WIB</div> */}
        <input type='time' className='block w-full mb-5' />
        <label htmlFor='nama' className='text-sm'>
          Nama
        </label>
        <input
          type='text'
          id='nama'
          className='block w-full px-2 py-1 mb-5 text-gray-800 border border-gray-400 rounded focus:border-gray-800 focus:outline-none'
        />
        <label htmlFor='MataPelajaran' className='text-sm'>
          Mata Pelajaran
        </label>
        <input
          type='text'
          id='MataPelajaran'
          className='block w-full px-2 py-1 mb-5 text-gray-800 border border-gray-400 rounded focus:border-gray-800 focus:outline-none'
        />
        <label htmlFor='Bab' className='text-sm'>
          Bab
        </label>
        <input
          type='text'
          id='Bab'
          className='block w-full px-2 py-1 mb-5 text-gray-800 border border-gray-400 rounded focus:border-gray-800 focus:outline-none'
        />
        <div className='flex justify-end'>
          <div className='w-1/3 px-2 py-1 text-center text-white rounded-md shadow cursor-pointer bg-harislab hover:bg-opacity-70 hover:shadow-md'>
            Pesan
          </div>
        </div>
      </div>

      {/* Catatan */}
      <div>
        <div className='mt-10 mb-3 text-2xl font-semibold'>Catatan</div>
        <ul className='list-disc list-inside'>
          <li>Hanya bisa membooking 2 hari sebelumnya</li>
          <li>Pembayaran dilakukan ke rekening mandiri</li>
          <li>Jika ada pembatalan jadwal, akan muncul notifikasi</li>
          <li>
            Pembatalan mungkin saja terjadi karena trainer sakit, kecelakaan, atau terkena bencana
            lainnya
          </li>
          <li>Pengembalian uang sebesar 100%</li>
        </ul>
      </div>

      {/* Daftar Tutor */}
      <div className='mt-10 mb-3 text-2xl font-medium'> Daftar Trainer</div>
      <div className='grid w-1/2 grid-cols-1 gap-2 sm:gap-3'>
        {/* <div className='flex flex-row items-center px-4 py-2 space-x-3 bg-white rounded-md shadow-md cursor-pointer hover:shadow-lg'>
          <Image src={Rafi} width={30} height={30} priority className='rounded-full' />
          <div>Rafi Amrulah</div>
        </div> */}
        <Opener name='Rafi Amrulah' img={Rafi}>
          <div className='flex flex-col p-1 space-y-1'>
            <DaftarIsi point='Nama' desc='Rafi Amrulah Putra' />
            <DaftarIsi point='Usia' desc='15 Tahun' />{' '}
            <DaftarIsi point='Keahlian' desc='Pelatih Lari, Sepeda, Gym ' />
            <DaftarIsi point='Pengalaman melatih' desc='2,5 Tahun' />
            <DaftarIsi point='Hari Praktek' desc={`Senin - Jum'at`} />
            <DaftarIsi point='Waktu Praktek' desc={`08:00 - 16:00`} />
            <DaftarIsi point='Wilayah pelatihan' desc='Tangerang Selatan' />
            <DaftarIsi point='Bahasa' desc='Indonesia, Inggris, Jawa' />
          </div>
          <div className='flex flex-row items-center p-1 mt-2 space-x-2 cursor-pointer text-harislab hover:underline'>
            Profil lebih lanjut <HiChevronRight />
          </div>
        </Opener>
        <Opener name='Harits Syah' img={Harits}>
          <div className='flex flex-col p-1 space-y-1'>
            <DaftarIsi point='Nama' desc='Harits Syah Rahmatullah' />
            <DaftarIsi point='Usia' desc='22 Tahun' />
            <DaftarIsi point='Keahlian' desc='Matematika, Fisika, Catur, Web Engineering ' />
            <DaftarIsi point='Pengalaman melatih' desc='2,5 Tahun' />
            <DaftarIsi point='Hari Praktek' desc={`Senin - Jum'at`} />
            <DaftarIsi point='Waktu Praktek' desc={`08:00 - 16:00`} />
            <DaftarIsi point='Wilayah pelatihan' desc='Tangerang Selatan' />
            <DaftarIsi point='Bahasa' desc='Indonesia, Inggris' />
          </div>
          <div className='flex flex-row items-center p-1 mt-2 space-x-2 cursor-pointer text-harislab hover:underline'>
            Profil lebih lanjut <HiChevronRight />
          </div>
        </Opener>
      </div>
    </Layout>
  );
};

export default bimbel;

const Opener = ({ name, img, children }) => {
  return (
    <Disclosure
      as='div'
      className='flex flex-col w-full bg-white rounded-md shadow hover:shadow-md'
    >
      {({ open }) => (
        <>
          <Disclosure.Button
            as='div'
            className='flex items-center justify-between w-full px-3 py-2 rounded-md cursor-pointer focus:outline-none hover:bg-indigo-50'
          >
            <div className='flex items-center justify-between space-x-2'>
              <Image src={img} width={30} height={30} priority className='rounded-full' />
              <div className='text-gray-700'>{name}</div>
            </div>

            <HiOutlineChevronDown className={`${open ? 'transform rotate-180' : ''} block`} />
          </Disclosure.Button>
          <Disclosure.Panel className='p-3 overflow-x-auto text-gray-700 bg-white border-t border-gray-300 rounded-b-md '>
            {children}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

const DaftarIsi = ({ point, desc }) => {
  return (
    <div className='flex w-full text-sm sm:text-base'>
      <div className='flex flex-row justify-between w-1/3 mr-2'>
        <div className='font-medium'>{point}</div>
        <div>:</div>
      </div>
      <div className='flex w-3/5'>{desc}</div>
    </div>
  );
};
