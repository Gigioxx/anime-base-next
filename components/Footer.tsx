import Image from 'next/image';

function Footer() {
  return (
    <footer className='flex flex-wrap items-center justify-between gap-2 bg-[#161921] px-8 py-4 sm:px-16'>
      <p className='text-base font-bold text-white'>@2023 Anime Base</p>
      <Image alt='logo' className='object-contain' height={44} src='./logo.svg' width={47} />
      <div className='flex items-center gap-6'>
        <Image alt='logo' className='object-contain' height={19} src='./tiktok.svg' width={19} />
        <Image alt='logo' className='object-contain' height={19} src='./instagram.svg' width={19} />
        <Image alt='logo' className='object-contain' height={19} src='./twitter.svg' width={19} />
      </div>
    </footer>
  );
}

export default Footer;
