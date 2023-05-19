import Head from 'next/head'
import styles from './styles.module.css'
import { getSortedPostsData } from '../lib/posts'
import { siteTitle } from './layout';
import Link from 'next/link'
import Date from './date'

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <div>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={styles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this in{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${styles.headingMd} ${styles.padding1px}`}>
        <h2 className={styles.headingLg}>Blog</h2>
        <ul className={styles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={styles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={styles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
