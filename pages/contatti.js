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
        Per contattare spsLing, manda un messaggio sui nostri social:
        <br />
        <h2>Social</h2>
        Siamo (moderatamente) attivi su{" "}
        <Link href="https://www.instagram.com/spslinguistica/">
          <a>Instagram</a>
        </Link>{" "}
        e{" "}
        <Link href="https://twitter.com/spsLinguistica">
          <a>Twitter</a>
        </Link>{" "}
        come spsLinguistica.
        <br />
        Postiamo cose diverse sulle due piattaforme, perciò per leggere tutte le
        nostre hot takes e tutti i temi che non trovano spazio nel podcast
        seguiteci su entrambe!
      </p>
    </Layout>
  );
}
