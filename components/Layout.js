import Head from "next/head"; // Html head
import styles from "styles/Layout.module.scss"; // Component styles

export default function Layout({ children }) {
  return (
    <div>
      {/* Meta + Head */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Juicebox, Movement Project NFT Art</title>
        <meta name="title" content="NFT Art" />
        <meta
          name="description"
          content="Explore Ideas around the Juicebox, Movment Project Creator Non-Fungible Token."
        />

        {/* Open Graph + Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://project-nft.tankbottoms.com/" />
        <meta property="og:title" content="Juicebox, Movement Project Art" />
        <meta
          property="og:description"
          content="Explore Ideas around the Juicebox, Movment Project Creator Non-Fungible Token."
        />
        <meta
          property="og:image"
          content="https://juicebox.money/assets/banana-ol.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://juicebox.money" />
        <meta property="twitter:title" content="Juicebox Project Token Art" />
        <meta
          property="twitter:description"
          content="Explore Ideas around the Juicebox, Movment Project Creator Non-Fungible Token."
        />
        <meta
          property="twitter:image"
          content="https://juicebox.money/assets/banana-ol.png"
        />

        {/* Font preload */}
        <link
          rel="preload"
          href="/fonts/CourierNew.ttf"
          as="font"
          type="font/ttf"
          crossOrigin="anonymous"
        />

        {/* Favicon */}
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>

      {/* Header content */}
      <div className={styles.layout__header}>
        <img src="/images/juicebox.png" alt="Movement, Juicebox"/>        
        <h1>Movement, Juicebox Project NFT Art</h1>
        <p>
          Design and layout experiments{" "}
          <a
            href="https://github.com/jbx-protocol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            with the Juicebox v2 Projects TokenURI NFT Artwork, Metadata
          </a>{" "}
          between{" "}
          <a
            href="https://movemdao.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            Movement DAO,            
          </a>{" "}          
          <a
            href="https://wagmistudios.xyz"
            target="_blank"
            rel="noopener noreferrer"
          >
            WAGMI Studios
          </a>{" "}
          and{" "}
          <a
            href="https://github.com/jbx-protocol/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Juicebox DAO.
          </a>{" "}
        </p>
      </div>

      {/* Content */}
      <div className={styles.layout__content}>{children}</div>
    </div>
  );
}
