import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function contatti() {
    return (
        <Layout>
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
