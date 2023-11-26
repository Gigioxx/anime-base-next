import Image from 'next/image';

function LoadMore() {
  return (
    <>
      <section className='flex w-full items-center justify-center'>
        <div>
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
