import Head from 'next/head';
import Link from 'next/link';
import { getSinglePost, getPostSlugs, getPrimaryMenuItems } from '../../lib/api';
import HeaderComponent from '../../components/common/header/header';
import FooterComponent from '../../components/common/footer/footer';

export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.slug);
    const menuItems = await getPrimaryMenuItems();

    return {
        props: {
            postData: postData,
            menuItems: menuItems,
        },
    };
}

export async function getStaticPaths() {
    const postSlugs = await getPostSlugs();

    return {
        paths: postSlugs.map((s) => (
            {
                params: {
                    slug: s.slug
                }
            }
        )),
        fallback: false
    }
}

export default function Blog({ postData, menuItems }) {
    return (
        <>
            <HeaderComponent
                menuItems={menuItems}
            />
            <h1>{postData.title}</h1>
            <div dangerouslySetInnerHTML={{
            __html: postData.content
            }}></div>
            <Link href="/blog/">Back to blogs</Link>
        </>
    );
}