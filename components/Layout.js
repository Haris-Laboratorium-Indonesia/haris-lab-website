import Head from "next/head";
import Footer from "./Footer";
import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";
const Layout = ({ children, title, description }) => {
  const image = "https://harislab.com/public/HarisLab.png";
  const type = "website";
  return (
    <>
      <Head>
        <title>{title} | HarisLab</title>
        <meta name="robots" content="follow, index" />
        <meta content={description} name="description" />
        <meta property="og:type" content={type} />
        <meta property="og:site_name" content="Haris Lab" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@haritssr" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Head>

      <NavDesktop />
      <NavMobile />

      <section className="w-full max-w-5xl min-h-screen px-5 pt-3 pb-10 mx-auto xl:px-0 font-inter">
        {children}
      </section>

      <Footer />
    </>
  );
};

export default Layout;
