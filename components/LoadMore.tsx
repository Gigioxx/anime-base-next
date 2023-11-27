'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';

import { fetchAnime } from '@/app/action';

import AnimeCard, { AnimeProp } from './AnimeCard';

let page = 2;

function LoadMore() {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);

  useEffect(() => {
    if (inView) {
      fetchAnime(page).then((res) => {
        setData([...data, ...res]);
        page++;
      });
    }
  }, [inView, data]);

  return (
    <>
      <section className='grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className='flex w-full items-center justify-center'>
        <div ref={ref}>
          <Image
            alt='spinner'
            className='object-contain'
            height={56}
            src='./spinner.svg'
            width={56}
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
