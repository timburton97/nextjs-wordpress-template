import Head from 'next/head';
import Link from 'next/link';
import { getSinglePost, getPostSlugs } from '../../lib/api';

export async function getStaticProps({ params }) {
    const postData = await getSinglePost(params.slug);

    return {
        props: {
            postData: postData,
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

export default function Blog({ postData }) {
    return (
        <>
            <Head>
                <title key={postData.slug}>{postData.title}</title>
            </Head>
            <h1>{postData.title}</h1>
            <div>{postData.content}</div>
            <Link href="/blog/">Back to blogs</Link>
        </>
    );
}