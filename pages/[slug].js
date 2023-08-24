import { getPageSlugs, getSinglePage, getPrimaryMenuItems } from "../lib/api";
import Head from 'next/head';
import Link from "next/link";
import styles from '../styles/DefaultPage.module.css'
import HeaderComponent from "../components/common/header/header";
import placeholder from "../public/placeholder.png";

export async function getStaticProps({ params }) {
    const pageData = await getSinglePage(params.slug);
    const menuItems = await getPrimaryMenuItems();

    return {
        props: {
            pageData: pageData,
            menuItems: menuItems,
        },
    };
}

export async function getStaticPaths() {
    const pageSlugs = await getPageSlugs();

    return {
        paths: pageSlugs.map((s) => (
            {
                params: {
                    slug: s.slug
                }
            }
        )),
        fallback: false
    }
}


export default function Page({ pageData, menuItems }) {
    return (
        <main>
            <HeaderComponent
                menuItems={menuItems}
                headerImage={pageData.featuredImage.node}
                title={pageData.title}
            />
            <h1>{pageData.title}</h1>
            <div className={styles.pageContent} dangerouslySetInnerHTML={{
          __html: pageData.content
        }}></div>
        </main>
        
    );
}