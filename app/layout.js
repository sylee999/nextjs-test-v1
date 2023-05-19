import './global.css';
import Head from 'next/head'
import Image from 'next/image'
import styles from './styles.module.css'
import Link from 'next/link'

export const metadata = {
  title: "Home",
  description: "Welcome to Next.js",
};

const name = 'SY Lee';
export const siteTitle = 'Next.js Sample Website';

export default function RootLayout({ children }) {
    return (
      <html lang="en">
        <body>
          <div className={styles.container}>
            <Head>
              <link rel="icon" href="/favicon.ico" />
              <meta
                name="description"
                content="Learn how to build a personal website using Next.js"
              />
              <meta
                property="og:image"
                content={`https://og-image.vercel.app/${encodeURI(
                  siteTitle
                )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
              />
              <meta name="og:title" content={siteTitle} />
              <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className={styles.header}>
              <>
                <Link href="/">
                  <Image
                    priority
                    src="/images/profile.jpg"
                    className={styles.borderCircle}
                    height={108}
                    width={108}
                    alt={name}
                  />
                </Link>
                <h2 className={styles.headingLg}>
                  <Link href="/" className={styles.colorInherit}>
                    {name}
                  </Link>
                </h2>
              </>
            </header>
            <main>{children}</main>
          </div>
        </body>
      </html>
    );
}