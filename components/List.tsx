import Link from 'next/link';
import { Menu } from '@headlessui/react';
export const a = 'block text-gray-200 hover:bg-harislab hover:text-white rounded px-2 py-1';

export default function List({ branch, to, title, children }) {
  return (
    <div className='sticky z-40 -mx-5 md:mx-0 top-12 md:top-20 '>
      <Menu as='div' className='flex flex-col w-full mb-5 sm:mb-2 sm:mx-auto '>
        {({ open }) => (
          <>
            <section className='flex items-center justify-between w-full mx-auto bg-white '>
              <Link href={`/${branch}`}>
                <a className='z-50 flex flex-row items-center w-1/4 py-2 pl-2 text-sm text-harislab md:hidden'>
                  <ChevronLeft />
                  {branch}
                </a>
              </Link>

              <Link href={`/${branch}/${to}`}>
                <a className='block w-1/2 py-2 font-semibold text-center text-black text-tiny'>
                  {title}
                </a>
              </Link>

              <Menu.Button className='flex justify-end w-1/4 focus:outline-none'>
                <div className='py-2 pr-3 text-sm text-harislab'>{open ? <X /> : 'Daftar Isi'}</div>
              </Menu.Button>
            </section>

            <Menu.Items className='flex justify-center w-full'>
              <div className='w-full p-2 overflow-y-auto bg-white rounded-lg max-h-96 '>
                {children}
              </div>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}

export function NavList({ title, href }) {
  return (
    <Menu.Item>
      <a
        className={`block text-gray-700 hover:text-white rounded px-2 py-2 hover:bg-gray-700`}
        href={`#${href}`}
      >
        {title}
      </a>
    </Menu.Item>
  );
}

const ChevronDown = () => {
  return (
    <svg
      className='w-6 h-6 text-gray-700 hover:text-harislab'
      viewBox='0 0 24 24'
      width='24'
      height='24'
      stroke='currentColor'
      fill='none'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M19 9l-7 7-7-7' />
    </svg>
  );
};

const X = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6 text-gray-700 hover:text-harislab'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
    </svg>
  );
};

const ChevronLeft = () => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      className='w-6 h-6'
      fill='none'
      viewBox='0 0 24 24'
      stroke='currentColor'
    >
      <path stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M15 19l-7-7 7-7' />
    </svg>
  );
};
