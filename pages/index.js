import Head from 'next/head';
import Hero from '../components/Hero';

export default function Home() {
  return (
    <div className="max-w-[1140px] mx-auto">
      <Head>
        <title>Jack Willars</title>
      </Head>
      <Hero />
    </div>
  );
}
