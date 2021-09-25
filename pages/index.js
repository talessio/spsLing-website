import Head from 'next/head'
import Link from 'next/link'
import Date from '../components/date'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import { rss } from '../lib/rssFeed';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    const allRssFeed = await rss()
    // console.log(allRssFeed.items)
    return {
        props: {
            allPostsData,
            allRssFeed: JSON.stringify(allRssFeed.items)
        }
    }
}

export default function Home({ allPostsData, allRssFeed }) {
    const parsedAllRssFeed = JSON.parse(allRssFeed)
    console.log('aaaaaaa', allPostsData)

    return (
        <Layout home>
            <Head>
                <title>
                    {siteTitle}
                </title>
            </Head>
            <section className={utilStyles.headingMd}>
                <p>
                    Il podcast sulla scienza delle lingue e del linguaggio.<br />
                    Ascolta su{' '}
                    <Link
                        href="https://podcasts.apple.com/us/podcast/senza-peli-sulla-linguistica/id1581076544">
                        <a>Apple Podcasts</a>
                    </Link>
                    ,{' '}
                    <Link
                        href="https://open.spotify.com/show/4pnxmP1G7Nqv15yw0MPWTF" className="link">
                        <a>Spotify</a>
                    </Link>
                    ,{' '}
                    <Link
                        href="https://www.google.com/podcasts?feed=aHR0cHM6Ly9hbmNob3IuZm0vcy82NTgwYmI2OC9wb2RjYXN0L3Jzcw==">
                        <a>Google Podcasts{' '}</a>
                    </Link>
                    oppure{' '}
                    <Link
                        href="https://pca.st/nslk66ca">
                        <a>PocketCasts</a>
                    </Link>
                    .
                </p>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Episodi</h2>
                <ul className={utilStyles.list}>
                    {parsedAllRssFeed.map(({ title, itunes_season, itunes_episode, link }) => (
                        <li className={utilStyles.listItem} key={itunes_season}>
                            <Link href={link}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                Stagione 0{itunes_season}, episodio 0{itunes_episode}
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
                <h2 className={utilStyles.headingLg}>Blog</h2>
                <ul className={utilStyles.list}>
                    {allPostsData.map(({ id, date, title }) =>{ 
                        // console.log(id, date, title)
                        return (
                        <li className={utilStyles.listItem} key={id}>
                            <Link href={`/posts/${id}`}>
                                <a>{title}</a>
                            </Link>
                            <br />
                            <small className={utilStyles.lightText}>
                                <Date dateString={date} />
                            </small>
                        </li>
                    )})}
                </ul>
            </section>
        </Layout>
    )
}