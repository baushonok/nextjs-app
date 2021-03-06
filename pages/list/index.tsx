import Head from 'next/head';
import React from 'react';

import { List } from 'components/list';

const Home = () => (
    <div>
      <Head>
        <title>Experiments with Next.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          List of some items
        </h1>

        <List amountOfItems={2} />

        <a href={`list/new`}>Add new Item</a>
      </main>
    </div>
);

export default Home;