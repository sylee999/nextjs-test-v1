import { getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'
import Link from 'next/link'
import Date from '../../date'
import styles from '../../styles.module.css'

export default async function Post({ params }) {
  const postData = await getPostData(params.id)

  return (
    <div>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={styles.headingXl}>{postData.title}</h1>
        <div className={styles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      <div className={styles.backToHome}>
        <Link href="/">← Back to home</Link>
      </div>
    </div>
  )
}
