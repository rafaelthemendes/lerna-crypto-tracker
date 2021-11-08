import { useQuery } from "@apollo/client";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { GET_CURRENCIES_QUERY } from "../graphql/queries";
import styles from "../styles/Home.module.css";

const formatPrice = value => new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(value);

const Home: NextPage = () => {
  const { loading, error, data } = useQuery(GET_CURRENCIES_QUERY);

  return (
    <div className={styles.container}>
      <Head>
        <title>Crypto Tracker</title>
        <meta name="description" content="Track Top Crypto Currencies" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Crypto Tracker</h1>

        <p className={styles.description}>Top Crypto Currencies</p>

        {loading && <p>Loading ...</p>}

        {error && <p>Ops! Errror =(</p>}

        {data && (
          <div className={styles.grid}>
            {data.currencies.map((currency) => (
              <div key={currency.id} className={styles.card}>
                <h2>
                  <Image src={currency.logo_url} alt="Logo" height={20} width={20}/>
                  {' '}
                  {currency.name} ({currency.currency}) &rarr;
                </h2>
                <p>Rank: #{currency.rank}</p>
                <p>Price: {formatPrice(currency.price)}</p>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Home;
