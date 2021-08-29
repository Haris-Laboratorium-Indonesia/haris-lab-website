import ChapterBox from '@/components/ChapterBox';
import Layout from '@/components/Layout';
import { Title, SubTitle, Topic } from '@/components/Materi';
import { matematikaChapterData } from 'data/Beranda';

export default function Matematika() {
  const yes =
    'grid grid-cols-1 overflow-hidden  divide-y divide-gray-300 rounded-md xs:gap-3 xs:divide-y-0 xs:grid-cols-2 sm:grid-cols-3 xs:-mx-1 xs:p-1 xs:border-0 shadow xs:shadow-none';
  return (
    <Layout browserTitle='Matematika' description='Materi Matematika SMP SMA'>
      <Title name='Matematika' />
      {/* <SubTitle name='Ilmu tentang angka, abstarksi, geometri, peluang dan cara berfikir.' /> */}

      <Topic name='Glosarium' />
      <section className={yes}>
        <ChapterBox title='Konstanta' to='/fisika/fisika_konstanta' />
        <ChapterBox title='Variabel' to='/fisika/fisika_variabel' />
        <ChapterBox title='Satuan SI' to='/fisika/fisika_satuanSI' />
        <ChapterBox title='Animasi' to='/fisika/animasi' />
        <ChapterBox title='Tokoh Matematika' to='/fisika/tokoh_matematika' />
      </section>

      <Topic name='Bab' />
      <section className={yes}>
        {matematikaChapterData.map(a => (
          <ChapterBox key={a.title} title={a.title} to={a.to} />
        ))}
      </section>
    </Layout>
  );
}
