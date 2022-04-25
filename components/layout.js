import Head from "next/head"
import Image from "next/image"
import styles from './layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from "next/link"

const name = 'senza peli sulla linguistica'
export const siteTitle = 'senza peli sulla linguistica'

export default function Layout({children, home}) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
                <meta name="og:title" content={siteTitle}/>
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image
                            priority
                            src="/images/profile.jpg"
                            className={utilStyles.borderCircle}
                            height={144}
                            width={144}
                            alt={name}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Link href="/">
                            <a>
                                <Image
                                    priority
                                    src="/images/profile.jpg"
                                    className={utilStyles.borderCircle}
                                    height={108}
                                    width={108}
                                    alt={name}
                                />
                            </a>
                        </Link>
                        <h2 className={utilStyles.headingLg}>
                            <Link href="/">
                                <a className={utilStyles.colorInherit}>{name}</a>
                            </Link>
                        </h2>
                    </>
                )}
                <section className={utilStyles.menu}>
                <p>
                    <Link href="/gente">
                        <a>Gente</a>
                    </Link>
                    {' '}
                    <Link href="/contatti">
                        <a>Contatti</a>
                    </Link>
                </p>
            </section>
            </header>
            <main>{children}</main>
            {!home && (
                <div className={styles.backToHome}>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    )
}