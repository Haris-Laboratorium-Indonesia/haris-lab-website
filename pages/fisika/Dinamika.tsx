import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import DinamikaImage from '../../public/Fisika/DinamikaImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import ListDinamika from '@/components/ListFisika/ListDinamika';
import LayoutMateri from '@/components/LayoutMateri';
import { DinamikaVar } from 'lib/VariabelFisika';
import { DinamikaRumus } from 'lib/RumusFisika';
import { DinamikaPenurunanRumus } from 'lib/PenurunanRumusFisika';
import {
  AA1,
  A2,
  TH,
  TData,
  TRowwwww,
  THEAD,
  TBODY,
  Para,
  Gambar,
  Legenda,
  KaTeX,
  rumusTitle,
} from '@/components/Materi';

export default function Dinamika() {
  return (
    <LayoutMateri browserTitle='Dinamika' description='Materi Dinamika'>
      <ListDinamika />
      <Gambar
        src={DinamikaImage}
        alt='Dinamika'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      />
      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Dinamika' />
      <A2 title='Siapa yang menggunakan Dinamika' />
      <A2 title='Dimana Dinamika digunakan' />
      <A2 title='Kapan Dinamika digunakan' />

      <AA1 id='Konstanta' title='Konstanta' />
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            <TRowwwww>
              <TData>
                <TeX>k</TeX>
              </TData>
              <TData>Konstanta Boltzmann</TData>
              <TData>
                <KaTeX>{`1,380 \\times 10^{-23} \\frac{J}{K}`}</KaTeX>
              </TData>
            </TRowwwww>

            <TRowwwww>
              <TData>
                <TeX>R</TeX>
              </TData>

              <TData>Konstanta Gas Ideal</TData>
              <TData>
                <KaTeX>{`8,3145 \\enspace \\frac{J\\cdot mol}{K}`}</KaTeX>
              </TData>
            </TRowwwww>
          </TBODY>
        </table>
      </section>

      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <TRowwwww>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </TRowwwww>
          </THEAD>

          <TBODY>
            {DinamikaVar.map(a => (
              <TRowwwww>
                <TData>
                  <KaTeX>{String.raw`${a.simbol}`}</KaTeX>
                </TData>
                <TData>{a.nama}</TData>
                <TData>
                  <KaTeX>{String.raw`${a.satuan}`}</KaTeX>
                </TData>
              </TRowwwww>
            ))}
          </TBODY>
        </table>
      </section>

      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {DinamikaRumus.map(a => (
          <article>
            <div className={rumusTitle}>{a.nama}</div>
            {typeof a.rumus === 'string' ? (
              <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
            ) : (
              a.rumus.map(b => <KaTeX>{String.raw`${b.rumus}`}</KaTeX>)
            )}
          </article>
        ))}
      </div>

      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        {DinamikaPenurunanRumus.map(a => (
          <article>
            <div className={rumusTitle}>{a.nama}</div>
            {typeof a.rumus === 'string' ? (
              <KaTeX>{String.raw`${a.rumus}`}</KaTeX>
            ) : (
              a.rumus.map(b => <KaTeX>{String.raw`${b.rumus}`}</KaTeX>)
            )}
          </article>
        ))}
      </div>
      
      <AA1 id='Pembahasan' title='Pembahasan' />
      <Para>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolorum cupiditate
        voluptatibus, facere, sunt illum eveniet quasi fuga consequuntur harum quo magnam facilis
        eos dolores. Sint architecto dolorem ratione. Tempora cumque amet expedita praesentium qui
        quae error laudantium incidunt odit inventore unde enim molestias voluptates aut est, facere
        earum adipisci?
      </Para>
      <AA1 id='ContohSoal' title='Contoh Soal' />
      <Para>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa consequatur qui optio
        libero. Error sequi ea assumenda, minus nobis cupiditate!
      </Para>
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
