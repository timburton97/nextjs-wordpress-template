import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getSinglePage, getPrimaryMenuItems, getTripleCTAItems } from '../lib/api';
import HeaderComponent from '../components/common/header/header';
import FooterComponent from '../components/common/footer/footer';
import TripleCtaComponent from '../components/common/blocks/tripleCta';

export async function getStaticProps({ params }) {
  const pageData = await getSinglePage("home");
  const menuItems = await getPrimaryMenuItems();
  const tripleCtaItems = await getTripleCTAItems();

  return {
      props: {
          pageData: pageData,
          menuItems: menuItems,
          tripleCtaItems: tripleCtaItems,
      },
  };
}

export default function Home({ pageData, menuItems, tripleCtaItems }) {
  return (
    <div className={styles.container}>

      <HeaderComponent
        menuItems={menuItems}
        headerImage={pageData.featuredImage.node}
        title={
          <><span class="text-lime-400">Business coaching is</span> future-proofing for Founders</>
        }
      />

      <main>
        <TripleCtaComponent
          tripleCtaItems={tripleCtaItems}
        />
      </main>

      <FooterComponent></FooterComponent>
    </div>
  )
}
