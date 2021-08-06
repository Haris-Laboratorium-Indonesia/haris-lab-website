import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import Nature from '../../public/nature.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { NavList } from '@/components/List';
import List from '@/components/List';
import {
  AA1,
  A2,
  TH,
  TData,
  Row,
  THEAD,
  Body,
  P,
  Gambar,
  Legenda,
  KaTeX,
} from '@/components/Materi';

export default function Limit() {
  return (
    <LayoutMateri browserTitle='Limit' description='Materi Limit'>
      <List branch='matematika' to='Limit' title='Limit'>
        <NavList title='Pengenalan' href='Pengenalan' />
        <NavList title='Konstanta' href='Konstanta' />
        <NavList title='Variabel' href='Variabel' />
        <NavList title='Rumus' href='Rumus' />
        <NavList title='Penurunan Rumus' href='PenurunanRumus' />
        <NavList title='Pembahasan' href='Pembahasan' />
        <NavList title='Contoh Soal' href='ContohSoal' />
      </List>
      <Gambar
        src={Nature}
        alt='Limit'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      ></Gambar>

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Limit' />
      <A2 title='Siapa yang menggunakan Limit' />
      <A2 title='Dimana Limit digunakan' />
      <A2 title='Kapan Limit digunakan' />
      <AA1 id='Konstanta' title='Konstanta' />

      <AA1 id='Variabel' title='Variabel' />

      <AA1 id='Rumus' title='Rumus' />
      <KaTeX>{String.raw`a^ma^n = a^{m+n}`}</KaTeX>
      <KaTeX>{String.raw`\frac{a^m}{a^n} = a^{m-n}`}</KaTeX>
      <KaTeX>{String.raw`(a\cdot b)^m = a^mb^m)`}</KaTeX>
      <KaTeX>{String.raw`(a^m)^n = a^{mn}`}</KaTeX>
      <KaTeX>{String.raw`a^{\frac{1}{m}} = \sqrt[m]{a}`}</KaTeX>
      <KaTeX>{String.raw`a^{\frac{n}{m}} = \sqrt[m]{a^n}`}</KaTeX>
      <KaTeX>{String.raw`a^0 = 1`}</KaTeX>

      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />

      <AA1 id='Pembahasan' title='Pembahasan' />
      <P>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum cupiditate
        voluptatibus, facere, sunt illum eveniet quasi fuga consequuntur harum quo magnam facilis
        eos dolores. Sint architecto dolorem ratione. Tempora cumque amet expedita praesentium qui
        quae error laudantium incidunt odit inventore unde enim molestias voluptates aut est, facere
        earum adipisci?
      </P>

      <AA1 id='ContohSoal' title='Contoh Soal' />
      <P>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
        libero. Error sequi ea assumenda, minus nobis cupiditate!
      </P>
      <br />
      <ExampleMain type='Contoh Soal Mudah'>
        <ExampleChild type='Teori Kinetik Gas'>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
          libero. Error sequi ea assumenda, minus nobis cupiditate!{' '}
        </ExampleChild>
      </ExampleMain>
    </LayoutMateri>
  );
}
