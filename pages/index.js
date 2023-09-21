import Image from 'next/image';
import styles from '../styles/Home.module.css';
import { getSinglePage, getPrimaryMenuItems, getTripleCTAItems, getFounderFlipCardItems, getTriMasonryColsItems, getTestimonials, getFaqs, getFooterMenuItems } from '../lib/api';
import HeaderComponent from '../components/common/header/header';
import FooterComponent from '../components/common/footer/footer';
import TripleCtaComponent from '../components/common/blocks/tripleCta';
import FounderFlipCardsComponent from '../components/common/blocks/founderFlipCards';
import TriMasonryColsComponent from '../components/common/blocks/triMasonryCols';
import MasonryTestimonialsComponent from '../components/common/blocks/masonryWithTestimonials';
import TestimonialsComponent from '../components/common/blocks/testimonials';
import FaqsComponent from '../components/common/blocks/faqs';

export async function getStaticProps({ params }) {
  const pageData = await getSinglePage("home");
  const menuItems = await getPrimaryMenuItems();
  const tripleCtaItems = await getTripleCTAItems();
  const founderFlipCardItems = await getFounderFlipCardItems();
  const triMasonryColsItems = await getTriMasonryColsItems("home");
  const testimonials = await getTestimonials();
  const faqs = await getFaqs();
  const footerMenuItems = await getFooterMenuItems();

  return {
      props: {
          pageData: pageData,
          menuItems: menuItems,
          tripleCtaItems: tripleCtaItems,
          founderFlipCardItems: founderFlipCardItems,
          triMasonryColsItems: triMasonryColsItems,
          testimonials: testimonials,
          faqs: faqs,
          footerMenuItems: footerMenuItems,
      },
  };
}

export default function Home({ pageData, menuItems, tripleCtaItems, founderFlipCardItems, triMasonryColsItems, testimonials, faqs, footerMenuItems }) {
  return (
    <div className={styles.container}>

      <HeaderComponent
        menuItems={menuItems}
        headerImage={pageData.featuredImage.node}
        title={
          <><span className="text-lime-400">Business coaching is</span><span> future-proofing for Founders</span></>
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

        <MasonryTestimonialsComponent
          testimonials={testimonials}
        />

        <TestimonialsComponent
          testimonials={testimonials}
        />

        <FaqsComponent
          faqs={faqs}
        />

      </main>

      <FooterComponent
        footerMenuItems={footerMenuItems}
      />
    </div>
  )
}
