import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function contatti() {
    return (
        <Layout children>
            <section className={utilStyles.listItem}>
                <p>
                    <Link href="gente">
                        <a>Gente</a>
                    </Link>
                    {' '}
                    <Link href="contatti">
                        <a>Contatti</a>
                    </Link>
                </p>
            </section>
            <Head>
                <title>
                    Contatti
                </title>
            </Head>
            <h1>Contatti:</h1>
            <p>
                Per scriverci un email{' '}
                <Link href="mailto:ciao@senzapelisullalinguistica.it">
                    <a>clicca qui</a>
                </Link>
                .
            </p>
            <p>
                Social:

            </p>
        </Layout>
    )
}
