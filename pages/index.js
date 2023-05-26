import Head from 'next/head';
import Link from 'next/link'
import Layout, {siteTitle} from '../components/layout';
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts';
import Date from '../components/date';

const IntroductionText = "Hello, I'm Covil. I'm a software enginer and a translator (English/Frensh). You can cantact me on"

const Home = ({ allPostsData, date }) => {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>{IntroductionText} <a href='https://l.facebook.com/l.php?u=https%3A%2F%2Ftwitter.com%2FCovLou%3Ffbclid%3DIwAR0tZpXSRVml96xzYnRxJf58xTpwOIuXpFrjPlGAS71nHDPNUFlLeepJZgA&h=AT1qKIS95KzQlGDsD6Gst_1cqTzpx7lv9IBNKA8sw2bMW0G9DJHBXS1vAbimTa1vBKBU5lT5zgKMBJncbvlTwwZUXSXh-yFULQcL9n-ykWGNk_qSRtiWi4T2nRzd6wmoQD3f' target='_blank'>Twitter</a>.</p>
        <p>
          (This is a sample website - you'll be building a site like this on{' '}
           <a href='https://nextjs.org/learn'>our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${title}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps = async () => {

  const allPostsData = await getSortedPostsData()

  return {
    props: {
      allPostsData
    }
  }
}

export default Home