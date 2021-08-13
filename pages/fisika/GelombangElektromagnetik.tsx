import 'katex/dist/katex.min.css';
import TeX from '@matejmazur/react-katex';
import GelombangElektromagnetikimage from '../../public/Fisika/GelombangElektromagnetikImage.jpg';
import ExampleMain from '@/components/ExampleMain';
import ExampleChild from '@/components/ExampleChild';
import LayoutMateri from '@/components/LayoutMateri';
import { NavListFisika } from '@/components/List';
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
  rumusTitle,
} from '@/components/Materi';

export default function GelombangElektromagnetik() {
  return (
    <LayoutMateri
      browserTitle='Gelombang Elektromagnetik'
      description='Materi Gelombang Elektromagnetik'
    >
      <List close='text-orange-400' branch='fisika' to='GelombangElektromagnetik' title='Gelombang Elektromagnetik'>
        <NavListFisika title='Pengenalan' href='Pengenalan' />
        <NavListFisika title='Konstanta' href='Konstanta' />
        <NavListFisika title='Variabel' href='Variabel' />
        <NavListFisika title='Rumus' href='Rumus' />
        <NavListFisika title='Penurunan Rumus' href='PenurunanRumus' />
        <NavListFisika title='Pembahasan' href='Pembahasan' />
        <NavListFisika title='Contoh Soal' href='ContohSoal' />
      </List>

      <Gambar
        src={GelombangElektromagnetikimage}
        alt='Gelombang Elektromagnetik'
        caption='Gambar 1 : Gunung di Lauterbrunnen Swiss, tempat dimana rumus termodinamika ke-0 dirumuskan.'
      />

      <AA1 id='Pengenalan' title='Pengenalan' />
      <A2 title='Apa itu Gelombang Elektromagnetik' />
      <A2 title='Siapa yang menggunakan Gelombang Elektromagnetik' />
      <A2 title='Dimana Gelombang Elektromagnetik digunakan' />
      <A2 title='Kapan Gelombang Elektromagnetik digunakan' />

      <AA1 id='Konstanta' title='Konstanta' />
      <section className='overflow-x-auto'>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Nilai</TH>
            </Row>
          </THEAD>

          <Body>
            <Row>
              <TData>
                <TeX>k</TeX>
              </TData>
              <TData>Konstanta Boltzmann</TData>
              <TData>
                <KaTeX>{`1,380 \\times 10^{-23} \\frac{J}{K}`}</KaTeX>
              </TData>
            </Row>

            <Row>
              <TData>
                <TeX>R</TeX>
              </TData>
              <TData>Konstanta Gas Ideal</TData>
              <TData>
                <KaTeX>{`8,3145 \\enspace \\frac{J\\cdot mol}{K}`}</KaTeX>
              </TData>
            </Row>
          </Body>
        </table>
      </section>

      <AA1 id='Variabel' title='Variabel' />
      <section className='overflow-x-auto '>
        <table className='w-full min-w-full border table-max'>
          <THEAD>
            <Row>
              <TH>Simbol</TH>
              <TH>Nama</TH>
              <TH>Satuan</TH>
            </Row>
          </THEAD>

          <Body>
            <Row>
              <TData>
                <TeX>Q</TeX>
              </TData>
              <TData>Muatan</TData>
              <TData>
                <TeX>C \ (Coulomb)</TeX>
              </TData>
            </Row>
          </Body>
        </table>
      </section>

      <AA1 id='Rumus' title='Rumus' />
      <div className='grid grid-cols-1 sm:grid-cols-2'>
        <article>
          <div className={rumusTitle}>Kecepatan Gelombang Elektromagnetik</div>
          <KaTeX>{String.raw`c = \frac{1}{\sqrt{\varepsilon_0\mu_0}}`}</KaTeX>
        </article>
      </div>

      <AA1 id='PenurunanRumus' title='Penurunan Rumus' />
      <P>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. A laudantium optio earum autem
        quisquam sit inventore, distinctio asperiores! Culpa optio atque similique adipisci id,
        soluta, odio excepturi ducimus laboriosam aspernatur quam velit alias. Saepe consectetur,
        harum dolorum fugit omnis nostrum deleniti exercitationem, magnam nam voluptatem voluptates,
        laudantium consequuntur ad facilis.
      </P>

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
