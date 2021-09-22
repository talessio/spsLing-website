import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function contatti() {
    return (
        <Layout children>
            <Head>
                <title>Contatti</title>
            </Head>
            <p>
                <h1>Contatti</h1>
                Per scriverci un email{' '}
                <Link href="mailto:ciao@senzapelisullalinguistica.it">
                    <a>clicca qui</a>
                </Link>
                .
                <br />
                <h2>Social</h2>
                In arrivo!
            </p>
        </Layout>
    )
}
