import Link from "next/link";

const Footer = () => {
  const navigation =
    "block  text-gray-400 hover:underline hover:text-white hover:underline";
  return (
    <footer className="bottom-0 w-full text-center bg-gray-800 ">
      <section className="flex flex-col max-w-5xl px-5 py-10 mx-auto mt-10 space-y-10 text-left sm:flex-row sm:space-y-0 xl:px-0">
        {/* Footer Navigation */}
        <article className="flex w-full sm:w-1/2">
          {/* LAINNYA */}
          <div className="w-full space-y-2 sm:w-1/2">
            <div className="text-white ">LAINNYA</div>
            <Link href="/blog">
              <a className={navigation}>Blog</a>
            </Link>
            <Link href="/portofolio">
              <a className={navigation}>Portofolio</a>
            </Link>
            <Link href="/merchandise">
              <a className={navigation}>Merchandise</a>
            </Link>
          </div>
          <div className="w-full space-y-2 sm:w-1/2">
            {/* ALAT */}
            <div className="text-white ">ALAT</div>
            <Link href="/matematika">
              <a className={navigation}>Materi</a>
            </Link>
            <Link href="/kartuMatematika">
              <a className={navigation}>Flash Card</a>
            </Link>
            <Link href="/kalkulatorMatematika">
              <a className={navigation}>Kalkulator</a>
            </Link>
            <Link href="/bookingLes">
              <a className={navigation}>Booking Les</a>
            </Link>
          </div>
        </article>

        {/* Company Identity */}
        <article className="w-full pt-10 space-y-2 text-xs text-gray-500 border-t border-gray-500 sm:border-0 sm:pt-0 sm:w-1/2 sm:text-sm">
          <div className="text-2xl text-white font-mw">
            <Link href="/">
              <a>
                Haris<span className="font-light text-gray-400">Lab</span>
              </a>
            </Link>
          </div>
          <div className="">PT. Haris Laboratorium Indonesia</div>
          <div className="">
            Pondok Kacang Timur, Tangerang Selatan, Banten 15226, Indonesia
          </div>
          <div className="">harislabindonesia@gmail.com</div>
          <div className="flex flex-col w-full sm:flex-row">
            <div>
              Copyright &copy;2021 Haris
              <span className="">Lab</span> LLC. &nbsp;
            </div>
          </div>
        </article>
      </section>
    </footer>
  );
};

export default Footer;
