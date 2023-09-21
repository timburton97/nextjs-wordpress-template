import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getSinglePage, getPrimaryMenuItems, getTripleCTAItems, getFounderFlipCardItems, getTriMasonryColsItems } from '../lib/api';
import HeaderComponent from '../components/common/header/header';
import FooterComponent from '../components/common/footer/footer';
import TripleCtaComponent from '../components/common/blocks/tripleCta';
import FounderFlipCardsComponent from '../components/common/blocks/founderFlipCards';
import TriMasonryColsComponent from '../components/common/blocks/triMasonryCols';

export async function getStaticProps({ params }) {
  const pageData = await getSinglePage("home");
  const menuItems = await getPrimaryMenuItems();
  const tripleCtaItems = await getTripleCTAItems();
  const founderFlipCardItems = await getFounderFlipCardItems();
  const triMasonryColsItems = await getTriMasonryColsItems("home");

  return {
      props: {
          pageData: pageData,
          menuItems: menuItems,
          tripleCtaItems: tripleCtaItems,
          founderFlipCardItems: founderFlipCardItems,
          triMasonryColsItems: triMasonryColsItems,
      },
  };
}

export default function Home({ pageData, menuItems, tripleCtaItems, founderFlipCardItems, triMasonryColsItems }) {
  return (
    <div className={styles.container}>

      <HeaderComponent
        menuItems={menuItems}
        headerImage={pageData.featuredImage.node}
        title={
          <><span className="text-lime-400">Business coaching is</span> future-proofing for Founders</>
        }
      />

      <main>

        <TripleCtaComponent
          tripleCtaItems={tripleCtaItems}
        />

        <TriMasonryColsComponent
          triMasonryColsItems={triMasonryColsItems}
          xCol1Width={45}
          xCol2Width={55}
          yCol1Height={33}
          yCol2Height={67}
        />

        <FounderFlipCardsComponent
          founderFlipCardItems={founderFlipCardItems}
        />

      </main>

      <FooterComponent></FooterComponent>
    </div>
  )
}
