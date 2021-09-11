import Head from "next/head";
import Link from "next/link";
import Layout from "../components/layout";

export default function gente() {
    return(
        <Layout children>
            <Head>
                <title>
                    Gente
                </title>
            </Head>
            <h1>Gente</h1>
            <h2>Alessio</h2>
            <p>
                Ciao! Sono Alessio, il creatore e produttore di questo podcast. Sono laureato in lingue e traduzione, ed
                ora sto studiando informatica.
            </p>
            <p>
                Questo neonato progetto è scaturito dalla mia passione per la linguistica e da innumerevoli altri
                podcast sull'argomento che, non essendo in italiano, mi hanno ispirato e incoraggiato ad intraprendere
                questo viaggio con loro per portare un po' di amore linguistico anche nel bel paese!
            </p>
            <h2>Federica</h2>
            <p>
                E io sono Federica, amica di Alessio di lunga data, laureata in lingue.
                Come hobby ho la fotografia e ho anche iniziato un corso di graphic design, però le lingue rimangono una mia passione.
                Parlo inglese e spagnolo, ma ho studiato anche francese, tedesco e ora sto provando a imparare il giapponese… in futuro chissà?
                Chiaramente quando Alessio mi ha parlato del progetto di questo podcast ho deciso che non potevo fare a meno di partecipare, quindi piacere, sono la co-host di senza peli sulla linguistica!
            </p>
            <h3>Shoutout</h3>
            <p>
                A huge shoutout goes to{' '}
                <Link href="https://becauselanguage.com">
                    <a>Because Language{' '}</a>
                </Link>
                in particular, for their help and support. Se parlate inglese, vi invito davvero ad ascoltarli.
            </p>
        </Layout>
    )
}