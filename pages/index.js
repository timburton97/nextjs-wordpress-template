import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { getSinglePage, getPrimaryMenuItems } from '../lib/api';
import HeaderComponent from '../components/common/header/header';
import FooterComponent from '../components/common/footer/footer';

export async function getStaticProps({ params }) {
  const pageData = await getSinglePage("home");
  const menuItems = await getPrimaryMenuItems();

  return {
      props: {
          pageData: pageData,
          menuItems: menuItems,
      },
  };
}

export default function Home({ pageData, menuItems }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next.js/WordPress Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent
        menuItems={menuItems}
      />

      <main>
        <h1>Welcome to this Next.js/WordPress website</h1>
        <div className={styles.pageContent} dangerouslySetInnerHTML={{
          __html: pageData.content
        }}></div>
      </main>

      <FooterComponent></FooterComponent>
    </div>
  )
}
