import Image from 'next/image';

function Hero() {
  return (
    <header className='flex w-full justify-center gap-0 bg-hero bg-cover bg-center bg-no-repeat px-8 py-16 max-lg:flex-col sm:gap-16 sm:p-16 lg:items-center'>
      <div className='flex flex-1 flex-col gap-10'>
        <Image alt='logo' className='object-contain' height={96} src='./logo.svg' width={101} />
        <h1 className='text-5xl font-bold leading-[120%] text-white sm:text-6xl lg:max-w-lg'>
          Explore The <span className='red-gradient'>Diverse Realms</span> of Anime Magic
        </h1>
      </div>
      <div className='relative h-[50vh] w-full justify-center lg:flex-1'>
        <Image fill alt='anime' className='object-contain' src='/anime.png' />
      </div>
    </header>
  );
}

export default Hero;
