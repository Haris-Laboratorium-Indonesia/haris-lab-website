import Image from 'next/image';
import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Link from 'next/link';

export const AA1 = ({ title, id }) => {
  return (
    <h1
      id={id}
      className={`z-10 text-3xl sm:text-4xl lg:pt-0 font-semibold mt-24 mb-3 text-gray-700 font-mw pb-1`}
    >
      {title}
    </h1>
  );
};

export const A2 = ({ title }) => {
  return <div className='mt-5 mb-2 font-semibold text-gray-700 font-mw'>{title}</div>;
};

export const P = ({ children }) => {
  return <p className='text-gray-700 font-inter indent-sm'>{children}</p>;
};

export const Gambar = ({ src, alt, caption }) => {
  return (
    <div className='mb-4 -mx-2 sm:-mx-0'>
      <Image
        src={src}
        alt={alt}
        placeholder='blur'
        layout='intrinsic'
        priority
        className='bg-contain rounded-md'
      />
      <figcaption className='text-sm italic text-center text-gray-700 font-mw'>
        {caption}
      </figcaption>
    </div>
  );
};

export const rumusTitle = 'font-medium text-md inline-block w-full  text-pink-600';

const thead = 'border-t border-gray-400';
const th = 'w-1/5 py-2 px-4 text-left font-medium text-gray-800 bg-gray-300 ';
const tr = 'divide-x divide-gray-400 border-b border-l border-r border-gray-400';
const td = 'text-left px-4 py-1.5 table-auto min-w-min text-gray-700';

export const THEAD = ({ children }) => {
  return <thead className={thead}>{children}</thead>;
};
export const Row = ({ children }) => {
  return <tr className={tr}>{children}</tr>;
};
export const TH = ({ children }) => {
  return <th className={th}>{children}</th>;
};
export const TData = ({ children }) => {
  return <td className={td}>{children}</td>;
};
export const Body = ({ children }) => {
  return <tbody>{children}</tbody>;
};
export const rms = ({ children }) => {
  return <TeX>{`${children}`}</TeX>;
};
export const Legenda = ({ name, rumus }) => {
  return (
    <div className='py-2'>
      <TeX>{rumus}</TeX> = {name}
    </div>
  );
};
export const KaTeX = ({ children }) => {
  return <TeX className='inline-block w-full py-2 text-sm text-tiny'>{children}</TeX>;
};
export const Anchor = ({ to, name }) => {
  return (
    <Link href={to}>
      <a className='text-blue-500 hover:text-fuschsia-500 hover:underline'>{name}</a>
    </Link>
  );
};
