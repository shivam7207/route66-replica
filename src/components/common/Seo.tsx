import Head from "next/head";

interface SeoProps {
  pageTitle: string;
}

const Seo: React.FC<SeoProps> = ({ pageTitle }) => (
  <>
    <Head>
      <title>
        {pageTitle &&
          `${pageTitle} || Jano - Creative Multipurpose React NextJS Template`}
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  </>
);

export default Seo;
