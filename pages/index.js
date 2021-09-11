import Head from 'next/head'
import Link from "next/link";
import Layout, {siteTitle} from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyles.listItem}>
                <p>
                    <Link href="gente">
                        <a>Gente</a>
                    </Link>
                    <Link href="contatti">
                        <a>Contatti</a>
                    </Link>
                </p>
            </section>
            <section className={utilStyles.headingMd}>
                <p>Il podcast sulla scienza delle lingue e del linguaggio.</p>
                <p>
                    Ascolta su{' '}
                    <Link
                        href="https://podcasts.apple.com/us/podcast/senza-peli-sulla-linguistica/id1581076544">
                        <a>Apple Podcasts{' '}</a>
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
                    e{' '}
                    <Link
                        href="https://pca.st/nslk66ca">
                        <a>PocketCasts</a>
                    </Link>
                    .
                </p>
                <p>Per ulteriori piattaforme di ascolto{' '}
                    <Link
                        href="https://anchor.fm/senzapelisullalinguistica">
                        <a>clicca qui</a>
                    </Link>
                    .
                </p>
            </section>
        </Layout>
    )
}